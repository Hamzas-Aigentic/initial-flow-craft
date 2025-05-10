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

// Module progress schema
export const moduleProgressSchema = z.object({
  moduleId: z.string(),
  completed: z.boolean().default(false),
  lastAccessedAt: z.date().optional(),
  videoWatched: z.boolean().default(false),
  resourcesDownloaded: z.array(z.string()).default([]),
  quizCompleted: z.boolean().default(false),
});

// User progress schema for all modules
export const userProgressSchema = z.object({
  userId: z.number(),
  modules: z.record(moduleProgressSchema),
  overallProgress: z.number().min(0).max(100).default(0),
  lastUpdatedAt: z.date(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ModuleProgress = z.infer<typeof moduleProgressSchema>;
export type UserProgress = z.infer<typeof userProgressSchema>;
