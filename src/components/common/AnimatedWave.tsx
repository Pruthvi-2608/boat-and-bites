import React from 'react';

interface AnimatedWaveProps {
  className?: string;
  variant?: 'subtle' | 'vibrant' | 'dark';
  height?: number;
}

export const AnimatedWave: React.FC<AnimatedWaveProps> = ({
  className = '',
  variant = 'subtle',
  height = 24
}) => {
  const strokeColor =
    variant === 'dark'
      ? '#3C3181'
      : variant === 'vibrant'
      ? '#F0822A'
      : 'rgba(60, 49, 129, 0.35)';

  const secondaryColor =
    variant === 'dark'
      ? 'rgba(240, 130, 42, 0.4)'
      : variant === 'vibrant'
      ? '#6257A5'
      : 'rgba(240, 130, 42, 0.25)';

  return (
    <div className={`overflow-hidden pointer-events-none select-none ${className}`} style={{ height }}>
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20C150 32 300 8 450 20C600 32 750 8 900 20C1050 32 1200 8 1350 20"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-wave-flow"
        />
        <path
          d="M0 25C180 12 360 36 540 25C720 14 900 36 1080 25C1260 14 1440 36 1620 25"
          stroke={secondaryColor}
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
