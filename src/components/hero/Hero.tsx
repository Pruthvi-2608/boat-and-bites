import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Anchor, ChevronRight, Phone, Utensils, Compass } from 'lucide-react';

const DISHES = [
  {
    id: 1,
    name: 'Royal Paneer Shashlik Gravy',
    subtitle: 'Signature Chef Special',
    image: '/dishes/dish1.png',
    fallback: '/dish-bowl-3d.png',
  },
  {
    id: 2,
    name: 'Unlimited Veg Feast Bowl',
    subtitle: 'Pure Veg Starter to Dessert @ ₹350/-',
    image: '/dishes/dish2.png',
    fallback: '/dishes/dish1.png',
  },
  {
    id: 3,
    name: '3D Sizzler Royal Platter',
    subtitle: 'Rainbow Shooters & Starters',
    image: '/dishes/dish3.png',
    fallback: '/dish-curry-original.png',
  },
];

export function Hero() {
  const [angle, setAngle] = useState(0);

  // Smooth continuous animation frame update for left-to-right orbit
  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const DURATION = 12000; // 12 seconds for a complete rotation loop

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) % DURATION;
      // angle goes from 0 to 2*PI continuously
      const currentAngle = (progress / DURATION) * 2 * Math.PI;
      setAngle(currentAngle);
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#101820] text-[#FAF4F3] pt-28 pb-16 px-4 md:px-8 overflow-hidden flex flex-col justify-between select-none">
      
      {/* Ambient Water Shimmer Glow */}
      <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 via-[#3C3181] to-[#101820] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F0822A]/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#3C3181]/20 rounded-full filter blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto z-10">
        
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FAF4F3]/20 bg-[#FAF4F3]/5 backdrop-blur-md text-xs font-mono tracking-widest text-[#F0822A] uppercase"
          >
            <Anchor className="w-3.5 h-3.5" />
            <span>Surat's Premier Waterfront Cruise Deck</span>
          </motion.div>

          {/* Masked Editorial Headline */}
          <div className="space-y-1 font-serif">
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#FAF4F3]"
              >
                Taste That <span className="italic font-normal text-[#F0822A]">Sails</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#FAF4F3]"
              >
                With Your <span className="underline decoration-[#3C3181] underline-offset-8">Heart.</span>
              </motion.h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#FAF4F3]/80 font-sans font-light max-w-xl leading-relaxed"
          >
            Welcome aboard Boat &amp; Bites, Gujarat's iconic cruise theme restaurant at Anthem Circle. Experience our famous Unlimited Pure Veg Feast starting at <span className="text-[#F0822A] font-semibold">₹350/-</span> in a stunning waterfront atmosphere.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#menu"
              className="inline-flex items-center gap-3 bg-[#F0822A] hover:bg-[#d9711c] text-white px-7 py-4 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F0822A]/25"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Unlimited Menu</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+919974615111"
              className="inline-flex items-center gap-2 border border-[#FAF4F3]/20 hover:border-[#FAF4F3]/50 bg-[#FAF4F3]/5 hover:bg-[#FAF4F3]/10 text-[#FAF4F3] px-6 py-4 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-[#F0822A]" />
              <span>+91 99746 15111</span>
            </a>
          </motion.div>

        </div>

        {/* Right Column: CONTINUOUSLY REVOLVING 3D DISHES (COCOVA STYLE LEFT-TO-RIGHT ORBIT) */}
        <div className="lg:col-span-6 relative flex justify-center items-center py-10 min-h-[460px]">
          
          <div className="relative w-full max-w-[500px] h-[360px] flex items-center justify-center">
            
            {/* Soft Ambient Floor Platform Glow */}
            <div className="absolute bottom-2 w-80 h-16 bg-[#F0822A]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-8 w-96 h-1 bg-gradient-to-r from-transparent via-[#F0822A]/40 to-transparent pointer-events-none" />

            {/* Render Dishes Orbiting Horizontal Ellipse */}
            {DISHES.map((dish, index) => {
              // Offset angle for 3 dishes spaced evenly around circle
              const itemAngle = angle + (index * (2 * Math.PI / DISHES.length));
              
              // Elliptical coordinates (orbiting left to right)
              const rx = 150; // horizontal radius
              const ry = 40;  // vertical depth radius
              
              const x = Math.cos(itemAngle) * rx;
              const y = Math.sin(itemAngle) * ry;
              
              // Depth scale (front is scale 1.15, back is scale 0.75)
              const depthFactor = (Math.sin(itemAngle) + 1) / 2; // 0 to 1
              const scale = 0.75 + depthFactor * 0.4; // 0.75 to 1.15
              const opacity = 0.65 + depthFactor * 0.35; // 0.65 to 1.0
              const zIndex = Math.round(depthFactor * 100);

              return (
                <div
                  key={dish.id}
                  className="absolute pointer-events-auto transition-transform duration-75 group flex flex-col items-center justify-center"
                  style={{
                    transform: `translate(${x}px, ${y}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                >
                  {/* Dish Cutout Image Container */}
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
                    
                    {/* Realistic Ground Drop Shadow (Contracts & darkens when closer, expands/softens when back) */}
                    <div 
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/80 blur-md pointer-events-none transition-all duration-100"
                      style={{
                        width: `${110 * scale}px`,
                        height: `${22 * scale}px`,
                        opacity: 0.6 + depthFactor * 0.3,
                      }}
                    />

                    {/* Dish Cutout Image */}
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = dish.fallback;
                      }}
                    />

                    {/* Hover Tooltip Pill */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap bg-[#101820]/90 text-[#F0822A] px-3 py-1 rounded-full text-xs font-mono border border-[#F0822A]/30 shadow-xl">
                      {dish.name}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* Live Footer Info Ticker */}
      <div className="w-full max-w-7xl mx-auto z-10 pt-8 border-t border-[#FAF4F3]/10 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-[#FAF4F3]/70 gap-4">
        <div className="flex items-center gap-3">
          <Compass className="w-4 h-4 text-[#F0822A]" />
          <span>LOCATION: Anthem Circle, VIP Road, Vesasu, Surat, Gujarat</span>
        </div>
        <div className="flex items-center gap-4">
          <span>TIMINGS: 11:00 AM – 3:00 PM | 6:30 PM – 11:00 PM</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
