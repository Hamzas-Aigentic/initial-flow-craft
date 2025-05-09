import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ModuleSection } from "@/components/ModuleSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { module1Data, module2Data, module3Data } from "@/lib/courseData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, ChevronRight, Download } from "lucide-react";
import { AIGenticBrosLogo } from "@/components/ui/logo";
import { VideoPlayer } from "@/components/ui/video-player";

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState("module1");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Scroll to top of the content area
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section similar to screenshot */}
        <div className="w-full bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24 text-center">
            <AIGenticBrosLogo className="h-12 w-auto mx-auto mb-8" />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
              Build Your First End-to-End AI System in Just 2 Hours—No Code Needed
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto">
              Free Mini-Course: From Blank Canvas to Automated Caption Generator
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button 
                size="lg" 
                className="bg-white text-primary-dark hover:bg-gray-100"
                onClick={() => document.getElementById('course-tabs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Course Modules <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Resources <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-sm opacity-80">Course Modules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">12</div>
                <div className="text-sm opacity-80">Downloadable Resources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Support Access</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course content tabs and modules */}
        <div className="container mx-auto px-4 py-8" id="course-tabs">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="module1" value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 p-1 rounded-lg">
                <TabsTrigger 
                  value="module1" 
                  className="text-base md:text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-primary-dark data-[state=active]:shadow-md rounded-md"
                >
                  Module 1
                </TabsTrigger>
                <TabsTrigger 
                  value="module2" 
                  className="text-base md:text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-primary-dark data-[state=active]:shadow-md rounded-md"
                >
                  Module 2
                </TabsTrigger>
                <TabsTrigger 
                  value="module3" 
                  className="text-base md:text-lg py-3 data-[state=active]:bg-white data-[state=active]:text-primary-dark data-[state=active]:shadow-md rounded-md"
                >
                  Module 3
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="module1" className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-3">
                    Module 1: {module1Data.title}
                  </h2>
                  <p className="text-gray-700">
                    Learn the fundamentals of AI and how to think about it as an amplifier for your business and creative work.
                  </p>
                </div>
                
                {/* Video Section */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <VideoPlayer 
                    title={module1Data.videoTitle} 
                    embedId={module1Data.videoEmbedId || "dQw4w9WgXcQ"} // Rick Roll placeholder :)
                  />
                </div>
                
                {/* Module Highlights */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Module Highlights:</h3>
                  <ul className="space-y-3">
                    {module1Data.learningPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* PDF Resources */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Module Resources:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module1Data.pdfResources.map((resource, index) => (
                      <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="bg-primary/10 p-2 rounded-lg mr-4">
                          <Download className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{resource.title}</h4>
                          <p className="text-sm text-gray-500">{resource.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="module2" className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-3">
                    Module 2: {module2Data.title}
                  </h2>
                  <p className="text-gray-700">
                    Master the art of effective prompting and learn how to get exactly what you want from AI systems.
                  </p>
                </div>
                
                {/* Video Section */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <VideoPlayer 
                    title={module2Data.videoTitle} 
                    embedId={module2Data.videoEmbedId || "dQw4w9WgXcQ"} // Placeholder
                  />
                </div>
                
                {/* Module Highlights */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Module Highlights:</h3>
                  <ul className="space-y-3">
                    {module2Data.learningPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* PDF Resources */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Module Resources:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module2Data.pdfResources.map((resource, index) => (
                      <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="bg-primary/10 p-2 rounded-lg mr-4">
                          <Download className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{resource.title}</h4>
                          <p className="text-sm text-gray-500">{resource.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="module3" className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-3">
                    Module 3: {module3Data.title}
                  </h2>
                  <p className="text-gray-700">
                    Build your first end-to-end AI system by connecting multiple tools without writing a single line of code.
                  </p>
                </div>
                
                {/* Video Section */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <VideoPlayer 
                    title={module3Data.videoTitle} 
                    embedId={module3Data.videoEmbedId || "dQw4w9WgXcQ"} // Placeholder
                  />
                </div>
                
                {/* Module Highlights */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Module Highlights:</h3>
                  <ul className="space-y-3">
                    {module3Data.learningPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* PDF Resources */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Module Resources:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module3Data.pdfResources.map((resource, index) => (
                      <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                        <div className="bg-primary/10 p-2 rounded-lg mr-4">
                          <Download className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{resource.title}</h4>
                          <p className="text-sm text-gray-500">{resource.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Resources section */}
          <div className="mt-20" id="resources">
            <ResourcesSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}