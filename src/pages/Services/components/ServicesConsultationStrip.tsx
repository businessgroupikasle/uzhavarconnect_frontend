import React from 'react';
import { Link } from 'react-router-dom';

export const ServicesConsultationStrip: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-12 sm:pb-16">
      <div className="relative overflow-hidden bg-[#eef5eb] border border-[#dce9d8] rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-12 py-6 sm:py-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 shadow-sm">

        {/* Left Decorative Leaf */}
        <img
          src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
          alt=""
          aria-hidden="true"
          className="absolute -left-6 sm:-left-3 top-1/2 -translate-y-1/2 w-20 sm:w-28 h-auto pointer-events-none select-none opacity-40 -scale-x-100 rotate-12 z-0"
        />

        {/* Right Decorative Leaf */}
        <img
          src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
          alt=""
          aria-hidden="true"
          className="absolute -right-6 sm:-right-3 top-1/2 -translate-y-1/2 w-20 sm:w-28 h-auto pointer-events-none select-none opacity-40 -rotate-12 z-0"
        />

        {/* Left Column: Heading + Description */}
        <div className="relative z-10 max-w-2xl pl-2 sm:pl-4">
          <h3 className="font-serif font-bold text-2xl sm:text-[28px] text-slate-900 tracking-tight leading-tight">
            Not sure where to begin?
          </h3>

        </div>

        {/* Right Column: Button */}
        <div className="relative z-10 w-full md:w-auto shrink-0 pl-2 sm:pl-4 md:pl-0">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-[#b37d2e] hover:bg-[#9d691e] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm hover:shadow transition-all duration-200 group"
          >
            <span>Request a Consultation</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesConsultationStrip;
