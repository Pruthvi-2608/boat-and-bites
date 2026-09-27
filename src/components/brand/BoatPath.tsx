import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const BoatPath: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Boat travels horizontally across the bottom as user scrolls
  const boatX = useTransform(scrollYProgress, [0, 1], ["2%", "94%"]);

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 pointer-events-none hidden md:block">
      <div className="max-w-6xl mx-auto relative px-6 h-6 flex items-center">
        {/* Subtle Wave Track */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#F0822A]/25 to-transparent" />
        
        {/* Animated Boat Silhouette Mark */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 text-[#F0822A]"
          style={{ left: boatX }}
        >
          <svg className="w-5 h-5 filter drop-shadow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 17h16l-2-6H6l-2 6zm2-8h12l-1-3H7l-1 3z" opacity="0.85" />
            <path d="M2 19h20v2H2z" fill="#3C3181" opacity="0.4" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};
