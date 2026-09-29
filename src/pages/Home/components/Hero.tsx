import React from 'react';
import { HeroContent } from './HeroContent';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full py-12 sm:py-16 lg:py-20 flex items-center bg-[#072415]">
      
      {/* 1. Full-Width Agricultural Farmland Background Image */}
      <img
        src="/assets/hero-farm.png"
        alt="Productive Agricultural Farmland Landscape"
        className="absolute inset-0 w-full h-full object-cover object-right md:object-[center_35%] pointer-events-none select-none"
      />

      {/* 2. Soft Dark-Green Gradient Overlay for Text Readability & Agricultural Atmosphere */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#03150a]/92 via-[#062012]/78 sm:via-[#072616]/60 md:via-[#092e1a]/38 lg:via-[#0b331d]/20 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Subtle Bottom Transition Gradient */}
      <div 
        className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#04170c]/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 4. Responsive Max-Width Container Centered Vertically within the Hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-8">
        <HeroContent />
      </div>

    </section>
  );
};

export default Hero;
