import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AIGenticBrosLogo } from "@/components/ui/logo";
import { Mail, CheckCircle, Clock } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 md:py-32">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col items-center text-center mb-10">
              <AIGenticBrosLogo className="h-16 w-auto mb-6" />
              <div className="inline-flex items-center justify-center mb-6">
                <CheckCircle className="h-14 w-14 text-green-500 mr-3" />
                <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">
                  Thank You!
                </h1>
              </div>
              
              <p className="text-xl text-gray-700 mb-2">
                Your registration has been successfully submitted.
              </p>
              <p className="text-lg text-gray-600">
                We're excited to have you join us on this AI journey.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 mb-8 border-l-4 border-primary">
              <h2 className="flex items-center text-xl font-bold text-primary-dark mb-4">
                <Mail className="h-6 w-6 mr-2" />
                Check Your Email
              </h2>
              
              <p className="text-gray-700 mb-4">
                We've sent an email to the address you provided with a link to access the "Your First AI Flow" course materials.
              </p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-yellow-700">
                <div className="flex">
                  <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p>
                    <span className="font-medium">Important:</span> The course access link is only available through the email we sent you. If you don't see it within a few minutes, please check your spam folder.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                What to expect next:
              </h3>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>✓ Immediate access to all course materials via the email link</li>
                <li>✓ Access to all downloadable AI Starter Kit resources</li>
                <li>✓ Step-by-step guidance to build your first AI system</li>
              </ul>
              
              <p className="text-sm text-gray-500">
                If you have any questions, please contact our support team.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}