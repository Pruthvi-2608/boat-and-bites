import React from 'react';
import { motion } from 'framer-motion';
import { PortholeMask } from '../brand/PortholeMask';

export const Vessel: React.FC = () => {
  return (
    <section id="vessel" className="w-full bg-[#101820] text-[#FAF8F3] py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden select-none">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#F0822A] tracking-widest uppercase font-semibold">
              02 / THE VESSEL
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#FAF8F3]">
              Architecture of <span className="italic text-[#F0822A]">The Ship</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#FAF8F3]/70 font-light max-w-md leading-relaxed">
            Crafted with signature circular porthole windows, sweeping hull decks, glowing evening lights, and water reflections.
          </p>
        </div>

        {/* Porthole Grid Showcase — 100% VESSEL & DECK ARCHITECTURE, ZERO FOOD PHOTOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center pt-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PortholeMask
              src="/cruise-sketch-detailed.png"
              alt="Porthole view of illuminated boat hull"
              size="w-56 h-56 sm:w-64 sm:h-64"
              caption="ILLUMINATED NIGHT HULL"
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PortholeMask
              src="/cruise-sketch.jpg"
              alt="Porthole view of waterfront deck"
              size="w-64 h-64 sm:w-72 sm:h-72"
              caption="WATERFRONT SUNSET DECK"
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <PortholeMask
              src="/vessel-deck-dining.png"
              alt="Porthole view of indoor dining architecture & decks"
              size="w-56 h-56 sm:w-64 sm:h-64"
              caption="DECK & SEATING ARCHITECTURE"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
