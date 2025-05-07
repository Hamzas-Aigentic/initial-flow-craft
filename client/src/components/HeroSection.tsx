import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function HeroSection() {
  const scrollToModule1 = () => {
    const module1 = document.getElementById('module1');
    if (module1) {
      module1.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Build Your First End-to-End AI System in Just 2 Hours—No Code Needed
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 text-white/90">
            Free Mini-Course: From Blank Canvas to Automated Caption Generator
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
            <h3 className="text-xl font-medium mb-4">What You'll Learn:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-white/90 flex-shrink-0 mt-0.5" />
                <p>The exact AI mindset successful founders use</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-white/90 flex-shrink-0 mt-0.5" />
                <p>How to crush hallucinations with simple techniques</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-white/90 flex-shrink-0 mt-0.5" />
                <p>Advanced prompt frameworks that get results</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-white/90 flex-shrink-0 mt-0.5" />
                <p>Build a working AI system with zero coding</p>
              </div>
            </div>
          </div>
          
          <Button
            onClick={scrollToModule1}
            variant="outline"
            size="lg"
            className="bg-white text-primary-dark hover:bg-white/90 hover:text-primary-dark font-bold py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            Start Learning Now
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#f8fafc" fillOpacity="1" d="M0,224L60,229.3C120,235,240,245,360,250.7C480,256,600,256,720,234.7C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
