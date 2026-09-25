import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Ship, Sunset, Sparkles, Utensils } from 'lucide-react';

export const Atmosphere: React.FC = () => {
  // Verified authentic dining table image from Boat & Bites Instagram dataset
  const diningImage = "https://scontent-cdg6-1.cdninstagram.com/v/t51.82787-15/752698841_17927130339364950_4474972337951107949_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=Mzk0NDY5NzYzOTI3MzI2MjcwMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTU3MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=QzfnGSphmXAQ7kNvwFPWEgx&_nc_oc=AdqdIGbtq27-5uHBfZfBycVZqN0Juhzdnj1Mw0_EzC5Z7o31vi671ZlrBCkq_hQ2uY0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-cdg6-1.cdninstagram.com&_nc_gid=xNsdN7IGirBQigXG-To06Q&_nc_ss=7a22e&oh=00_AQJgzc7kqCmz5apHYMC9NpRBjqbccYE4wwb7iakjQiPjZg&oe=6ABC7C7C";

  return (
    <section id="atmosphere" className="py-20 md:py-28 bg-brand-sand/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Experience"
          title="Step Aboard Gujarat's First Cruise Theme Restaurant"
          description="Designed to evoke the spirit of a luxury sea cruiser, Boat & Bites pairs nautical ambiance with warm Gujarati hospitality."
          className="mb-14 md:mb-20"
        />

        {/* Asymmetrical Editorial Atmosphere Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Feature Card (Left - 7 cols) with PROPER DINING IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-brand-ink text-white rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden min-h-[480px] shadow-xl group"
          >
            {/* Proper dining setup image */}
            <img
              src={diningImage}
              alt="Boat & Bites Dining Table Setup"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/50 to-transparent" />

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-sm">
                <Utensils className="w-3.5 h-3.5" />
                The Cruise Deck Dining
              </span>
              <span className="text-xs font-sans text-brand-sand/90 tracking-widest uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                Anthem Circle • Surat
              </span>
            </div>

            {/* Bottom Copy */}
            <div className="relative z-10 mt-28">
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3 leading-snug">
                “Views that wow your feed, bites that win your heart.”
              </h3>
              <p className="font-sans text-sm sm:text-base text-brand-cream/80 max-w-lg leading-relaxed">
                Whether dining inside our cruise cabin salon or beneath the open evening skies, our nautical architecture creates an authentic waterfront mood in the heart of Surat.
              </p>
            </div>
          </motion.div>

          {/* Right Column (2 stacked cards - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {/* Card 1: Family & Date Dining */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1 bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/70 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-brand-orange/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-brand-orange/10 text-brand-orange">
                  <Sunset className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-brand-ink">
                    Intimate & Family Dining
                  </h4>
                  <p className="text-xs font-sans text-brand-muted uppercase tracking-wider">
                    Lunch: 11 AM - 3 PM • Dinner: 6:30 PM - 11 PM
                  </p>
                </div>
              </div>
              <p className="font-sans text-sm text-brand-muted leading-relaxed">
                Candlelight evening ambiance, spacious booth seating, and joyful family tables crafted for conversations and celebration.
              </p>
            </motion.div>

            {/* Card 2: Aesthetic Photography Corners */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex-1 bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/70 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-brand-wave-blue/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-brand-wave-blue/10 text-brand-wave-blue">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-brand-ink">
                    Aesthetic Corners
                  </h4>
                  <p className="text-xs font-sans text-brand-muted uppercase tracking-wider">
                    Instagrammable Backdrops
                  </p>
                </div>
              </div>
              <p className="font-sans text-sm text-brand-muted leading-relaxed">
                Every corner of our cruise structure is designed for memorable photos and celebratory reels with pure vegetarian indulgence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
