import React, { useState } from 'react';
import { FirstLoadChoreography } from './components/hero/FirstLoadChoreography';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/hero/Hero';
import { Boarding } from './components/sections/Boarding';
import { Vessel } from './components/sections/Vessel';
import { DayNight } from './components/sections/DayNight';
import { Atmosphere } from './components/sections/Atmosphere';
import { Table } from './components/sections/Table';
import { PortholeTransition } from './components/sections/PortholeTransition';
import { MenuExperience } from './components/sections/MenuExperience';
import { Logbook } from './components/sections/Logbook';
import { Banquets } from './components/sections/Banquets';
import { Story } from './components/sections/Story';
import { VisitSection } from './components/sections/VisitSection';
import { BoatPath } from './components/brand/BoatPath';
import { Footer } from './components/sections/Footer';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#171717] flex flex-col font-sans selection:bg-[#F0822A] selection:text-white relative">
      {/* 2.4s Editorial Opening Choreography */}
      {!isLoaded && <FirstLoadChoreography onComplete={() => setIsLoaded(true)} />}

      {/* Global Deck Control Navbar */}
      <Navbar />

      {/* Main Art-Directed Editorial Journey */}
      <main className="flex-1">
        <Hero />
        <Boarding />
        <Vessel />
        <DayNight />
        <Atmosphere />
        <Table />
        <PortholeTransition />
        <MenuExperience />
        <Logbook />
        <Banquets />
        <Story />
        <VisitSection />
      </main>

      {/* Floating Boat Wave Marker */}
      <BoatPath />

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

export default App;
