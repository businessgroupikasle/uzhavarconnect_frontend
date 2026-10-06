import React from 'react';
import { Link } from 'react-router-dom';

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#072415] text-white py-12 sm:py-16 lg:py-20 flex items-center">
      {/* 1. Full-Width Farmland/Mountain Background Image */}
      <img
        src="/assets/hero-farm.png"
        alt="Farmland Landscape with Mountains and Sunrise"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] pointer-events-none select-none"
      />

      {/* 2. Subtle Dark/Green Natural Overlay on the Left for High Text Readability */}
      <div
        className="absolute inset-0 bg-[#072415]/65 sm:bg-[#072415]/55 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#03150a]/92 via-[#062012]/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#04170c]/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Main Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80 mb-2 font-medium">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="text-white/50">/</span>
          <span className="text-white font-semibold">Services</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          Our Agricultural Services
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-xs sm:text-sm lg:text-base text-emerald-100/90 font-normal max-w-xl leading-relaxed">
          Complete care. From soil to harvest. Professional agricultural land development across Tamil Nadu.
        </p>
      </div>
    </section>
  );
};

export default ServicesHero;
