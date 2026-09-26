import React from 'react';
import { Anchor, Phone, MapPin, Clock, Instagram, Heart } from 'lucide-react';
import { BoatLogo } from '../common/BoatLogo';

export function Footer() {
  return (
    <footer className="w-full bg-[#101820] text-[#FAF4F3] pt-20 pb-12 px-4 md:px-8 border-t border-[#FAF4F3]/10 relative overflow-hidden">
      {/* Background Watermark Emblem */}
      <div className="absolute -bottom-16 -right-16 w-96 h-96 opacity-5 pointer-events-none flex items-center justify-center">
        <Anchor className="w-full h-full text-white" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#FAF4F3]/10 relative z-10">
        
        {/* Brand Overview */}
        <div className="md:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-[#F0822A]/40 bg-[#FAF4F3] flex items-center justify-center p-1">
              <img
                src="/logo.png"
                alt="Boat & Bites"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#FAF4F3]">BOAT &amp; BITES</h3>
              <p className="text-xs font-mono text-[#F0822A] tracking-widest uppercase">WATERFRONT DINING &#8226; SURAT</p>
            </div>
          </div>

          <p className="text-sm text-[#FAF4F3]/75 font-sans leading-relaxed font-light">
            Surat's iconic cruise restaurant offering an authentic Unlimited Pure Veg Dining experience on the water at Anthem Circle.
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#FAF4F3]/70">
            <span className="px-3 py-1 rounded-full border border-[#FAF4F3]/20 bg-[#FAF4F3]/5">UNLIMITED FEAST: ₹350/-</span>
            <span className="px-3 py-1 rounded-full border border-[#FAF4F3]/20 bg-[#FAF4F3]/5">100% PURE VEG</span>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-serif text-lg text-[#F0822A] font-medium">Quick Voyage</h4>
          <ul className="space-y-2.5 text-sm font-sans text-[#FAF4F3]/80">
            <li><a href="#voyage" className="hover:text-[#F0822A] transition-colors">Floating Memory Deck</a></li>
            <li><a href="#atmosphere" className="hover:text-[#F0822A] transition-colors">Cruise Atmosphere</a></li>
            <li><a href="#menu" className="hover:text-[#F0822A] transition-colors">Unlimited Feast Menu</a></li>
            <li><a href="#banquets" className="hover:text-[#F0822A] transition-colors">Banquets (300-1000+ Guests)</a></li>
            <li><a href="#visit" className="hover:text-[#F0822A] transition-colors">Location &amp; Timings</a></li>
          </ul>
        </div>

        {/* Contact & Location Details */}
        <div className="md:col-span-5 space-y-5">
          <h4 className="font-serif text-lg text-[#F0822A] font-medium">Deck Information</h4>

          <div className="space-y-3 text-sm text-[#FAF4F3]/80 font-sans">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#F0822A] shrink-0 mt-0.5" />
              <span>Anthem Circle, VIP Road, Vesasu, Surat, Gujarat 395007</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#F0822A] shrink-0" />
              <div className="flex flex-wrap gap-4 font-mono">
                <a href="tel:+919974615111" className="hover:text-[#F0822A] transition-colors">+91 99746 15111</a>
                <a href="tel:+919925892727" className="hover:text-[#F0822A] transition-colors">+91 99258 92727</a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#F0822A] shrink-0" />
              <span className="font-mono text-xs">Lunch: 11:00 AM - 3:00 PM | Dinner: 6:30 PM - 11:00 PM</span>
            </div>

            <div className="pt-2">
              <a
                href="https://instagram.com/boatandbites"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#FAF4F3]/20 hover:border-[#F0822A] px-4 py-2 rounded-full text-xs font-mono text-[#FAF4F3] hover:text-[#F0822A] transition-all bg-[#FAF4F3]/5"
              >
                <Instagram className="w-4 h-4 text-[#F0822A]" />
                <span>@boatandbites on Instagram</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-[#FAF4F3]/60 gap-4 relative z-10">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} BOAT &amp; BITES SURAT. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex items-center gap-1 text-[#FAF4F3]/50">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-[#F0822A] fill-[#F0822A]" />
          <span>for Surat Cruise Enthusiasts</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
