import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, Pause, Play } from 'lucide-react';
import { MEDIA_MANIFEST } from '../../data/mediaManifest';

const MENU_ITEMS = MEDIA_MANIFEST.filter((item) => item.category === 'menu');

export const MenuExperience: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isInViewport, setIsInViewport] = useState(true);

  const sectionRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // 1. IntersectionObserver to pause offscreen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. 5-second Autoplay timer
  useEffect(() => {
    if (!isInViewport || isPaused || isFullscreen) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MENU_ITEMS.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isInViewport, isPaused, isFullscreen]);

  // 3. Fullscreen Keyboard Navigation (Escape, Left Arrow, Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
      } else if (e.key === 'ArrowRight') {
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        prevPage();
      }
    };

    if (isFullscreen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isFullscreen]);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % MENU_ITEMS.length);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + MENU_ITEMS.length) % MENU_ITEMS.length);
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) nextPage();
      else prevPage();
    }
    touchStartX.current = null;
  };

  const activeMenu = MENU_ITEMS[currentIndex];

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="w-full bg-[#FAF8F3] text-[#171717] py-20 sm:py-28 px-3 sm:px-6 relative select-none"
    >
      <div className="max-w-5xl mx-auto space-y-8 flex flex-col items-center">
        
        {/* Editorial Section Header */}
        <div className="text-center space-y-2 max-w-lg mx-auto">
          <span className="font-mono text-xs text-[#F0822A] tracking-widest uppercase font-semibold">
            06 / UNLIMITED MENU EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#101820]">
            The Physical <span className="italic text-[#F0822A]">Menu</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6F6A63] font-light leading-relaxed">
            Authentic multi-cuisine selection. Autoplays every 5s — tap or hover to pause, or open fullscreen.
          </p>
        </div>

        {/* Physical Menu Card Stage */}
        <div
          className="relative w-full max-w-3xl aspect-[3/4] sm:aspect-[4/3] bg-white rounded-2xl shadow-2xl border-4 border-[#EEE8DC] p-2 sm:p-4 flex flex-col items-center justify-between cursor-pointer group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar Controls */}
          <div className="w-full flex items-center justify-between px-2 py-1 text-xs font-mono text-[#7C5A38] border-b border-stone-100 mb-2">
            <span className="uppercase tracking-wider font-semibold">
              PAGE {currentIndex + 1} OF {MENU_ITEMS.length}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPaused(!isPaused);
                }}
                className="hover:text-[#F0822A] flex items-center gap-1"
                title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
              >
                {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isPaused ? 'Paused' : 'Playing'}</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreen(true);
                }}
                className="hover:text-[#F0822A] flex items-center gap-1"
                title="Fullscreen Lightbox"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Menu Image Display (NO CROPPING - OBJECT CONTAIN) */}
          <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden bg-stone-50 rounded-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeMenu.id}
                src={activeMenu.src}
                alt={activeMenu.title}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-contain max-h-[550px]"
              />
            </AnimatePresence>
          </div>

          {/* Bottom Title & Prev/Next Nav Controls */}
          <div className="w-full flex items-center justify-between pt-3 px-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPage();
              }}
              className="p-2 rounded-full border border-stone-300 hover:bg-[#F0822A] hover:text-white hover:border-[#F0822A] transition-colors"
              aria-label="Previous Menu Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="font-serif text-sm sm:text-base font-medium text-[#101820] uppercase tracking-wide">
              {activeMenu.title}
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPage();
              }}
              className="p-2 rounded-full border border-stone-300 hover:bg-[#F0822A] hover:text-white hover:border-[#F0822A] transition-colors"
              aria-label="Next Menu Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5 pt-2">
            {MENU_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'w-6 bg-[#F0822A]' : 'w-2 bg-stone-300'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ═══ FULLSCREEN / LIGHTBOX VIEWER ═══ */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#101820]/98 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8 select-none"
          >
            {/* Top Control Bar */}
            <div className="w-full max-w-6xl flex items-center justify-between text-white border-b border-white/10 pb-4">
              <span className="font-serif text-lg font-light text-[#FAF8F3]">
                Boat &amp; Bites Menu — {activeMenu.title}
              </span>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#F0822A] transition-colors text-white"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Fullscreen Image (OBJECT CONTAIN, NO CROPPING) */}
            <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4 overflow-hidden">
              <img
                src={activeMenu.src}
                alt={activeMenu.title}
                className="w-full h-full object-contain max-h-[85vh]"
              />

              {/* Prev / Next Floating Arrows */}
              <button
                onClick={prevPage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#F0822A] text-white border border-white/20 transition-all"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextPage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#F0822A] text-white border border-white/20 transition-all"
                aria-label="Next Page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Pagination */}
            <div className="text-white/70 font-mono text-xs tracking-widest uppercase">
              PAGE {currentIndex + 1} OF {MENU_ITEMS.length} · PRESS ESCAPE TO CLOSE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
