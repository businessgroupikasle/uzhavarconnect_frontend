import React from 'react';

interface HeroBadgeProps {
  label?: string;
  className?: string;
}

export const HeroBadge: React.FC<HeroBadgeProps> = ({
  label = 'AGRICULTURE CREATES A BRIGHTER TOMORROW',
  className = '',
}) => {
  return (
    <div
      className={`inline-block text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-emerald-100/90 mb-4 sm:mb-5 drop-shadow-sm select-none ${className}`}
    >
      <span>{label}</span>
    </div>
  );
};

export default HeroBadge;
