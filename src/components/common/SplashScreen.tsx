import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export function SplashScreen({ onComplete, minDuration = 2800 }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    const fillInterval = setInterval(() => {
      setFillProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fillInterval);
          return 100;
        }
        return prev + 2.5;
      });
    }, 35);

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, minDuration);

    return () => {
      clearInterval(fillInterval);
      clearTimeout(timer);
    };
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF4F3] text-[#101820] overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          {/* Ambient Radial Soft Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(240, 130, 42, 0.15) 0%, rgba(43, 38, 109, 0.08) 50%, rgba(250, 244, 243, 1) 100%)',
            }}
          />

          {/* Centered Original Logo with Rising Liquid Wave Animation */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            
            {/* SVG Logo Container */}
            <div className="relative w-44 h-44 md:w-52 md:h-52 aspect-square mb-4 filter drop-shadow-md">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <defs>
                  {/* Sunset Liquid Fill Gradient */}
                  <linearGradient id="splashOgLiquidGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#2B266D" />
                    <stop offset="50%" stopColor="#804456" />
                    <stop offset="100%" stopColor="#F0822A" />
                  </linearGradient>

                  <radialGradient id="splashOgBg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#FAF4F3" />
                  </radialGradient>

                  {/* Logo Clip Path */}
                  <clipPath id="splashOgClip">
                    <path d="M 94 44 L 94 116 L 48 116 Z" />
                    <path d="M 104 36 L 104 116 L 150 116 Z" />
                    <path d="M 36 118 C 65 114, 85 122, 100 118 C 115 114, 135 122, 164 118 C 170 118, 174 135, 156 152 C 142 165, 122 168, 100 168 C 78 168, 58 165, 44 152 C 26 135, 30 118, 36 118 Z" />
                  </clipPath>
                </defs>

                {/* Outer Stitched Circle */}
                <circle cx="100" cy="100" r="95" fill="url(#splashOgBg)" />
                <circle cx="100" cy="100" r="91" stroke="#D4D4D8" strokeWidth="1.5" strokeDasharray="4 3" />
                <circle cx="100" cy="100" r="86" stroke="#F0822A" strokeWidth="0.8" opacity="0.3" />

                {/* Base Faint Logo Outline */}
                <g opacity="0.15">
                  <path d="M 94 44 L 94 116 L 48 116 Z" fill="#F0822A" />
                  <path d="M 104 36 L 104 116 L 150 116 Z" fill="#F0822A" />
                  <path d="M 36 118 C 65 114, 85 122, 100 118 C 115 114, 135 122, 164 118 C 170 118, 174 135, 156 152 C 142 165, 122 168, 100 168 C 78 168, 58 165, 44 152 L 36 118 Z" fill="#2B266D" />
                </g>

                {/* Rising Liquid Wave Fill Animation */}
                <g clipPath="url(#splashOgClip)">
                  <rect
                    x="0"
                    y={180 - (fillProgress / 100) * 150}
                    width="200"
                    height="180"
                    fill="url(#splashOgLiquidGrad)"
                    className="transition-all duration-100 ease-out"
                  />
                </g>
              </svg>
            </div>

            {/* Typography Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center flex flex-col items-center"
            >
              <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-[0.25em] text-[#101820] uppercase">
                BOAT &amp; BITES
              </h1>
              <p className="font-sans text-xs font-semibold tracking-[0.2em] text-[#F0822A] uppercase mt-1">
                WATERFRONT DINING &#8226; SURAT
              </p>
              
              {/* Gradient Bar (Image 3) */}
              <div className="w-28 h-1 rounded-full bg-gradient-to-r from-[#2B266D] via-[#F0822A] to-[#2B266D] mt-2" />
            </motion.div>
          </div>

          {/* Bottom Progress Indicator */}
          <div className="w-40 h-1 bg-[#101820]/10 rounded-full overflow-hidden mt-8 z-10">
            <div
              className="h-full bg-gradient-to-r from-[#2B266D] via-[#F0822A] to-[#F0822A] transition-all duration-150 ease-out"
              style={{ width: `${fillProgress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;
