import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, ShieldCheck, Utensils, Users } from 'lucide-react';
import { AnimatedWave } from '../common/AnimatedWave';

export const BrandIntro: React.FC = () => {
  return (
    <section id="intro" className="relative py-20 md:py-28 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Serif Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-[0.25em] text-brand-orange mb-4">
              <Anchor className="w-3.5 h-3.5" />
              <span>The Boat & Bites Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-ink font-normal leading-[1.14] tracking-tight">
              A place where families gather, laughter fills the air, and every meal turns into a lasting memory.
            </h2>

            <div className="w-20 h-1 bg-brand-orange my-8 rounded-full" />

            <p className="font-sans text-base md:text-lg text-brand-muted leading-relaxed max-w-xl">
              Conceived as Gujarat’s very first cruise-themed dining sanctuary, Boat & Bites transports you to a waterfront escape without ever leaving Surat. Set upon Anthem Circle, our architecture combines nautical deck styling with a passion for 100% pure vegetarian culinary excellence.
            </p>
          </motion.div>

          {/* Right Column: Verified Pillars & Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-brand-border/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full pointer-events-none" />

              <h3 className="font-serif text-2xl text-brand-ink mb-6">
                Authentic Pillars
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-brand-orange/10 text-brand-orange shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-brand-ink">
                      100% Pure Vegetarian
                    </h4>
                    <p className="text-xs md:text-sm text-brand-muted font-sans mt-0.5 leading-relaxed">
                      Every dish from our sizzlers to biryanis is crafted in a strictly pure vegetarian kitchen using fresh, premium ingredients.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-brand-wave-blue/10 text-brand-wave-blue shrink-0 mt-1">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-brand-ink">
                      Bespoke Multi-Cuisine
                    </h4>
                    <p className="text-xs md:text-sm text-brand-muted font-sans mt-0.5 leading-relaxed">
                      Ten distinct culinary categories: Sizzlers, Tandoor, Basmati Biryanis, Punjabi Pakwaan, Italian Pastas, and artisanal Mocktails.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 shrink-0 mt-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-brand-ink">
                      Grand Gatherings
                    </h4>
                    <p className="text-xs md:text-sm text-brand-muted font-sans mt-0.5 leading-relaxed">
                      Indoor banquet accommodating 300–600 guests, plus a sprawling outdoor lawn for 700–1,000+ celebrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <AnimatedWave variant="subtle" height={20} />
      </div>
    </section>
  );
};
