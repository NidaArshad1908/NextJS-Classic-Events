import { useQuery } from "@tanstack/react-query";
import { ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { type Venue } from "@/shared/schema";

export default function VenuesSection() {
  const { data: venues, isLoading } = useQuery<Venue[]>({
    queryKey: ['/api/venues'],
  });

  return (
    <section id="venues" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="section-heading text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Featured Venues
        </h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="venue-card rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues?.slice(0, 3).map((venue) => (
              <div key={venue.id} className="venue-card rounded-lg shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={venue.imageUrl || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"} 
                    alt={venue.name}
                  />
                  {venue.capacity >= 400 && (
                    <div className="absolute top-4 right-4 bg-secondary text-white text-sm px-3 py-1 rounded-full font-medium">
                      Premium
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">{venue.name}</h3>
                  <div className="flex items-center text-neutral-charcoal/70 mb-3">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{venue.city}</span>
                  </div>
                  <p className="text-neutral-charcoal/80 mb-4">{venue.description.length > 100 
                    ? `${venue.description.substring(0, 97)}...` 
                    : venue.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">Capacity: {venue.capacity}</span>
                    <Link href={`/venues/${venue.id}`} className="text-secondary hover:text-secondary-dark font-medium transition-colors duration-300 inline-flex items-center">
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Link href="/venues">
            <Button 
              variant="outline" 
              className="bg-white hover:bg-neutral-lightgray text-primary border-2 border-primary px-8 py-6 h-auto rounded-md text-lg font-medium transition-colors duration-300"
            >
              View All Venues <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
