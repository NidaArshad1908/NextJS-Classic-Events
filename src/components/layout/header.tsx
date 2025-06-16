'use client'

import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Venues', path: '/#venues' },
    { name: 'Events', path: '/#events' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header className={`fixed w-full bg-transparent z-50 transition-all duration-300 backdrop-blur-sm ${isScrolled ? 'shadow-md bg-opacity-95' : 'bg-opacity-90'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8" >
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-primary font-heading text-2xl md:text-3xl font-bold">
              Classic <span className="text-secondary">Event</span> Handler
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-neutral-charcoal hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}

            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-neutral-charcoal hover:text-primary transition-colors duration-300 font-medium"
                >
                  Dashboard
                </Link>
                <Button
                  onClick={() => logout()}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link href="/login">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Login
                </Button>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[75vw] sm:w-[350px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium py-2 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}

                {isAuthenticated ? (
                  <>
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium py-2 hover:text-primary"
                    >
                      Dashboard
                    </Link>
                    <Button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white mt-4"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="bg-primary hover:bg-primary-dark text-white w-full mt-4">
                      Login
                    </Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
