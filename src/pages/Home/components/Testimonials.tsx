import React from 'react';
import { Link } from 'react-router-dom';

export const Testimonials: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* ========================================================
          1. TESTIMONIALS SECTION (Light pale-green background)
          ======================================================== */}
      <section className="relative overflow-hidden bg-[#deebe0] pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14 border-t border-[#cde0d0]/60">
        
        {/* Left Decorative Leaf Illustration */}
        <div className="absolute left-2 sm:left-6 md:left-10 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <picture>
            <source srcSet="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.webp" type="image/webp" />
            <img
              src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              width={176}
              height={176}
              className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain opacity-30 sm:opacity-75 rotate-6"
            />
          </picture>
        </div>

        {/* Right Decorative Leaf Illustration (Mirrored) */}
        <div className="absolute right-2 sm:right-6 md:right-10 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <picture>
            <source srcSet="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.webp" type="image/webp" />
            <img
              src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              width={176}
              height={176}
              className="w-20 sm:w-28 md:w-36 lg:w-44 h-auto object-contain opacity-30 sm:opacity-75 -scale-x-100 rotate-6"
            />
          </picture>
        </div>

        {/* Centered Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Eyebrow Label with flanking horizontal rules (WCAG AA Compliant contrast) */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
            <span className="w-8 sm:w-12 h-[1px] bg-[#166534]/50" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#166534] uppercase">
              TESTIMONIALS
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#166534]/50" aria-hidden="true" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0c2e1b] tracking-tight font-serif mb-5 sm:mb-6 leading-tight">
            What our farmers say.
          </h2>

          {/* Compact White Testimonial Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl px-6 py-5 sm:px-8 sm:py-6 shadow-sm border border-slate-200/70 max-w-xl sm:max-w-2xl mx-auto">
            {/* Outlined Speech Bubble with dots + Text */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[#0c2e1b]">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#15803d] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <circle cx="9" cy="12" r="0.75" fill="currentColor" stroke="none" />
                <circle cx="12" cy="12" r="0.75" fill="currentColor" stroke="none" />
                <circle cx="15" cy="12" r="0.75" fill="currentColor" stroke="none" />
              </svg>
              <span className="text-base sm:text-lg font-bold text-[#0c2e1b]">
                Customer stories coming soon
              </span>
            </div>

            {/* Supporting Subtext */}
            <p className="text-xs sm:text-[13.5px] text-slate-500 font-normal mt-2 sm:mt-2.5 leading-relaxed">
              We will be adding farmer experiences here once we have official testimonials.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. FULL-WIDTH FARM BACKGROUND CTA SECTION
          Directly connected with NO gap
          ======================================================== */}
      <section className="relative overflow-hidden w-full bg-[#082315] py-12 sm:py-16 lg:py-20 text-center">
        {/* Full-Width Agricultural Farm Background Image (WebP with Fallback) */}
        <picture>
          <source srcSet="/assets/hero-farm.webp" type="image/webp" />
          <img
            src="/assets/hero-farm.png"
            alt="Lush green agricultural farmland"
            loading="lazy"
            decoding="async"
            width={1600}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-[center_35%] pointer-events-none select-none"
          />
        </picture>

        {/* Natural Dark-Green Overlay for optimal text readability */}
        <div 
          className="absolute inset-0 bg-[#072415]/60 sm:bg-[#072415]/55 pointer-events-none"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#051c10]/45 via-transparent to-[#03150b]/65 pointer-events-none"
          aria-hidden="true"
        />

        {/* Center-Aligned Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-white font-serif tracking-tight leading-tight drop-shadow-md">
            Let’s grow something meaningful.
          </h2>

          {/* Supporting Text */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
            Partner with Uzhavar Connect for expert agricultural development and farm management services.
          </p>

          {/* Gold/Orange Rounded CTA Button with WCAG AA compliance (4.88:1) */}
          <div className="mt-5 sm:mt-6 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#946116] hover:bg-[#7e510e] active:bg-[#684107] text-white font-semibold text-sm sm:text-base px-7 sm:px-9 py-3 sm:py-3.5 rounded-2xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Request a Consultation</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Handwritten Slogan: "Greener Lands Stronger Tomorrows" */}
        <div className="relative z-10 mt-8 md:mt-0 md:absolute md:right-6 lg:right-12 xl:right-16 md:bottom-6 lg:bottom-8 pointer-events-none select-none text-right flex flex-col items-end pr-6 md:pr-0">
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
      </section>
    </div>
  );
};

export default Testimonials;
