import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Anchor, Sparkles, LayoutGrid, Disc, ChevronRight } from 'lucide-react';

interface ExperienceCard {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  fallback: string;
  angle: number; // degrees around orbit (0, 60, 120, 180, 240, 300)
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
    angle: 0, // Right (3 o'clock)
    tilt: -2,
  },
  {
    id: 2,
    title: 'UNLIMITED FEAST DELIGHT',
    subtitle: 'Pure Veg Starter to Dessert @ ₹350/-',
    category: 'SIGNATURE DINING',
    image: '/menu/unnamed.webp',
    fallback: '/logo.png',
    angle: 60, // Bottom-Right (5 o'clock)
    tilt: 2,
  },
  {
    id: 3,
    title: 'SIGNATURE BOWL & SIZZLERS',
    subtitle: 'Paneer Shashlik & Rainbow Shooters',
    category: 'CHEF SPECIALS',
    image: '/dishes/dish1.png',
    fallback: '/menu/unnamed (1).webp',
    angle: 120, // Bottom-Left (7 o'clock)
    tilt: -3,
  },
  {
    id: 4,
    title: 'HEARTFELT DETAILS',
    subtitle: 'Every Day at Boat & Bites',
    category: 'LUXURY AMBIANCE',
    image: '/menu/unnamed (1).webp',
    fallback: '/menu/unnamed (3).webp',
    angle: 180, // Left (9 o'clock)
    tilt: 3,
  },
  {
    id: 5,
    title: 'THE MORNING POUR',
    subtitle: 'Barista Counter · Waterfront',
    category: 'SPECIALTY DRINKS',
    image: '/menu/unnamed (3).webp',
    fallback: '/dishes/dish2.png',
    angle: 240, // Top-Left (11 o'clock)
    tilt: -2,
  },
  {
    id: 6,
    title: 'TWILIGHT WATERFRONT DECK',
    subtitle: 'Vesasu Anthem Circle · Surat',
    category: 'SUNSET MOMENTS',
    image: '/cruise-sketch.jpg',
    fallback: '/cruise-sketch-detailed.png',
    angle: 300, // Top-Right (1 o'clock)
    tilt: 2,
  },
];

