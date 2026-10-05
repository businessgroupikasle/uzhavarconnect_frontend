import React from 'react';
import { Link } from 'react-router-dom';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#072415] text-white py-12 sm:py-16 lg:py-20 flex items-center">
      {/* 1. Full-Width Farmland/Mountain Background Image */}
      <img
        src="/assets/hero-farm.png"
        alt="Farmland Landscape with Mountains"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] pointer-events-none select-none"
      />

      {/* 2. Subtle Dark/Green Natural Overlay for High Text Readability */}
      <div
        className="absolute inset-0 bg-[#072415]/65 sm:bg-[#072415]/60 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#03150a]/90 via-[#062012]/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#04170c]/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Main Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80 font-medium">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/50">/</span>
          <span className="text-white font-semibold">About Us</span>
        </div>


        {/* Bottom-Right Handwritten Slogan: "Greener Lands Stronger Tomorrows" */}
        <div className="mt-6 md:mt-0 md:absolute md:right-8 lg:right-16 md:bottom-4 lg:bottom-6 pointer-events-none select-none text-right flex flex-col items-end pr-2 md:pr-0">
          <span className="font-['Caveat',_cursive] text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-none tracking-wide -rotate-3 inline-block drop-shadow-md">
            Greener Lands
          </span>
          <span className="font-['Caveat',_cursive] text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-none tracking-wide -rotate-3 inline-block mt-0.5 drop-shadow-md">
            Stronger Tomorrows
          </span>
          <div className="w-36 sm:w-44 ml-auto -mt-1 -rotate-3">
            <svg viewBox="0 0 160 12" fill="none" className="w-full h-auto text-[#4ade80] drop-shadow-sm">
              <path
                d="M3 8 C45 2 115 2 157 8"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
