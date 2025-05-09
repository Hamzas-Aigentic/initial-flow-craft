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
            <div className="flex flex-col items-center space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {/* Module 1 Resources */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="bg-blue-700 text-white p-4 text-center">
                    <h3 className="font-bold text-lg">Module 1 Resources</h3>
                  </div>
                  <div className="space-y-0 divide-y divide-gray-100">
                    {resources?.module1.map((resource, index) => (
                      <div key={index} className="flex items-center p-4 hover:bg-gray-50">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-blue-700 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1-5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V8h-3a2 2 0 01-2-2V3H7z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium text-gray-800">{resource.title}</span>
                          </div>
                        </div>
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            // In a real app, this would download the file
                            alert(`Downloading ${resource.filename}`);
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Module 2 Resources */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="bg-blue-700 text-white p-4 text-center">
                    <h3 className="font-bold text-lg">Module 2 Resources</h3>
                  </div>
                  <div className="space-y-0 divide-y divide-gray-100">
                    {resources?.module2.map((resource, index) => (
                      <div key={index} className="flex items-center p-4 hover:bg-gray-50">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-blue-700 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1-5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V8h-3a2 2 0 01-2-2V3H7z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium text-gray-800">{resource.title}</span>
                          </div>
                        </div>
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            // In a real app, this would download the file
                            alert(`Downloading ${resource.filename}`);
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Module 3 Resources */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                  <div className="bg-blue-700 text-white p-4 text-center">
                    <h3 className="font-bold text-lg">Module 3 Resources</h3>
                  </div>
                  <div className="space-y-0 divide-y divide-gray-100">
                    {resources?.module3.map((resource, index) => (
                      <div key={index} className="flex items-center p-4 hover:bg-gray-50">
                        <div className="flex-1">
                          <div className="flex items-center">
                            <svg className="h-5 w-5 text-blue-700 mr-3" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1-5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V8h-3a2 2 0 01-2-2V3H7z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium text-gray-800">{resource.title}</span>
                          </div>
                        </div>
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault();
                            // In a real app, this would download the file
                            alert(`Downloading ${resource.filename}`);
                          }}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                          </svg>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
