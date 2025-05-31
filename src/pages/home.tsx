import { Helmet } from "react-helmet";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import EventTypesSection from "@/components/home/event-types-section";
import VenuesSection from "@/components/home/venues-section";
import HowItWorks from "@/components/home/how-it-works";
import TestimonialsSection from "@/components/home/testimonials-section";
import CTASection from "@/components/home/cta-section";
import ContactSection from "@/components/home/contact-section";
import { AuthProvider } from "@/lib/auth";

export default function Home() {
  return (
    <AuthProvider>
      <Helmet>
        <title>Classic Event Handler | Elegant Event Management</title>
        <meta
          name="description"
          content="Classic Event Handler specializes in organizing and managing traditional/classic events including weddings, corporate gatherings, and cultural celebrations with elegant, timeless planning."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow pt-16">
          <HeroSection />
          <EventTypesSection />
          <ServicesSection />
          <VenuesSection />
          <HowItWorks />
          <TestimonialsSection />
          <CTASection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}
