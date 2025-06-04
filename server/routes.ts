
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to register a new user for the course
  app.post("/api/register", async (req, res) => {
    try {
      const { fullName, email } = req.body;
      
      // Basic validation
      if (!fullName || !email) {
        return res.status(400).json({ 
          success: false, 
          message: "Full name and email are required" 
        });
      }
      
      // Check if the user already exists
      const existingUser = await storage.getUserByEmail(email);
      
      if (existingUser) {
        // If the user already exists, return success but don't create a duplicate
        return res.json({ success: true, user: existingUser, message: "Welcome back!" });
      }
      
      // Create a new user
      const newUser = await storage.createUser({ fullName, email });
      
      return res.json({ 
        success: true, 
        user: newUser,
        message: "Registration successful"
      });
    } catch (error) {
      console.error("Registration error:", error);
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
        { title: "AI Fundamentals Cheat-Sheet", filename: "AI_Fundamentals_CheatSheet.pdf", size: "24KB" },
        { title: "Gemini API Key Lab Guide", filename: "Module 1_Gemini API Key_Lab.pdf", size: "107KB" },
        { title: "Module 1 Quiz", filename: "LO1_Quiz_Questions.pdf", size: "65KB" },
        { title: "Reflection Journal", filename: "LO1_Reflection_Journal.pdf", size: "15KB" },
      ],
      module2: [
        { title: "Prompting & Hallucination Control Cheat Sheet", filename: "AI_Prompting_CheatSheet_Redesign.pdf", size: "53KB" },
        { title: "Interactive Prompting Lab", filename: "Prompting_Lab_Exercise_Redesign.pdf", size: "82KB" },
        { title: "Module 2 Quiz", filename: "LO2_Quiz_Questions_Redesign.pdf", size: "66KB" },
        { title: "Reflection Journal", filename: "LO2_Reflection_Journal_Redesign.pdf", size: "25KB" },
      ],
      module3: [
        { title: "AI Flow Builder Cheat Sheet", filename: "AI_Flow_Builder_CheatSheet.pdf", size: "33KB" },
        { title: "Interactive Lab Instructions", filename: "AI_Flow_Lab_Instructions.pdf", size: "155KB" },
        { title: "Module 3 Quiz", filename: "LO3_Quiz_Questions.pdf", size: "65KB" },
        { title: "Reflection Journal", filename: "LO3_Reflection_Journal.pdf", size: "25KB" },
      ]
    };
    
    return res.json({ success: true, resources });
  });

  const httpServer = createServer(app);
  
  return httpServer;
}
