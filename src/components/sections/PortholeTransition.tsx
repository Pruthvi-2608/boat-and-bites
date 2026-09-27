import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const PortholeTransition: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Scale circular porthole mask smoothly on scroll
  const scale = useTransform(scrollYProgress, [0.45, 0.55], [0.8, 1.25]);

  return (
    <div className="w-full bg-[#101820] py-16 flex flex-col items-center justify-center text-center overflow-hidden relative select-none">
      <motion.div
        style={{ scale }}
        className="w-44 h-44 sm:w-64 sm:h-64 rounded-full border-4 border-[#D4AF37] shadow-2xl p-2 bg-[#FAF8F3] flex flex-col items-center justify-center relative z-10"
      >
        <div className="absolute inset-1 rounded-full border border-amber-400/40 pointer-events-none" />
        <img src="/logo.png" alt="Boat & Bites" className="w-16 h-16 object-contain mb-1" />
        <span className="font-serif text-sm font-medium text-[#101820] uppercase tracking-wider">
          UNLIMITED MENU
        </span>
        <span className="font-mono text-[8px] text-[#F0822A] tracking-widest uppercase">
          SWIPE &amp; OPEN
        </span>
      </motion.div>
    </div>
  );
};
