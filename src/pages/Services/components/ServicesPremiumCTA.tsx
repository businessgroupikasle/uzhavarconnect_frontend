import React from 'react';
import { Link } from 'react-router-dom';

export const ServicesPremiumCTA: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c371e] text-white shadow-xl min-h-[220px] sm:min-h-[250px] flex flex-col md:flex-row items-stretch">
        
        {/* Decorative leaf near bottom-left */}
        <img
          src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
          alt=""
          aria-hidden="true"
          className="absolute -bottom-4 -left-4 w-28 sm:w-36 h-auto pointer-events-none select-none opacity-20 -scale-x-100 z-0"
        />

        {/* Left Content Area */}
        <div className="relative z-10 flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-6 sm:w-7 h-[1.5px] bg-[#86efac]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#86efac] uppercase">
              PREMIUM SERVICE
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[34px] text-white leading-[1.18] tracking-tight">
            End-to-End Farm<br className="hidden sm:inline" /> Management Services
          </h2>

          {/* Description */}
          <p className="mt-2.5 text-xs sm:text-sm md:text-[15px] text-[#d1fae5]/90 max-w-md leading-relaxed font-normal">
            One coordinated service, from land preparation<br className="hidden sm:inline" /> to maintenance and harvest.
          </p>

          {/* Golden Button */}
          <div className="mt-5 sm:mt-6">
            <Link
              to="/book-a-service?service=end-to-end-farm-management"
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 bg-[#b37d2e] hover:bg-[#9d691e] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Enquire Now</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right Orchard Image with handwritten cursive text */}
        <div className="relative md:w-3/5 lg:w-[52%] min-h-[190px] sm:min-h-[220px] md:min-h-full overflow-hidden">
          <img
            src="/assets/services/premium-farm-orchard.jpg"
            alt="End to End Farm Management Orchard"
            className="w-full h-full object-cover object-[center_40%]"
          />
          {/* Subtle blend to match the dark green on the left */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#0c371e] via-[#0c371e]/70 to-transparent pointer-events-none" />
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#0c371e] via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default ServicesPremiumCTA;
