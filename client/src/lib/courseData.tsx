import { 
  Info, 
  Quote, 
  Code, 
  Layers, 
  BrainCircuit
} from "lucide-react";

// Module 1
export const module1Data = {
  title: "Mindset, Models & Master Keys",
  duration: "30 minutes",
  description: "The foundation of AI success starts with the right mental models",
  learningPoints: [
    "The AI Business Owner Mindset: How to think about AI differently than most people",
    "Model Selection: Choosing the right AI model for your specific business needs",
    "The Master Key Framework: How to approach AI projects to maximize ROI"
  ],
  pdfResources: [
    { title: "AI Mindset Worksheet", filename: "ai-mindset-worksheet.pdf", size: "1.2MB" },
    { title: "Model Selection Guide", filename: "model-selection-guide.pdf", size: "2.4MB" }
  ],
  videoTitle: "Module 1 - Mindset, Models & Master Keys",
  videoEmbedId: "", // Will be populated with actual YouTube ID when available
  imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
  sideContent: (
    <>
      {/* Feature highlight card */}
      <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-primary">
        <h3 className="font-bold text-lg text-primary-dark mb-2 flex items-center">
          <BrainCircuit className="w-5 h-5 mr-2" />
          Mastering the AI Mindset
        </h3>
        <p className="text-neutral-600">
          Learn how successful entrepreneurs approach AI differently. This mindset shift alone can multiply your results overnight.
        </p>
      </div>
      
      {/* Quote card */}
      <div className="bg-primary-dark text-white rounded-xl shadow-md p-5">
        <Quote className="w-8 h-8 text-primary-light mb-3 opacity-80" />
        <p className="italic mb-3">
          "The most powerful business tool of this decade isn't just having AI access—it's knowing exactly how to leverage it as your competitive advantage."
        </p>
        <p className="font-medium">— AIGentic Bros</p>
      </div>
    </>
  )
};

// Module 2
export const module2Data = {
  title: "Prompt Like a Pro & Crush Hallucinations",
  duration: "40 minutes",
  description: "Master the art of effective prompting",
  learningPoints: [
    "Advanced Prompt Engineering: The SCOPE framework for getting exactly what you want",
    "Hallucination Prevention: Proven techniques to ensure factual accuracy in AI outputs",
    "Chaining Prompts: How to create multi-step AI workflows for complex tasks"
  ],
  pdfResources: [
    { title: "SCOPE Framework Guide", filename: "scope-framework-guide.pdf", size: "1.5MB" },
    { title: "Prompt Templates", filename: "prompt-templates.pdf", size: "2.8MB" }
  ],
  videoTitle: "Module 2 - Prompt Like a Pro & Crush Hallucinations",
  videoEmbedId: "", // Will be populated with actual YouTube ID when available
  imageUrl: "https://pixabay.com/get/gb475c532cd6c12d20bb1e68211cf47404429d1819e5e477d20a7a08d7272c2814da62718d989e76c6bfc8e93a1778694c560243ab1706e08f883b598c6adbba5_1280.jpg",
  sideContent: (
    <>
      {/* Feature highlight card */}
      <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-primary-light">
        <h3 className="font-bold text-lg text-primary-dark mb-2 flex items-center">
          <Info className="w-5 h-5 mr-2" />
          The SCOPE Framework
        </h3>
        <p className="text-neutral-600">
          Our proprietary prompt framework that delivers precise, accurate results every time you interact with AI models.
        </p>
      </div>
      
      {/* Code example card */}
      <div className="bg-neutral-800 text-white rounded-xl shadow-md p-5 font-mono text-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-neutral-400 flex items-center">
            <Code className="w-4 h-4 mr-2" />
            Prompt Template
          </span>
          <div className="flex space-x-1">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>
        </div>
        <p className="text-primary-light mb-1"># SCOPE Framework</p>
        <p className="text-neutral-300 mb-1"><span className="text-white">S</span>: Situation - {`{context}`}</p>
        <p className="text-neutral-300 mb-1"><span className="text-white">C</span>: Constraints - {`{limits}`}</p>
        <p className="text-neutral-300 mb-1"><span className="text-white">O</span>: Objective - {`{goal}`}</p>
        <p className="text-neutral-300 mb-1"><span className="text-white">P</span>: Process - {`{steps}`}</p>
        <p className="text-neutral-300 mb-1"><span className="text-white">E</span>: Evidence - {`{proof}`}</p>
      </div>
    </>
  )
};

// Module 3
export const module3Data = {
  title: "Stitch ChatGPT, Perplexity & n8n into One Click",
  duration: "50 minutes",
  description: "Build your first end-to-end AI system",
  learningPoints: [
    "System Integration: How to connect multiple AI tools without coding",
    "Automation Workflow: Building your first end-to-end AI system that runs with one click",
    "Scaling Up: How to expand your system to handle more complex business tasks"
  ],
  pdfResources: [
    { title: "n8n Workflow Template", filename: "n8n-workflow.pdf", size: "3.4MB" },
    { title: "Integration Guide", filename: "integration-guide.pdf", size: "2.1MB" }
  ],
  videoTitle: "Module 3 - Stitch ChatGPT, Perplexity & n8n into One Click",
  videoEmbedId: "", // Will be populated with actual YouTube ID when available
  imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
  sideContent: (
    <>
      {/* Feature highlight card */}
      <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-primary">
        <h3 className="font-bold text-lg text-primary-dark mb-2 flex items-center">
          <Layers className="w-5 h-5 mr-2" />
          No-Code AI Integration
        </h3>
        <p className="text-neutral-600">
          Connect powerful AI tools without writing a single line of code. Use our step-by-step system to automate complex workflows.
        </p>
      </div>
      
      {/* Workflow diagram card */}
      <div className="bg-white rounded-xl shadow-md p-5">
        <h3 className="font-bold text-lg text-primary-dark mb-3 flex items-center">
          <Layers className="w-5 h-5 mr-2" /> 
          AI System Architecture
        </h3>
        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="bg-primary-dark text-white px-4 py-2 rounded-lg w-40 text-center mb-2">
              Input Trigger
            </div>
            <svg className="w-6 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <div className="bg-primary text-white px-4 py-2 rounded-lg w-40 text-center mb-2">
              ChatGPT
            </div>
            <svg className="w-6 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <div className="bg-primary-light text-white px-4 py-2 rounded-lg w-40 text-center mb-2">
              Perplexity
            </div>
            <svg className="w-6 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            <div className="bg-primary-dark text-white px-4 py-2 rounded-lg w-40 text-center">
              Output Action
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
