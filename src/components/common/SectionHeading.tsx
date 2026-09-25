import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
  className = ''
}) => {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'right'
      ? 'text-right ml-auto'
      : 'text-left';

  const isDark = theme === 'dark';

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs uppercase tracking-[0.25em] font-sans font-semibold mb-3 ${
            isDark ? 'text-brand-orange' : 'text-brand-orange'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight ${
          isDark ? 'text-brand-cream' : 'text-brand-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed font-sans ${
            isDark ? 'text-brand-cream/70' : 'text-brand-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
