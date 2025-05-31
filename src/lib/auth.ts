'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'wouter';
import { apiRequest } from './queryClient';
import { UserRole } from '../shared/schema';

interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
  role: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  checkRole: (roles: string[]) => boolean;
}

interface RegisterData {
  username: string;
  password: string;
  email: string;
  fullName: string;
  role?: string;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: async () => {},
  register: async () => {},
  checkRole: () => false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [, setLocation] = useLocation();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const res = await apiRequest('GET', '/api/auth/session');
      const data = await res.json();

      if (data.authenticated && data.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Authentication check failed', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const res = await apiRequest('POST', '/api/auth/login', { username, password });
      const data = await res.json();
      setUser(data.user);
      return data;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiRequest('POST', '/api/auth/logout');
      setUser(null);
      setLocation('/');
    } catch (error) {
      console.error('Logout failed', error);
      throw error;
    }
  };

  const register = async (userData: RegisterData) => {
    try {
      await apiRequest('POST', '/api/users', userData);
      // After registration, log in the user
      await login(userData.username, userData.password);
    } catch (error) {
      console.error('Registration failed', error);
      throw error;
    }
  };

  // Check if user has the required role
  const checkRole = (roles: string[]) => {
    if (!user) return false;
    return roles.includes(user.role);
  };

  return React.createElement(
    AuthContext.Provider,
    {
      value: {
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        register,
        checkRole
      }
    },
    children
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

// Roles convenience functions
export const isAdmin = (user: User | null) => user?.role === UserRole.ADMIN;
export const isOrganizer = (user: User | null) => user?.role === UserRole.ORGANIZER || user?.role === UserRole.ADMIN;
export const isClient = (user: User | null) => user?.role === UserRole.CLIENT;
export const isVendor = (user: User | null) => user?.role === UserRole.VENDOR;
