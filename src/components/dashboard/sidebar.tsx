
'use client'

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { CalendarDays, Building, LayoutDashboard, Calendar, Settings, LogOut, Users, Mail, MessageSquare, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth, isAdmin, isOrganizer, isVendor } from "@/lib/auth";
import { cn } from "../../lib/utils";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const [location] = useLocation();
  const { user, logout } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const isLinkActive = (path: string) => {
    return location === path;
  };

  // Base navigation for all users
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Events", href: "/dashboard/events", icon: Calendar },
    { name: "Venues", href: "/dashboard/venues", icon: Building },
    { name: "Bookings", href: "/dashboard/bookings", icon: CalendarDays },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  // Additional navigation for admin
  const adminNavigation = [
    { name: "Users", href: "/dashboard/users", icon: Users },
    { name: "Messages", href: "/dashboard/messages", icon: Mail },
  ];

  const navItems = isAdmin(user)
    ? [...navigation, ...adminNavigation]
    : navigation;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const NavLinks = () => (
    <>
      <div className="mb-4">
        <div className="flex items-center px-4 py-2">
          <div className={cn(
            "font-heading text-xl font-bold transition-all",
            isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
          )}>
            {!isCollapsed && <span className="text-primary">Classic Event</span>}
          </div>
        </div>
      </div>
      <div className="space-y-1 px-2">
        {navItems.map((item) => {
          const isActive = isLinkActive(item.href);
          return (
            <Link key={item.name} href={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isCollapsed ? "px-2" : "px-4"
                )}
                onClick={() => setIsMobileOpen(false)}
              >
                <item.icon className={cn(
                  "h-5 w-5",
                  isActive ? "text-primary" : "text-muted-foreground"
                )} />
                {!isCollapsed && (
                  <span className="ml-3">{item.name}</span>
                )}
              </Button>
            </Link>
          );
        })}
      </div>
      <div className="mt-auto">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start mt-6",
            isCollapsed ? "px-2" : "px-4"
          )}
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 text-muted-foreground" />
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </>
  );

  if (isMobile) {
    return (
      <>
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden fixed top-4 left-4 z-50">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] p-0">
            <ScrollArea className="h-full py-6">
              <NavLinks />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-white transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex h-screen flex-col">
        <ScrollArea className="flex-1 pt-4 pb-6">
          <NavLinks />
        </ScrollArea>
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 right-2"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
