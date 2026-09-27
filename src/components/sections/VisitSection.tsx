import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Compass, ExternalLink, Utensils } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';

export const VisitSection: React.FC = () => {
  return (
    <section id="visit" className="w-full bg-[#101820] text-[#FAF8F3] py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden select-none">
      
      {/* Background Exterior Night Visual */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <img
          src="/cruise-sketch-detailed.png"
          alt="Boat & Bites Exterior Location"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/80 to-[#101820]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Heading & Final Boat Stop */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <span className="font-mono text-xs text-[#F0822A] tracking-widest uppercase font-semibold">
            10 / DESTINATION &amp; LOCATION
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#FAF8F3] leading-tight">
            Find <br />
            <span className="italic text-[#F0822A]">The Boat</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#FAF8F3]/80 font-light max-w-md leading-relaxed">
            Located at Anthem Circle, New Outer Ring Road, Surat. Drop by for lunch or dinner and step onto the deck.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F0822A]/20 border border-[#F0822A]/40 flex items-center justify-center text-[#F0822A]">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <span className="font-mono text-xs text-[#FAF8F3]/90 tracking-widest uppercase">
              THE BOAT HAS ARRIVED AT DECK.
            </span>
          </div>
        </div>

        {/* Right Floating Cream Information Panel */}
        <div className="lg:col-span-6 bg-[#FAF8F3] text-[#171717] p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6 border-4 border-[#EEE8DC]">
          <h3 className="font-serif text-2xl font-medium text-[#101820] border-b border-stone-200 pb-3">
            Visit Information
          </h3>

          <div className="space-y-4 font-sans text-xs sm:text-sm">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#F0822A] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-[#101820]">Address</h4>
                <p className="text-[#6F6A63] font-light leading-relaxed">
                  {restaurantData.address.full}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#F0822A] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-[#101820]">Timings</h4>
                <p className="text-[#6F6A63] font-light">
                  Lunch: {restaurantData.hours.lunch} <br />
                  Dinner: {restaurantData.hours.dinner}
                </p>
              </div>
            </div>

            {/* Phones */}
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#F0822A] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-[#101820]">Contact &amp; Booking</h4>
                <div className="flex flex-wrap gap-3 mt-1">
                  {restaurantData.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="font-mono text-xs text-[#101820] font-semibold hover:text-[#F0822A] bg-stone-100 px-3 py-1 rounded-full border border-stone-200"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={restaurantData.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#101820] text-white py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#F0822A] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Google Maps Direction</span>
            </a>

            <a
              href="#menu"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F0822A] text-white py-3.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#D96518] transition-colors shadow-md"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Menu</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
