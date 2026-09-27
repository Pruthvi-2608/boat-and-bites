import React from 'react';

interface BrandMarkProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  className = "",
  showText = true,
  light = false,
}) => {
  return (
    <div className={`inline-flex items-center gap-3 shrink-0 ${className}`}>
      {/* Brand Logo Circular Seal */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#D4AF37]/40 shadow-sm flex items-center justify-center p-1 overflow-hidden shrink-0">
        <img
          src="/logo.png"
          alt="Boat & Bites Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left justify-center shrink-0">
          <span className={`font-serif text-lg sm:text-xl font-medium tracking-wide leading-none whitespace-nowrap ${light ? 'text-[#FAF8F3]' : 'text-[#101820]'}`}>
            BOAT <span className="italic text-[#F0822A] font-normal">&amp;</span> BITES
          </span>
          <span className={`font-mono text-[8px] sm:text-[9px] tracking-widest uppercase mt-1 whitespace-nowrap ${light ? 'text-[#FAF8F3]/60' : 'text-[#7C5A38]'}`}>
            SURAT · GUJARAT
          </span>
        </div>
      )}
    </div>
  );
};
