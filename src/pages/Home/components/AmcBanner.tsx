import React from 'react';
import { Link } from 'react-router-dom';

export const AmcBanner: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c371e] text-white shadow-xl h-[300px] flex flex-col md:flex-row items-stretch">
        
        {/* Decorative leaf near bottom-left */}
        <img
          src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
          alt=""
          aria-hidden="true"
          className="absolute -bottom-4 -left-4 w-28 sm:w-36 h-auto pointer-events-none select-none opacity-20 -scale-x-100 z-0"
        />

        {/* Left Content Area */}
        <div className="relative z-10 flex-1 p-5 sm:p-7 lg:p-8 flex flex-col justify-center max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-6 sm:w-7 h-[1.5px] bg-[#86efac]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#86efac] uppercase">
              FARM MAINTENANCE (AMC)
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[32px] text-white leading-[1.18] tracking-tight">
            Complete<br className="hidden sm:inline" /> Farm Maintenance
          </h2>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm md:text-[14.5px] text-[#d1fae5]/90 max-w-md leading-relaxed font-normal">
            Regular care keeps your farm healthy, productive and profitable.
          </p>

          {/* Golden Button */}
          <div className="mt-4 sm:mt-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 sm:py-2.5 bg-[#b37d2e] hover:bg-[#9d691e] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Enquire Now</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative md:w-3/5 lg:w-[52%] h-full overflow-hidden">
          <img
            src="/assets/amc-banner-supervisor.jpg"
            alt="Farm Maintenance"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Smooth gradient transition into solid dark green on the left */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#0c371e] via-[#0c371e]/75 to-transparent pointer-events-none" />
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#0c371e] via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default AmcBanner;
