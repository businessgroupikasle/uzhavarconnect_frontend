import React from 'react';

export const AboutWhoWeAre: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Rounded Agricultural Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-md shadow-slate-900/5 border-4 border-white group">
              <img
                src="/assets/who-we-are.png"
                alt="Farmer and agricultural professional working together in the field"
                loading="lazy"
                className="w-full h-[280px] sm:h-[360px] md:h-[400px] lg:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Text Content + Decorative Leaf */}
          <div className="lg:col-span-6 relative">
            
            {/* Decorative Leaf Graphic on the Right Side */}
            <div className="absolute -top-6 -right-4 sm:-right-8 pointer-events-none select-none z-0">
              <img
                src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
                alt=""
                aria-hidden="true"
                className="w-24 sm:w-32 lg:w-36 h-auto object-contain opacity-75 rotate-12"
              />
            </div>

            {/* Text Content */}
            <div className="relative z-10 max-w-xl">
              {/* Eyebrow Label with flanking horizontal rules */}
              <div className="inline-flex items-center gap-3 mb-3">
                <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/45" aria-hidden="true" />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#15803d] uppercase">
                  WHO WE ARE
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2e1b] tracking-tight font-serif mb-4 leading-tight">
                Your land.
                <br />
                Our shared purpose.
              </h2>

              {/* Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Uzhavar Connect brings land development, irrigation, plantation, and farm care together. We support farmers, land owners and farm developers from initial planning through ongoing maintenance and harvest.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
