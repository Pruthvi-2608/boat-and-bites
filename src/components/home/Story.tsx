import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Ship, Heart, Shield, CheckCircle2 } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-sand">
              <img
                src="/menu/unnamed.webp"
                alt="Boat & Bites Cruise Shape"
                className="w-full h-auto object-contain bg-brand-ink/5 p-4"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-brand-orange text-white text-xs font-sans font-semibold uppercase tracking-wider shadow-md">
                Est. Surat
              </div>
            </div>

            {/* Floating verification badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-brand-ink text-white p-5 rounded-2xl shadow-xl max-w-xs border border-white/10 hidden sm:block">
              <div className="flex items-center gap-2 text-brand-orange text-xs font-sans uppercase font-bold tracking-widest mb-1">
                <Shield className="w-4 h-4" />
                <span>Verified Heritage</span>
              </div>
              <p className="font-serif text-base text-brand-cream/90 leading-snug">
                {restaurantData.tagline}
              </p>
            </div>
          </motion.div>

          {/* Editorial Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-xs uppercase font-sans font-bold tracking-[0.25em] text-brand-orange mb-3">
              Our Story & Origin
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-ink font-normal leading-[1.12] mb-6">
              A Vision to Bring Cruise Dining to the Diamond City.
            </h2>

            <p className="font-sans text-base md:text-lg text-brand-muted leading-relaxed mb-6">
              Built on the idea that extraordinary meals belong in extraordinary settings, Boat & Bites was established as Gujarat’s premier boat and cruise-themed restaurant. Our physical space was engineered to mirror the sweeping lines of a sea cruiser — complete with deck seating, intimate booths, and open party lawns.
            </p>

            <p className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-8">
              At the heart of the experience is an unwavering commitment to 100% pure vegetarian culinary craft. From traditional clay tandoors and clay pot handi biryanis to authentic sizzler plates and vibrant fruit mocktails, every recipe is made to be savored together.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4 border-t border-brand-border">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-medium text-brand-ink">
                    Authentic Cruise Silhouette
                  </h4>
                  <p className="text-xs text-brand-muted font-sans mt-0.5">
                    Architectural boat design echoed throughout the dining room and custom die-cut menus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-medium text-brand-ink">
                    100% Pure Vegetarian
                  </h4>
                  <p className="text-xs text-brand-muted font-sans mt-0.5">
                    Strict pure veg preparation adhering to the highest quality, freshness, and hygiene standards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
