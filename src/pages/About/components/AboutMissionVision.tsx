import React from 'react';
import { Target, Eye } from 'lucide-react';

export const AboutMissionVision: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faf6] py-10 sm:py-12 lg:py-14 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Equal-Width Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* CARD 1: Our Mission */}
          <div className="relative overflow-hidden bg-white/90 sm:bg-white rounded-3xl p-6 sm:p-8 border border-[#dce8dc] shadow-sm flex flex-col sm:flex-row items-start gap-5 group hover:shadow-md transition-all duration-300">
            {/* Lower-Left Decorative Leaf */}
            <div className="absolute -bottom-4 -left-4 pointer-events-none select-none z-0">
              <img
                src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
                alt=""
                aria-hidden="true"
                className="w-20 sm:w-24 h-auto object-contain opacity-40 rotate-45"
              />
            </div>

            {/* Circular Dark Green Icon Container */}
            <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1b5028] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <Target className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl sm:text-[26px] font-bold text-[#0c2e1b] font-serif mb-2 leading-tight">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                To simplify agricultural land development through scientific site planning, coordinated machinery execution, and dependable long-term farm care.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-[#15803d] font-bold">✓</span>
                  <span>Turnkey land levelling & scientific farm layout planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#15803d] font-bold">✓</span>
                  <span>Precision micro-irrigation saving up to 60% water</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#15803d] font-bold">✓</span>
                  <span>Hands-free monthly farm maintenance for NRI/absentee owners</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CARD 2: Our Vision */}
          <div className="relative overflow-hidden bg-white/90 sm:bg-white rounded-3xl p-6 sm:p-8 border border-[#dce8dc] shadow-sm flex flex-col sm:flex-row items-start gap-5 group hover:shadow-md transition-all duration-300">
            {/* Right Side Decorative Leaf */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
              <img
                src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
                alt=""
                aria-hidden="true"
                className="w-20 sm:w-24 h-auto object-contain opacity-40 -scale-x-100 rotate-12"
              />
            </div>

            {/* Circular Dark Green Icon Container */}
            <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#1b5028] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <Eye className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.8]" />
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex-1">
              <h3 className="text-2xl sm:text-[26px] font-bold text-[#0c2e1b] font-serif mb-2 leading-tight">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                To lead the transformation of South Indian farmlands into sustainable, highly productive, and valuable ecological assets for future generations.
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-[#15803d] font-bold">✓</span>
                  <span>Restoring degraded soil through organic bio-enrichment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#15803d] font-bold">✓</span>
                  <span>Creating high-value timber & commercial fruit orchards</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#15803d] font-bold">✓</span>
                  <span>Direct market linkage & buyback support for farmers</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMissionVision;
