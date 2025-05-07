import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to register a new user for the course
  app.post("/api/register", async (req, res) => {
    try {
      // Validate the request body
      const userData = insertUserSchema.parse(req.body);
      
      // Check if the user already exists
      const existingUser = await storage.getUserByEmail(userData.email);
      
      if (existingUser) {
        // If the user already exists, return success but don't create a duplicate
        return res.json({ success: true, user: existingUser, message: "Welcome back!" });
      }
      
      // Create a new user
      const newUser = await storage.createUser(userData);
      
      return res.json({ 
        success: true, 
        user: newUser,
        message: "Registration successful"
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "Failed to register. Please try again."
      });
    }
  });

  // Simply return a list of module resources for download (in a real app, these would be protected)
  app.get("/api/resources", (_req, res) => {
    const resources = {
      module1: [
        { title: "AI Mindset Worksheet", filename: "ai-mindset-worksheet.pdf", size: "1.2MB" },
        { title: "Model Selection Guide", filename: "model-selection-guide.pdf", size: "2.4MB" },
        { title: "AI Tools Comparison", filename: "ai-tools-comparison.pdf", size: "1.8MB" },
        { title: "AI ROI Calculator", filename: "ai-roi-calculator.pdf", size: "1.5MB" },
      ],
      module2: [
        { title: "SCOPE Framework Guide", filename: "scope-framework-guide.pdf", size: "1.5MB" },
        { title: "Prompt Templates", filename: "prompt-templates.pdf", size: "2.8MB" },
        { title: "Hallucination Prevention", filename: "hallucination-prevention.pdf", size: "2.2MB" },
        { title: "Prompt Chaining Guide", filename: "prompt-chaining-guide.pdf", size: "1.9MB" },
      ],
      module3: [
        { title: "n8n Workflow Template", filename: "n8n-workflow.pdf", size: "3.4MB" },
        { title: "Integration Guide", filename: "integration-guide.pdf", size: "2.1MB" },
        { title: "Scaling Guide", filename: "scaling-guide.pdf", size: "1.7MB" },
        { title: "Troubleshooting Guide", filename: "troubleshooting-guide.pdf", size: "2.3MB" },
      ]
    };
    
    return res.json({ success: true, resources });
  });

  const httpServer = createServer(app);
  
  return httpServer;
}
