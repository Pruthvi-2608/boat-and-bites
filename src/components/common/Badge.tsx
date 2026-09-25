import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'indigo' | 'green' | 'dark' | 'sand';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'orange',
  size = 'md',
  className = ''
}) => {
  const variantStyles = {
    orange: 'bg-brand-orange/10 text-brand-orange border-brand-orange/20',
    indigo: 'bg-brand-wave-blue/10 text-brand-wave-blue border-brand-wave-blue/20',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dark: 'bg-brand-ink text-brand-cream border-white/10',
    sand: 'bg-brand-sand/60 text-brand-text border-brand-border'
  }[variant];

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 tracking-wider',
    md: 'text-xs md:text-sm px-3.5 py-1 tracking-wider'
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-sans font-medium uppercase rounded-full border ${variantStyles} ${sizeStyles} ${className}`}
    >
      {children}
    </span>
  );
};
