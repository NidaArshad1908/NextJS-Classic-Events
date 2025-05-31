'use client'

import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Star, StarHalf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Testimonial, type User } from "@/shared/schema";

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials', { featured: true }],
  });

  const [position, setPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current && trackRef.current.children.length > 0) {
        const firstCard = trackRef.current.children[0] as HTMLElement;
        const cardMargin = 32; // Equivalent to mx-4 (2rem)
        setCardWidth(firstCard.offsetWidth + cardMargin);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, [testimonials]);

  const handlePrev = () => {
    setPosition(prevPosition => Math.min(prevPosition + 1, 0));
  };

  const handleNext = () => {
    if (testimonials && trackRef.current && containerRef.current) {
      const maxPosition = -(testimonials.length - Math.floor(containerRef.current.offsetWidth / cardWidth));
      setPosition(prevPosition => Math.max(prevPosition - 1, maxPosition));
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-secondary text-secondary" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-secondary text-secondary" />);
    }

    return stars;
  };

  // Mock testimonials for initial render
  const mockTestimonials = [
    {
      id: 1,
      userId: 1,
      eventType: "wedding",
      content: "Classic Event Handler created the wedding of our dreams. Every detail was perfect, from the venue to the flowers to the catering. We couldn't have asked for a more special day.",
      rating: 5,
      featured: true,
      user: {
        fullName: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
      }
    },
    {
      id: 2,
      userId: 2,
      eventType: "corporate",
      content: "Our company's annual gala was flawlessly executed by the team at Classic Event Handler. Their attention to detail and professionalism impressed not only our staff but all of our clients.",
      rating: 5,
      featured: true,
      user: {
        fullName: "David Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
      }
    },
    {
      id: 3,
      userId: 3,
      eventType: "cultural",
      content: "They took such care to honor our cultural traditions while adding their classic touch to our family celebration. The venue was breathtaking and our guests are still talking about it!",
      rating: 4.5,
      featured: true,
      user: {
        fullName: "Aisha Patel",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
      }
    },
    {
      id: 4,
      userId: 4,
      eventType: "wedding",
      content: "Classic Event Handler created the wedding of our dreams. Every detail was perfect, from the venue to the flowers to the catering. We couldn't have asked for a more special day.",
      rating: 5,
      featured: true,
      user: {
        fullName: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
      }
    },
  ];

  // Function to get display name for event type
  const getEventTypeDisplay = (type: string) => {
    switch (type) {
      case 'wedding': return 'Wedding Client';
      case 'corporate': return 'Corporate Event';
      case 'cultural': return 'Cultural Celebration';
      case 'social': return 'Social Gathering';
      default: return 'Client';
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-charcoal text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-white">
          Client Testimonials
        </h2>

        <div className="relative testimonial-slider">
          <div className="testimonial-container overflow-hidden" ref={containerRef}>
            <div
              className="testimonial-track flex transition-transform duration-500"
              ref={trackRef}
              style={{ transform: `translateX(${position * cardWidth}px)` }}
            >
              {isLoading ? (
                // Loading skeletons
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="testimonial-card relative bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 flex-shrink-0 w-full md:w-1/2 lg:w-1/3 mx-4 animate-pulse">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-white/20"></div>
                      <div className="ml-4">
                        <div className="h-4 bg-white/20 rounded w-24 mb-2"></div>
                        <div className="h-3 bg-secondary/20 rounded w-20"></div>
                      </div>
                    </div>
                    <div className="h-4 bg-white/20 rounded w-full mb-2"></div>
                    <div className="h-4 bg-white/20 rounded w-full mb-2"></div>
                    <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <div key={i} className="w-4 h-4 mr-1 bg-secondary/20 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                (testimonials?.length ? testimonials : mockTestimonials).map((testimonial: any) => (
                  <div key={testimonial.id} className="testimonial-card relative bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 flex-shrink-0 w-full md:w-1/2 lg:w-1/3 mx-4">
                    <div className="flex items-center mb-6">
                      <img
                        className="w-16 h-16 rounded-full object-cover mr-4"
                        src={testimonial.user?.avatar || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"}
                        alt={testimonial.user?.fullName || "Client"}
                      />
                      <div>
                        <h4 className="font-heading text-lg font-semibold">{testimonial.user?.fullName || "Happy Client"}</h4>
                        <p className="text-secondary text-sm">{getEventTypeDisplay(testimonial.eventType)}</p>
                      </div>
                    </div>
                    <p className="font-accent text-lg italic mb-4">"{testimonial.content}"</p>
                    <div className="flex text-secondary">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <Button
            onClick={handlePrev}
            variant="ghost"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full z-10"
          >
            <ChevronLeft />
          </Button>

          <Button
            onClick={handleNext}
            variant="ghost"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full z-10"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
