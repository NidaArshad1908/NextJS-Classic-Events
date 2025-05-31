'use client'

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Facebook, Instagram, Linkedin, SendHorizonal, Twitter } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    // Simulated submission for MVP
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter",
    });

    setEmail('');
  };

  return (
    <footer className="bg-neutral-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Classic Event Handler</h3>
            <p className="text-white/70 mb-6">Creating timeless, elegant events that exceed expectations and leave lasting memories.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/#services" className="text-white/70 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link href="/#venues" className="text-white/70 hover:text-white transition-colors duration-300">Venues</Link></li>
              <li><Link href="/#events" className="text-white/70 hover:text-white transition-colors duration-300">Event Types</Link></li>
              <li><Link href="/#testimonials" className="text-white/70 hover:text-white transition-colors duration-300">Testimonials</Link></li>
              <li><Link href="/#contact" className="text-white/70 hover:text-white transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Wedding Planning</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Corporate Events</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Cultural Celebrations</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Venue Selection</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Catering Services</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Decoration & Design</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">Subscribe to our newsletter for event inspiration and special offers.</p>
            <form className="mb-4" onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-l-md rounded-r-none bg-white text-neutral-charcoal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-secondary hover:bg-secondary-dark text-white rounded-l-none"
                  size="icon"
                >
                  <SendHorizonal size={18} />
                </Button>
              </div>
            </form>
            <p className="text-white/50 text-sm">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Classic Event Handler. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-white/70 text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
