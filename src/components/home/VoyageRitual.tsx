import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Anchor, ArrowDown, Sparkles, CheckCircle2, Circle } from 'lucide-react';

export function VoyageRitual() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pin section during scroll: 0% to 100% of 300vh scroll distance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Stage-by-Stage Path Length Sequences:
  // 0–10%   -> Construction lines
  const constructionProgress = useTransform(scrollYProgress, [0.0, 0.10], [0, 1]);
  // 10–25%  -> Water lines
  const waterProgress = useTransform(scrollYProgress, [0.10, 0.25], [0, 1]);
  // 25–40%  -> Outer hull / boat silhouette
  const hullProgress = useTransform(scrollYProgress, [0.25, 0.40], [0, 1]);
  // 40–52%  -> Front outdoor deck
  const frontDeckProgress = useTransform(scrollYProgress, [0.40, 0.52], [0, 1]);
  // 52–65%  -> Lower indoor dining salon
  const indoorProgress = useTransform(scrollYProgress, [0.52, 0.65], [0, 1]);
  // 65–75%  -> Upper deck and railings
  const upperDeckProgress = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  // 75–84%  -> Open-air top deck
  const topDeckProgress = useTransform(scrollYProgress, [0.75, 0.84], [0, 1]);
  // 84–92%  -> Rooftop structure
  const rooftopProgress = useTransform(scrollYProgress, [0.84, 0.92], [0, 1]);
  // 92–97%  -> BOAT & BITES rooftop sign
  const signProgress = useTransform(scrollYProgress, [0.92, 0.97], [0, 1]);
  // 97–100% -> Final details + fills
  const detailsProgress = useTransform(scrollYProgress, [0.97, 1.0], [0, 1]);

  // Floating Annotation Label Reveal Triggers:
  // Label 1: Front Deck (Outdoor Seating) -> Revealed at ~45-52%
  const labelFrontDeckOpacity = useTransform(scrollYProgress, [0.45, 0.52], [0, 1]);
  const labelFrontDeckY = useTransform(scrollYProgress, [0.45, 0.52], [10, 0]);

  // Label 2: Indoor Dining Salon -> Revealed at ~58-65%
  const labelIndoorOpacity = useTransform(scrollYProgress, [0.58, 0.65], [0, 1]);
  const labelIndoorY = useTransform(scrollYProgress, [0.58, 0.65], [10, 0]);

  // Label 3: Open Air Top Deck -> Revealed at ~78-84%
  const labelTopDeckOpacity = useTransform(scrollYProgress, [0.78, 0.84], [0, 1]);
  const labelTopDeckY = useTransform(scrollYProgress, [0.78, 0.84], [10, 0]);

  // Label 4: Rooftop Signage -> Revealed at ~93-97%
  const labelSignOpacity = useTransform(scrollYProgress, [0.93, 0.97], [0, 1]);
  const labelSignY = useTransform(scrollYProgress, [0.93, 0.97], [10, 0]);

  // Percentage Counter for Scroll Bar (0% to 100%)
  const percentageProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#F7F1EE] text-[#101820] select-none font-sans">
      
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 pb-8 px-4 md:px-12 bg-[#F7F1EE]">
        
        {/* Top Header Row */}
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 z-20">
          
          {/* Top-Left Header Group */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F0822A] tracking-widest uppercase bg-white px-3.5 py-1.5 rounded-full border border-[#101820]/10 shadow-sm">
              <Anchor className="w-3.5 h-3.5" />
              <span>04 / THE VOYAGE RITUAL</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#101820] leading-tight">
              A cruise <span className="italic font-normal text-[#F0822A]">takes shape on water.</span>
            </h2>
          </div>

          {/* Top-Right Control Pill */}
          <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-full border border-[#101820]/10 shadow-sm text-xs font-mono">
            <span className="text-[#F0822A] font-bold tracking-wider">SCROLL TO DRAW</span>
            <div className="w-28 h-1.5 bg-[#101820]/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2B266D] via-[#F0822A] to-[#F0822A]"
                style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
              />
            </div>
            <ArrowDown className="w-3.5 h-3.5 text-[#F0822A] animate-bounce" />
          </div>

        </div>

        {/* MAIN ILLUSTRATION CONTAINER (Large White Card with Generous Whitespace) */}
        <div className="max-w-6xl mx-auto w-full h-[64vh] relative flex items-center justify-center my-auto z-10 bg-white rounded-[32px] p-6 md:p-12 shadow-xl border border-[#101820]/10 overflow-hidden">
          
          {/* Centered Pure Vector SVG Boat Illustration */}
          <div className="relative w-full h-full max-w-4xl flex items-center justify-center">
            
            <svg
              viewBox="0 0 900 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-[#101820]"
            >
              <defs>
                <linearGradient id="ritualWaterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3C3181" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#2B266D" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3C3181" stopOpacity="0.4" />
                </linearGradient>

                <linearGradient id="deckSoftFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FAF4F3" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FAF0E6" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* 0–10%: Faint Construction Sketch Lines */}
              <g opacity="0.18">
                <motion.path
                  d="M 50 450 L 850 450 M 100 100 L 100 480 M 800 100 L 800 480 M 450 50 L 450 500"
                  stroke="#101820"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  style={{ pathLength: constructionProgress }}
                />
              </g>

              {/* 10–25%: Water Lines (Deep Muted Blue/Purple) */}
              <g>
                <motion.path
                  d="M 60 450 Q 250 420, 480 450 T 840 450 M 90 475 Q 320 450, 580 475 T 810 475 M 140 495 Q 400 475, 650 495 T 780 495"
                  stroke="url(#ritualWaterGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ pathLength: waterProgress }}
                />
              </g>

              {/* 25–40%: Outer Hull / Boat Silhouette (Dark Charcoal/Navy) */}
              <g>
                <motion.path
                  d="M 120 370 L 160 435 C 280 485, 540 485, 710 435 L 750 330 L 700 190 L 540 115 L 360 115 L 220 175 L 120 370 Z"
                  stroke="#101820"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ pathLength: hullProgress }}
                />
              </g>

              {/* 40–52%: Front Outdoor Deck (Warm Orange Accent Lines) */}
              <g>
                <motion.path
                  d="M 160 435 L 450 470 L 710 435 L 450 355 Z"
                  stroke="#F0822A"
                  strokeWidth="2.2"
                  strokeDasharray="6 3"
                  style={{ pathLength: frontDeckProgress }}
                />
                {/* Outdoor Tables Grid */}
                <motion.path
                  d="M 220 420 L 240 428 M 290 430 L 310 438 M 360 440 L 380 448 M 430 450 L 450 458 M 500 450 L 520 442 M 570 440 L 590 432 M 640 430 L 660 422"
                  stroke="#F0822A"
                  strokeWidth="1.8"
                  style={{ pathLength: frontDeckProgress }}
                />
              </g>

              {/* 52–65%: Lower Indoor Dining Salon & Glass Windows */}
              <g>
                {/* Lower Floor Line */}
                <motion.path
                  d="M 210 355 C 360 325, 580 325, 700 365"
                  stroke="#101820"
                  strokeWidth="2.5"
                  style={{ pathLength: indoorProgress }}
                />
                {/* Lower Glass Window Panes */}
                <motion.path
                  d="M 260 345 L 260 275 C 360 245, 540 245, 650 285 L 650 355 M 320 265 L 320 338 M 400 255 L 400 332 M 480 255 L 480 332 M 560 265 L 560 340 M 610 275 L 610 348"
                  stroke="#101820"
                  strokeWidth="1.8"
                  style={{ pathLength: indoorProgress }}
                />
              </g>

              {/* 65–75%: Upper Deck and Railings */}
              <g>
                {/* Upper Deck Floor */}
                <motion.path
                  d="M 280 255 C 380 215, 550 215, 640 265"
                  stroke="#101820"
                  strokeWidth="2.5"
                  style={{ pathLength: upperDeckProgress }}
                />
                {/* Upper Glass Windows */}
                <motion.path
                  d="M 330 245 L 330 185 C 410 165, 510 165, 600 195 L 600 255 M 390 175 L 390 238 M 460 170 L 460 235 M 530 180 L 530 242"
                  stroke="#101820"
                  strokeWidth="1.8"
                  style={{ pathLength: upperDeckProgress }}
                />
                {/* Upper Deck Railing */}
                <motion.path
                  d="M 270 248 L 650 258"
                  stroke="#F0822A"
                  strokeWidth="1.5"
                  style={{ pathLength: upperDeckProgress }}
                />
              </g>

              {/* 75–84%: Open-Air Top Deck & Side Stairs */}
              <g>
                <motion.path
                  d="M 340 175 L 240 175 L 240 125 L 340 125 M 240 175 L 280 238"
                  stroke="#101820"
                  strokeWidth="2"
                  style={{ pathLength: topDeckProgress }}
                />
                <motion.path
                  d="M 245 135 L 335 135 M 245 145 L 335 145 M 245 155 L 335 155 M 245 165 L 335 165"
                  stroke="#F0822A"
                  strokeWidth="1.2"
                  style={{ pathLength: topDeckProgress }}
                />
              </g>

              {/* 84–92%: Rooftop Structure */}
              <g>
                <motion.path
                  d="M 350 125 C 420 105, 500 105, 570 125 L 570 165"
                  stroke="#101820"
                  strokeWidth="2.2"
                  style={{ pathLength: rooftopProgress }}
                />
              </g>

              {/* 92–97%: BOAT & BITES Rooftop Sign Box */}
              <g>
                <motion.rect
                  x="360"
                  y="55"
                  width="230"
                  height="52"
                  rx="6"
                  stroke="#101820"
                  strokeWidth="2.5"
                  fill="none"
                  style={{ pathLength: signProgress }}
                />
                {/* Anchor Icon inside Rooftop Sign Box */}
                <motion.path
                  d="M 395 72 L 395 90 M 388 82 L 402 82 M 388 87 C 388 94, 402 94, 402 87"
                  stroke="#F0822A"
                  strokeWidth="2"
                  style={{ pathLength: signProgress }}
                />
                {/* Rooftop Sign Typography */}
                <motion.text
                  x="485"
                  y="78"
                  textAnchor="middle"
                  className="font-serif text-base font-bold tracking-[0.2em] fill-[#101820]"
                  style={{ opacity: signProgress }}
                >
                  BOAT &amp; BITES
                </motion.text>
                <motion.text
                  x="485"
                  y="94"
                  textAnchor="middle"
                  className="font-sans text-[9px] font-semibold tracking-[0.2em] fill-[#F0822A]"
                  style={{ opacity: signProgress }}
                >
                  RESTAURANT
                </motion.text>
              </g>

              {/* 97–100%: Final Architectural Details & Deck Fill */}
              <g>
                <motion.path
                  d="M 120 370 L 160 435 C 280 485, 540 485, 710 435 L 750 330 L 700 190 L 540 115 L 360 115 L 220 175 L 120 370 Z"
                  fill="url(#deckSoftFill)"
                  style={{ opacity: detailsProgress }}
                />
              </g>
            </svg>

            {/* FLOATING ANNOTATION LABELS (Revealed when corresponding section is drawn) */}
            
            {/* Label 1: ✦ Open Air Top Deck (Left/Top - Revealed at ~78-84%) */}
            <motion.div
              className="absolute top-[18%] left-[4%] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#101820]/15 shadow-md flex items-center gap-1.5 text-xs font-mono font-bold text-[#101820] pointer-events-auto hover:scale-105 transition-transform"
              style={{ opacity: labelTopDeckOpacity, y: labelTopDeckY }}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F0822A]" />
              <span>✦ Open Air Top Deck</span>
            </motion.div>

            {/* Label 2: ✦ Rooftop Signage (Top/Right - Revealed at ~93-97%) */}
            <motion.div
              className="absolute top-[8%] right-[8%] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F0822A] shadow-md flex items-center gap-1.5 text-xs font-mono font-bold text-[#101820] pointer-events-auto hover:scale-105 transition-transform"
              style={{ opacity: labelSignOpacity, y: labelSignY }}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F0822A]" />
              <span>✦ Rooftop Signage</span>
            </motion.div>

            {/* Label 3: ◉ Indoor Dining Salon (Right - Revealed at ~58-65%) */}
            <motion.div
              className="absolute top-[48%] right-[2%] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#3C3181] shadow-md flex items-center gap-1.5 text-xs font-mono font-bold text-[#101820] pointer-events-auto hover:scale-105 transition-transform"
              style={{ opacity: labelIndoorOpacity, y: labelIndoorY }}
            >
              <Circle className="w-3.5 h-3.5 text-[#3C3181] fill-[#3C3181]" />
              <span>◉ Indoor Dining Salon</span>
            </motion.div>

            {/* Label 4: ⚓ Front Deck (Outdoor Seating) (Bottom/Front - Revealed at ~45-52%) */}
            <motion.div
              className="absolute bottom-[10%] left-[22%] bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F0822A] shadow-md flex items-center gap-1.5 text-xs font-mono font-bold text-[#101820] pointer-events-auto hover:scale-105 transition-transform"
              style={{ opacity: labelFrontDeckOpacity, y: labelFrontDeckY }}
            >
              <Anchor className="w-3.5 h-3.5 text-[#F0822A]" />
              <span>⚓ Front Deck (Outdoor Seating)</span>
            </motion.div>

          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between text-xs font-mono text-[#101820]/70 pt-4 border-t border-[#101820]/10 z-20">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#F0822A]">SURAT WATERFRONT DINING</span>
            <span>&#8226; Anthem Circle, VIP Road, Surat</span>
          </div>
          <div className="flex items-center gap-2 font-serif italic text-[#101820]">
            <span>“Good Food, Great Vibes, On the Water.”</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default VoyageRitual;
