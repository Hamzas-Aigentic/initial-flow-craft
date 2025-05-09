import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import CoursePage from "@/pages/CoursePage";
import ThankYouPage from "@/pages/ThankYouPage";
import { useEffect, useState } from "react";
import { EntryFormModal } from "@/components/EntryFormModal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/course" component={CoursePage} />
      <Route path="/thank-you" component={ThankYouPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showForm, setShowForm] = useState(true);
  const [location] = useLocation();
  
  // Listen for location changes to determine whether to show the form
  useEffect(() => {
    if (location === '/') {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  }, [location]);

  return (
    <>
      <TooltipProvider>
        <Toaster />
        
        {/* Entry form modal that collects user data */}
        {showForm && <EntryFormModal />}
        
        {/* Main application routes */}
        <Router />
      </TooltipProvider>
    </>
  );
}

export default App;
