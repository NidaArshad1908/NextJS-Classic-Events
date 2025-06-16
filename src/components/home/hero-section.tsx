import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
    >
      <div className="absolute inset-0 bg-neutral-charcoal bg-opacity-50"></div>
      <div className="relative left-35 top-25 w-275 h-100 flex items-center justify-center text-center text-gray px-4 backdrop-blur-sm border rounded-2xl">
        <div className="max-w-4xl">
          <h1 className="text-black font-heading text-4xl md:text-6xl font-bold leading-tight mb-6">
            Creating <span className="text-secondary">Timeless</span> Events with Classic Elegance
          </h1>
          <p className="text-black text-xl md:text-2xl mb-10 font-light">
            Specialized in weddings, corporate gatherings, and cultural celebrations
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#services">
              <Button className="bg-[#845545] hover:bg-primary-dark text-black px-8 py-6 rounded-md text-lg font-medium h-auto w-full sm:w-auto">
                Our Services
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-black cursor-pointer border-2 border-black px-8 py-6 rounded-md text-lg font-medium h-auto w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
