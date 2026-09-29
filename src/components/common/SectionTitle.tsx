import React from 'react';

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  lightMode?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = '',
  lightMode = false,
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  return (
    <div className={`flex flex-col max-w-3xl ${alignClass} ${className} mb-6 sm:mb-8`}>
      {badge && (
        <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 text-[#15803d] bg-emerald-50 border border-emerald-200/60">
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight ${
          lightMode ? 'text-white' : 'text-[#0e3922]'
        }`}
      >
        {title}{' '}
        {highlightText && (
          <span className="text-[#16a34a]">{highlightText}</span>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base md:text-lg leading-relaxed ${
            lightMode ? 'text-emerald-100/90' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
