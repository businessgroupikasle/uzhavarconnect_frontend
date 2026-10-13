import React from 'react';
import { Link } from 'react-router-dom';

export const AmcBanner: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c371e] text-white shadow-xl flex flex-col md:flex-row items-stretch min-h-[220px] sm:min-h-[260px] md:h-[300px]">

        {/* Decorative leaf bottom-left */}
        <picture className="absolute -bottom-4 -left-4 pointer-events-none select-none z-0">
          <source srcSet="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.webp" type="image/webp" />
          <img
            src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            width={144}
            height={144}
            className="w-28 sm:w-36 h-auto opacity-20 -scale-x-100"
          />
        </picture>

        {/* ── LEFT: Text Content ── */}
        <div className="relative z-10 flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-6 sm:w-7 h-[1.5px] bg-[#86efac]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#86efac] uppercase">
              Farm Maintenance (AMC)
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[34px] text-white leading-[1.18] tracking-tight">
            Complete<br className="hidden sm:inline" /> Farm Maintenance
          </h2>

          {/* Description */}
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-[#d1fae5]/85 max-w-sm leading-relaxed font-normal">
            Regular care keeps your farm healthy, productive and profitable.
          </p>

          {/* CTA Button */}
          <div className="mt-4 sm:mt-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 sm:py-2.5 bg-[#946116] hover:bg-[#7e510e] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Enquire Now</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* ── RIGHT: Image ── */}
        <div className="relative md:w-[55%] lg:w-[52%] h-56 md:h-full overflow-hidden flex-shrink-0">
          <picture>
            <source srcSet="/assets/amc-banner-supervisor.webp" type="image/webp" />
            <img
              src="/assets/amc-banner-supervisor.jpg"
              alt="Farm Maintenance Supervisor"
              loading="lazy"
              decoding="async"
              width={700}
              height={400}
              className="w-full h-full object-cover object-[center_top]"
            />
          </picture>
          {/* Left fade gradient into dark green */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0c371e] via-[#0c371e]/70 to-transparent pointer-events-none" />
          {/* Top fade on mobile */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#0c371e] via-[#0c371e]/30 to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default AmcBanner;
