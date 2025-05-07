import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ModuleSection } from "@/components/ModuleSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { module1Data, module2Data, module3Data } from "@/lib/courseData";

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Return empty div as the modal will be shown from App.tsx
    return <div />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        
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
        
        <ResourcesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
