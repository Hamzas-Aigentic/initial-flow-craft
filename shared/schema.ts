import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User sign-up schema for the course
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  registeredAt: timestamp("registered_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  fullName: true,
  email: true,
});

// Validate the email format in the front end
export const userFormSchema = insertUserSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  fullName: z.string().min(2, "Please enter your full name"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
