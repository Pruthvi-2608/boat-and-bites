import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Eye, Heart, ExternalLink, X } from 'lucide-react';
import { viralReels } from '../../data/instagramMedia';
import { InstagramReel } from '../../types';

export const Logbook: React.FC = () => {
  const [selectedReel, setSelectedReel] = useState<InstagramReel | null>(null);

  return (
    <section id="logbook" className="w-full bg-[#101820] text-[#FAF8F3] py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden select-none">
      
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#F0822A] tracking-widest uppercase font-semibold">
              07 / SOCIAL LOGBOOK
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FAF8F3]">
              The Vessel <span className="italic text-[#F0822A]">Logbook</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#FAF8F3]/70 font-light max-w-sm">
            Authentic guest moments, viral Reels, and stories shared directly from our Surat deck.
          </p>
        </div>

        {/* Horizontal Editorial Reel Rail */}
        <div className="flex items-center gap-6 overflow-x-auto pb-6 scrollbar-none snap-x cursor-grab active:cursor-grabbing">
          {viralReels.map((reel) => (
            <motion.div
              key={reel.id}
              onClick={() => setSelectedReel(reel)}
              whileHover={{ y: -6 }}
              className="w-[260px] sm:w-[300px] shrink-0 bg-stone-900 rounded-2xl overflow-hidden border border-white/10 shadow-xl flex flex-col justify-between cursor-pointer group snap-start"
            >
              {/* Media Thumbnail */}
              <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
                <img
                  src={reel.displayUrl}
                  alt={reel.caption || "Boat & Bites Instagram Reel"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Stats Overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-white">
                  <Eye className="w-3 h-3 text-[#F0822A]" />
                  <span>{(reel.views / 1000).toFixed(0)}k</span>
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-[#F0822A] text-white px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold uppercase tracking-wider">
                  <Instagram className="w-3 h-3" />
                  <span>IG / {reel.timestamp || '2026'}</span>
                </div>
              </div>

              {/* Caption Excerpt */}
              <div className="p-4 space-y-2 bg-[#19222D]">
                <p className="font-sans text-xs text-[#FAF8F3]/80 font-light line-clamp-2 leading-relaxed">
                  {reel.caption}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-[#F0822A]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current" />
                    {reel.likes} Likes
                  </span>
                  <span className="inline-flex items-center gap-1 hover:underline">
                    View Post <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Reel Video Lightbox Modal */}
      <AnimatePresence>
        {selectedReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedReel(null)}
          >
            <div
              className="relative max-w-md w-full bg-[#101820] rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedReel(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white z-20 hover:bg-[#F0822A]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[9/16] w-full rounded-xl overflow-hidden bg-black mb-4">
                <video
                  src={selectedReel.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="font-sans text-xs text-[#FAF8F3]/90 leading-relaxed">
                {selectedReel.caption}
              </p>

              <a
                href={selectedReel.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 w-full text-center bg-[#F0822A] text-white py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold inline-flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Open On Instagram</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
