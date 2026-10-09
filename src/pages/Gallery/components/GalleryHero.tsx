import React from 'react';
import { Breadcrumbs } from '../../../components/common/Breadcrumbs';

export const GalleryHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#072415] text-white py-10 sm:py-14 lg:py-16 flex items-center">
      {/* 1. Full-Width Farmland/Mountain Background Image */}
      <img
        src="/assets/hero-farm.png"
        alt="Agricultural Landscape with Mountains and Farmland"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] pointer-events-none select-none"
      />

      {/* 2. Natural Dark Green Overlay for Text Readability */}
      <div
        className="absolute inset-0 bg-[#072415]/65 sm:bg-[#072415]/55 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#03150a]/92 via-[#062012]/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#04170c]/50 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Main Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          Project Gallery
        </h1>

        {/* Breadcrumb Navigation Pill */}
        <div className="mt-3.5">
          <Breadcrumbs items={[{ label: 'Gallery' }]} />
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
