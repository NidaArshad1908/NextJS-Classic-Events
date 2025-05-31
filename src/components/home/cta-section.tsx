import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          Ready to Create Your Perfect Event?
        </h2>
        <p className="text-white/90 text-xl max-w-3xl mx-auto mb-10">
          Let our expert team help you bring your vision to life with our comprehensive event planning services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#contact">
            <Button className="bg-white hover:bg-neutral-cream text-primary px-8 py-6 h-auto rounded-md text-lg font-medium w-full sm:w-auto">
              Contact Us Today
            </Button>
          </Link>
          <Link href="/login">
            <Button 
              variant="outline" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-6 h-auto rounded-md text-lg font-medium w-full sm:w-auto"
            >
              Login to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
