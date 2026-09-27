import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FirstLoadChoreographyProps {
  onComplete: () => void;
}

export const FirstLoadChoreography: React.FC<FirstLoadChoreographyProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // 0.4s: wave line draw
    const t1 = setTimeout(() => setStage(1), 400);
    // 1.2s: logo settle
    const t2 = setTimeout(() => setStage(2), 1200);
    // 2.4s: reveal hero & complete
    const t3 = setTimeout(() => {
      setStage(3);
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-[#101820] flex flex-col items-center justify-center p-6 text-center select-none"
        >
          {/* Central Logo Reveal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#D4AF37] p-2 shadow-2xl flex items-center justify-center mb-6"
          >
            <img src="/logo.png" alt="Boat & Bites" className="w-full h-full object-contain" />
          </motion.div>

          {/* Animated Wave Path Draw */}
          <svg className="w-48 h-6 mb-4" viewBox="0 0 200 20">
            <motion.path
              d="M 0,10 Q 50,0 100,10 T 200,10"
              fill="none"
              stroke="#F0822A"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </svg>

          {/* Editorial Tagline Beat */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 10 }}
            transition={{ duration: 0.5 }}
            className="font-serif text-2xl sm:text-3xl text-[#FAF8F3] tracking-wide font-light"
          >
            DINNER HAS A DECK.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: stage >= 2 ? 0.7 : 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-[10px] text-[#F0822A] tracking-widest uppercase mt-2"
          >
            GUJARAT'S FIRST CRUISE THEME RESTAURANT · SURAT
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
