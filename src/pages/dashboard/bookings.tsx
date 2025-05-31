'use client'

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { AuthProvider, useAuth, isAdmin, isOrganizer } from "@/lib/auth";
import Sidebar from "@/components/dashboard/sidebar";
import BookingForm from "@/components/dashboard/booking-form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  MoreHorizontal,
  Edit,
  Trash2,
  CalendarDays,
  Users,
  Search,
  PlusCircle,
  Filter,
  Calendar,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { type Booking, type Event, BookingStatus } from "@/shared/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Redirect } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function BookingsContent() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [, navigate] = useLocation();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingBookingId, setEditingBookingId] = useState<number | null>(null);
  const [bookingToDelete, setBookingToDelete] = useState<Booking | null>(null);

  // Fetch bookings
  const { data: bookings, isLoading: bookingsLoading } = useQuery<Booking[]>({
    queryKey: ['/api/bookings'],
    enabled: isAuthenticated && !isLoading,
  });

  // Fetch events for reference
  const { data: events, isLoading: eventsLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
    enabled: isAuthenticated && !isLoading,
  });

  // Delete booking mutation
  const deleteBooking = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest("DELETE", `/api/bookings/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/bookings'] });
      toast({
        title: "Booking deleted",
        description: "The booking has been successfully deleted.",
      });
      setBookingToDelete(null);
    },
    onError: (error) => {
      console.error("Error deleting booking:", error);
      toast({
        title: "Failed to delete booking",
        description: "An error occurred while trying to delete the booking.",
        variant: "destructive",
      });
    },
  });

  // Filter bookings based on search query and filters
  const filteredBookings = bookings?.filter(booking => {
    // Get event for this booking
    const event = events?.find(e => e.id === booking.eventId);

    // Apply role-based filtering
    if (isAdmin(user)) {
      // Admin can see all bookings
    } else if (isOrganizer(user)) {
      // Organizers can only see bookings for their events
      const isOrganizersEvent = event && event.organizerId === user?.id;
      if (!isOrganizersEvent) return false;
    } else {
      // Regular users can only see their own bookings
      if (booking.userId !== user?.id) return false;
    }

    // Apply search query filter (search in event title if available)
    if (searchQuery && event && !event.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Apply status filter
    if (statusFilter && booking.status !== statusFilter) {
      return false;
    }

    return true;
  });

  // Handle creating a new booking
  const handleCreateBooking = () => {
    setShowCreateForm(true);
  };

  // Handle editing a booking
  const handleEditBooking = (bookingId: number) => {
    setEditingBookingId(bookingId);
  };

  // Handle deleting a booking
  const handleDeleteBooking = () => {
    if (bookingToDelete) {
      deleteBooking.mutate(bookingToDelete.id);
    }
  };

  // Get event details for a booking
  const getEventDetails = (eventId: number) => {
    return events?.find(event => event.id === eventId);
  };

  // Status badge colors
  const statusColors: Record<string, string> = {
    pending: "bg-yellow-100 text-yellow-800",
    confirmed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
    declined: "bg-gray-100 text-gray-800",
    completed: "bg-blue-100 text-blue-800",
  };

  // Payment status badge colors
  const paymentStatusColors: Record<string, string> = {
    unpaid: "bg-red-100 text-red-800",
    paid: "bg-green-100 text-green-800",
    refunded: "bg-blue-100 text-blue-800",
  };

  // Redirect to login if not authenticated
  if (!isLoading && !isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="flex min-h-screen bg-neutral-cream">
      <Sidebar />
      <div className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-heading font-semibold">Bookings</h2>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Button
              onClick={handleCreateBooking}
              className="bg-primary hover:bg-primary-dark text-white"
            >
              <PlusCircle className="mr-2 h-4 w-4" /> Create Booking
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search bookings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select
              value={statusFilter}
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  <span>{statusFilter || "Filter by Status"}</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
                <SelectItem value="declined">Declined</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {showCreateForm ? (
          <Card>
            <CardHeader>
              <CardTitle>Create New Booking</CardTitle>
              <CardDescription>Fill in the details to book an event.</CardDescription>
            </CardHeader>
            <CardContent>
              <BookingForm onSuccess={() => setShowCreateForm(false)} />
            </CardContent>
          </Card>
        ) : editingBookingId ? (
          <Card>
            <CardHeader>
              <CardTitle>Edit Booking</CardTitle>
              <CardDescription>Update the booking details.</CardDescription>
            </CardHeader>
            <CardContent>
              <BookingForm
                bookingId={editingBookingId}
                onSuccess={() => setEditingBookingId(null)}
              />
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="list" className="w-full">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="cards">Card View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>
            <TabsContent value="list" className="space-y-4">
              {bookingsLoading || eventsLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : filteredBookings && filteredBookings.length > 0 ? (
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left">Event</th>
                        <th className="px-4 py-3 text-left">Booking Date</th>
                        <th className="px-4 py-3 text-left">Guests</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Payment</th>
                        <th className="px-4 py-3 text-left">Total</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y bg-white">
                      {filteredBookings.map((booking) => {
                        const event = getEventDetails(booking.eventId);
                        return (
                          <tr key={booking.id} className="hover:bg-muted/50">
                            <td className="px-4 py-4 font-medium">
                              {event ? event.title : `Event #${booking.eventId}`}
                            </td>
                            <td className="px-4 py-4 text-muted-foreground">
                              {format(new Date(booking.bookedAt), "MMM d, yyyy")}
                            </td>
                            <td className="px-4 py-4">
                              {booking.guestCount}
                            </td>
                            <td className="px-4 py-4">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[booking.status]}`}
                              >
                                {booking.status}
                              </span>
                            </td>
                            <td className="px-4 py-4">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${paymentStatusColors[booking.paymentStatus]}`}
                              >
                                {booking.paymentStatus}
                              </span>
                            </td>
                            <td className="px-4 py-4 font-medium">
                              ${booking.totalPrice}
                            </td>
                            <td className="px-4 py-4 text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  {(isAdmin(user) ||
                                    (isOrganizer(user) && event?.organizerId === user?.id) ||
                                    booking.userId === user?.id) && (
                                      <DropdownMenuItem onClick={() => handleEditBooking(booking.id)}>
                                        <Edit className="mr-2 h-4 w-4" />
                                        Edit
                                      </DropdownMenuItem>
                                    )}
                                  {(isAdmin(user) || booking.userId === user?.id) && (
                                    <DropdownMenuItem
                                      onClick={() => setBookingToDelete(booking)}
                                      className="text-red-600"
                                    >
                                      <Trash2 className="mr-2 h-4 w-4" />
                                      Cancel
                                    </DropdownMenuItem>
                                  )}
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-lg border">
                  <CalendarDays className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-1">No bookings found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchQuery || statusFilter
                      ? "Try adjusting your search or filters"
                      : "Create your first booking to get started"}
                  </p>
                  <Button
                    onClick={handleCreateBooking}
                    className="bg-primary hover:bg-primary-dark text-white"
                  >
                    <PlusCircle className="mr-2 h-4 w-4" /> Create Booking
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="cards" className="space-y-4">
              {bookingsLoading || eventsLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : filteredBookings && filteredBookings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredBookings.map((booking) => {
                    const event = getEventDetails(booking.eventId);
                    return (
                      <Card key={booking.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{event ? event.title : `Event #${booking.eventId}`}</CardTitle>
                            <Badge
                              className={`${statusColors[booking.status]} border-0`}
                            >
                              {booking.status}
                            </Badge>
                          </div>
                          <CardDescription>
                            Booked on {format(new Date(booking.bookedAt), "MMMM d, yyyy")}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Event Date:</span>
                              <span>{event ? format(new Date(event.startDate), "MMM d, yyyy") : "N/A"}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Guests:</span>
                              <span>{booking.guestCount}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Payment:</span>
                              <Badge
                                variant="outline"
                                className={`${paymentStatusColors[booking.paymentStatus]} border-0`}
                              >
                                {booking.paymentStatus}
                              </Badge>
                            </div>
                            <div className="flex justify-between text-sm font-medium">
                              <span>Total:</span>
                              <span>${booking.totalPrice}</span>
                            </div>
                            {booking.specialRequests && (
                              <div className="mt-4 text-sm">
                                <p className="text-muted-foreground mb-1">Special Requests:</p>
                                <p className="text-sm">{booking.specialRequests}</p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                          {(isAdmin(user) ||
                            (isOrganizer(user) && event?.organizerId === user?.id) ||
                            booking.userId === user?.id) && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEditBooking(booking.id)}
                              >
                                Edit
                              </Button>
                            )}
                          {(isAdmin(user) || booking.userId === user?.id) && (
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => setBookingToDelete(booking)}
                            >
                              Cancel
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-lg border">
                  <CalendarDays className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-1">No bookings found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchQuery || statusFilter
                      ? "Try adjusting your search or filters"
                      : "Create your first booking to get started"}
                  </p>
                  <Button
                    onClick={handleCreateBooking}
                    className="bg-primary hover:bg-primary-dark text-white"
                  >
                    <PlusCircle className="mr-2 h-4 w-4" /> Create Booking
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="calendar">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar View</CardTitle>
                  <CardDescription>View your bookings on a calendar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Calendar view coming soon</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We're working on implementing a calendar view to make it easier to visualize and manage your bookings.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog open={!!bookingToDelete} onOpenChange={(open) => !open && setBookingToDelete(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cancel Booking</DialogTitle>
              <DialogDescription>
                Are you sure you want to cancel this booking? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            {bookingToDelete && (
              <div className="py-4">
                <p className="font-medium">
                  {events?.find(e => e.id === bookingToDelete.eventId)?.title || `Event #${bookingToDelete.eventId}`}
                </p>
                <p className="text-sm text-muted-foreground">
                  Booked on {format(new Date(bookingToDelete.bookedAt), "MMMM d, yyyy")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {bookingToDelete.guestCount} guests • ${bookingToDelete.totalPrice}
                </p>
              </div>
            )}
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Keep Booking</Button>
              </DialogClose>
              <Button
                variant="destructive"
                onClick={handleDeleteBooking}
              >
                Cancel Booking
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default function BookingsPage() {
  return (
    <AuthProvider>
      <Helmet>
        <title>Manage Bookings | Classic Event Handler</title>
        <meta
          name="description"
          content="View and manage your event bookings with Classic Event Handler."
        />
      </Helmet>

      <BookingsContent />
    </AuthProvider>
  );
}
