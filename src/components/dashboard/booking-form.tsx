'use client'
    
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "../../lib/queryClient";
import { insertBookingSchema, BookingStatus, type Event } from "@/shared/schema";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { useAuth } from "../../lib/auth";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

// Create a new schema for form validation
const bookingFormSchema = z.object({
  eventId: z.number({
    required_error: "Event is required",
  }),
  userId: z.number(),
  status: z.nativeEnum(BookingStatus),
  guestCount: z.number({
    required_error: "Guest count is required",
  }).min(1, "Guest count must be at least 1"),
  specialRequests: z.string().optional(),
  totalPrice: z.number({
    required_error: "Total price is required",
  }).min(0, "Total price cannot be negative"),
  paymentStatus: z.string(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

interface BookingFormProps {
  bookingId?: number;
  preselectedEventId?: number;
  onSuccess?: () => void;
}

export default function BookingForm({ bookingId, preselectedEventId, onSuccess }: BookingFormProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [, navigate] = useLocation();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  // Fetch events for the dropdown
  const { data: events, isLoading: loadingEvents } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  // If editing, fetch the booking data
  const { data: booking, isLoading: loadingBooking } = useQuery({
    queryKey: ['/api/bookings', bookingId],
    enabled: !!bookingId,
  });

  // Create booking mutation
  const createBooking = useMutation({
    mutationFn: async (data: BookingFormValues) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/bookings'] });
      toast({
        title: "Booking created successfully",
        description: "Your event booking has been created.",
      });
      if (onSuccess) {
        onSuccess();
      } else {
        navigate("/dashboard/bookings");
      }
    },
    onError: (error) => {
      console.error("Error creating booking:", error);
      toast({
        title: "Failed to create booking",
        description: "Please check your input and try again.",
        variant: "destructive",
      });
    },
  });

  // Update booking mutation
  const updateBooking = useMutation({
    mutationFn: async (data: Partial<BookingFormValues>) => {
      const response = await apiRequest("PUT", `/api/bookings/${bookingId}`, data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/bookings'] });
      queryClient.invalidateQueries({ queryKey: ['/api/bookings', bookingId] });
      toast({
        title: "Booking updated successfully",
        description: "Your booking has been updated.",
      });
      if (onSuccess) {
        onSuccess();
      } else {
        navigate("/dashboard/bookings");
      }
    },
    onError: (error) => {
      console.error("Error updating booking:", error);
      toast({
        title: "Failed to update booking",
        description: "Please check your input and try again.",
        variant: "destructive",
      });
    },
  });

  // Set up form with default values
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      eventId: preselectedEventId || 0,
      userId: user?.id || 0,
      status: BookingStatus.PENDING,
      guestCount: 1,
      specialRequests: "",
      totalPrice: 0,
      paymentStatus: "unpaid",
    },
  });

  // Update form when booking data is loaded
  useEffect(() => {
    if (booking && !loadingBooking) {
      const bookingData = booking as unknown as BookingFormValues;
      form.reset(bookingData);
    } else if (preselectedEventId && !bookingId) {
      form.setValue("eventId", preselectedEventId);
    }
  }, [booking, loadingBooking, form, preselectedEventId, bookingId]);

  // Update the selected event when the eventId changes
  useEffect(() => {
    const eventId = form.watch("eventId");
    if (eventId && events) {
      const event = events.find(e => e.id === eventId);
      setSelectedEvent(event || null);

      // If we have an event with a price, and the guest count, update the total price
      if (event?.price && form.watch("guestCount")) {
        const guestCount = form.watch("guestCount");
        form.setValue("totalPrice", event.price * guestCount);
      }
    }
  }, [form, events]);

  // Update total price when guest count changes
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "guestCount" && selectedEvent?.price) {
        const guestCount = value.guestCount || 1;
        form.setValue("totalPrice", selectedEvent.price * guestCount);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, selectedEvent]);

  async function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true);
    try {
      if (bookingId) {
        await updateBooking.mutateAsync(data);
      } else {
        await createBooking.mutateAsync(data);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  if ((bookingId && loadingBooking) || loadingEvents) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="eventId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event</FormLabel>
              <Select
                onValueChange={(value: string) => field.onChange(parseInt(value))}
                defaultValue={field.value?.toString()}
                disabled={!!preselectedEventId || !!bookingId}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an event" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {events?.filter(event => event.status === "published").map((event) => (
                    <SelectItem key={event.id} value={event.id.toString()}>
                      {event.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {selectedEvent && (
          <div className="p-4 bg-muted rounded-md mb-4">
            <h3 className="font-medium mb-2">Event Details</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="font-medium">Date:</span> {new Date(selectedEvent.startDate).toLocaleDateString()}</div>
              <div><span className="font-medium">Type:</span> {selectedEvent.type}</div>
              <div><span className="font-medium">Capacity:</span> {selectedEvent.capacity}</div>
              <div><span className="font-medium">Price:</span> ${selectedEvent.price}</div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="guestCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Guests</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    max={selectedEvent?.capacity || 999}
                    placeholder="Enter number of guests"
                    {...field}
                    onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                  />
                </FormControl>
                {selectedEvent?.capacity && (
                  <FormDescription>
                    Maximum capacity: {selectedEvent.capacity}
                  </FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="totalPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Price ($)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    readOnly
                    className="bg-muted"
                    {...field}
                    value={field.value || (selectedEvent?.price || 0) * (form.watch("guestCount") || 1)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {bookingId && (
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Booking Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={BookingStatus.PENDING}>Pending</SelectItem>
                    <SelectItem value={BookingStatus.CONFIRMED}>Confirmed</SelectItem>
                    <SelectItem value={BookingStatus.CANCELLED}>Cancelled</SelectItem>
                    <SelectItem value={BookingStatus.DECLINED}>Declined</SelectItem>
                    <SelectItem value={BookingStatus.COMPLETED}>Completed</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {bookingId && (
          <FormField
            control={form.control}
            name="paymentStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Status</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="unpaid">Unpaid</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="refunded">Refunded</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="specialRequests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Special Requests</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any special requests or notes for the event..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/dashboard/bookings")}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">●</span>
                {bookingId ? "Updating..." : "Creating..."}
              </>
            ) : (
              bookingId ? "Update Booking" : "Create Booking"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
