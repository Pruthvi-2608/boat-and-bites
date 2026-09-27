import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DayNight: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage

  return (
    <section className="w-full bg-[#FAF8F3] text-[#171717] py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden select-none">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        
        <div className="space-y-2 max-w-lg mx-auto">
          <span className="font-mono text-xs text-[#F0822A] tracking-widest uppercase font-semibold">
            03 / ATMOSPHERE TRANSFORMATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#101820]">
            The Same Boat. <span className="italic text-[#F0822A]">Two Moods.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6F6A63] font-light">
            Slide to compare daytime deck dining with our illuminated night waterfront atmosphere.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative w-full max-w-4xl h-[320px] sm:h-[450px] mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#EEE8DC] cursor-ew-resize">
          
          {/* Night Image (Background) */}
          <img
            src="/cruise-sketch-detailed.png"
            alt="Boat & Bites Night View"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 font-mono text-[10px] text-white bg-black/60 px-3 py-1 rounded-full uppercase tracking-wider">
            NIGHT ATMOSPHERE
          </div>

          {/* Day Image (Clipped Foreground) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/cruise-sketch.jpg"
              alt="Boat & Bites Day View"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: '100%', maxWidth: 'none' }}
            />
            <div className="absolute top-4 left-4 font-mono text-[10px] text-white bg-black/60 px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
              DAYTIME DECK
            </div>
          </div>

          {/* Vertical Divider Handle */}
          <div
            className="absolute inset-y-0 w-1 bg-[#F0822A] shadow-2xl flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-[#F0822A] text-white flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white">
              ↔
            </div>
          </div>

          {/* HTML Range Input Overlay for Drag / Touch Support */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
          />
        </div>

      </div>
    </section>
  );
};
