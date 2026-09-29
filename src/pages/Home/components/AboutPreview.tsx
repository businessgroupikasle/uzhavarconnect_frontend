import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sprout } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#fbfdfa] via-white to-[#f4f8f3] border-y border-[#e5ece2]">
      
      {/* Subtle organic background accent glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#f0ad25]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Equal 50/50 Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">

          {/* LEFT SIDE: Equal 50% Farmer Portrait Photo Card */}
          <div className="w-full">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Decorative warm green frame backdrop */}
              <div className="absolute inset-0 bg-[#0e3922]/10 rounded-3xl translate-x-2.5 translate-y-2.5 sm:translate-x-3.5 sm:translate-y-3.5 -z-10" />

              {/* Farmer Image Card with balanced height matching content */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-emerald-950/15 border-4 border-white group h-[380px] sm:h-[430px] lg:h-[460px] bg-slate-100">
                <img
                  src="/assets/farmer-portrait.jpg"
                  alt="Farmer in Agricultural Land - Uzhavar Connect"
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient shadow at the bottom of the photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Verified Experience Badge */}
              <div className="absolute -bottom-3 right-3 sm:-bottom-4 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 z-10">
                <div className="w-9 h-9 rounded-xl bg-[#0e3922] text-[#f0ad25] flex items-center justify-center shrink-0 shadow-xs">
                  <Sprout className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="block text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
                    500+ Acres
                  </span>
                  <span className="block text-[10px] text-emerald-800 font-semibold tracking-wide">
                    Developed Farmlands
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: Equal 50% Content Column */}
          <div className="w-full flex flex-col justify-center space-y-4 sm:space-y-4.5">

            {/* Subtitle Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eef7ee] border border-[#d6ebd5] text-[#15803d] text-xs font-bold tracking-[0.16em] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#15803d] animate-pulse" />
                ABOUT UZHAVAR CONNECT
              </div>
            </div>

            {/* Strong Professional Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold font-serif text-[#0e3922] leading-tight tracking-tight">
              Empowering Farmers, Enhancing Farmland Value
            </h2>

            {/* Description Paragraph */}
            <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
              Uzhavar Connect is an agricultural farm land development and services company focused on helping farmers create productive, sustainable and profitable farmland. We combine field knowledge with modern techniques to deliver practical solutions — from land preparation to long-term farm management support.
            </p>

            {/* 4 Key Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#e2ede0] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                <span className="text-xs sm:text-[13px] font-medium text-slate-800">Turnkey Land Preparation</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#e2ede0] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                <span className="text-xs sm:text-[13px] font-medium text-slate-800">Precision Drip Irrigation</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#e2ede0] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                <span className="text-xs sm:text-[13px] font-medium text-slate-800">Scientific Tree Plantation</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#e2ede0] shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0" />
                <span className="text-xs sm:text-[13px] font-medium text-slate-800">End-to-End AMC Support</span>
              </div>
            </div>

            {/* Balanced Bottom Row: CTA Button + Signature */}
            <div className="flex flex-wrap items-end justify-between gap-4 pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0e3922] hover:bg-[#155332] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 text-[#f0ad25] group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Decorative Leaf & Handwritten Slogan */}
              <div className="flex flex-col items-end select-none pointer-events-none pr-1">
                <img
                  src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
                  alt=""
                  aria-hidden="true"
                  className="w-16 sm:w-20 h-auto object-contain opacity-85 mb-0.5 rotate-6"
                />
                <div className="text-right">
                  <span className="font-['Caveat',_cursive] text-xl sm:text-2xl font-bold text-[#1b5028] leading-none tracking-wide -rotate-3 inline-block">
                    Land Today
                  </span>
                  <br />
                  <span className="font-['Caveat',_cursive] text-xl sm:text-2xl font-bold text-[#1b5028] leading-none tracking-wide -rotate-3 inline-block mt-0.5">
                    A Better Tomorrow
                  </span>
                  <div className="w-28 sm:w-34 ml-auto -mt-0.5 -rotate-3">
                    <svg viewBox="0 0 160 12" fill="none" className="w-full h-auto text-[#15803d]">
                      <path
                        d="M3 8 C45 2 115 2 157 8"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
