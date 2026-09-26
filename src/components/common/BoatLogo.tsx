import React from 'react';

interface BoatLogoProps {
  className?: string;
  variant?: 'full' | 'emblem';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  darkTheme?: boolean;
}

export const BoatLogo: React.FC<BoatLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  darkTheme = false,
}) => {
  const sizeMap = {
    sm: { circle: 'w-10 h-10', title: 'text-[11px]', sub: 'text-[7px]' },
    md: { circle: 'w-16 h-16', title: 'text-sm', sub: 'text-[9px]' },
    lg: { circle: 'w-24 h-24', title: 'text-lg', sub: 'text-[11px]' },
    xl: { circle: 'w-36 h-36', title: 'text-2xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Circle Logo Emblem */}
      <div className={`relative ${currentSize.circle} aspect-square flex items-center justify-center`}>
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-md"
        >
          <defs>
            {/* Sail Sunset Gradient - Orange to Deep Navy/Purple */}
            <linearGradient id="ogSailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F0822A" />
              <stop offset="50%" stopColor="#804456" />
              <stop offset="100%" stopColor="#2B266D" />
            </linearGradient>

            {/* Hull Gradient */}
            <linearGradient id="ogHullGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3C3181" />
              <stop offset="100%" stopColor="#2B266D" />
            </linearGradient>

            {/* Emblem Inner Glow Background */}
            <radialGradient id="ogLogoBg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FAF4F3" />
            </radialGradient>
          </defs>

          {/* Background Inner Circle */}
          <circle cx="100" cy="100" r="95" fill="url(#ogLogoBg)" />

          {/* Outer Stitched Ring */}
          <circle
            cx="100"
            cy="100"
            r="91"
            stroke="#D4D4D8"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
          <circle
            cx="100"
            cy="100"
            r="86"
            stroke="#F0822A"
            strokeWidth="0.8"
            opacity="0.35"
          />

          {/* Sailboat Graphic */}
          <g transform="translate(0, 4)">
            {/* Left Sail */}
            <path
              d="M 94 44 L 94 116 L 48 116 Z"
              fill="url(#ogSailGradient)"
            />

            {/* Right Sail */}
            <path
              d="M 104 36 L 104 116 L 150 116 Z"
              fill="url(#ogSailGradient)"
            />

            {/* Boat Hull & Waves */}
            <path
              d="M 36 118 C 65 114, 85 122, 100 118 C 115 114, 135 122, 164 118 C 170 118, 174 135, 156 152 C 142 165, 122 168, 100 168 C 78 168, 58 165, 44 152 C 26 135, 30 118, 36 118 Z"
              fill="url(#ogHullGradient)"
            />

            {/* Hull Wave Detail Line */}
            <path
              d="M 34 121 Q 65 114 100 121 T 166 121"
              stroke="#FAF4F3"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
          </g>
        </svg>
      </div>

      {/* Typography Label */}
      {variant === 'full' && (
        <div className="mt-2 flex flex-col items-center leading-tight">
          <span
            className={`font-serif font-bold tracking-[0.24em] uppercase ${
              darkTheme ? 'text-[#FAF4F3]' : 'text-[#101820]'
            } ${currentSize.title}`}
          >
            BOAT &amp; BITES
          </span>
          <span
            className={`font-sans font-semibold tracking-[0.2em] uppercase text-[#F0822A] mt-1 ${currentSize.sub}`}
          >
            WATERFRONT DINING &#8226; SURAT
          </span>
          
          {/* Gradient Underline Bar (Image 3 Style) */}
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#2B266D] via-[#F0822A] to-[#2B266D] mt-2 opacity-80" />
        </div>
      )}
    </div>
  );
};

export default BoatLogo;
