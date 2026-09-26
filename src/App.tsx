import React, { useState } from 'react';
import { SplashScreen } from './components/common/SplashScreen';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/hero/Hero';
import { VoyageDeck } from './components/voyage/VoyageDeck';
import { Atmosphere } from './components/home/Atmosphere';
import { VoyageRitual } from './components/home/VoyageRitual';
import { MenuSection } from './components/menu/MenuSection';
import { BanquetSection } from './components/home/BanquetSection';
import { Gallery } from './components/home/Gallery';
import { Story } from './components/home/Story';
import { VisitSection } from './components/home/VisitSection';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF4F3] text-[#101820] flex flex-col font-sans selection:bg-[#F0822A] selection:text-white">
      {/* Splash Screen */}
      <SplashScreen onComplete={() => setIsLoaded(true)} minDuration={2800} />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <VoyageDeck />
        <Atmosphere />
        <VoyageRitual />
        <MenuSection />
        <BanquetSection />
        <Gallery />
        <Story />
        <VisitSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
