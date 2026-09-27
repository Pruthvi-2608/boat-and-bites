import React from 'react';
import { motion } from 'framer-motion';

export const Boarding: React.FC = () => {
  return (
    <section id="boarding" className="w-full bg-[#FAF8F3] text-[#171717] py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Editorial Text Column */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <span className="font-mono text-xs text-[#F0822A] tracking-widest uppercase font-semibold">
            01 / BOARDING
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-[#101820]">
            Step Onto <br />
            <span className="italic text-[#F0822A]">Gujarat's Iconic</span> Vessel
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#6F6A63] font-light leading-relaxed">
            From the moment you arrive at Anthem Circle, Boat &amp; Bites invites you aboard a dining venue like no other. A boat-shaped landmark surrounded by open decks, glowing warm lights, and waterfront charm.
          </p>

          <div className="pt-2 flex items-center gap-6 font-mono text-xs text-[#101820]/70">
            <div>
              <span className="block text-[#F0822A] font-bold text-base">300+</span>
              <span>INDOOR SEATING</span>
            </div>
            <div className="h-8 w-[1px] bg-black/10" />
            <div>
              <span className="block text-[#F0822A] font-bold text-base">₹350/-</span>
              <span>UNLIMITED LUNCH</span>
            </div>
          </div>
        </div>

        {/* Right Magazine-Spread Image Column */}
        <div className="lg:col-span-7 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#EEE8DC] bg-stone-100 aspect-[16/10]">
            <img
              src="/cruise-sketch-detailed.png"
              alt="Boarding the Boat & Bites Vessel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-4 left-4 font-mono text-[10px] text-white/80 tracking-widest uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
              VESASU · ANTHEM CIRCLE · SURAT
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
