import { CheckCircle } from "lucide-react";
import { PdfCard } from "./PdfCard";
import { VideoPlayer } from "./ui/video-player";

interface ModuleSectionProps {
  id: string;
  moduleNumber: number;
  title: string;
  duration: string;
  description: string;
  learningPoints: string[];
  pdfResources: {
    title: string;
    filename: string;
    size: string;
  }[];
  videoTitle: string;
  videoEmbedId?: string;
  imageUrl: string;
  isReversed?: boolean;
  sideContent: React.ReactNode;
}

export function ModuleSection({
  id,
  moduleNumber,
  title,
  duration,
  description,
  learningPoints,
  pdfResources,
  videoTitle,
  videoEmbedId,
  imageUrl,
  isReversed = false,
  sideContent
}: ModuleSectionProps) {
  const bgColor = moduleNumber % 2 === 0 ? "bg-white" : "bg-neutral-100";
  
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-start gap-8`}>
            <div className="w-full md:w-2/3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden module-card transition-all duration-300">
                <div className="bg-primary-dark text-white py-4 px-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">{`Module ${moduleNumber}: ${title}`}</h2>
                    <span className="bg-white text-primary-dark text-sm font-medium px-3 py-1 rounded-full">{duration}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="aspect-w-16 aspect-h-9 mb-6 bg-neutral-200 rounded-lg overflow-hidden">
                    <VideoPlayer 
                      title={videoTitle}
                      embedId={videoEmbedId} 
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary-dark mb-3">What You'll Learn:</h3>
                  <ul className="space-y-2 mb-6">
                    {learningPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary-light mt-0.5 mr-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* PDF Resources */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {pdfResources.slice(0, 2).map((resource, index) => (
                      <PdfCard 
                        key={index}
                        title={resource.title}
                        filename={resource.filename}
                        fileSize={resource.size}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 space-y-6">
              {/* Module-specific image */}
              <img 
                src={imageUrl} 
                alt={`Module ${moduleNumber} illustration`} 
                className="w-full h-auto rounded-xl shadow-md object-cover"
              />
              
              {/* Custom side content */}
              {sideContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
