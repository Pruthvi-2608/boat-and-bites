import React from 'react';
import { motion } from 'framer-motion';

export const Atmosphere: React.FC = () => {
  return (
    <section id="atmosphere" className="w-full bg-[#101820] text-[#FAF8F3] py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden select-none">
      
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Editorial Section Header */}
        <div className="space-y-2 text-left max-w-lg">
          <span className="font-mono text-xs text-[#F0822A] tracking-widest uppercase font-semibold">
            04 / ATMOSPHERE &amp; DECK VIBES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FAF8F3]">
            Moments On <span className="italic text-[#F0822A]">The Water</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#FAF8F3]/70 font-light leading-relaxed">
            Every table offers a front-row view of Gujarat's first boat theme restaurant experience.
          </p>
        </div>

        {/* Asymmetric Gallery Grid — 100% DINING & ATMOSPHERE IMAGERY */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Main Large Visual: Deck Boat Seating Diagram & Illuminated Vessel */}
          <div className="md:col-span-8 relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] group border border-white/10">
            <img
              src="/vessel-deck-dining.png"
              alt="Authentic Deck & Indoor Dining Seating"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 space-y-1">
              <span className="font-mono text-[9px] text-[#F0822A] tracking-widest uppercase font-semibold">
                DECK &amp; INDOOR DINING SEATING
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light text-[#FAF8F3]">
                Open-Air Waterfront &amp; Second Deck Seating
              </h3>
            </div>
          </div>

          {/* Side Stacked Visuals: Illuminated Vessel Night View + Deck View */}
          <div className="md:col-span-4 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group border border-white/10">
              <img
                src="/cruise-sketch-detailed.png"
                alt="Illuminated Night Cruise Deck"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-3 font-mono text-[8px] text-[#F0822A] tracking-widest uppercase">
                ILLUMINATED VESSEL DECK
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group border border-white/10">
              <img
                src="/cruise-sketch.jpg"
                alt="Waterfront Sunset Deck View"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-3 font-mono text-[8px] text-[#F0822A] tracking-widest uppercase">
                WATERFRONT DECK AMBIENCE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