export function VoyageDeck() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [mobileView, setMobileView] = useState<'orbit' | 'grid'>('orbit');

  // Smooth luxury rotation duration (50s for a 360deg loop)
  const ROTATION_DURATION = 50;

  return (
    <section id="voyage" className="w-full bg-[#FAF5F2] text-[#101820] py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden select-none">
      
      {/* Soft Ambient Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] md:w-[1000px] h-[600px] sm:h-[800px] md:h-[1000px] bg-gradient-radial from-[#F0822A]/8 via-[#D4AF37]/4 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Background Decorative Metallic Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10182005_1px,transparent_1px),linear-gradient(to_bottom,#10182005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-12">
        
        {/* Editorial Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto px-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#F0822A] tracking-widest uppercase bg-[#F0822A]/10 px-4 py-1.5 rounded-full border border-[#F0822A]/20 shadow-sm"
          >
            <Anchor className="w-3.5 h-3.5" />
            <span>THE VOYAGE EXPERIENCE ORBIT</span>
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#101820] leading-tight tracking-tight">
            Moments Floating On <span className="italic font-normal text-[#F0822A]">Gentle Waves</span>
          </h2>

          <p className="text-sm sm:text-base text-[#101820]/75 font-sans font-light max-w-lg mx-auto leading-relaxed">
            Step onto our interactive memory stage. Each story orbits around our central vessel, capturing authentic moments aboard Boat &amp; Bites.
          </p>

          {/* View Toggle Bar (Mobile & Small Screens) */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-[#7C5A38] bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E5D7CE] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F0822A] animate-pulse" />
              • Hover over any card to pause rotation
            </span>

            {/* Mobile View Switcher */}
            <div className="sm:hidden inline-flex bg-white/90 p-1 rounded-full border border-stone-200 shadow-sm">
              <button
                onClick={() => setMobileView('orbit')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  mobileView === 'orbit' ? 'bg-[#F0822A] text-white shadow' : 'text-stone-600'
                }`}
              >
                <Disc className="w-3.5 h-3.5" />
                <span>Orbit</span>
              </button>
              <button
                onClick={() => setMobileView('grid')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  mobileView === 'grid' ? 'bg-[#F0822A] text-white shadow' : 'text-stone-600'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* ORBIT STAGE OR MOBILE GRID VIEW */}
        <AnimatePresence mode="wait">
          {mobileView === 'orbit' ? (
            /* 100% CONTAINED SYMMETRIC ORBIT STAGE */
            <motion.div
              key="orbit-stage"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="w-full overflow-x-auto scrollbar-none py-4 flex justify-center items-center"
            >
              <div 
                className="relative w-[360px] sm:w-[540px] md:w-[700px] lg:w-[760px] aspect-square flex items-center justify-center mx-auto shrink-0"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >

                {/* Concentric Golden Orbit Paths & Dotted Rays */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 760 760">
                  {/* Outer Orbit Path */}
                  <circle cx="380" cy="380" r="290" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 4" />
                  {/* Middle Accent Path */}
                  <circle cx="380" cy="380" r="210" fill="none" stroke="#F0822A" strokeWidth="0.8" opacity="0.6" />
                  {/* Inner Halo */}
                  <circle cx="380" cy="380" r="140" fill="none" stroke="#D4AF37" strokeWidth="1" />
                  
                  {/* Small Gold Navigation Nodes on Ring */}
                  {[0, 60, 120, 180, 240, 300].map((ang, i) => {
                    const rRad = (ang * Math.PI) / 180;
                    const nx = 380 + 140 * Math.cos(rRad);
                    const ny = 380 + 140 * Math.sin(rRad);
                    return <circle key={i} cx={nx} cy={ny} r="3" fill="#F0822A" />;
                  })}
                </svg>

                {/* DEAD-CENTER STABLE RESTAURANT LOGO (DOES NOT ROTATE!) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white border-3 sm:border-4 border-[#D4AF37] shadow-2xl z-40 flex items-center justify-center p-2 sm:p-3">
                  <img 
                    src="/logo.png" 
                    alt="Boat & Bites Restaurant Logo" 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_12px_rgba(0,0,0,0.12)] pointer-events-none" />
                </div>

                {/* ROTATING ORBIT ASSEMBLY */}
                <motion.div
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                  animate={{ rotate: isPaused ? undefined : 360 }}
                  transition={{
                    duration: ROTATION_DURATION,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {/* CENTRAL CONCENTRIC METALLIC RINGS (ROTATING GLOW) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] sm:w-[220px] md:w-[260px] h-[160px] sm:h-[220px] md:h-[260px] pointer-events-none z-20">
                    <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-lg">
                      <defs>
                        <linearGradient id="orbitBrass" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F0822A" />
                          <stop offset="50%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#8A641A" />
                        </linearGradient>
                      </defs>

                      {/* Concentric Decorative Rings */}
                      <circle cx="100" cy="100" r="78" stroke="url(#orbitBrass)" strokeWidth="3" fill="none" opacity="0.8" />
                      <circle cx="100" cy="100" r="68" stroke="url(#orbitBrass)" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.6" />
                      
                      {/* 6 Orbit Spokes */}
                      {[0, 60, 120, 180, 240, 300].map((ang, i) => (
                        <g key={i} transform={`rotate(${ang} 100 100)`}>
                          <line x1="100" y1="10" x2="100" y2="68" stroke="url(#orbitBrass)" strokeWidth="1.5" opacity="0.7" />
                          <circle cx="100" cy="8" r="3.5" fill="url(#orbitBrass)" />
                        </g>
                      ))}
                    </svg>
                  </div>

                  {/* 6 FLOATING CONTENT CARDS (POSITIONED ON ORBIT WITH UPRIGHT COUNTER-ROTATION) */}
                  {EXPERIENCE_CARDS.map((card) => {
                    const rad = (card.angle * Math.PI) / 180;
                    
                    // Radius calculation guarantees 100% zero overflow & proportional air gap
                    const radius = typeof window !== 'undefined' && window.innerWidth < 640 
                      ? 125 
                      : typeof window !== 'undefined' && window.innerWidth < 1024
                      ? 180
                      : 235;

                    const x = radius * Math.cos(rad);
                    const y = radius * Math.sin(rad);

                    const isHovered = hoveredId === card.id;

                    return (
                      <div
                        key={card.id}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-30 flex items-center justify-center"
                        style={{
                          transform: `translate(${x}px, ${y}px)`,
                        }}
                      >
                        {/* GOLD SPOKE CONNECTING LINE FROM CENTER TO CARD */}
                        <svg className="absolute -top-[120px] -left-[120px] w-[240px] h-[240px] pointer-events-none overflow-visible">
                          <line 
                            x1="120" 
                            y1="120" 
                            x2={120 - x * 0.52} 
                            y2={120 - y * 0.52} 
                            stroke="#D4AF37" 
                            strokeWidth="1.5" 
                            strokeDasharray="4 3"
                            opacity="0.8"
                          />
                        </svg>

                        {/* COUNTER-ROTATING CARD CONTAINER (KEEPS PHOTO 100% UPRIGHT) */}
                        <motion.div
                          animate={{ rotate: isPaused ? undefined : -360 }}
                          transition={{
                            duration: ROTATION_DURATION,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="relative group flex flex-col items-center justify-center"
                          onMouseEnter={() => setHoveredId(card.id)}
                          onMouseLeave={() => setHoveredId(null)}
                        >
                          {/* SMALL GOLDEN CLIP PIN AT TOP */}
                          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-md bg-gradient-to-b from-amber-600 to-amber-900 border border-amber-300 shadow-md z-30 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-200 border border-amber-600" />
                          </div>

                          {/* REFINED POLAROID CONTENT CARD */}
                          <motion.div
                            animate={{
                              scale: isHovered ? 1.08 : 1,
                              zIndex: isHovered ? 50 : 10,
                            }}
                            transition={{ duration: 0.25 }}
                            className="bg-white/95 backdrop-blur-md p-2 sm:p-2.5 pb-2.5 sm:pb-3 rounded-xl sm:rounded-2xl shadow-[0_12px_30px_rgba(46,26,12,0.08)] border border-[#D4AF37]/30 w-[105px] sm:w-[135px] md:w-[155px] flex flex-col space-y-1.5 cursor-pointer"
                            style={{ transform: `rotate(${card.tilt}deg)` }}
                          >
                            {/* IMAGE THUMBNAIL */}
                            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-stone-100 border border-stone-200 shadow-inner">
                              <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => {
                                  e.currentTarget.src = card.fallback;
                                }}
                              />
                            </div>

                            {/* CARD CONTENT TYPOGRAPHY */}
                            <div className="space-y-0.5 text-left px-0.5">
                              <span className="block font-mono text-[7px] sm:text-[8px] text-[#F0822A] font-semibold tracking-wider uppercase">
                                {card.category}
                              </span>
                              <h4 className="font-serif font-medium text-[9px] sm:text-[10.5px] tracking-wide text-[#101820] uppercase leading-snug line-clamp-1">
                                {card.title}
                              </h4>
                              <p className="font-sans text-[7.5px] sm:text-[8.5px] text-[#7C5A38] font-light line-clamp-1">
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
            /* MOBILE GRID LAYOUT (RESPONSIVE FALLBACK FOR SMARTPHONES) */
            <motion.div
              key="grid-stage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.4 }}
              className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
            >
              {EXPERIENCE_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="bg-white p-4 rounded-2xl border border-stone-200 shadow-md flex items-center gap-4 group"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-stone-100 border border-stone-200">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                      onError={(e) => { e.currentTarget.src = card.fallback; }}
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-[#F0822A] tracking-wider uppercase font-semibold">
                      {card.category}
                    </span>
                    <h4 className="font-serif text-sm font-medium text-[#101820] uppercase leading-tight">
                      {card.title}
                    </h4>
                    <p className="font-sans text-xs text-[#7C5A38] font-light">
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
