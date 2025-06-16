'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { AuthProvider, useAuth } from "@/lib/auth";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

function LoginForm() {
  const { login } = useAuth();
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    try {
      await login(data.username, data.password);
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in.",
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: "Invalid username or password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="relative top-10 w-full max-w-md mx-auto border border-xl shadow-lg backdrop-blur-sm">
      <CardHeader className="space-y-1 ">
        <CardTitle className="text-2xl font-heading text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your username"
                      {...field}
                      className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                        className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full border border-sm cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : "Login"}
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex flex-col">
        <div className="text-center text-sm">
          <span className="text-muted-foreground">
            Don't have an account?{" "}
          </span>
          <Link href="/register" className="text-primary hover:text-primary-dark font-medium hover:underline">
            Register
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <AuthProvider>
      <Helmet>
        <title>Login | Classic Event Handler</title>
        <meta
          name="description"
          content="Login to your Classic Event Handler account to manage your events and bookings."
        />
      </Helmet>

      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: "url('/event-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 z-0" />

        <Header />

        <main className="flex-grow flex items-center justify-center py-16 px-4 relative z-10">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}