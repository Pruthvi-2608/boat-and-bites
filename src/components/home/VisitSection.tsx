import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { MapPin, Phone, Clock, Navigation, Instagram, ExternalLink, Sparkles } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';

export const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="py-20 md:py-32 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Plan Your Visit"
          title="Visit Boat & Bites Surat"
          description="We look forward to welcoming you aboard for an unforgettable lunch or dinner gathering."
          className="mb-14 md:mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Info Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-brand-border/70 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-brand-ink">
                    Anthem Circle, Surat
                  </h3>
                  <p className="text-xs uppercase font-sans tracking-widest text-brand-orange font-semibold">
                    New Outer Ring Road
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="bg-brand-sand/30 rounded-2xl p-5 mb-8 border border-brand-border/50">
                <span className="text-xs uppercase font-sans font-bold text-brand-muted tracking-wider block mb-1">
                  Full Location
                </span>
                <p className="font-serif text-lg text-brand-ink leading-snug">
                  {restaurantData.address.full}
                </p>
              </div>

              {/* Verified Hours & Timing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-brand-cream border border-brand-border/50">
                  <div className="flex items-center gap-2 text-brand-orange text-xs font-sans uppercase font-bold tracking-wider mb-1.5">
                    <Clock className="w-4 h-4" />
                    <span>Lunchtime</span>
                  </div>
                  <p className="font-serif text-xl text-brand-ink font-medium">
                    {restaurantData.hours.lunch}
                  </p>
                  <p className="text-xs font-sans text-brand-muted mt-1">
                    Featuring Unlimited Feast (₹350/-)
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-brand-cream border border-brand-border/50">
                  <div className="flex items-center gap-2 text-brand-wave-blue text-xs font-sans uppercase font-bold tracking-wider mb-1.5">
                    <Clock className="w-4 h-4" />
                    <span>Dinner</span>
                  </div>
                  <p className="font-serif text-xl text-brand-ink font-medium">
                    {restaurantData.hours.dinner}
                  </p>
                  <p className="text-xs font-sans text-brand-muted mt-1">
                    A la carte, Sizzlers & Waterfront Mood
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA action row */}
            <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center gap-4">
              <a
                href={restaurantData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-sans text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Maps)</span>
              </a>

              <a
                href={`tel:${restaurantData.phones[0]}`}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-brand-ink hover:bg-brand-ink-soft text-white font-sans text-xs md:text-sm font-semibold tracking-wider uppercase transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call {restaurantData.phones[0]}</span>
              </a>
            </div>
          </motion.div>

          {/* Connect & Social Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-brand-ink text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-sans font-medium uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                <span>Verified Direct Contact</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-3">
                Reach Our Team Directly
              </h3>

              <p className="font-sans text-sm text-brand-cream/80 leading-relaxed mb-8">
                For table reservations, private cruise deck bookings, or grand banquet inquiries, connect with our management team:
              </p>

              <div className="space-y-4 mb-8">
                {restaurantData.phones.map((phone, idx) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-brand-orange/20 text-brand-orange">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-sans text-brand-cream/60 block">
                          {idx === 0 ? 'Primary Booking Line' : 'Alternate Line'}
                        </span>
                        <span className="font-sans text-base font-semibold text-white">
                          {phone}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-sans text-brand-orange font-semibold group-hover:translate-x-1 transition-transform">
                      Call Now →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Instagram Profile Card */}
            <div className="pt-6 border-t border-white/10">
              <a
                href={restaurantData.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-brand-orange/20 border border-white/15 hover:border-brand-orange transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-sans text-white/70 block">
                      Instagram Official
                    </span>
                    <span className="font-sans text-sm font-bold text-white">
                      @{restaurantData.instagram.handle}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
