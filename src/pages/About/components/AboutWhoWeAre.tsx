import React from 'react';

export const AboutWhoWeAre: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Rounded Agricultural Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-md shadow-slate-900/5 border-4 border-white group">
              <picture>
                <source srcSet="/assets/who-we-are.webp" type="image/webp" />
                <img
                  src="/assets/who-we-are.png"
                  alt="Farmer and agricultural professional working together in the field"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={420}
                  className="w-full h-[280px] sm:h-[360px] md:h-[400px] lg:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </picture>
            </div>
          </div>

          {/* Right Column: Text Content + Decorative Leaf */}
          <div className="lg:col-span-6 relative">
            
            {/* Decorative Leaf Graphic on the Right Side */}
            <div className="absolute -top-6 -right-4 sm:-right-8 pointer-events-none select-none z-0">
              <picture>
                <source srcSet="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.webp" type="image/webp" />
                <img
                  src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  width={144}
                  height={144}
                  className="w-24 sm:w-32 lg:w-36 h-auto object-contain opacity-75 rotate-12"
                />
              </picture>
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
              <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Uzhavar Connect</strong> brings professional land engineering, precision drip irrigation, high-value timber & fruit plantations, and annual farm management under one trusted roof across Tamil Nadu and South India.
                </p>
                <p>
                  We empower non-resident land owners, NRI farm investors, and progressive farmers by transforming barren, unmanaged plots into thriving, profitable agricultural eco-assets. From initial drone elevation surveys and laser land levelling to automated fertigation, tree planting, and monthly digital photo/video maintenance reports, our expert agronomists handle every single aspect.
                </p>
                <p>
                  Our core philosophy centers on <em>sustainable soil restoration, maximum water efficiency, and transparent long-term value creation</em>—ensuring your farmland remains green, secure, and productive for generations to come.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
