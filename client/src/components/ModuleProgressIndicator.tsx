import { CheckCircle, Clock } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";
import { Progress } from "@/components/ui/progress";

interface ModuleProgressIndicatorProps {
  moduleId: string;
  compact?: boolean;
}

export function ModuleProgressIndicator({ moduleId, compact = false }: ModuleProgressIndicatorProps) {
  const { getModuleProgress } = useProgress();
  const moduleProgress = getModuleProgress(moduleId);
  
  if (!moduleProgress) {
    return (
      <div className={`flex items-center ${compact ? 'text-xs' : 'text-sm'} text-gray-500`}>
        <Clock className={`${compact ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
        <span>Not started</span>
      </div>
    );
  }
  
  const calculateProgress = (): number => {
    let total = 2; // Video and quiz
    let completed = 0;
    
    if (moduleProgress.videoWatched) completed++;
    if (moduleProgress.quizCompleted) completed++;
    
    return Math.round((completed / total) * 100);
  };
  
  const progressPercentage = calculateProgress();
  
  if (moduleProgress.completed) {
    return (
      <div className={`flex items-center ${compact ? 'text-xs' : 'text-sm'} text-green-600`}>
        <CheckCircle className={`${compact ? 'h-3 w-3' : 'h-4 w-4'} mr-1`} />
        <span>Completed</span>
      </div>
    );
  }
  
  return (
    <div className={`space-y-1 ${compact ? 'w-24' : 'w-32'}`}>
      <div className="flex justify-between items-center">
        <span className={`${compact ? 'text-xs' : 'text-sm'} text-gray-600`}>In progress</span>
        <span className={`${compact ? 'text-xs' : 'text-sm'} font-medium text-gray-700`}>{progressPercentage}%</span>
      </div>
      <Progress value={progressPercentage} className="h-1.5" />
    </div>
  );
}