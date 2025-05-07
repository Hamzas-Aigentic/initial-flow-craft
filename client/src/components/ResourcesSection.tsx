import { PdfCard } from "./PdfCard";
import { useQuery } from "@tanstack/react-query";

interface ResourcesData {
  module1: Resource[];
  module2: Resource[];
  module3: Resource[];
}

interface Resource {
  title: string;
  filename: string;
  size: string;
}

export function ResourcesSection() {
  // Fetch resources data
  const { data, isLoading, error } = useQuery<{ success: boolean, resources: ResourcesData }>({
    queryKey: ['/api/resources'],
  });

  const resources = data?.resources;

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">AI Starter Kit</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Download all the resources you need to start building your first AI system today. 
              Our comprehensive materials will guide you every step of the way.
            </p>
          </div>
          
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Loading resources...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">
              Error loading resources. Please try again later.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Module 1 Resources */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="font-bold text-lg">Module 1 Resources</h3>
                </div>
                <div className="p-5 space-y-3">
                  {resources?.module1.map((resource, index) => (
                    <PdfCard
                      key={index}
                      title={resource.title}
                      filename={resource.filename}
                      fileSize={resource.size}
                      compact
                    />
                  ))}
                </div>
              </div>
              
              {/* Module 2 Resources */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="font-bold text-lg">Module 2 Resources</h3>
                </div>
                <div className="p-5 space-y-3">
                  {resources?.module2.map((resource, index) => (
                    <PdfCard
                      key={index}
                      title={resource.title}
                      filename={resource.filename}
                      fileSize={resource.size}
                      compact
                    />
                  ))}
                </div>
              </div>
              
              {/* Module 3 Resources */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-primary text-white p-4">
                  <h3 className="font-bold text-lg">Module 3 Resources</h3>
                </div>
                <div className="p-5 space-y-3">
                  {resources?.module3.map((resource, index) => (
                    <PdfCard
                      key={index}
                      title={resource.title}
                      filename={resource.filename}
                      fileSize={resource.size}
                      compact
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
