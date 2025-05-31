import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// User types and roles
export const UserRole = {
  ADMIN: "admin",
  ORGANIZER: "organizer",
  CLIENT: "client",
  VENDOR: "vendor",
} as const;

export type UserRoleType = typeof UserRole[keyof typeof UserRole];

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  fullName: text("full_name").notNull(),
  role: text("role").notNull().default(UserRole.CLIENT),
  phone: text("phone"),
  avatar: text("avatar"),
  bio: text("bio"),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

export type InsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

export const userSchema = createSelectSchema(users);

// Events table
export const EventType = {
  WEDDING: "wedding",
  CORPORATE: "corporate",
  CULTURAL: "cultural",
  SOCIAL: "social",
  OTHER: "other",
} as const;

export type EventTypeValue = typeof EventType[keyof typeof EventType];

export const EventStatus = {
  DRAFT: "draft",
  PUBLISHED: "published",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
} as const;

export type EventStatusValue = typeof EventStatus[keyof typeof EventStatus];

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(),
  status: text("status").notNull().default(EventStatus.DRAFT),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  venueId: integer("venue_id"),
  organizerId: integer("organizer_id").notNull(),
  imageUrl: text("image_url"),
  capacity: integer("capacity"),
  price: integer("price"),
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
});

export type InsertEvent = typeof events.$inferInsert;
export type Event = typeof events.$inferSelect;

export const eventSchema = createSelectSchema(events);

// Venues table
export const venues = pgTable("venues", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  capacity: integer("capacity").notNull(),
  pricePerHour: integer("price_per_hour").notNull(),
  imageUrl: text("image_url"),
  amenities: jsonb("amenities"),
  available: boolean("available").default(true),
  addedBy: integer("added_by").notNull(),
});

export const insertVenueSchema = createInsertSchema(venues).omit({
  id: true,
});

export type InsertVenue = typeof venues.$inferInsert;
export type Venue = typeof venues.$inferSelect;

export const venueSchema = createSelectSchema(venues);

// Bookings table
export const BookingStatus = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  DECLINED: "declined",
  CANCELLED: "cancelled",
  COMPLETED: "completed",
} as const;

export type BookingStatusValue = typeof BookingStatus[keyof typeof BookingStatus];

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  eventId: integer("event_id").notNull(),
  userId: integer("user_id").notNull(),
  status: text("status").notNull().default(BookingStatus.PENDING),
  guestCount: integer("guest_count").notNull(),
  specialRequests: text("special_requests"),
  bookedAt: timestamp("booked_at").notNull().defaultNow(),
  totalPrice: integer("total_price").notNull(),
  paymentStatus: text("payment_status").notNull().default("unpaid"),
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  bookedAt: true,
});

export type InsertBooking = typeof bookings.$inferInsert;
export type Booking = typeof bookings.$inferSelect;

export const bookingSchema = createSelectSchema(bookings);

// Services table (catering, decoration, etc.)
export const ServiceType = {
  CATERING: "catering",
  DECORATION: "decoration",
  PHOTOGRAPHY: "photography",
  ENTERTAINMENT: "entertainment",
  TRANSPORTATION: "transportation",
  OTHER: "other",
} as const;

export type ServiceTypeValue = typeof ServiceType[keyof typeof ServiceType];

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(),
  price: integer("price").notNull(),
  imageUrl: text("image_url"),
  providerId: integer("provider_id").notNull(),
  available: boolean("available").default(true),
});

export const insertServiceSchema = createInsertSchema(services).omit({
  id: true,
});

export type InsertService = typeof services.$inferInsert;
export type Service = typeof services.$inferSelect;

export const serviceSchema = createSelectSchema(services);

// Testimonials table
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  eventType: text("event_type").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull(),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
  createdAt: true,
});

export type InsertTestimonial = typeof testimonials.$inferInsert;
export type Testimonial = typeof testimonials.$inferSelect;

export const testimonialSchema = createSelectSchema(testimonials);

// Contact messages table
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  eventType: text("event_type"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  read: boolean("read").default(false),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true,
  read: true,
});

export type InsertContactMessage = typeof contactMessages.$inferInsert;
export type ContactMessage = typeof contactMessages.$inferSelect;

export const contactMessageSchema = createSelectSchema(contactMessages);
