
console.log("=== MAIN.TSX START ===");

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { ThemeProvider } from "@/components/ui/theme-provider";

console.log("All imports loaded successfully");

const rootElement = document.getElementById("root");
console.log("Root element found:", !!rootElement);

if (!rootElement) {
  console.error("Root element not found!");
  throw new Error("Root element not found");
}

console.log("Creating React root...");

try {
  const root = createRoot(rootElement);
  console.log("React root created successfully");
  
  console.log("Rendering application...");
  root.render(
    <ThemeProvider defaultTheme="light" storageKey="aigenticbros-theme">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  );
  
  console.log("=== APPLICATION RENDERED SUCCESSFULLY ===");
} catch (error) {
  console.error("Error during rendering:", error);
  throw error;
}
