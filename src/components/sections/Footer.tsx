import React from 'react';
import { Instagram } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0B1015] text-[#FAF8F3] pt-16 pb-12 px-4 sm:px-8 border-t border-white/10 select-none overflow-hidden flex flex-col items-center justify-between min-h-[420px]">
      
      <div className="max-w-7xl mx-auto w-full space-y-12 flex flex-col items-center text-center">
        
        {/* Navigation Bar Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-mono text-xs uppercase tracking-widest text-[#FAF8F3]/70">
          <a href="#voyage" className="hover:text-[#F0822A] transition-colors">Voyage Deck</a>
          <a href="#vessel" className="hover:text-[#F0822A] transition-colors">The Vessel</a>
          <a href="#atmosphere" className="hover:text-[#F0822A] transition-colors">Atmosphere</a>
          <a href="#menu" className="hover:text-[#F0822A] transition-colors">Unlimited Menu</a>
          <a href="#banquets" className="hover:text-[#F0822A] transition-colors">Banquets</a>
          <a href="#story" className="hover:text-[#F0822A] transition-colors">Our Story</a>
          <a href="#visit" className="hover:text-[#F0822A] transition-colors">Visit Us</a>
        </div>

        {/* Cocova-Style Top Metadata Line */}
        <div className="font-mono text-[10px] sm:text-xs text-[#FAF8F3]/60 tracking-widest uppercase border-t border-b border-white/10 py-3 w-full max-w-4xl">
          © BOAT &amp; BITES {new Date().getFullYear()} · ANTHEM CIRCLE, SURAT · DINNER HAS A DECK
        </div>

        {/* COCOVA-STYLE GIANT STYLIZED BRAND TITLE */}
        <div className="w-full pt-4 pb-2 flex flex-col items-center justify-center overflow-hidden">
          <h1 className="font-serif text-[11vw] sm:text-[10vw] md:text-[9.5vw] font-light leading-none tracking-[0.12em] text-[#FAF8F3] uppercase whitespace-nowrap opacity-95 transition-opacity hover:opacity-100 selection:bg-[#F0822A]">
            BOAT <span className="italic text-[#F0822A] font-normal">&amp;</span> BITES
          </h1>
          <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#F0822A]/40 to-transparent mt-4" />
        </div>

        {/* Bottom Social & Rights Bar */}
        <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between font-mono text-[10px] text-[#FAF8F3]/40 gap-4">
          <p>Anthem Circle, VIP Road, Saniya Hemad, Surat, Gujarat 395006</p>

          <a
            href={restaurantData.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[#F0822A] hover:underline tracking-wider uppercase"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@{restaurantData.instagram.handle}</span>
          </a>
        </div>

      </div>
    </footer>
  );
};
