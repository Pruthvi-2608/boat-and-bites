import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedWave } from './AnimatedWave';

interface SplashScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onComplete,
  minDuration = 1800
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-ink text-white select-none pointer-events-auto"
          onClick={() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-radial from-brand-orange/10 via-transparent to-transparent pointer-events-none" />

          {/* Logo with entrance animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-24 h-24 md:w-28 md:h-28 mb-6 flex items-center justify-center"
          >
            {/* Pulsing ring expanding outside the badge */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-1.5 rounded-full border-2 border-brand-orange pointer-events-none"
            />

            {/* Circular badge - perfectly rounded with overflow-hidden to eliminate any corner protrusion */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white p-2.5 shadow-2xl flex items-center justify-center border-2 border-brand-orange/40">
              <img
                src="/logo.png"
                alt="Boat & Bites Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white mb-2"
          >
            BOAT & BITES
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xs md:text-sm uppercase font-sans tracking-[0.25em] text-brand-orange font-semibold mb-6"
          >
            Gujarat's First Cruise Theme Restaurant • Surat
          </motion.p>

          {/* Animated Wave from Logo */}
          <motion.div
            initial={{ opacity: 0, width: '40px' }}
            animate={{ opacity: 1, width: '180px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-44 mb-6"
          >
            <AnimatedWave variant="vibrant" height={20} />
          </motion.div>

          {/* Loading Progress Bar */}
          <div className="w-36 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1/2 h-full bg-gradient-to-r from-brand-orange to-brand-wave-purple rounded-full"
            />
          </div>

          <p className="absolute bottom-8 text-[11px] font-sans text-brand-sand/50 tracking-wider">
            Click anywhere to enter
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
