import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Volume2, VolumeX, Sparkles, Phone, Compass } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';
import { viralReels } from '../../data/instagramMedia';
import { AnimatedWave } from '../common/AnimatedWave';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Top reel video for cinematic background
  const heroVideo = viralReels[0];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-brand-ink">
      {/* Background Video with Poster Fallback */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={heroVideo.videoUrl}
          poster={heroVideo.displayUrl}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover object-center scale-105 transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-55' : 'opacity-40'
          }`}
        />
        {/* Layered cinematic gradients for flawless text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/60 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/80 via-transparent to-brand-ink/80" />
      </div>

      {/* Audio toggle in corner */}
      <button
        onClick={toggleSound}
        className="absolute top-20 sm:top-24 right-4 sm:right-6 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white backdrop-blur-md transition-all border border-white/10 active:scale-95"
        aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-orange" />}
      </button>

      {/* Hero Content - Mobile First Padding & Sizing */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 sm:pb-20 flex flex-col items-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs md:text-sm font-sans font-medium uppercase tracking-[0.16em] sm:tracking-[0.2em] mb-4 sm:mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-brand-orange shrink-0" />
          <span>Gujarat's First Cruise Theme Restaurant</span>
        </motion.div>

        {/* Main Serif Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-serif text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white leading-[1.02] drop-shadow-md"
        >
          BOAT & BITES
        </motion.h1>

        {/* Verified Editorial Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-4 sm:mt-6 font-serif italic text-lg sm:text-2xl md:text-3xl text-brand-sand max-w-2xl font-light px-2"
        >
          “This boat doesn’t move, but the food will move you.”
        </motion.p>

        {/* Verified Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm md:text-base text-brand-cream/80 max-w-xl leading-relaxed px-2"
        >
          100% Pure Vegetarian Multi-Cuisine • Gourmet Sizzlers • Handcrafted Mocktails • Anthem Circle, Surat
        </motion.p>

        {/* Verified Offer Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-4 sm:mt-5 inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-lg bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-[11px] sm:text-xs font-sans tracking-wide"
        >
          <span className="font-semibold text-white">Daily Special:</span>
          <span>Unlimited Lunch Feast at ₹350/- (11 AM - 3 PM)</span>
        </motion.div>

        {/* Action Buttons - Mobile First Full Width with 48px Touch Target */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-brand-orange/30 hover:scale-[1.02] flex items-center justify-center"
          >
            Explore Cruise Menu
          </a>

          <a
            href={`tel:${restaurantData.phones[0]}`}
            className="w-full sm:w-auto min-h-[48px] flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-[1.02]"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>Call For Table</span>
          </a>

          <a
            href="#atmosphere"
            className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-transparent hover:bg-white/5 text-brand-sand font-sans text-xs sm:text-sm font-medium tracking-wider transition-all duration-300"
          >
            <Compass className="w-4 h-4 text-brand-sand" />
            <span>The Experience</span>
          </a>
        </motion.div>
      </div>

      {/* Decorative Wave at the Bottom */}
      <div className="absolute bottom-0 inset-x-0 z-20">
        <AnimatedWave variant="vibrant" height={28} />
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#intro"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center text-brand-sand/60 hover:text-brand-orange transition-colors"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] uppercase font-sans tracking-[0.25em] mb-1">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
