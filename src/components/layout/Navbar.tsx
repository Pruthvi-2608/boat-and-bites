import React, { useState, useEffect } from 'react';
import { Menu, Phone, Navigation } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';
import { MobileDrawer } from './MobileDrawer';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Crisp single-line nav links
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Atmosphere', href: '#atmosphere' },
    { label: 'Menu', href: '#menu' },
    { label: 'Banquet', href: '#banquet' },
    { label: 'From Our Table', href: '#reels' },
    { label: 'Moments', href: '#gallery' },
    { label: 'Visit', href: '#visit' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-border py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none"
            aria-label="Boat & Bites Home"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white p-1 shadow-md transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img
                src="/logo.png"
                alt="Boat & Bites Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span
                className={`font-serif text-lg sm:text-2xl font-bold tracking-tight leading-none transition-colors ${
                  isScrolled ? 'text-brand-ink' : 'text-white'
                }`}
              >
                BOAT & BITES
              </span>
              <span
                className={`text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.18em] font-sans font-semibold mt-0.5 whitespace-nowrap ${
                  isScrolled ? 'text-brand-orange' : 'text-brand-orange'
                }`}
              >
                Cruise Theme Dining • Surat
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`group relative text-xs uppercase tracking-[0.14em] font-sans font-semibold whitespace-nowrap transition-colors ${
                  isScrolled
                    ? 'text-brand-text hover:text-brand-orange'
                    : 'text-white/90 hover:text-brand-orange'
                }`}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-brand-orange transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0 whitespace-nowrap">
            <a
              href={`tel:${restaurantData.phones[0]}`}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-sans font-semibold tracking-wider whitespace-nowrap transition-all duration-200 ${
                isScrolled
                  ? 'bg-brand-ink text-white hover:bg-brand-orange'
                  : 'bg-white/15 text-white hover:bg-brand-orange backdrop-blur-sm border border-white/20'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span className="whitespace-nowrap">{restaurantData.phones[0]}</span>
            </a>

            <a
              href={restaurantData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-orange text-white text-xs font-sans font-semibold uppercase tracking-wider hover:bg-brand-orange-dark transition-all duration-200 shadow-sm whitespace-nowrap"
            >
              <Navigation className="w-3.5 h-3.5 shrink-0" />
              <span>Visit</span>
            </a>
          </div>

          {/* Mobile-First Actions (Phone + Menu Toggle) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={`tel:${restaurantData.phones[0]}`}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-orange text-white shadow-sm transition-transform active:scale-95"
              aria-label={`Call ${restaurantData.phones[0]}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-xl transition-colors shrink-0 ${
                isScrolled
                  ? 'text-brand-ink hover:bg-brand-sand'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
