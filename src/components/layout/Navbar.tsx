import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Phone, Anchor } from 'lucide-react';
import { BoatLogo } from '../common/BoatLogo';

const NAV_LINKS = [
  { name: 'VOYAGE DECK', href: '#voyage' },
  { name: 'ATMOSPHERE', href: '#atmosphere' },
  { name: 'UNLIMITED MENU', href: '#menu' },
  { name: 'BANQUETS', href: '#banquets' },
  { name: 'OUR STORY', href: '#story' },
  { name: 'VISIT US', href: '#visit' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#101820]/90 backdrop-blur-md border-b border-[#FAF4F3]/10 py-3 shadow-xl'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo & Brand Emblem */}
          <a href="#" className="flex items-center gap-3 group z-50">
            <div className="w-11 h-11 rounded-full border border-[#F0822A]/40 bg-[#FAF4F3] flex items-center justify-center p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-md">
              <img
                src="/logo.png"
                alt="Boat & Bites Emblem"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to vector SVG if png fails
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider text-[#FAF4F3] group-hover:text-[#F0822A] transition-colors">
                BOAT &amp; BITES
              </span>
              <span className="text-[9px] font-mono text-[#F0822A] tracking-widest uppercase -mt-1">
                WATERFRONT DINING &#8226; SURAT
              </span>
            </div>
          </a>

          {/* Desktop Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono tracking-widest text-[#FAF4F3]/80 hover:text-[#F0822A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#F0822A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919974615111"
              className="inline-flex items-center gap-2 bg-[#F0822A] hover:bg-[#d9711c] text-white text-xs font-mono tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md shadow-[#F0822A]/20"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>RESERVE DECK</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#FAF4F3] p-2 hover:text-[#F0822A] transition-colors z-50"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Ink Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#101820] text-[#FAF4F3] pt-28 pb-12 px-6 flex flex-col justify-between lg:hidden border-b border-[#FAF4F3]/10 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#F0822A] font-mono text-xs tracking-widest uppercase">
                <Anchor className="w-4 h-4" />
                <span>NAUTICAL VOYAGE MENU</span>
              </div>
              <div className="flex flex-col space-y-4 font-serif text-2xl font-light">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#F0822A] transition-colors border-b border-[#FAF4F3]/10 pb-3 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-[#F0822A]">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#FAF4F3]/10 space-y-4">
              <a
                href="tel:+919974615111"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 bg-[#F0822A] text-white py-4 rounded-full font-mono text-sm font-semibold tracking-wider uppercase"
              >
                <Phone className="w-4 h-4" />
                <span>CALL TO RESERVE: +91 99746 15111</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
