import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Sparkles } from 'lucide-react';

export const Banquets: React.FC = () => {
  return (
    <section id="banquets" className="w-full bg-[#101820] text-[#FAF8F3] py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden select-none">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Full-Bleed Venue Image */}
        <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] group">
          <img
            src="/cruise-sketch-detailed.png"
            alt="Boat & Bites Banquet Lawn & Hall"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-4 left-4 font-mono text-[9px] text-[#F0822A] tracking-widest uppercase bg-black/60 px-3 py-1 rounded-full border border-[#F0822A]/30">
            OPEN-AIR LAWN &amp; INDOOR HALL
          </span>
        </div>

        {/* Right Cream Editorial Overlap Panel */}
        <div className="lg:col-span-5 bg-[#FAF8F3] text-[#171717] p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6 border-4 border-[#EEE8DC]">
          <span className="font-mono text-xs text-[#F0822A] tracking-widest uppercase font-semibold">
            08 / BANQUETS &amp; CELEBRATIONS
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#101820] leading-tight">
            Gather On <span className="italic text-[#F0822A]">The Deck</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#6F6A63] font-light leading-relaxed">
            Host your special milestones, weddings, receptions, and family celebrations at Surat's landmark waterfront venue.
          </p>

          <div className="space-y-4 pt-2 border-t border-stone-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F0822A]/10 text-[#F0822A] flex items-center justify-center shrink-0 mt-0.5">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-base font-medium text-[#101820]">Indoor AC Banquet Hall</h4>
                <p className="font-mono text-xs text-[#7C5A38]">300 to 600 Guests Capacity</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#F0822A]/10 text-[#F0822A] flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-base font-medium text-[#101820]">Open-Air Waterfront Lawn</h4>
                <p className="font-mono text-xs text-[#7C5A38]">700 to 1,000+ Guests Capacity</p>
              </div>
            </div>
          </div>

          <a
            href="tel:+919974615111"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#F0822A] hover:bg-[#D96518] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest shadow-md transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Inquire For Booking</span>
          </a>
        </div>

      </div>
    </section>
  );
};
