import React from 'react';
import { Link } from 'react-router-dom';

export const GalleryCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#082b17] text-white py-10 sm:py-14 lg:py-16 mt-10 sm:mt-14">
      {/* Background Farmland Landscape */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-30">
        <source srcSet="/assets/hero-farm.webp" type="image/webp" />
        <img
          src="/assets/hero-farm.png"
          alt="Agricultural farmland"
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-[center_60%]"
        />
      </picture>

      {/* Dark/Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#062413]/95 via-[#083019]/90 to-[#072413]/70 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">

        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-[1.2]">
            Picture the possibilities<br />for your land.
          </h2>

        </div>

        {/* Center / Right CTA Button & Sprout Graphic */}
        <div className="flex items-center gap-6 sm:gap-10 shrink-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#946116] hover:bg-[#784e0e] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm md:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
          >
            <span>Request a Consultation</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">
              →
            </span>
          </Link>

          {/* Sprouting Plant Visual on Far Right */}
          <div className="hidden lg:block w-20 h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-lg shrink-0">
            <picture>
              <source srcSet="/assets/gallery/gallery-cta-sprout.webp" type="image/webp" />
              <img
                src="/assets/gallery/gallery-cta-sprout.jpg"
                alt="Sprouting plant"
                width={96}
                height={96}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover scale-110"
              />
            </picture>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GalleryCTA;
