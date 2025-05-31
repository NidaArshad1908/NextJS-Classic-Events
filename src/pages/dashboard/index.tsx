'use client'

import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { AuthProvider, useAuth, isAdmin, isOrganizer, isClient } from "@/lib/auth";
import Sidebar from "@/components/dashboard/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CreditCard, Users, Building, CalendarCheck, LineChart } from "lucide-react";
import { Redirect, useLocation, Link } from "wouter";
import { format } from "date-fns";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { type Event, type Venue, type Booking } from "@/shared/schema";

function DashboardContent() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [, navigate] = useLocation();

  const { data: events } = useQuery<Event[]>({
    queryKey: ['/api/events'],
    enabled: isAuthenticated && !isLoading
  });

  const { data: venues } = useQuery<Venue[]>({
    queryKey: ['/api/venues'],
    enabled: isAuthenticated && !isLoading
  });

  const { data: bookings } = useQuery<Booking[]>({
    queryKey: ['/api/bookings'],
    enabled: isAuthenticated && !isLoading
  });

  // Redirect to login if not authenticated
  if (!isLoading && !isAuthenticated) {
    return <Redirect to="/login" />;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Filter based on user role
  const filteredEvents = events?.filter(event => {
    if (isAdmin(user)) return true;
    if (isOrganizer(user)) return event.organizerId === user?.id;
    return false;
  });

  const filteredBookings = bookings?.filter(booking => {
    if (isAdmin(user)) return true;
    if (isOrganizer(user)) {
      const event = events?.find(e => e.id === booking.eventId);
      return event?.organizerId === user?.id;
    }
    if (isClient(user)) return booking.userId === user?.id;
    return false;
  });

  // Sample chart data
  const bookingData = [
    { name: "Jan", value: 12 },
    { name: "Feb", value: 19 },
    { name: "Mar", value: 15 },
    { name: "Apr", value: 22 },
    { name: "May", value: 30 },
    { name: "Jun", value: 25 },
  ];

  return (
    <div className="flex min-h-screen bg-neutral-cream">
      <Sidebar />
      <div className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-heading font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button onClick={() => navigate('/dashboard/events/new')} className="bg-primary hover:bg-primary-dark text-white">
              Create Event
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Events</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{filteredEvents?.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                {isOrganizer(user) ? "Events you're organizing" : "Total events in the system"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Bookings</CardTitle>
              <CalendarCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{filteredBookings?.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                {isClient(user) ? "Your event bookings" : "Total bookings"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Venues</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{venues?.length || 0}</div>
              <p className="text-xs text-muted-foreground">Available venues</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$10,540</div>
              <p className="text-xs text-muted-foreground">
                {isOrganizer(user) ? "Your revenue" : "Total revenue"}
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Booking Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={bookingData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Events happening soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredEvents?.slice(0, 5).map(event => (
                      <div key={event.id} className="flex items-center">
                        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mr-3">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">{event.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {format(new Date(event.startDate), "PPP")}
                          </p>
                        </div>
                        <Link href={`/dashboard/events/${event.id}`}>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </Link>
                      </div>
                    ))}

                    {(!filteredEvents || filteredEvents.length === 0) && (
                      <div className="text-center py-4 text-muted-foreground">
                        No upcoming events
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Latest client bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredBookings?.slice(0, 5).map(booking => {
                      const event = events?.find(e => e.id === booking.eventId);
                      return (
                        <div key={booking.id} className="flex items-center">
                          <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center mr-3">
                            <Users className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              {event?.title || "Unknown Event"}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {format(new Date(booking.bookedAt), "PPP")} • {booking.guestCount} guests
                            </p>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs ${booking.status === "confirmed"
                            ? "bg-green-100 text-green-800"
                            : booking.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                            }`}>
                            {booking.status}
                          </div>
                        </div>
                      );
                    })}

                    {(!filteredBookings || filteredBookings.length === 0) && (
                      <div className="text-center py-4 text-muted-foreground">
                        No recent bookings
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Popular Venues</CardTitle>
                  <CardDescription>Most booked venues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {venues?.slice(0, 4).map(venue => (
                      <div key={venue.id} className="flex items-center">
                        <div className="h-12 w-12 rounded overflow-hidden mr-3">
                          <img
                            src={venue.imageUrl || "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"}
                            alt={venue.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">{venue.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {venue.city} • Capacity: {venue.capacity}
                          </p>
                        </div>
                        <div className="text-sm font-medium">
                          ${venue.pricePerHour}/hr
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Detailed statistics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  Analytics features will be available in the next update.
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>Generate and download reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  Reporting features will be available in the next update.
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <AuthProvider>
      <Helmet>
        <title>Dashboard | Classic Event Handler</title>
        <meta
          name="description"
          content="Manage your events, bookings, and settings from your Classic Event Handler dashboard."
        />
      </Helmet>

      <DashboardContent />
    </AuthProvider>
  );
}
