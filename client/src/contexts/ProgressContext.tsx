import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ModuleProgress, UserProgress } from "@shared/schema";
import { useLocalStorage } from "@/hooks/useLocalStorage";

// Define interface for the context
interface ProgressContextType {
  progress: UserProgress | null;
  isLoading: boolean;
  updateModuleProgress: (moduleId: string, data: Partial<ModuleProgress>) => void;
  markModuleCompleted: (moduleId: string) => void;
  markVideoWatched: (moduleId: string) => void;
  markResourceDownloaded: (moduleId: string, resourceId: string) => void;
  markQuizCompleted: (moduleId: string) => void;
  getModuleProgress: (moduleId: string) => ModuleProgress | undefined;
  getOverallProgress: () => number;
}

// Create the context
const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// Initial empty progress state
const initialProgress: UserProgress = {
  userId: 1, // Since we're using local storage, we'll just use 1 as a placeholder
  modules: {},
  overallProgress: 0,
  lastUpdatedAt: new Date()
};

// Interface for ProgressProvider props
interface ProgressProviderProps {
  children: ReactNode;
}

// Provider component
export function ProgressProvider({ children }: ProgressProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useLocalStorage<UserProgress>("course_progress", initialProgress);

  // Initialize progress data
  useEffect(() => {
    // In a real app, we would fetch the user's progress from an API
    // For now, we'll use the progress from local storage
    setIsLoading(false);
  }, []);

  // Calculate the overall progress percentage
  const calculateOverallProgress = (modules: Record<string, ModuleProgress>): number => {
    const moduleIds = Object.keys(modules);
    if (moduleIds.length === 0) return 0;

    const completedModules = moduleIds.filter(id => modules[id].completed).length;
    return Math.round((completedModules / moduleIds.length) * 100);
  };

  // Update a module's progress
  const updateModuleProgress = (moduleId: string, data: Partial<ModuleProgress>) => {
    setProgress((prev) => {
      const moduleProgress = prev.modules[moduleId] || {
        moduleId,
        completed: false,
        lastAccessedAt: new Date(),
        videoWatched: false,
        resourcesDownloaded: [],
        quizCompleted: false
      };

      const updatedModuleProgress = {
        ...moduleProgress,
        ...data,
        lastAccessedAt: new Date()
      };

      // Automatically mark as completed if all components are done
      const isModuleCompleted = 
        updatedModuleProgress.videoWatched && 
        updatedModuleProgress.quizCompleted;

      const updatedModules = {
        ...prev.modules,
        [moduleId]: {
          ...updatedModuleProgress,
          completed: isModuleCompleted
        }
      };

      return {
        ...prev,
        modules: updatedModules,
        overallProgress: calculateOverallProgress(updatedModules),
        lastUpdatedAt: new Date()
      };
    });
  };

  // Mark a module as completed
  const markModuleCompleted = (moduleId: string) => {
    updateModuleProgress(moduleId, { completed: true });
  };

  // Mark a video as watched
  const markVideoWatched = (moduleId: string) => {
    updateModuleProgress(moduleId, { videoWatched: true });
  };

  // Mark a resource as downloaded
  const markResourceDownloaded = (moduleId: string, resourceId: string) => {
    setProgress((prev) => {
      const moduleProgress = prev.modules[moduleId] || {
        moduleId,
        completed: false,
        lastAccessedAt: new Date(),
        videoWatched: false,
        resourcesDownloaded: [],
        quizCompleted: false
      };

      // Only add the resource if it's not already in the list
      const resourcesDownloaded = moduleProgress.resourcesDownloaded.includes(resourceId)
        ? moduleProgress.resourcesDownloaded
        : [...moduleProgress.resourcesDownloaded, resourceId];

      return {
        ...prev,
        modules: {
          ...prev.modules,
          [moduleId]: {
            ...moduleProgress,
            resourcesDownloaded,
            lastAccessedAt: new Date()
          }
        },
        lastUpdatedAt: new Date()
      };
    });
  };

  // Mark a quiz as completed
  const markQuizCompleted = (moduleId: string) => {
    updateModuleProgress(moduleId, { quizCompleted: true });
  };

  // Get a module's progress
  const getModuleProgress = (moduleId: string): ModuleProgress | undefined => {
    return progress?.modules[moduleId];
  };

  // Get overall progress
  const getOverallProgress = (): number => {
    return progress?.overallProgress || 0;
  };

  // Context value
  const value = {
    progress,
    isLoading,
    updateModuleProgress,
    markModuleCompleted,
    markVideoWatched,
    markResourceDownloaded,
    markQuizCompleted,
    getModuleProgress,
    getOverallProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

// Custom hook to use the progress context
export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}