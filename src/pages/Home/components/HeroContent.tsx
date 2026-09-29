import React from 'react';
import { HeroBadge } from './HeroBadge';
import { HeroActions } from './HeroActions';
import { HeroFeatures } from './HeroFeatures';

export const HeroContent: React.FC = () => {
  return (
    <div className="max-w-2xl lg:max-w-3xl text-left">
      {/* 1. Small Eyebrow Label */}
      <HeroBadge label="AGRICULTURE CREATES A BRIGHTER TOMORROW" />

      {/* 2. Main Heading Matching Reference Image */}
      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-black tracking-tight leading-[1.08] drop-shadow-md">
        <span className="text-white block">Grow Your Land.</span>
        <span className="text-[#a3e635] sm:text-[#86efac] block mt-0.5">Grow Your Future.</span>
      </h1>

      {/* 3. Supporting Description */}
      <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-[17px] text-white/90 sm:text-emerald-50/95 leading-relaxed font-normal max-w-lg drop-shadow-sm">
        Complete agricultural development and farm management, from soil to harvest.
      </p>

      {/* 4. Action Buttons (Golden Primary + Translucent Golden-Border Secondary) */}
      <HeroActions />

      {/* 5. Bottom Three Feature Highlights */}
      <HeroFeatures />
    </div>
  );
};

export default HeroContent;
