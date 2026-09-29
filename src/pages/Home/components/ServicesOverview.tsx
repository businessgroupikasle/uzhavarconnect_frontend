import React from 'react';
import { SERVICES_DATA } from '../../../data/services';
import { CompactServiceCard } from './Services/CompactServiceCard';

export const ServicesOverview: React.FC = () => {
  // First 8 services for Rows 1 & 2 (4 + 4)
  const firstEight = SERVICES_DATA.slice(0, 8);
  // Last 3 services for Row 3 (3 cards centered)
  const lastThree = SERVICES_DATA.slice(8, 11);

  return (
    <section className="relative overflow-hidden bg-[#f7faf5] pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 border-b border-[#e9efe8]">

      {/* 1. Left Decorative Leaf - Flanking Upper Left (Preserved PNG Asset) */}
      <img
        src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
        alt=""
        aria-hidden="true"
        className="absolute -top-3 -left-6 sm:top-2 sm:left-2 md:left-4 lg:left-6 w-24 sm:w-32 md:w-40 lg:w-48 h-auto pointer-events-none select-none z-0 -scale-x-100 rotate-12 opacity-85"
      />

      {/* 2. Right Decorative Leaf - Flanking Upper Right (Preserved PNG Asset) */}
      <img
        src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
        alt=""
        aria-hidden="true"
        className="absolute -top-3 -right-6 sm:top-2 sm:right-2 md:right-4 lg:right-6 w-24 sm:w-32 md:w-40 lg:w-48 h-auto pointer-events-none select-none z-0 -rotate-12 opacity-85"
      />

      {/* 3. Main Container - Positioned strictly above background leaves */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header Matching IMAGE 3 */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">
          {/* Label with flanking horizontal lines */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-3">
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/40" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#15803d] uppercase">
              OUR SERVICES
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/40" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0c2e1b] tracking-tight font-serif mb-3 leading-tight">
            Everything your farm needs.
          </h2>

          {/* Subtitle */}

        </div>

        {/* Desktop View: 4 + 4 + 3 Centered Grid (>= 1024px) */}
        <div className="hidden lg:block space-y-5 lg:space-y-6">
          {/* Rows 1 & 2: 8 Cards in a 4-Column Grid */}
          <div className="grid grid-cols-4 gap-5 lg:gap-6">
            {firstEight.map((service) => (
              <CompactServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Row 3: 3 Cards Centered with Identical Column Widths */}
          <div className="flex justify-center gap-5 lg:gap-6">
            {lastThree.map((service) => (
              <div key={service.id} className="w-[calc((100%-3*1.5rem)/4)]">
                <CompactServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Mobile View (< 1024px): Responsive 2-col on mobile, 3-col on md */}
        <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {SERVICES_DATA.map((service) => (
            <CompactServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
