import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Utensils, Anchor } from 'lucide-react';
import { BrandMark } from '../brand/BrandMark';

const NAV_LINKS = [
  { name: 'Voyage Deck', href: '#voyage' },
  { name: 'Atmosphere', href: '#atmosphere' },
  { name: 'Unlimited Menu', href: '#menu' },
  { name: 'Banquets', href: '#banquets' },
  { name: 'Our Story', href: '#story' },
  { name: 'Visit Us', href: '#visit' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#171717]/10 py-3 shadow-sm'
            : 'bg-gradient-to-b from-[#101820]/80 via-[#101820]/40 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo Mark */}
          <a href="#" className="flex items-center">
            <BrandMark light={!isScrolled} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-xs uppercase tracking-widest font-medium transition-colors hover:text-[#F0822A] ${
                  isScrolled ? 'text-[#101820]' : 'text-[#FAF8F3]/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919974615111"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all border ${
                isScrolled
                  ? 'border-[#171717]/20 text-[#101820] hover:border-[#F0822A] hover:text-[#F0822A]'
                  : 'border-white/25 text-white hover:bg-white/10'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#F0822A]" />
              <span>+91 99746 15111</span>
            </a>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-[#F0822A] hover:bg-[#D96518] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md transition-all hover:scale-105"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Reserve Deck</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full border transition-colors ${
              isScrolled
                ? 'border-[#171717]/20 text-[#101820] bg-white'
                : 'border-white/30 text-white bg-white/10'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Editorial Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#101820] text-[#FAF8F3] pt-24 px-6 pb-10 flex flex-col justify-between lg:hidden overflow-y-auto"
          >
            {/* Ambient Background Wave */}
            <div className="absolute top-1/3 left-0 right-0 h-40 bg-gradient-radial from-[#F0822A]/10 to-transparent pointer-events-none blur-2xl" />

            <div className="space-y-6 relative z-10 my-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F0822A] uppercase tracking-widest px-3 py-1 rounded-full bg-[#F0822A]/10 border border-[#F0822A]/20">
                <Anchor className="w-3.5 h-3.5" />
                <span>DECK CONTROL · SURAT</span>
              </div>

              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx }}
                    className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F3] hover:text-[#F0822A] transition-colors border-b border-white/10 pb-3 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="font-mono text-xs text-[#F0822A]">0{idx + 1}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-white/10 space-y-3 relative z-10">
              <a
                href="tel:+919974615111"
                className="w-full inline-flex items-center justify-center gap-2 border border-white/20 text-[#FAF8F3] py-3 rounded-full text-xs font-mono uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#F0822A]" />
                <span>Call +91 99746 15111</span>
              </a>

              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F0822A] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Unlimited Menu @ ₹350/-</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
