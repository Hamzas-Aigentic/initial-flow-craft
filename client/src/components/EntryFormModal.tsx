import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLocation } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { AIGenticBrosLogo } from "./ui/logo";
import { sendToWebhook } from "@/lib/webhook";

// The webhook URL for sending user registrations to n8n
const WEBHOOK_URL = "https://digitalvaultsolutions.app.n8n.cloud/webhook/e77faf1e-0621-4233-9fe8-ab1057ee257f";

type FormData = {
  fullName: string;
  email: string;
};

export function EntryFormModal() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data: FormData) => {
      // First register the user in our system
      const response = await apiRequest("POST", "/api/register", data);
      const result = await response.json();
      
      // Also send the data to the webhook for email processing
      if (result.success) {
        // Send user data to the webhook
        const webhookSent = await sendToWebhook(WEBHOOK_URL, {
          fullName: data.fullName,
          email: data.email,
          // Include the course URL that will be sent in the email
          courseUrl: window.location.origin + "/course",  // The dedicated course page
          timestamp: new Date().toISOString()
        });
        
        if (!webhookSent) {
          console.warn("Webhook call failed, but user registration was successful");
        }
      }
      
      return result;
    },
    onSuccess: (data) => {
      if (data.success) {
        // Show success message and redirect to the course page
        toast({
          title: "Success!",
          description: "You now have access to the course materials. Check your email for direct access link.",
        });
        
        // Redirect to the thank you page
        setLocation("/thank-you");
      } else {
        toast({
          title: "Registration failed",
          description: data.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    },
    onError: (error) => {
      toast({
        title: "Registration failed",
        description: "Unable to register. Please try again later.",
        variant: "destructive",
      });
      console.error("Registration error:", error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  function onSubmit(data: FormData) {
    setIsSubmitting(true);
    registerMutation.mutate(data);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 modal-backdrop">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 animate-in fade-in slide-in-from-bottom-10 duration-300">
        <div className="flex justify-center mb-8">
          <AIGenticBrosLogo className="h-16 w-auto" />
        </div>
        
        <h2 className="text-2xl font-bold text-primary-dark dark:text-primary-light mb-4 text-center">Get Instant Access</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">Enter your details to unlock the AI-Driven Business Growth Course</p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your full name" 
                      {...field} 
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your@email.com" 
                      type="email" 
                      {...field} 
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full transition duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                disabled={isSubmitting}
              >
                <span>Get Instant Access</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Button>
            </div>
            
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy and will never share your information.
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
