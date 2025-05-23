import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, TrendingUp, Zap, Target, ArrowRight, Play } from "lucide-react";
import { Footer } from "@/components/Footer";
import { SignUpForm } from "@/components/SignUpForm";
import { AIGenticBrosLogo } from "@/components/ui/logo";

export default function HomePage() {
  const scrollToSignUp = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <AIGenticBrosLogo className="h-10 w-auto mr-3" />
              <span className="text-xl font-bold text-gray-900">AIGentic Bros</span>
            </div>
            <Button 
              onClick={scrollToSignUp}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-lg"
            >
              Get Free Access
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                🔥 LIMITED TIME: FREE MINI-COURSE
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              From Zero to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> AI Expert </span>
              in 2 Hours
            </h1>
            
            <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
              Stop watching AI pass you by. Build your first profitable AI automation system today—no coding, no confusion, just results.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto mb-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">2 Hours</div>
                  <div className="text-gray-600">Complete Training</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$0</div>
                  <div className="text-gray-600">Investment Required</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">∞</div>
                  <div className="text-gray-600">Lifetime Access</div>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              onClick={scrollToSignUp}
              className="bg-blue-600 hover:bg-blue-700 text-white text-2xl px-16 py-8 rounded-full font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Instant Access - 100% FREE
            </Button>
            
            <p className="text-gray-500 mt-4">⚡ Instant delivery • No spam • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Problem/Pain Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              You're Missing Out on the AI Revolution
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              While others automate and scale their businesses with AI, you're still stuck doing everything manually...
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-4">❌ Without AI Skills:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Spending hours on repetitive tasks</li>
                  <li>• Watching competitors pull ahead</li>
                  <li>• Missing profitable opportunities</li>
                  <li>• Feeling overwhelmed by AI complexity</li>
                  <li>• Stuck in the "old way" of doing business</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4">✅ With AI Mastery:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Automate time-consuming workflows</li>
                  <li>• Generate content in seconds, not hours</li>
                  <li>• Scale your business effortlessly</li>
                  <li>• Stay ahead of the competition</li>
                  <li>• Build systems that work 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup-section" className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl p-10 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Get Your Free AI Course Now
                </h2>
                <p className="text-xl text-gray-600">
                  Join entrepreneurs already building AI-powered businesses
                </p>
              </div>
              
              <SignUpForm />
              
              <div className="text-center mt-8 space-y-3">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <span>✓ Instant Access</span>
                  <span>✓ No Credit Card</span>
                  <span>✓ 100% Free</span>
                </div>
                <p className="text-sm text-gray-400">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              Here's Exactly What You'll Master
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">AI Fundamentals That Actually Matter</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Skip the technical jargon. Learn only what you need to start building profitable AI systems for your business.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Prompting Like a Pro</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Master the secret techniques that get you 10x better results from AI tools—transforming mediocre output into marketing gold.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Build Your First AI System</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Follow along as we build a complete AI-powered caption generator that turns ideas into engaging content automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Urgency & Scarcity */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-800">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The AI Train Is Leaving the Station
            </h2>
            <p className="text-2xl mb-8 leading-relaxed">
              Every day you wait is another day your competitors get further ahead. 
              The businesses winning tomorrow are learning AI today.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
              <h3 className="text-3xl font-bold mb-4">⚠️ Don't Get Left Behind</h3>
              <p className="text-xl">
                By 2024, 75% of businesses will be using AI automation. 
                Will you be leading the pack or playing catch-up?
              </p>
            </div>
            
            <Button 
              size="lg" 
              onClick={scrollToSignUp}
              className="bg-white text-blue-700 hover:bg-gray-100 text-2xl px-16 py-8 rounded-full font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start My AI Journey Now - FREE
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
