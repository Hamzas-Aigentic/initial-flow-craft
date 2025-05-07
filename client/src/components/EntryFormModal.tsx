import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { AIGenticBrosLogo } from "./ui/logo";

type FormData = {
  fullName: string;
  email: string;
};

export function EntryFormModal() {
  const { toast } = useToast();
  const { login } = useAuth();
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
      const response = await apiRequest("POST", "/api/register", data);
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        // Store the user data in the auth context
        login(data.user);
        
        toast({
          title: "Success!",
          description: "You now have access to the course materials.",
        });
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
