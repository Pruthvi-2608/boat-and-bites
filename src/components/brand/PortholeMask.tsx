import React from 'react';
import { motion } from 'framer-motion';

interface PortholeMaskProps {
  src: string;
  alt: string;
  size?: string;
  className?: string;
  caption?: string;
}

export const PortholeMask: React.FC<PortholeMaskProps> = ({
  src,
  alt,
  size = "w-48 h-48 sm:w-64 sm:h-64",
  className = "",
  caption,
}) => {
  return (
    <div className={`relative group inline-block ${className}`}>
      {/* Outer Brass Porthole Rim */}
      <div className={`relative ${size} rounded-full border-4 border-[#D4AF37] shadow-2xl overflow-hidden bg-stone-900 group-hover:border-[#F0822A] transition-colors duration-500`}>
        {/* Inner Brass Bezel Line */}
        <div className="absolute inset-1 rounded-full border border-amber-300/40 z-10 pointer-events-none" />
        
        {/* Image inside porthole */}
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Porthole Glass Reflection Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20 pointer-events-none z-20" />
      </div>

      {caption && (
        <p className="mt-3 font-mono text-[10px] text-[#7C5A38] uppercase tracking-widest text-center">
          {caption}
        </p>
      )}
    </div>
  );
};
