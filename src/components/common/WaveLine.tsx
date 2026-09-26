import React from 'react';
import { motion } from 'framer-motion';

interface WaveLineProps {
  variant?: 'blue' | 'purple' | 'orange' | 'ink' | 'cream' | 'vibrant';
  height?: number;
  animated?: boolean;
  className?: string;
  flip?: boolean;
}

export function WaveLine({
  variant = 'blue',
  height = 40,
  animated = true,
  className = '',
  flip = false,
}: WaveLineProps) {
  const getStrokeColor = () => {
    switch (variant) {
      case 'orange':
        return '#F8822A';
      case 'purple':
        return '#6257A5';
      case 'ink':
        return '#101820';
      case 'cream':
        return '#FAF8F3';
      case 'vibrant':
        return 'url(#waveGradient)';
      case 'blue':
      default:
        return '#3C3181';
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: `${height}px` }}
    >
      <svg
        className={`w-full h-full ${flip ? 'scale-y-[-1]' : ''}`}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3C3181" />
            <stop offset="50%" stopColor="#6257A5" />
            <stop offset="100%" stopColor="#F8822A" />
          </linearGradient>
        </defs>

        {animated ? (
          <motion.path
            d="M0,50 C320,110 420,-10 720,50 C1020,110 1120,-10 1440,50 L1440,100 L0,100 Z"
            fill="none"
            stroke={getStrokeColor()}
            strokeWidth="3"
            initial={{ pathLength: 0, opacity: 0.3 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        ) : (
          <path
            d="M0,50 C320,110 420,-10 720,50 C1020,110 1120,-10 1440,50 L1440,100 L0,100 Z"
            fill="none"
            stroke={getStrokeColor()}
            strokeWidth="3"
            opacity="0.6"
          />
        )}
      </svg>
    </div>
  );
}
