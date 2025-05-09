import { 
  Info, 
  Quote, 
  Code, 
  Layers, 
  BrainCircuit
} from "lucide-react";

// Module 1
export const module1Data = {
  title: "AI Fundamentals & Tools",
  duration: "30 minutes",
  description: "Learn the core concepts of AI, ML, tokens, embeddings, and APIs",
  learningPoints: [
    "Understanding AI vs. ML vs. DL: The key differences and how they work together",
    "Tokens & Embeddings: How AI processes and understands text",
    "API Keys: Secure access to AI models and best practices for usage",
    "Closed vs. Open Models: When to use each type for your specific needs"
  ],
  pdfResources: [
    { title: "AI Fundamentals Cheat-Sheet", filename: "AI_Fundamentals_CheatSheet.pdf", size: "24KB" },
    { title: "Gemini API Key Lab Guide", filename: "Module 1_Gemini API Key_Lab.pdf", size: "107KB" },
    { title: "Module 1 Quiz", filename: "LO1_Quiz_Questions.pdf", size: "65KB" },
    { title: "Reflection Journal", filename: "LO1_Reflection_Journal.pdf", size: "15KB" }
  ],
  videoTitle: "Module 1 - AI Fundamentals & Tools",
  videoEmbedId: "", // Will be populated with actual YouTube ID when available
  imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
  sideContent: (
    <>
      {/* Feature highlight card */}
      <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-primary">
        <h3 className="font-bold text-lg text-primary-dark mb-2 flex items-center">
          <BrainCircuit className="w-5 h-5 mr-2" />
          Understanding AI Fundamentals
        </h3>
        <p className="text-neutral-600">
          Learn the core concepts like tokens, embeddings, parameters, and APIs that power AI systems and how they work together.
        </p>
      </div>
      
      {/* Terminology card */}
      <div className="bg-primary-dark text-white rounded-xl shadow-md p-5">
        <h4 className="font-medium mb-3">Key AI Terminology</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="bg-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">T</span>
            <span><strong>Tokens:</strong> Chunks of text processed by AI. More tokens = more cost + longer outputs.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">E</span>
            <span><strong>Embeddings:</strong> Math-based meaning maps that help AI understand relationships.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-primary rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">A</span>
            <span><strong>APIs:</strong> Tools that let software talk to each other (like a digital waiter).</span>
          </li>
        </ul>
      </div>
    </>
  )
};

// Module 2
export const module2Data = {
  title: "Prompting & Hallucination Control",
  duration: "40 minutes",
  description: "Master the art of effective prompting with CRRC framework",
  learningPoints: [
    "CRRC Framework: Create clear, role-driven prompts with proper context and constraints",
    "Prompting Techniques: Use adjectives in roles, demand structure formats (JSON, Markdown, Tables)",
    "Visual AI Prompting: Learn how to describe subjects, settings, styles, and lighting effectively",
    "Hallucination Detection: Identify and mitigate AI-generated inaccuracies through grounding"
  ],
  pdfResources: [
    { title: "Prompting & Hallucination Control Cheat Sheet", filename: "AI_Prompting_CheatSheet_Redesign.pdf", size: "53KB" },
    { title: "Interactive Prompting Lab", filename: "Prompting_Lab_Exercise_Redesign.pdf", size: "82KB" },
    { title: "Module 2 Quiz", filename: "LO2_Quiz_Questions_Redesign.pdf", size: "66KB" },
    { title: "Reflection Journal", filename: "LO2_Reflection_Journal_Redesign.pdf", size: "25KB" }
  ],
  videoTitle: "Module 2 - Prompting & Hallucination Control",
  videoEmbedId: "", // Will be populated with actual YouTube ID when available
  imageUrl: "https://pixabay.com/get/gb475c532cd6c12d20bb1e68211cf47404429d1819e5e477d20a7a08d7272c2814da62718d989e76c6bfc8e93a1778694c560243ab1706e08f883b598c6adbba5_1280.jpg",
  sideContent: (
    <>
      {/* Feature highlight card */}
      <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-primary-light">
        <h3 className="font-bold text-lg text-primary-dark mb-2 flex items-center">
          <Info className="w-5 h-5 mr-2" />
          The CRRC Framework
        </h3>
        <p className="text-neutral-600">
          Our structured prompt framework that delivers precise, accurate results every time you interact with AI models.
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
        <p className="text-primary-light mb-1"># CRRC Framework</p>
        <p className="text-neutral-300 mb-1"><span className="text-white">C</span>: Clarity - Be specific about what you want</p>
        <p className="text-neutral-300 mb-1"><span className="text-white">R</span>: Role - Who should the AI act as</p>
        <p className="text-neutral-300 mb-1"><span className="text-white">R</span>: Context - Background to consider</p>
        <p className="text-neutral-300 mb-1"><span className="text-white">C</span>: Constraints - Output length, format, tone</p>
      </div>
    </>
  )
};

// Module 3
export const module3Data = {
  title: "Build Your First AI Flow",
  duration: "50 minutes",
  description: "Connect multiple AI tools into automated workflows using n8n",
  learningPoints: [
    "Core Concepts: Using n8n to connect AI tools into powerful automated flows",
    "Building Blocks: Nodes, triggers, credentials, and data flow in n8n",
    "Step-by-Step Lab: Create a research flow connecting Perplexity and ChatGPT",
    "Best Practices: Testing techniques, JSON structuring, and using output nodes"
  ],
  pdfResources: [
    { title: "AI Flow Builder Cheat Sheet", filename: "AI_Flow_Builder_CheatSheet.pdf", size: "33KB" },
    { title: "Interactive Lab Instructions", filename: "AI_Flow_Lab_Instructions.pdf", size: "155KB" },
    { title: "Module 3 Quiz", filename: "LO3_Quiz_Questions.pdf", size: "65KB" },
    { title: "Reflection Journal", filename: "LO3_Reflection_Journal.pdf", size: "25KB" }
  ],
  videoTitle: "Module 3 - Build Your First AI Flow",
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
