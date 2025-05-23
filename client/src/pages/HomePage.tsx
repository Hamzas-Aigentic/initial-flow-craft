import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, TrendingUp, Zap, Target } from "lucide-react";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { SignUpForm } from "@/components/SignUpForm";

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Return empty div as the modal will be shown from App.tsx
    return <div />;
  }

  const scrollToSignUp = () => {
    document.getElementById('signup-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-primary-dark">AIGentic Bros</span>
            <Button 
              onClick={scrollToSignUp}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get Started Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your First 
              <span className="text-blue-600"> End-to-End AI System</span> 
              in Just 2 Hours
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              No coding experience needed. Learn to create AI-powered automation systems that can transform your business operations and drive real growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                <span>2-Hour Complete Course</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                <span>Beginner-Friendly</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Zap className="w-5 h-5 mr-2 text-blue-600" />
                <span>No Code Required</span>
              </div>
            </div>

            <Button 
              size="lg" 
              onClick={scrollToSignUp}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 mb-12"
            >
              Start Learning Now - Free Access
            </Button>

            {/* Course Preview */}
            <div className="bg-white rounded-xl shadow-xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">What You'll Build:</h3>
              <div className="text-left space-y-4">
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-Powered Caption Generator</h4>
                    <p className="text-gray-600">Transform blank ideas into engaging social media content automatically</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Automation Workflow</h4>
                    <p className="text-gray-600">End-to-end system that works 24/7 without your intervention</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Real Business Application</h4>
                    <p className="text-gray-600">Ready to implement in your business immediately</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup-section" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto bg-gray-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
              Get Instant Access
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Join thousands learning AI automation. Course materials sent instantly to your email.
            </p>
            
            <SignUpForm />
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Free course • No credit card required • Access sent instantly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Complete Learning Path
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Fundamentals</h3>
                <p className="text-gray-600 mb-4">
                  Master the basics of AI, understand key concepts, and learn how AI can transform business operations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Understanding AI & Machine Learning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Business Applications of AI
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Getting Started with AI Tools
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Prompting Mastery</h3>
                <p className="text-gray-600 mb-4">
                  Learn advanced prompting techniques to get exceptional results from AI systems consistently.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Prompt Engineering Fundamentals
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Advanced Prompting Strategies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Optimizing AI Responses
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">AI Flow Building</h3>
                <p className="text-gray-600 mb-4">
                  Build your complete AI automation system from scratch using no-code tools and workflows.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Creating Automated Workflows
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Integrating Multiple AI Tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Deploying Your AI System
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Why This Course Changes Everything
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Technical Background Required</h3>
                    <p className="text-gray-600">Designed for entrepreneurs and business owners who want results, not complexity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Immediate Implementation</h3>
                    <p className="text-gray-600">Build and deploy your AI system during the course - no waiting, no delays.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Business Value</h3>
                    <p className="text-gray-600">Create systems that save hours weekly and generate consistent content.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Resource Library</h3>
                    <p className="text-gray-600">Cheat sheets, templates, and guides you can reference forever.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Future-Proof Skills</h3>
                    <p className="text-gray-600">Learn principles that apply to any AI tool or platform that emerges.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifetime Access</h3>
                    <p className="text-gray-600">Access course materials and updates forever - no expiration dates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your AI-Powered Future?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of entrepreneurs who've already transformed their businesses with AI automation.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToSignUp}
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Get Free Access Now
            </Button>
            <p className="text-blue-200 text-sm mt-4">
              No spam, no sales calls. Just valuable AI education delivered to your inbox.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
