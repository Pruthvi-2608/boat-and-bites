import React, { useState } from 'react';
import { SplashScreen } from './components/common/SplashScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { BrandIntro } from './components/home/BrandIntro';
import { Atmosphere } from './components/home/Atmosphere';
import { MenuSection } from './components/menu/MenuSection';
import { BanquetSection } from './components/home/BanquetSection';
import { ReelsSection } from './components/home/ReelsSection';
import { Gallery } from './components/home/Gallery';
import { Story } from './components/home/Story';
import { VisitSection } from './components/home/VisitSection';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-text flex flex-col font-sans selection:bg-brand-orange selection:text-white">
      {/* 00: Boat & Bites Nautical Loading Splash Screen */}
      <SplashScreen onComplete={() => setIsLoaded(true)} minDuration={1800} />

      {/* 01: Fixed/Scrolled Navigation Bar (Single-line guaranteed) */}
      <Navbar />

      <main className="flex-1">
        {/* 02: Cinematic Hero with Stream Video Background */}
        <Hero />

        {/* 03: Editorial Brand Philosophy */}
        <BrandIntro />

        {/* 04: Cruise Atmosphere & Experience with Proper Dining Table Photo */}
        <Atmosphere />

        {/* 05: Primary Feature: Unified Menu Section (5s Cruise Carousel + Signatures + Directory) */}
        <MenuSection />

        {/* 06: Grand Banquet Hall (300-600) & Outdoor Lawn (700-1000+) */}
        <BanquetSection />

        {/* 07: Viral Reels & Table Moments (Kept intact - user confirmed best!) */}
        <ReelsSection />

        {/* 08: Dual-Row Continuous Sliding Moments Gallery (Top right, Bottom left) */}
        <Gallery />

        {/* 09: Verified Heritage Story & Concept */}
        <Story />

        {/* 10: Visit, Timings, One-Tap Calling & Directions */}
        <VisitSection />
      </main>

      {/* 11: Deep Ink Luxury Footer */}
      <Footer />
    </div>
  );
}

export default App;
