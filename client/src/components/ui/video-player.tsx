import { useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  title: string;
  embedId?: string;
}

export function VideoPlayer({ title, embedId }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // This would normally load the actual video player with embedId
  const handlePlay = () => {
    setIsPlaying(true);
    console.log(`Playing video: ${title}`);
  };

  if (isPlaying && embedId) {
    return (
      <div className="relative w-full h-full">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-neutral-800 rounded-lg h-80 relative group">
      {/* Video thumbnail - in production, this would be a real thumbnail */}
      <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
        {/* For each module, we would use a different background image */}
        <div className="text-center">
          <button
            onClick={handlePlay}
            className="bg-primary/80 text-white rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-primary transition-all group-hover:scale-110 duration-300 mb-4"
          >
            <Play className="h-8 w-8 fill-current" />
          </button>
          <p className="text-neutral-300 font-medium">{title}</p>
        </div>
      </div>
    </div>
  );
}
