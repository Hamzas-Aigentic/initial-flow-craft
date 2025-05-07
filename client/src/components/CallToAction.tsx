import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Your AI Skills to the Next Level?</h2>
          <p className="text-xl mb-8">Get a sneak peek of our comprehensive AI-Agency Blueprint and join our community of AI-powered entrepreneurs.</p>
          
          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* AI Blueprint visualization image */}
              <img 
                src="https://images.unsplash.com/photo-1581092921461-7d25c8e28e7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
                alt="AI-Agency Blueprint visualization" 
                className="w-full md:w-1/3 h-auto rounded-lg shadow-md object-cover"
              />
              
              <div className="text-left">
                <h3 className="text-primary-dark text-xl font-bold mb-3">The AI-Agency Blueprint</h3>
                <p className="text-neutral-600 mb-4">
                  Our premium course takes you from AI novice to running a full AI agency. 
                  Learn advanced strategies, client acquisition, service packaging, and more.
                </p>
                
                <ul className="space-y-2 mb-5">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-700">12-week comprehensive program</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-700">Live weekly coaching calls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-neutral-700">Private community access</span>
                  </li>
                </ul>
                
                <Button 
                  className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-primary-dark transform hover:scale-105"
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-4">Join Our AI Business Community</h3>
            <p className="mb-6">Connect with like-minded entrepreneurs using AI to transform their businesses on Skool.</p>
            <Button 
              variant="outline"
              className="inline-block bg-white text-primary-dark font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-neutral-100 transform hover:scale-105"
            >
              Join Free Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
