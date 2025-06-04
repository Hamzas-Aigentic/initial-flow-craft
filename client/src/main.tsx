
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/queryClient';
import { ThemeProvider } from "@/components/ui/theme-provider";

console.log("Starting application...");

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="aigenticbros-theme">
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ThemeProvider>
);

console.log("Application rendered");
