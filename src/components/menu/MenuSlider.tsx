import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play, Sparkles } from 'lucide-react';
import { menuPages, MenuPageInfo } from '../../data/menuData';
import { MenuLightbox } from './MenuLightbox';
import { useInView } from '../../hooks/useInView';

export const MenuSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [containerRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  // 5-second interval timer
  const AUTOPLAY_INTERVAL = 5000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % menuPages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + menuPages.length) % menuPages.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Manage Autoplay Timer: pauses on hover, pauses off-screen, pauses if user toggles pause
  useEffect(() => {
    const shouldPlay = isInView && !isHovered && !isPausedByUser && !isLightboxOpen;

    if (shouldPlay) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, AUTOPLAY_INTERVAL);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isInView, isHovered, isPausedByUser, isLightboxOpen, nextSlide]);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 45) {
      // Swiped Left -> advance
      nextSlide();
    } else if (diff < -45) {
      // Swiped Right -> previous
      prevSlide();
    }
    setTouchStart(null);
  };

  const current = menuPages[currentIndex];

  return (
    <div
      ref={containerRef}
      className="relative max-w-6xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category header indicator */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 px-2">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-sans font-bold tracking-widest text-brand-orange">
                Card {String(currentIndex + 1).padStart(2, '0')} / {String(menuPages.length).padStart(2, '0')}
              </span>
              <span className="text-brand-muted text-xs">•</span>
              <span className="text-xs font-sans text-brand-muted">
                {current.gujaratiTitle}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-ink font-medium leading-tight">
              {current.title}
            </h3>
          </div>
        </div>

        {/* Autoplay status badge & Fullscreen Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPausedByUser(!isPausedByUser)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-sand/60 hover:bg-brand-sand text-xs font-sans font-medium text-brand-text transition-colors"
            title={isPausedByUser ? 'Resume autoplay (5s)' : 'Pause autoplay'}
          >
            {isPausedByUser ? (
              <>
                <Play className="w-3.5 h-3.5 text-brand-orange" />
                <span>Resume 5s</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-brand-muted" />
                <span>Auto (5s)</span>
              </>
            )}
          </button>

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-brand-orange text-white text-xs font-sans font-semibold uppercase tracking-wider hover:bg-brand-orange-dark transition-colors shadow-sm"
            aria-label="View menu in fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Fullscreen</span>
          </button>
        </div>
      </div>

      {/* Main Premium Carousel Display Frame */}
      <div
        className="relative bg-white rounded-3xl border border-brand-border/80 shadow-2xl p-4 sm:p-8 md:p-10 overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous Navigation Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-brand-ink/70 hover:bg-brand-orange text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none"
          aria-label="Previous menu image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Next Navigation Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-brand-ink/70 hover:bg-brand-orange text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none"
          aria-label="Next menu image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Canvas with object-contain */}
        <div
          className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px] flex items-center justify-center cursor-pointer group"
          onClick={() => setIsLightboxOpen(true)}
          title="Click to view full screen"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.image}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={current.image}
                alt={`${current.title} - Boat & Bites Cruise Shaped Menu`}
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle click to zoom hover hint */}
          <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/60 text-white text-[11px] font-sans font-medium backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
            <Maximize2 className="w-3 h-3 text-brand-orange" />
            <span>Click to zoom</span>
          </div>
        </div>

        {/* Featured Dish Highlights under the slide */}
        <div className="mt-6 pt-5 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-brand-ink uppercase tracking-wider">
              Popular in this section:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {current.featuredDishes.map((dish) => (
                <span
                  key={dish}
                  className="px-2.5 py-0.5 rounded-full bg-brand-sand/50 text-brand-text font-medium"
                >
                  {dish}
                </span>
              ))}
            </div>
          </div>

          <span className="text-brand-muted">
            {current.itemCount} Authentic Items Listed
          </span>
        </div>
      </div>

      {/* Pagination Indicators & Quick Jump Bar */}
      <div className="mt-8 flex flex-col items-center gap-4">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {menuPages.map((page, idx) => (
            <button
              key={page.id}
              onClick={() => goToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-brand-orange shadow-sm'
                  : 'w-2.5 bg-brand-border hover:bg-brand-muted/40'
              }`}
              aria-label={`Go to menu page ${idx + 1}: ${page.title}`}
            />
          ))}
        </div>

        {/* Horizontal Category Switcher Chips */}
        <div className="w-full overflow-x-auto pb-2 scrollbar-none flex items-center justify-start sm:justify-center gap-2 px-2">
          {menuPages.map((page, idx) => (
            <button
              key={page.id}
              onClick={() => goToSlide(idx)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
                currentIndex === idx
                  ? 'bg-brand-ink text-white shadow-sm'
                  : 'bg-white border border-brand-border text-brand-muted hover:border-brand-orange hover:text-brand-orange'
              }`}
            >
              {page.title.split('&')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <MenuLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        pages={menuPages}
        currentIndex={currentIndex}
        onSelectIndex={goToSlide}
      />
    </div>
  );
};
