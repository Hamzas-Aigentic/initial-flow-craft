import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ModuleSection } from "@/components/ModuleSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { module1Data, module2Data, module3Data } from "@/lib/courseData";

export default function CoursePage() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-12">
            Your First AI Flow Course
          </h1>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to the complete course materials! Here you'll find all three modules and 
              downloadable resources to help you build your first end-to-end AI system.
            </p>
          </div>
          
          {/* Module sections */}
          <div className="space-y-24 mb-24">
            <ModuleSection 
              id="module1"
              moduleNumber={1}
              title={module1Data.title}
              duration={module1Data.duration}
              description={module1Data.description}
              learningPoints={module1Data.learningPoints}
              pdfResources={module1Data.pdfResources}
              videoTitle={module1Data.videoTitle}
              videoEmbedId={module1Data.videoEmbedId}
              imageUrl={module1Data.imageUrl}
              sideContent={module1Data.sideContent}
            />
            
            <ModuleSection 
              id="module2"
              moduleNumber={2}
              title={module2Data.title}
              duration={module2Data.duration}
              description={module2Data.description}
              learningPoints={module2Data.learningPoints}
              pdfResources={module2Data.pdfResources}
              videoTitle={module2Data.videoTitle}
              videoEmbedId={module2Data.videoEmbedId}
              imageUrl={module2Data.imageUrl}
              isReversed={true}
              sideContent={module2Data.sideContent}
            />
            
            <ModuleSection 
              id="module3"
              moduleNumber={3}
              title={module3Data.title}
              duration={module3Data.duration}
              description={module3Data.description}
              learningPoints={module3Data.learningPoints}
              pdfResources={module3Data.pdfResources}
              videoTitle={module3Data.videoTitle}
              videoEmbedId={module3Data.videoEmbedId}
              imageUrl={module3Data.imageUrl}
              sideContent={module3Data.sideContent}
            />
          </div>
          
          {/* Resources section */}
          <div className="mb-20">
            <ResourcesSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}