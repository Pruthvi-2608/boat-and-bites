import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { Users, Sparkles, Building, Trees, Phone, CalendarCheck } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';

export const BanquetSection: React.FC = () => {
  return (
    <section id="banquet" className="py-20 md:py-32 bg-brand-sand/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Grand Celebrations"
          title="Banquet Hall & Open-Air Lawn"
          description="From intimate family milestones to grand weddings and corporate galas, host your occasions in Surat's most distinctive cruise-inspired venue."
          className="mb-14 md:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Indoor Hall */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-brand-border/70 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:border-brand-orange/40 transition-colors"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6">
                <Building className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase font-sans font-bold tracking-widest text-brand-orange block mb-2">
                Climate-Controlled Elegance
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-brand-ink font-normal mb-3">
                Indoor Banquet Hall
              </h3>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sand/50 text-brand-ink text-xs font-sans font-semibold mb-6">
                <Users className="w-3.5 h-3.5 text-brand-orange" />
                <span>Capacity: 300 to 600 Guests</span>
              </div>

              <p className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-6">
                Sophisticated indoor banquet setting with luxurious banquet seating, audio-visual capabilities, tailored multi-cuisine catering, and ambient lighting tailored for engagements, corporate conferences, and family anniversaries.
              </p>

              <ul className="space-y-2 text-xs md:text-sm font-sans text-brand-text mb-8">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  <span>300 – 600 guest seating configurations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  <span>100% Pure vegetarian banquet feast menu</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Dedicated banquet event management</span>
                </li>
              </ul>
            </div>

            <a
              href={`tel:${restaurantData.phones[0]}`}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brand-ink hover:bg-brand-orange text-white font-sans text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Inquire Indoor Hall</span>
            </a>
          </motion.div>

          {/* Card 2: Outdoor Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-brand-ink text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-orange flex items-center justify-center mb-6">
                <Trees className="w-6 h-6" />
              </div>

              <span className="text-xs uppercase font-sans font-bold tracking-widest text-brand-orange block mb-2">
                Under The Surat Night Sky
              </span>

              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3">
                Expansive Outdoor Area
              </h3>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-sans font-semibold mb-6">
                <Users className="w-3.5 h-3.5 text-brand-orange" />
                <span>Capacity: 700 to 1,000+ Guests</span>
              </div>

              <p className="font-sans text-sm md:text-base text-brand-cream/80 leading-relaxed mb-6">
                Sprawling open-air lawn accommodating up to 1,000+ attendees. Perfect for grand wedding receptions, Sangeet evenings, large community gatherings, and gala celebrations with waterfront cruise views.
              </p>

              <ul className="space-y-2 text-xs md:text-sm font-sans text-brand-cream/90 mb-8">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Expansive 700 to 1,000+ guest gathering space</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Ample valet and guest parking at Anthem Circle</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Live food stations & mocktail bars</span>
                </li>
              </ul>
            </div>

            <a
              href={`tel:${restaurantData.phones[0]}`}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-sans text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Outdoor Lawn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
