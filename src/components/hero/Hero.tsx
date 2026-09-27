import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Anchor, ChevronDown, Utensils, Phone } from 'lucide-react';
import { WaveLine } from '../brand/WaveLine';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Subtle parallax transform
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const textY = useTransform(scrollY, [0, 600], [0, -40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);

  // Subtle mouse depth move
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 12; // -6px to +6px
    const y = (clientY / innerHeight - 0.5) * 12;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#101820] text-[#FAF8F3] overflow-hidden flex flex-col justify-between select-none pt-28 pb-12"
    >
      {/* ─── FULL-BLEED CINEMATIC BACKGROUND MEDIA ─── */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: bgY, x: mousePos.x * 0.5 }}
      >
        {/* Authentic Vessel Night Exterior Image */}
        <img
          src="/cruise-sketch-detailed.png"
          alt="Boat & Bites Night Vessel"
          className="w-full h-full object-cover opacity-60 filter brightness-90 contrast-105"
        />
        {/* Dark Vignette & Gradient Overlays for Editorial Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/40 to-[#101820]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101820]/90 via-transparent to-[#101820]/50" />
      </motion.div>

      {/* Ambient Water Shimmer Radial Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F0822A]/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* ─── HERO EDITORIAL OVERLAY CONTENT ─── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-10 relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Left Column: Asymmetric Editorial Copy */}
        <div className="lg:col-span-8 space-y-6 text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FAF8F3]/20 bg-[#FAF8F3]/10 backdrop-blur-md text-xs font-mono tracking-widest text-[#F0822A] uppercase"
          >
            <Anchor className="w-3.5 h-3.5" />
            <span>GUJARAT'S FIRST CRUISE THEME RESTAURANT</span>
          </motion.div>

          {/* Masked Editorial Headline */}
          <div className="space-y-1 font-serif">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#FAF8F3] leading-[0.95]"
            >
              DINNER HAS <br />
              <span className="italic font-normal text-[#F0822A]">A DECK.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-[#FAF8F3]/85 font-sans font-light max-w-xl leading-relaxed"
          >
            Step aboard Boat &amp; Bites at Anthem Circle, Surat. Experience our famous Unlimited Pure Veg Feast starting at <span className="text-[#F0822A] font-semibold">₹350/-</span> in an authentic waterfront cruise atmosphere.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#menu"
              className="inline-flex items-center gap-3 bg-[#F0822A] hover:bg-[#D96518] text-white px-7 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#F0822A]/20"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Unlimited Menu</span>
            </a>

            <a
              href="tel:+919974615111"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-white px-6 py-4 rounded-full text-xs sm:text-sm font-medium tracking-widest uppercase transition-all"
            >
              <Phone className="w-4 h-4 text-[#F0822A]" />
              <span>+91 99746 15111</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Architectural Porthole Highlight Badge */}
        <div className="lg:col-span-4 hidden lg:flex justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative w-56 h-56 rounded-full border-4 border-[#D4AF37] p-2 bg-[#101820]/80 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center group cursor-pointer"
          >
            <div className="absolute inset-1 rounded-full border border-amber-300/30" />
            <img
              src="/logo.png"
              alt="Boat & Bites Mark"
              className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-serif text-lg font-medium text-[#FAF8F3] uppercase tracking-wide">
              ANTHEM CIRCLE
            </span>
            <span className="font-mono text-[9px] text-[#F0822A] tracking-widest uppercase mt-1">
              VIP ROAD · SURAT
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── BOTTOM NAUTICAL WAVE & SCROLL PROMPT ─── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 flex flex-col items-center gap-2">
        <WaveLine className="w-full h-6 opacity-60" color="#F0822A" />
        
        <a
          href="#boarding"
          className="inline-flex flex-col items-center text-[#FAF8F3]/60 hover:text-[#F0822A] transition-colors gap-1 group"
        >
          <span className="font-mono text-[9px] tracking-widest uppercase">BOARD THE VESSEL</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#F0822A]" />
        </a>
      </div>
    </section>
  );
};
