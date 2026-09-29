import React from 'react';
import { Link } from 'react-router-dom';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#072415] text-white py-10 sm:py-14 lg:py-16 flex items-center">
      {/* 1. Full-Width Farmland/Mountain Background Image */}
      <img
        src="/assets/hero-farm.png"
        alt="Farmland Landscape with Coconut Trees and Mountains"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] pointer-events-none select-none"
      />

      {/* 2. Natural Dark Green Overlay for Text Readability */}
      <div
        className="absolute inset-0 bg-[#072415]/65 sm:bg-[#072415]/55 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#03150a]/92 via-[#062012]/65 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#04170c]/50 to-transparent pointer-events-none"
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
          <span className="text-white/95">Contact</span>
        </div>

        {/* Bottom-Right Handwritten Slogan: "Healthy Land, Prosperous Farmers" */}
        <div className="mt-5 md:mt-0 md:absolute md:right-8 lg:right-14 md:bottom-4 lg:bottom-6 pointer-events-none select-none text-right flex flex-col items-end pr-2 md:pr-0">
          <span className="font-['Caveat',_cursive] text-2xl sm:text-3xl lg:text-[32px] font-bold text-white leading-none tracking-wide -rotate-3 inline-block drop-shadow-md">
            Healthy Land
          </span>
          <span className="font-['Caveat',_cursive] text-2xl sm:text-3xl lg:text-[32px] font-bold text-white leading-none tracking-wide -rotate-3 inline-block mt-0.5 drop-shadow-md">
            Prosperous Farmers
          </span>
          <div className="w-32 sm:w-48 ml-auto -mt-1 -rotate-3">
            <svg viewBox="0 0 160 12" fill="none" className="w-full h-auto text-[#4ade80] drop-shadow-xs">
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

export default ContactHero;
