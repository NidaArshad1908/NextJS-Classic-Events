'use client'

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { AuthProvider, useAuth, isAdmin, isOrganizer } from "@/lib/auth";
import Sidebar from "@/components/dashboard/sidebar";
import EventForm from "@/components/dashboard/event-form";
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
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  MoreHorizontal,
  Edit,
  Trash2,
  CalendarDays,
  Users,
  Tag,
  PlusCircle,
  Search,
  Package,
  Calendar,
  Filter,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import { type Event, EventStatus } from "@/shared/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Redirect } from "wouter";

function EventsPage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [, navigate] = useLocation();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingEventId, setEditingEventId] = useState<number | null>(null);
  const [eventToDelete, setEventToDelete] = useState<Event | null>(null);

  // Fetch all events
  const { data: events, isLoading: eventsLoading } = useQuery<Event[]>({
    queryKey: ['/api/events'],
    enabled: isAuthenticated && !isLoading,
  });

  // Delete event mutation
  const deleteEvent = useMutation({
    mutationFn: async (id: number) => {
      return apiRequest("DELETE", `/api/events/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/events'] });
      toast({
        title: "Event deleted",
        description: "The event has been successfully deleted.",
      });
      setEventToDelete(null);
    },
    onError: (error) => {
      console.error("Error deleting event:", error);
      toast({
        title: "Failed to delete event",
        description: "An error occurred while trying to delete the event.",
        variant: "destructive",
      });
    },
  });

  // Filter events based on search query and filters
  const filteredEvents = events?.filter(event => {
    // Filter based on user role
    if (isAdmin(user)) {
      // Admin can see all events
    } else if (isOrganizer(user)) {
      // Organizers can only see their own events
      if (event.organizerId !== user?.id) return false;
    } else {
      // Clients can only see published events
      if (event.status !== EventStatus.PUBLISHED) return false;
    }

    // Apply search query filter
    if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Apply status filter
    if (statusFilter && event.status !== statusFilter) {
      return false;
    }

    // Apply type filter
    if (typeFilter && event.type !== typeFilter) {
      return false;
    }

    return true;
  });

  // Handle creating a new event
  const handleCreateEvent = () => {
    setShowCreateForm(true);
  };

  // Handle editing an event
  const handleEditEvent = (eventId: number) => {
    setEditingEventId(eventId);
  };

  // Handle deleting an event
  const handleDeleteEvent = () => {
    if (eventToDelete) {
      deleteEvent.mutate(eventToDelete.id);
    }
  };

  // Redirect to login if not authenticated
  if (!isLoading && !isAuthenticated) {
    return <Redirect to="/login" />;
  }

  // Check if user can create/edit events
  const canManageEvents = isAdmin(user) || isOrganizer(user);

  const statusColors: Record<string, string> = {
    draft: "bg-gray-100 text-gray-800",
    published: "bg-green-100 text-green-800",
    completed: "bg-blue-100 text-blue-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <div className="flex min-h-screen bg-neutral-cream">
      <Sidebar />
      <div className="flex-1 space-y-6 p-8 pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-3xl font-heading font-semibold">Events</h2>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            {canManageEvents && (
              <Button
                onClick={handleCreateEvent}
                className="bg-primary hover:bg-primary-dark text-white"
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Create Event
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search events..."
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
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={typeFilter}
              onValueChange={setTypeFilter}
            >
              <SelectTrigger className="w-[180px]">
                <div className="flex items-center">
                  <Package className="mr-2 h-4 w-4" />
                  <span>{typeFilter || "Filter by Type"}</span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
                <SelectItem value="social">Social</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {showCreateForm ? (
          <Card>
            <CardHeader>
              <CardTitle>Create New Event</CardTitle>
              <CardDescription>Fill in the details to create a new event.</CardDescription>
            </CardHeader>
            <CardContent>
              <EventForm onSuccess={() => setShowCreateForm(false)} />
            </CardContent>
          </Card>
        ) : editingEventId ? (
          <Card>
            <CardHeader>
              <CardTitle>Edit Event</CardTitle>
              <CardDescription>Update the event details.</CardDescription>
            </CardHeader>
            <CardContent>
              <EventForm
                eventId={editingEventId}
                onSuccess={() => setEditingEventId(null)}
              />
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="list" className="w-full">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
            </TabsList>
            <TabsContent value="list" className="space-y-4">
              {eventsLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : filteredEvents && filteredEvents.length > 0 ? (
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left">Event</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Type</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Capacity</th>
                        <th className="px-4 py-3 text-left">Price</th>
                        <th className="px-4 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y bg-white">
                      {filteredEvents.map((event) => (
                        <tr key={event.id} className="hover:bg-muted/50">
                          <td className="px-4 py-4 font-medium">{event.title}</td>
                          <td className="px-4 py-4 text-muted-foreground">
                            {format(new Date(event.startDate), "MMM d, yyyy")}
                          </td>
                          <td className="px-4 py-4 capitalize">
                            {event.type}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[event.status]}`}
                            >
                              {event.status}
                            </span>
                          </td>
                          <td className="px-4 py-4">
                            {event.capacity || "N/A"}
                          </td>
                          <td className="px-4 py-4">
                            ${event.price || 0}
                          </td>
                          <td className="px-4 py-4 text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  onClick={() => navigate(`/dashboard/events/${event.id}`)}
                                >
                                  <Calendar className="mr-2 h-4 w-4" />
                                  View
                                </DropdownMenuItem>
                                {canManageEvents && isOrganizer(user) && event.organizerId === user?.id && (
                                  <DropdownMenuItem onClick={() => handleEditEvent(event.id)}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit
                                  </DropdownMenuItem>
                                )}
                                {canManageEvents && (isAdmin(user) || (isOrganizer(user) && event.organizerId === user?.id)) && (
                                  <DropdownMenuItem
                                    onClick={() => setEventToDelete(event)}
                                    className="text-red-600"
                                  >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-lg border">
                  <CalendarDays className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-1">No events found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchQuery || statusFilter || typeFilter
                      ? "Try adjusting your search or filters"
                      : "Create your first event to get started"}
                  </p>
                  {canManageEvents && (
                    <Button
                      onClick={handleCreateEvent}
                      className="bg-primary hover:bg-primary-dark text-white"
                    >
                      <PlusCircle className="mr-2 h-4 w-4" /> Create Event
                    </Button>
                  )}
                </div>
              )}
            </TabsContent>

            <TabsContent value="grid" className="space-y-4">
              {eventsLoading ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : filteredEvents && filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="h-48 bg-muted relative">
                        {event.imageUrl ? (
                          <img
                            src={event.imageUrl}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <CalendarDays className="h-12 w-12 text-muted-foreground" />
                          </div>
                        )}
                        <div className="absolute top-2 right-2">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[event.status]}`}
                          >
                            {event.status}
                          </span>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription>{format(new Date(event.startDate), "MMMM d, yyyy")}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <Tag className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="capitalize">{event.type}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>Capacity: {event.capacity || "N/A"}</span>
                          </div>
                          <div className="flex items-center font-semibold">
                            <span>Price: ${event.price || 0}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/dashboard/events/${event.id}`)}
                        >
                          View Details
                        </Button>
                        {canManageEvents && (isAdmin(user) || (isOrganizer(user) && event.organizerId === user?.id)) && (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {canManageEvents && isOrganizer(user) && event.organizerId === user?.id && (
                                <DropdownMenuItem onClick={() => handleEditEvent(event.id)}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                              )}
                              {canManageEvents && (isAdmin(user) || (isOrganizer(user) && event.organizerId === user?.id)) && (
                                <DropdownMenuItem
                                  onClick={() => setEventToDelete(event)}
                                  className="text-red-600"
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center bg-white rounded-lg border">
                  <CalendarDays className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-1">No events found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchQuery || statusFilter || typeFilter
                      ? "Try adjusting your search or filters"
                      : "Create your first event to get started"}
                  </p>
                  {canManageEvents && (
                    <Button
                      onClick={handleCreateEvent}
                      className="bg-primary hover:bg-primary-dark text-white"
                    >
                      <PlusCircle className="mr-2 h-4 w-4" /> Create Event
                    </Button>
                  )}
                </div>
              )}
            </TabsContent>

            <TabsContent value="calendar">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar View</CardTitle>
                  <CardDescription>View your events on a calendar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <CalendarDays className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Calendar view coming soon</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      We're working on implementing a calendar view to make it easier to visualize and manage your events.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog open={!!eventToDelete} onOpenChange={(open) => !open && setEventToDelete(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Event</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this event? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            {eventToDelete && (
              <div className="py-4">
                <p className="font-medium">{eventToDelete.title}</p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(eventToDelete.startDate), "MMMM d, yyyy")}
                </p>
              </div>
            )}
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                variant="destructive"
                onClick={handleDeleteEvent}
              >
                Delete Event
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default function EventsWithAuth() {
  return (
    <AuthProvider>
      <Helmet>
        <title>Manage Events | Classic Event Handler</title>
        <meta
          name="description"
          content="Create, manage, and organize your events with Classic Event Handler."
        />
      </Helmet>

      <EventsPage />
    </AuthProvider>
  );
}
