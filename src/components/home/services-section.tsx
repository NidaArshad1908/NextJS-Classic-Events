import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { CalendarCheck, Building, Utensils, Paintbrush, Users, Camera } from "lucide-react";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

export default function ServicesSection() {
  const services: Service[] = [
    {
      icon: <CalendarCheck className="text-primary text-2xl" />,
      title: "Event Planning",
      description: "Comprehensive planning services to bring your vision to life, from conceptualization to execution.",
      link: "#"
    },
    {
      icon: <Building className="text-primary text-2xl" />,
      title: "Venue Selection",
      description: "Access to exclusive venues that perfectly match your event's style, size, and requirements.",
      link: "#"
    },
    {
      icon: <Utensils className="text-primary text-2xl" />,
      title: "Catering",
      description: "Exquisite culinary experiences crafted by top chefs with customizable menu options.",
      link: "#"
    },
    {
      icon: <Paintbrush className="text-primary text-2xl" />,
      title: "Decoration",
      description: "Beautiful, thematic decorations designed to create the perfect ambiance for your event.",
      link: "#"
    },
    {
      icon: <Users className="text-primary text-2xl" />,
      title: "Guest Management",
      description: "Streamlined invitation, RSVP tracking, and guest experience coordination.",
      link: "#"
    },
    {
      icon: <Camera className="text-primary text-2xl" />,
      title: "Photography",
      description: "Professional photography and videography to capture your event's most precious moments.",
      link: "#"
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-lightgray">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-heading font-bold text-center mb-12 ">
          Our Premium Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-black">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-black">{service.title}</h3>
                <p className="text-black/80 mb-4">{service.description}</p>
                <Link href={service.link} className="text-black hover:text-primary-dark font-medium transition-colors duration-300 inline-flex items-center">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
