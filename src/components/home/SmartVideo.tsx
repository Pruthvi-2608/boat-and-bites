import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, Eye, Heart, ExternalLink } from 'lucide-react';
import { InstagramReel } from '../../types';

interface SmartVideoProps {
  reel: InstagramReel;
  onOpenModal?: (reel: InstagramReel) => void;
}

export const SmartVideo: React.FC<SmartVideoProps> = ({ reel, onOpenModal }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          video.play().then(() => setIsPlaying(true)).catch(() => {
            // Autoplay policies
          });
        } else if (entry.intersectionRatio < 0.2) {
          video.pause();
          setIsPlaying(false);
        }
      },
      {
        threshold: [0.1, 0.45, 0.8]
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      ref={containerRef}
      className="bg-brand-ink rounded-2xl overflow-hidden border border-brand-border/60 shadow-md group relative flex flex-col justify-between"
    >
      {/* Video Container (9:16 vertical reel aspect) */}
      <div
        className="relative w-full aspect-[9/15] overflow-hidden bg-black cursor-pointer"
        onClick={() => onOpenModal && onOpenModal(reel)}
      >
        <video
          ref={videoRef}
          src={reel.videoUrl}
          poster={reel.displayUrl}
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Audio Mute/Unmute Overlay button */}
        <button
          onClick={toggleAudio}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors z-20"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-orange" />}
        </button>

        {/* Views badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-sans flex items-center gap-1.5 z-20">
          <Eye className="w-3.5 h-3.5 text-brand-orange" />
          <span>{reel.views.toLocaleString()}</span>
        </div>

        {/* Gradient shadow at bottom of video */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Caption & Metadata Footer */}
      <div className="p-4 bg-brand-ink text-white flex flex-col justify-between flex-1">
        <p className="font-sans text-xs text-white/90 line-clamp-2 leading-relaxed mb-3">
          {reel.caption}
        </p>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-sans text-white/60">
          {reel.likes > 0 && (
            <span className="flex items-center gap-1 text-white/80">
              <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400/40" />
              <span>{reel.likes.toLocaleString()} likes</span>
            </span>
          )}

          <a
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-brand-orange hover:underline ml-auto font-medium"
          >
            <span>Instagram</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
