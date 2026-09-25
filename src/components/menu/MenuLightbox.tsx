import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { MenuPageInfo } from '../../data/menuData';

interface MenuLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  pages: MenuPageInfo[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const MenuLightbox: React.FC<MenuLightboxProps> = ({
  isOpen,
  onClose,
  pages,
  currentIndex,
  onSelectIndex
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const currentPage = pages[currentIndex];

  // Reset zoom on slide change or close
  useEffect(() => {
    setZoomLevel(1);
  }, [currentIndex, isOpen]);

  // Keyboard navigation & Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + pages.length) % pages.length);
      }
      if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % pages.length);
      }
      if (e.key === '+' || e.key === '=') {
        setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
      }
      if (e.key === '-') {
        setZoomLevel((prev) => Math.max(prev - 0.3, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, pages.length, onClose, onSelectIndex]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      // Swiped left -> next
      onSelectIndex((currentIndex + 1) % pages.length);
    } else if (diff < -50) {
      // Swiped right -> prev
      onSelectIndex((currentIndex - 1 + pages.length) % pages.length);
    }
    setTouchStart(null);
  };

  return (
    <AnimatePresence>
      {isOpen && currentPage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#0B1015]/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-6"
          onClick={onClose}
        >
          {/* Top Bar with info and controls */}
          <div
            className="flex items-center justify-between text-white pb-3 border-b border-white/10 z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-brand-orange">
                  Page {currentIndex + 1} of {pages.length}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-xs font-sans text-brand-sand">
                  {currentPage.gujaratiTitle}
                </span>
              </div>
              <h2 className="font-serif text-lg md:text-2xl text-white font-medium">
                {currentPage.title}
              </h2>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 0.3, 2.5))}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Zoom In (+)"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 0.3, 1))}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Zoom Out (-)"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              {zoomLevel > 1 && (
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Reset Zoom"
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white transition-colors ml-2"
                aria-label="Close fullscreen menu viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Visual Image Display with object-contain */}
          <div
            className="flex-1 relative flex items-center justify-center overflow-auto my-2 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={() => onSelectIndex((currentIndex - 1 + pages.length) % pages.length)}
              className="absolute left-2 md:left-6 z-30 p-3 rounded-full bg-white/10 hover:bg-brand-orange text-white transition-all shadow-lg backdrop-blur-md"
              aria-label="Previous menu page"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={() => onSelectIndex((currentIndex + 1) % pages.length)}
              className="absolute right-2 md:right-6 z-30 p-3 rounded-full bg-white/10 hover:bg-brand-orange text-white transition-all shadow-lg backdrop-blur-md"
              aria-label="Next menu page"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <motion.div
              key={currentPage.image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: zoomLevel }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex items-center justify-center p-2"
            >
              <img
                src={currentPage.image}
                alt={`${currentPage.title} - Boat & Bites Menu Page`}
                className="max-h-[80vh] w-auto max-w-full object-contain drop-shadow-2xl select-none"
              />
            </motion.div>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div
            className="flex items-center justify-center gap-2 py-2 overflow-x-auto z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {pages.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => onSelectIndex(idx)}
                className={`relative shrink-0 w-12 h-8 md:w-16 md:h-10 rounded border transition-all ${
                  currentIndex === idx
                    ? 'border-brand-orange scale-110 shadow-md ring-2 ring-brand-orange/40'
                    : 'border-white/20 opacity-50 hover:opacity-90'
                }`}
              >
                <img
                  src={p.image}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-contain bg-black/40 rounded"
                />
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
