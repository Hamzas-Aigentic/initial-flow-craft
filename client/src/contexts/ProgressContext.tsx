
import { createContext, useContext, ReactNode } from 'react';

interface ProgressContextType {
  progress: {};
  updateProgress: () => void;
  getOverallProgress: () => number;
  getModuleProgress: (moduleId: string) => any;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const value = {
    progress: {},
    updateProgress: () => {},
    getOverallProgress: () => 0,
    getModuleProgress: (moduleId: string) => null,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
