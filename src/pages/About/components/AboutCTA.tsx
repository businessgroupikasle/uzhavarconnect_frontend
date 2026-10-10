import React from 'react';
import { Link } from 'react-router-dom';

export const AboutCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#082315] py-14 sm:py-18 lg:py-20 text-white">
      {/* 1. Full-Width Farmland/Mountain Background Image */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <source srcSet="/assets/hero-farm.webp" type="image/webp" />
        <img
          src="/assets/hero-farm.png"
          alt="Lush Agricultural Farmland"
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-[center_35%]"
        />
      </picture>

      {/* 2. Natural Dark-Green Overlay for optimal text readability */}
      <div
        className="absolute inset-0 bg-[#072415]/65 sm:bg-[#072415]/55 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#03150a]/90 via-[#062012]/65 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Content Container Positioned Toward Left */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-left">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-white font-serif tracking-tight leading-[1.15] drop-shadow-md">
            Let’s build your farm’s
            <br />
            next chapter.
          </h2>

          {/* Warm Golden/Brown CTA Button */}
          <div className="mt-6 sm:mt-7 flex items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#946116] hover:bg-[#784e0e] text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-3 sm:py-3.5 rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request a Consultation</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom-Right Handwritten Slogan: "Together for Farmlands" */}
        <div className="mt-8 md:mt-0 md:absolute md:right-8 lg:right-16 md:bottom-3 lg:bottom-5 pointer-events-none select-none text-right flex flex-col items-end pr-2 md:pr-0">
          <span className="font-['Caveat',_cursive] text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-none tracking-wide -rotate-3 inline-block drop-shadow-md">
            Together for
          </span>
          <span className="font-['Caveat',_cursive] text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-none tracking-wide -rotate-3 inline-block mt-0.5 drop-shadow-md">
            Farmlands
          </span>
          <div className="w-32 sm:w-40 ml-auto -mt-1 -rotate-3">
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

export default AboutCTA;
