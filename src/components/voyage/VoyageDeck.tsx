import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Disc, LayoutGrid } from 'lucide-react';

interface ExperienceCard {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  fallback: string;
  angle: number;
  tilt: number;
}

const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    id: 1,
    title: 'THE NAUTICAL CRUISE DECK',
    subtitle: 'Surat Waterfront Dining Landmark',
    category: 'CRUISE ATMOSPHERE',
    image: '/cruise-sketch-detailed.png',
    fallback: '/cruise-sketch.jpg',
    angle: 0,
    tilt: -2,
  },
  {
    id: 2,
    title: 'UNLIMITED FEAST DELIGHT',
    subtitle: 'Pure Veg Starter to Dessert @ ₹350/-',
    category: 'SIGNATURE DINING',
    image: '/menu/unnamed.webp',
    fallback: '/logo.png',
    angle: 60,
    tilt: 2,
  },
  {
    id: 3,
    title: 'SIGNATURE BOWL & SIZZLERS',
    subtitle: 'Paneer Shashlik & Rainbow Shooters',
    category: 'CHEF SPECIALS',
    image: '/dishes/dish1.png',
    fallback: '/menu/unnamed (1).webp',
    angle: 120,
    tilt: -3,
  },
  {
    id: 4,
    title: 'HEARTFELT DETAILS',
    subtitle: 'Every Day at Boat & Bites',
    category: 'LUXURY AMBIANCE',
    image: '/menu/unnamed (1).webp',
    fallback: '/menu/unnamed (3).webp',
    angle: 180,
    tilt: 3,
  },
  {
    id: 5,
    title: 'THE MORNING POUR',
    subtitle: 'Barista Counter · Waterfront',
    category: 'SPECIALTY DRINKS',
    image: '/menu/unnamed (3).webp',
    fallback: '/dishes/dish2.png',
    angle: 240,
    tilt: -2,
  },
  {
    id: 6,
    title: 'TWILIGHT WATERFRONT DECK',
    subtitle: 'Vesasu Anthem Circle · Surat',
    category: 'SUNSET MOMENTS',
    image: '/cruise-sketch.jpg',
    fallback: '/cruise-sketch-detailed.png',
    angle: 300,
    tilt: 2,
  },
];

/* ─────────────────────────────────────────────
   Responsive dimensions hook
   Returns the correct sizes for helm, orbit radius, 
   card size, and logo based on actual viewport width
   ───────────────────────────────────────────── */
