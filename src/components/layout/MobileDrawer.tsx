import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin, Instagram, Clock, ArrowRight } from 'lucide-react';
import { restaurantData } from '../../data/restaurant';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  navLinks
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-brand-ink/70 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-brand-cream border-l border-brand-border flex flex-col p-6 overflow-y-auto shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-brand-border">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Boat & Bites"
                  className="w-10 h-10 object-contain rounded-full shadow-sm"
                />
                <div>
                  <h3 className="font-serif text-lg font-bold tracking-tight text-brand-ink">
                    BOAT & BITES
                  </h3>
                  <p className="text-[10px] uppercase font-sans tracking-widest text-brand-orange font-semibold">
                    Surat, Gujarat
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-brand-sand transition-colors text-brand-ink"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex-1 py-8 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-center justify-between px-3 py-3.5 rounded-lg text-lg font-serif text-brand-ink hover:text-brand-orange hover:bg-brand-sand/50 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-orange" />
                </a>
              ))}
            </nav>

            {/* Verified Quick Actions */}
            <div className="pt-6 border-t border-brand-border flex flex-col gap-3 font-sans">
              <div className="flex items-center gap-2 text-xs text-brand-muted mb-1">
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                <span>{restaurantData.hours.display}</span>
              </div>

              <a
                href={`tel:${restaurantData.phones[0]}`}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-brand-orange text-white font-medium shadow-sm hover:bg-brand-orange-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {restaurantData.phones[0]}</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={restaurantData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-brand-border text-xs font-semibold text-brand-ink hover:border-brand-orange transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-wave-blue" />
                  <span>Directions</span>
                </a>
                <a
                  href={restaurantData.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-brand-border text-xs font-semibold text-brand-ink hover:border-brand-orange transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
