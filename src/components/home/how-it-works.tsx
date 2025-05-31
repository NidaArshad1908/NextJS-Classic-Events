import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Consultation",
      description: "Schedule a free consultation to discuss your event vision, requirements, and budget."
    },
    {
      number: 2,
      title: "Customization",
      description: "Our event planners will create a tailored proposal with venues, services, and timelines."
    },
    {
      number: 3,
      title: "Execution",
      description: "Relax as our team handles every detail of your event from preparation to conclusion."
    }
  ];

  return (
    <section className="py-20 bg-neutral-cream">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-semibold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral-charcoal/80">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 w-1/2 h-2 border-t-2 border-dashed border-primary/30"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="#contact">
            <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 h-auto rounded-md text-lg font-medium">
              Start Planning Your Event <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
