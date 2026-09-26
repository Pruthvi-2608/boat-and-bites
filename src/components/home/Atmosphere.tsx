import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Sunset, Sparkles, Utensils, Award } from 'lucide-react';

export const Atmosphere: React.FC = () => {
  return (
    <section id="atmosphere" className="py-20 md:py-28 bg-[#FAF4F3] text-[#101820] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Experience"
          title="Step Aboard Gujarat's First Cruise Theme Restaurant"
          description="Designed to evoke the spirit of a luxury sea cruiser, Boat & Bites pairs nautical ambiance with warm Gujarati hospitality."
          className="mb-14 md:mb-20"
        />

        {/* Asymmetrical Editorial Atmosphere Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#101820] text-white rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden min-h-[480px] shadow-xl group"
          >
            {/* Dining Deck Image */}
            <img
              src="/cruise-sketch.jpg"
              alt="Boat & Bites Dining Deck Setup"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.currentTarget.src = '/menu/unnamed.webp';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/60 to-transparent" />

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0822A] text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-sm">
                <Utensils className="w-3.5 h-3.5" />
                The Cruise Deck Dining
              </span>
              <span className="text-xs font-mono text-white/90 tracking-widest uppercase bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                Anthem Circle • Surat
              </span>
            </div>

            {/* Bottom Copy */}
            <div className="relative z-10 mt-28">
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3 leading-snug">
                “Views that wow your feed, bites that win your heart.”
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#FAF4F3]/80 max-w-lg leading-relaxed font-light">
                Whether dining inside our cruise cabin salon or beneath the open evening skies, our nautical architecture creates an authentic waterfront mood in the heart of Surat.
              </p>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {/* Card 1: Family & Date Dining */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1 bg-white rounded-3xl p-6 sm:p-8 border border-[#101820]/10 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-[#F0822A]/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#F0822A]/10 text-[#F0822A]">
                  <Sunset className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-[#101820]">
                    Intimate &amp; Family Dining
                  </h4>
                  <p className="text-xs font-mono text-[#F0822A] uppercase tracking-wider">
                    Lunch: 11 AM - 3 PM • Dinner: 6:30 PM - 11 PM
                  </p>
                </div>
              </div>
              <p className="font-sans text-sm text-[#101820]/75 leading-relaxed font-light">
                Candlelight evening ambiance, spacious booth seating, and joyful family tables crafted for conversations and celebration.
              </p>
            </motion.div>

            {/* Card 2: Aesthetic Photography Corners */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex-1 bg-white rounded-3xl p-6 sm:p-8 border border-[#101820]/10 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-[#3C3181]/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-[#3C3181]/10 text-[#3C3181]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-[#101820]">
                    Viral Photo Corners
                  </h4>
                  <p className="text-xs font-mono text-[#3C3181] uppercase tracking-wider">
                    Surat's Most Instagrammed Cruise Deck
                  </p>
                </div>
              </div>
              <p className="font-sans text-sm text-[#101820]/75 leading-relaxed font-light">
                Capture unforgettable memories at our ship wheel photo zone, deck rails, and warm evening illuminations.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
