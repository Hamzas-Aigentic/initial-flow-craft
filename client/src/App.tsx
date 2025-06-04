
console.log("=== APP.TSX LOADING ===");

import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { BuildTest } from "@/components/BuildTest";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import CoursePage from "@/pages/CoursePage";
import ThankYouPage from "@/pages/ThankYouPage";

console.log("All App imports loaded successfully");

function Router() {
  console.log("Router component rendering...");
  return (
    <Switch>
      <Route path="/test" component={() => <BuildTest />} />
      <Route path="/" component={HomePage} />
      <Route path="/course" component={CoursePage} />
      <Route path="/thank-you" component={ThankYouPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  console.log("=== APP COMPONENT RENDERING ===");
  
  try {
    return (
      <ErrorBoundary>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ErrorBoundary>
    );
  } catch (error) {
    console.error("Error in App component:", error);
    throw error;
  }
}

console.log("App component defined successfully");

export default App;
