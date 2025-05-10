import { useProgress } from "@/contexts/ProgressContext";
import { Progress } from "@/components/ui/progress";
import { Award } from "lucide-react";

interface CourseProgressBarProps {
  className?: string;
}

export function CourseProgressBar({ className = "" }: CourseProgressBarProps) {
  const { getOverallProgress } = useProgress();
  const progressPercentage = getOverallProgress();
  const isCompleted = progressPercentage === 100;
  
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-700">Course Progress</h3>
        <div className="flex items-center">
          {isCompleted ? (
            <Award className="h-4 w-4 text-yellow-500 mr-1" />
          ) : null}
          <span className="text-sm font-semibold">{progressPercentage}%</span>
        </div>
      </div>
      <Progress 
        value={progressPercentage} 
        className={`h-2 ${isCompleted ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : ''}`} 
      />
      
      {isCompleted ? (
        <div className="text-center text-sm text-green-600 font-medium pt-1">
          Congratulations! You've completed the course.
        </div>
      ) : (
        <div className="text-xs text-gray-500 pt-1">
          Complete all modules to earn your certificate
        </div>
      )}
    </div>
  );
}