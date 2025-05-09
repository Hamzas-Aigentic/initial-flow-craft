import { useState } from "react";
import { Play } from "lucide-react";
import { getYouTubeThumbnailUrl } from "@/lib/utils";

interface VideoPlayerProps {
  title: string;
  embedId?: string;
}

export function VideoPlayer({ title, embedId }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    console.log(`Playing video: ${title}`);
  };

  if (isPlaying && embedId) {
    return (
      <div className="relative w-full pt-[56.25%]">
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
    <div className="relative w-full pt-[56.25%] bg-neutral-800 rounded-lg overflow-hidden group">
      {embedId ? (
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ backgroundImage: `url(${getYouTubeThumbnailUrl(embedId)})` }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="text-center">
              <button
                onClick={handlePlay}
                className="bg-primary/80 text-white rounded-full w-20 h-20 flex items-center justify-center group-hover:bg-primary transition-all group-hover:scale-110 duration-300 mb-4"
                aria-label="Play video"
              >
                <Play className="h-8 w-8 fill-current" />
              </button>
              <p className="text-white font-medium text-lg drop-shadow-md">{title}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
          <div className="text-center">
            <p className="text-neutral-300 font-medium">Video coming soon</p>
          </div>
        </div>
      )}
    </div>
  );
}