function useResponsiveSizes() {
  const [sizes, setSizes] = useState({
    stageSize: 300,
    helmSize: 100,
    orbitRadius: 110,
    cardWidth: 80,
    logoSize: 44,
    spokeHandleR: 4,
  });

  useEffect(() => {
    function calc() {
      const vw = window.innerWidth;

      if (vw < 380) {
        // Extra small phones
        setSizes({
          stageSize: 280,
          helmSize: 90,
          orbitRadius: 100,
          cardWidth: 72,
          logoSize: 38,
          spokeHandleR: 3.5,
        });
      } else if (vw < 640) {
        // Standard phones (mobile-first default)
        setSizes({
          stageSize: 320,
          helmSize: 105,
          orbitRadius: 115,
          cardWidth: 82,
          logoSize: 42,
          spokeHandleR: 4,
        });
      } else if (vw < 768) {
        // Large phones / small tablets
        setSizes({
          stageSize: 400,
          helmSize: 130,
          orbitRadius: 148,
          cardWidth: 100,
          logoSize: 52,
          spokeHandleR: 4.5,
        });
      } else if (vw < 1024) {
        // Tablets
        setSizes({
          stageSize: 480,
          helmSize: 155,
          orbitRadius: 178,
          cardWidth: 112,
          logoSize: 60,
          spokeHandleR: 5,
        });
      } else {
        // Desktop
        setSizes({
          stageSize: 560,
          helmSize: 175,
          orbitRadius: 205,
          cardWidth: 125,
          logoSize: 68,
          spokeHandleR: 5.5,
        });
      }
    }

    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  return sizes;
}

export function VoyageDeck() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [mobileView, setMobileView] = useState<'orbit' | 'grid'>('orbit');
  const sizes = useResponsiveSizes();

  const ROTATION_DURATION = 45;

  return (
    <section
      id="voyage"
      className="w-full bg-[#FAF5F2] text-[#101820] py-10 sm:py-14 md:py-18 px-3 relative overflow-hidden select-none"
    >
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-gradient-radial from-[#F0822A]/10 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10182005_1px,transparent_1px),linear-gradient(to_bottom,#10182005_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-5 sm:space-y-7 flex flex-col items-center">

        {/* Editorial Section Header */}
        <div className="text-center space-y-2 max-w-lg mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-[#F0822A] tracking-widest uppercase bg-[#F0822A]/10 px-3 py-1 rounded-full border border-[#F0822A]/20 shadow-sm"
          >
            <Anchor className="w-3 h-3" />
            <span>FLOATING MEMORY STAGE</span>
          </motion.div>

          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#101820] leading-tight">
            Moments Floating On <span className="italic text-[#F0822A]">Gentle Waves</span>
          </h2>

          <p className="text-[11px] sm:text-xs md:text-sm text-[#101820]/75 font-sans font-light max-w-sm mx-auto leading-relaxed">
            Step onto our interactive memory stage. Photos orbit continuously around our central ship's helm.
          </p>

          <div className="pt-1 flex items-center justify-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-[#7C5A38] bg-white/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E5D7CE] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F0822A] animate-pulse" />
              • Hover over any photo to pause orbit
            </span>

            {/* Mobile View Switcher */}
            <div className="sm:hidden inline-flex bg-white/90 p-1 rounded-full border border-stone-200 shadow-sm">
              <button
                onClick={() => setMobileView('orbit')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium transition-all ${
                  mobileView === 'orbit' ? 'bg-[#F0822A] text-white shadow' : 'text-stone-600'
                }`}
              >
                <Disc className="w-3 h-3" />
                <span>Orbit</span>
              </button>
              <button
                onClick={() => setMobileView('grid')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium transition-all ${
                  mobileView === 'grid' ? 'bg-[#F0822A] text-white shadow' : 'text-stone-600'
                }`}
              >
                <LayoutGrid className="w-3 h-3" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            MOBILE-FIRST ORBIT STAGE
            Stage is a perfect square container sized to viewport.
            Everything is absolutely positioned inside it using
            pixel values from the responsive hook — guaranteed
            to never overflow.
           ═══════════════════════════════════════════════ */}
        <AnimatePresence mode="wait">
          {mobileView === 'orbit' ? (
            <motion.div
              key="orbit-stage"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="w-full flex justify-center items-center"
            >
              <div
                className="relative shrink-0 mx-auto"
                style={{
                  width: sizes.stageSize,
                  height: sizes.stageSize,
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >

                {/* Ambient Circular Wave Rings */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#D4AF37" strokeWidth="0.3" strokeDasharray="2 1.5" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="#F0822A" strokeWidth="0.2" opacity="0.4" />
                </svg>

                {/* ─── 1. STABLE CENTRAL HELM (never rotates) ─── */}
                <div
                  className="absolute z-20 pointer-events-none"
                  style={{
                    width: sizes.helmSize,
                    height: sizes.helmSize,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-xl">
                    <defs>
                      <linearGradient id="helmWoodV" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4A2E18" />
                        <stop offset="50%" stopColor="#2E1A0C" />
                        <stop offset="100%" stopColor="#1C0F07" />
                      </linearGradient>
                      <linearGradient id="helmBrassV" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F0822A" />
                        <stop offset="50%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#8A641A" />
                      </linearGradient>
                    </defs>

                    {/* Outer Wood Rim */}
                    <circle cx="100" cy="100" r="78" stroke="url(#helmWoodV)" strokeWidth="9" fill="none" />
                    <circle cx="100" cy="100" r="83" stroke="url(#helmBrassV)" strokeWidth="1.5" fill="none" opacity="0.9" />
                    <circle cx="100" cy="100" r="73" stroke="url(#helmBrassV)" strokeWidth="1.5" fill="none" opacity="0.9" />

                    {/* 8 Wooden Spoke Handles */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
                      <g key={i} transform={`rotate(${ang} 100 100)`}>
                        <line x1="100" y1="5" x2="100" y2="73" stroke="url(#helmWoodV)" strokeWidth="6" strokeLinecap="round" />
                        <line x1="100" y1="10" x2="100" y2="73" stroke="url(#helmBrassV)" strokeWidth="1.2" />
                        <circle cx="100" cy="7" r={sizes.spokeHandleR} fill="url(#helmWoodV)" stroke="url(#helmBrassV)" strokeWidth="1.2" />
                      </g>
                    ))}

                    {/* Inner Brass Rim */}
                    <circle cx="100" cy="100" r="48" stroke="url(#helmBrassV)" strokeWidth="3" fill="none" />
                  </svg>

                  {/* ─── STABLE DEAD-CENTER LOGO ─── */}
                  <div
                    className="absolute rounded-full bg-white border-2 sm:border-3 border-[#D4AF37] shadow-xl flex items-center justify-center p-1 sm:p-1.5 pointer-events-auto z-40"
                    style={{
                      width: sizes.logoSize,
                      height: sizes.logoSize,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <img
                      src="/logo.png"
                      alt="Boat & Bites Logo"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.08)] pointer-events-none" />
                  </div>
                </div>

                {/* ─── 2. ROTATING ORBIT (only photos + connector lines rotate) ─── */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  animate={{ rotate: isPaused ? undefined : 360 }}
                  transition={{
                    duration: ROTATION_DURATION,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {EXPERIENCE_CARDS.map((card) => {
                    const rad = (card.angle * Math.PI) / 180;
                    const x = sizes.orbitRadius * Math.cos(rad);
                    const y = sizes.orbitRadius * Math.sin(rad);
                    const isHovered = hoveredId === card.id;

                    // Half the card width for offset calculation
                    const halfCard = sizes.cardWidth / 2;

                    return (
                      <div
                        key={card.id}
                        className="absolute z-30 pointer-events-auto"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        }}
                      >
                        {/* Gold spoke connector line from helm to photo card */}
                        <svg
                          className="absolute pointer-events-none overflow-visible"
                          style={{
                            width: 1,
                            height: 1,
                            top: '50%',
                            left: '50%',
                          }}
                        >
                          <line
                            x1="0"
                            y1="0"
                            x2={-x * 0.45}
                            y2={-y * 0.45}
                            stroke="#D4AF37"
                            strokeWidth="1"
                            strokeDasharray="3 2.5"
                            opacity="0.7"
                          />
                        </svg>

                        {/* Counter-rotating card to stay upright */}
                        <motion.div
                          animate={{ rotate: isPaused ? undefined : -360 }}
                          transition={{
                            duration: ROTATION_DURATION,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="relative group flex flex-col items-center justify-center"
                          onMouseEnter={() => setHoveredId(card.id)}
                          onMouseLeave={() => setHoveredId(null)}
                        >
                          {/* Brass clip pin */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-md bg-gradient-to-b from-amber-600 to-amber-900 border border-amber-300 shadow-md z-30 flex items-center justify-center">
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-200 border border-amber-600" />
                          </div>

                          {/* Polaroid content card */}
                          <motion.div
                            animate={{
                              scale: isHovered ? 1.08 : 1,
                              zIndex: isHovered ? 50 : 10,
                            }}
                            transition={{ duration: 0.25 }}
                            className="bg-white/95 backdrop-blur-md p-1 sm:p-1.5 pb-1.5 sm:pb-2 rounded-lg sm:rounded-xl shadow-[0_8px_20px_rgba(46,26,12,0.08)] border border-[#D4AF37]/25 flex flex-col cursor-pointer"
                            style={{
                              width: sizes.cardWidth,
                              transform: `rotate(${card.tilt}deg)`,
                            }}
                          >
                            {/* Image thumbnail */}
                            <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden bg-stone-100 border border-stone-200 shadow-inner">
                              <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => {
                                  e.currentTarget.src = card.fallback;
                                }}
                              />
                            </div>

                            {/* Card text */}
                            <div className="space-y-0.5 text-left px-0.5 mt-0.5 sm:mt-1">
                              <span className="block font-mono text-[6px] sm:text-[7px] md:text-[8px] text-[#F0822A] font-semibold tracking-wider uppercase">
                                {card.category}
                              </span>
                              <h4 className="font-serif font-medium text-[7px] sm:text-[8px] md:text-[9px] tracking-wide text-[#101820] uppercase leading-snug line-clamp-1">
                                {card.title}
                              </h4>
                              <p className="font-sans text-[6px] sm:text-[7px] md:text-[8px] text-[#7C5A38] font-light line-clamp-1">
                                {card.subtitle}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>

              </div>
            </motion.div>
          ) : (
            /* ═══ MOBILE GRID LAYOUT ═══ */
            <motion.div
              key="grid-stage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              {EXPERIENCE_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="bg-white p-3 rounded-xl border border-stone-200 shadow-md flex items-center gap-3 group"
                >
                  <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-stone-100 border border-stone-200">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = card.fallback; }}
                    />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-mono text-[7px] sm:text-[8px] text-[#F0822A] tracking-wider uppercase font-semibold">
                      {card.category}
                    </span>
                    <h4 className="font-serif text-xs font-medium text-[#101820] uppercase leading-tight">
                      {card.title}
                    </h4>
                    <p className="font-sans text-[10px] text-[#7C5A38] font-light">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default VoyageDeck;
