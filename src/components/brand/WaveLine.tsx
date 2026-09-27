import React from 'react';
import { motion } from 'framer-motion';

interface WaveLineProps {
  className?: string;
  color?: string;
  strokeWidth?: number;
  animated?: boolean;
}

export const WaveLine: React.FC<WaveLineProps> = ({
  className = "w-full h-8",
  color = "#F0822A",
  strokeWidth = 1.5,
  animated = true,
}) => {
  return (
    <div className={`relative overflow-hidden pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <motion.path
          d="M 0,20 Q 150,5 300,20 T 600,20 T 900,20 T 1200,20"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          whileInView={animated ? { pathLength: 1, opacity: 0.8 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M 0,26 Q 150,38 300,26 T 600,26 T 900,26 T 1200,26"
          fill="none"
          stroke="#3C3181"
          strokeWidth={strokeWidth * 0.7}
          strokeDasharray="4 3"
          opacity="0.35"
          initial={animated ? { pathLength: 0 } : undefined}
          whileInView={animated ? { pathLength: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 2.2, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};
