import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

type EventType = {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
};

export default function EventTypesSection() {
  const eventTypes: EventType[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Weddings",
      description: "Create memories that last a lifetime with our exquisite wedding packages.",
      link: "#"
    },
    {
      imageUrl: "https://pixabay.com/get/g3727c521a25dbc82da82f0a626e06cd89ac747cc27bc900f1b60b16f0892ab77740e03c137d2c4f9ce262c41f139fc599975b2cacc0200570ef022231fb5d83d_1280.jpg",
      title: "Corporate Events",
      description: "Elevate your business gatherings with our professional event solutions.",
      link: "#"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Cultural Celebrations",
      description: "Honor traditions and heritage with our culturally sensitive event planning.",
      link: "#"
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Exceptional Events
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventTypes.map((event, index) => (
            <div key={index} className="event-card relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
                src={event.imageUrl} 
                alt={`${event.title} event setup`} 
              />
              <div className="event-overlay absolute inset-0 bg-gradient-to-t from-neutral-charcoal/80 to-transparent opacity-0 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-heading text-2xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-white/90 mb-4">{event.description}</p>
                  <Link href={event.link} className="inline-block text-secondary hover:text-secondary-light font-medium transition-colors duration-300">
                    Explore Options <ChevronRight className="inline ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
