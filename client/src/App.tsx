
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { BuildTest } from "@/components/BuildTest";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import CoursePage from "@/pages/CoursePage";
import ThankYouPage from "@/pages/ThankYouPage";

function Router() {
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
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </ErrorBoundary>
  );
}

export default App;
