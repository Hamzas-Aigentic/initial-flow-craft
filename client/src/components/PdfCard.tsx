import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface PdfCardProps {
  title: string;
  filename: string;
  fileSize: string;
  compact?: boolean;
}

export function PdfCard({ title, filename, fileSize, compact = false }: PdfCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
      
      toast({
        title: "Resource Downloaded",
        description: `${title} has been downloaded successfully.`,
      });
    }, 1500);
  };

  if (compact) {
    return (
      <div 
        onClick={handleDownload}
        className="pdf-card flex items-center p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition duration-300 cursor-pointer"
      >
        <div className="mr-3 text-primary">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <p className="font-medium text-neutral-800">{title}</p>
        </div>
        <div className="ml-auto download-icon transition-all duration-300">
          {isDownloading ? (
            <div className="h-5 w-5 border-2 border-primary border-r-transparent rounded-full animate-spin"></div>
          ) : (
            <Download className="w-5 h-5 text-primary" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="pdf-card flex items-center p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition duration-300">
      <div className="mr-3 text-primary">
        <FileText className="w-8 h-8" />
      </div>
      <div>
        <p className="font-medium text-neutral-800">{title}</p>
        <p className="text-sm text-neutral-500">PDF, {fileSize}</p>
      </div>
      <div className="ml-auto download-icon transition-all duration-300">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleDownload}
          disabled={isDownloading}
        >
          {isDownloading ? (
            <div className="h-5 w-5 border-2 border-primary border-r-transparent rounded-full animate-spin"></div>
          ) : (
            <Download className="w-5 h-5 text-primary" />
          )}
        </Button>
      </div>
    </div>
  );
}
