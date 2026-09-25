import React from 'react';
import { Phone, MapPin, Clock, Instagram, ExternalLink, Heart } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';
import { AnimatedWave } from '../common/AnimatedWave';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-brand-ink text-brand-cream/80 pt-16 md:pt-20 pb-10 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-1.5 shadow-md">
                <img
                  src="/logo.png"
                  alt="Boat & Bites Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  BOAT & BITES
                </span>
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-brand-orange font-semibold">
                  {restaurantData.tagline}
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-brand-cream/70 leading-relaxed mb-6 max-w-md">
              Surat's premier cruise and boat-themed pure vegetarian restaurant. Dedicated to authentic multicuisine flavors, memorable family gatherings, and grand celebrations at Anthem Circle.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-sans">
              <span className="px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/10">
                100% Pure Vegetarian
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                Gujarat's 1st Cruise Theme
              </span>
              <span className="px-3 py-1 rounded-full bg-brand-wave-blue/30 text-indigo-300 border border-brand-wave-blue/40">
                Banquet & Lawn Venue
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg text-white font-medium mb-4 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <a href="#home" className="hover:text-brand-orange transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#atmosphere" className="hover:text-brand-orange transition-colors">
                  Atmosphere & Spaces
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-brand-orange transition-colors">
                  Cruise Menu & Signatures
                </a>
              </li>
              <li>
                <a href="#banquet" className="hover:text-brand-orange transition-colors">
                  Banquet & Lawn Spaces
                </a>
              </li>
              <li>
                <a href="#reels" className="hover:text-brand-orange transition-colors">
                  From Our Table (Reels)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-orange transition-colors">
                  Guest Moments
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-brand-orange transition-colors">
                  Hours & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg text-white font-medium mb-4 pb-2 border-b border-white/10">
              Visit & Contact
            </h4>
            <div className="space-y-3.5 font-sans text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                <span className="text-brand-cream/80 leading-snug">
                  {restaurantData.address.full}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Daily Timings</p>
                  <p className="text-brand-cream/70 text-xs">
                    Lunch: {restaurantData.hours.lunch}
                  </p>
                  <p className="text-brand-cream/70 text-xs">
                    Dinner: {restaurantData.hours.dinner}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                <div className="space-y-1">
                  {restaurantData.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="block text-brand-cream hover:text-brand-orange transition-colors font-medium text-xs md:text-sm"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={restaurantData.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>@{restaurantData.instagram.handle}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="py-6">
          <AnimatedWave variant="dark" height={20} />
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs font-sans text-brand-cream/50 gap-4">
          <p>© {new Date().getFullYear()} Boat & Bites Restaurant. All verified rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted for <span className="text-white font-medium">Boat & Bites, Surat</span> with authentic restaurant media
          </p>
        </div>
      </div>
    </footer>
  );
};
