
import { z } from "zod";

// User form schema for registration
export const userFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
});

// Insert user schema (same as userFormSchema for now)
export const insertUserSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
});

// User type
export const userSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string().email(),
  registeredAt: z.date(),
});

// Module progress type
export const moduleProgressSchema = z.object({
  moduleId: z.string(),
  completed: z.boolean(),
  lastAccessedAt: z.date(),
  videoWatched: z.boolean(),
  resourcesDownloaded: z.array(z.string()),
  quizCompleted: z.boolean(),
});

// User progress type
export const userProgressSchema = z.object({
  userId: z.number(),
  modules: z.record(z.string(), moduleProgressSchema),
  overallProgress: z.number(),
  lastUpdatedAt: z.date(),
});

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = z.infer<typeof userSchema>;
export type ModuleProgress = z.infer<typeof moduleProgressSchema>;
export type UserProgress = z.infer<typeof userProgressSchema>;
