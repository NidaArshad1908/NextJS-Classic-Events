'use client'

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { useLocation } from "wouter";
import { AuthProvider, useAuth, isAdmin, isOrganizer } from "@/lib/auth";
import Sidebar from "@/components/dashboard/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, MapPin, Users, DollarSign, Search, ChevronRight } from "lucide-react";
import { type Venue } from "@/shared/schema";
import { Badge } from "@/components/ui/badge";
import { Redirect } from "wouter";

function VenuesContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  // Fetch venues
  const { data: venues, isLoading: venuesLoading } = useQuery<Venue[]>({
    queryKey: ['/api/venues'],
    enabled: isAuthenticated && !isLoading
  });

  // Filter venues based on search and city filter
  const filteredVenues = venues?.filter(venue => {
    if (searchQuery && !venue.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !venue.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    if (cityFilter && venue.city !== cityFilter) {
      return false;
    }

    return true;
  });

  // Get unique cities for filter
  const cities = venues ? [...new Set(venues.map(venue => venue.city))].sort() : [];

  // Redirect to login if not authenticated
  if (!isLoading && !isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="flex min-h-screen bg-neutral-cream">
      <Sidebar />
      <div className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-heading font-semibold">Venues</h2>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button
              onClick={() => navigate("/dashboard/venues/book")}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              Book a Venue
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="rounded-md border border-input px-3 py-2 text-sm"
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <Tabs defaultValue="grid" className="w-full">
          <TabsList>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="space-y-4">
            {venuesLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : filteredVenues && filteredVenues.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVenues.map((venue) => (
                  <Card key={venue.id} className="overflow-hidden">
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={venue.imageUrl || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                        alt={venue.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                      {venue.capacity >= 400 && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-secondary hover:bg-secondary text-white">Premium</Badge>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle>{venue.name}</CardTitle>
                      <CardDescription className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {venue.city}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {venue.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex items-center text-sm">
                          <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>Capacity: {venue.capacity}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <DollarSign className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>${venue.pricePerHour}/hour</span>
                        </div>
                      </div>
                      {(venue.amenities && typeof venue.amenities === 'object' && !Array.isArray(venue.amenities)) as boolean && (
                        <div className="mt-4">
                          <p className="text-xs font-medium mb-1">Amenities:</p>
                          <div className="flex flex-wrap gap-1">
                            {Object.values(venue.amenities as Record<string, string>).slice(0, 3).map((amenity, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {amenity}
                              </Badge>
                            ))}
                            {Object.keys(venue.amenities as Record<string, string>).length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{Object.keys(venue.amenities as Record<string, string>).length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="default"
                        className="w-full bg-primary hover:bg-primary-dark text-white"
                        onClick={() => navigate(`/dashboard/venues/${venue.id}`)}
                      >
                        View Details
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-lg border">
                <Building className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No venues found</h3>
                <p className="text-muted-foreground">
                  {searchQuery || cityFilter
                    ? "Try adjusting your search or filters"
                    : "No venues are currently available"}
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            {venuesLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : filteredVenues && filteredVenues.length > 0 ? (
              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left">Venue</th>
                      <th className="px-4 py-3 text-left">Location</th>
                      <th className="px-4 py-3 text-left">Capacity</th>
                      <th className="px-4 py-3 text-left">Price/Hour</th>
                      <th className="px-4 py-3 text-left">Available</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y bg-white">
                    {filteredVenues.map((venue) => (
                      <tr key={venue.id} className="hover:bg-muted/50">
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded overflow-hidden mr-3">
                              <img
                                src={venue.imageUrl || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                                alt={venue.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <span className="font-medium">{venue.name}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-muted-foreground">
                          {venue.city}
                        </td>
                        <td className="px-4 py-4">
                          {venue.capacity}
                        </td>
                        <td className="px-4 py-4">
                          ${venue.pricePerHour}
                        </td>
                        <td className="px-4 py-4">
                          <Badge variant={venue.available ? "default" : "outline"}>
                            {venue.available ? "Available" : "Booked"}
                          </Badge>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => navigate(`/dashboard/venues/${venue.id}`)}
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-lg border">
                <Building className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No venues found</h3>
                <p className="text-muted-foreground">
                  {searchQuery || cityFilter
                    ? "Try adjusting your search or filters"
                    : "No venues are currently available"}
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default function VenuesPage() {
  return (
    <AuthProvider>
      <Helmet>
        <title>Venues | Classic Event Handler</title>
        <meta
          name="description"
          content="Browse and book venues for your events with Classic Event Handler."
        />
      </Helmet>

      <VenuesContent />
    </AuthProvider>
  );
}
