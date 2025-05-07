import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { EntryFormModal } from "@/components/EntryFormModal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { user, isAuthenticated } = useAuth();
  const [showForm, setShowForm] = useState(false);
  
  useEffect(() => {
    // Show the form if the user is not authenticated
    setShowForm(!isAuthenticated);
  }, [isAuthenticated]);

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
