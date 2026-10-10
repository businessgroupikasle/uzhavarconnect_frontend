import React from 'react';
import { FileText, Sprout, Settings } from 'lucide-react';

interface StageItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const STAGES: StageItem[] = [
  {
    icon: <FileText className="w-6 h-6 text-white stroke-[1.8]" />,
    title: 'Plan & Prepare',
    description: 'Understand your goals, assess your land and create a practical plan.'
  },
  {
    icon: <Sprout className="w-6 h-6 text-white stroke-[1.8]" />,
    title: 'Build & Plant',
    description: 'Carry out land preparation, irrigation installation and plantation works.'
  },
  {
    icon: <Settings className="w-6 h-6 text-white stroke-[1.8]" />,
    title: 'Maintain & Harvest',
    description: 'Provide ongoing farm care, maintenance and harvest support.'
  }
];

export const AboutOnePartner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#deebe0] pt-10 sm:pt-14 pb-10 sm:pb-12 border-b border-[#cde0d0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Eyebrow with flanking horizontal rules */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/45" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#15803d] uppercase">
              ONE PARTNER. EVERY STAGE.
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/45" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2e1b] tracking-tight font-serif leading-tight">
            One partner. Every stage of your farm.
          </h2>
        </div>

        {/* Two-Column Grid: Image on Left | 3 Stacked Stages on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Farmland Image with Drip Irrigation and "Healthy Land Brighter Futures" */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-md shadow-slate-900/10 border-4 border-white group">
              <picture>
                <source srcSet="/assets/drip-farm-stage.webp" type="image/webp" />
                <img
                  src="/assets/drip-farm-stage.jpg"
                  alt="Farmland with drip irrigation - Healthy Land Brighter Futures"
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[280px] sm:h-[360px] md:h-[400px] lg:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </picture>
            </div>
          </div>

          {/* Right Column: 3 Vertically Stacked Service Items with Separators */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {STAGES.map((item, idx) => (
              <React.Fragment key={item.title}>
                <div className="flex items-start gap-4 sm:gap-5 py-2">
                  {/* Dark-Green Circular Icon Container */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#1b5028] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    {item.icon}
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#0c2e1b] font-serif mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Thin Horizontal Separator (between items, not after last) */}
                {idx < STAGES.length - 1 && (
                  <div className="w-full h-[1px] bg-[#c5d8c8] my-3 sm:my-4" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutOnePartner;
