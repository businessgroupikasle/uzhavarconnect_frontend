import React from 'react';
import { SectionTitle } from '../../../components/common/SectionTitle';
import { FARM_JOURNEY_STEPS } from '../../../utils/constants';

const journeyImages = [
  '/assets/journey-1.svg',
  '/assets/journey-2.svg',
  '/assets/journey-3.svg',
  '/assets/journey-4.svg',
];

export const FarmJourney: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching screenshot */}
        <SectionTitle
          badge="YOUR FARM JOURNEY"
          title="A Simple 4-Step Process"
          subtitle="We streamline complex agricultural engineering into a predictable, transparent four-stage roadmap."
        />

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          
          {FARM_JOURNEY_STEPS.map((step, index) => (
            <div key={step.step} className="relative flex flex-col items-center text-center group">
              
              {/* Circular Photo Container */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden p-1.5 border-4 border-emerald-100 bg-white shadow-md group-hover:border-[#15803d] transition-all duration-300">
                <img
                  src={journeyImages[index]}
                  alt={step.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Number Badge at bottom-center of circle */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-[#15803d] text-white font-extrabold flex items-center justify-center text-sm shadow-md border-2 border-white">
                  {step.step}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mt-5">
                <h3 className="text-xl font-bold text-[#0e3922]">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-emerald-700">
                  {step.subtitle}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Connecting Arrow for desktop (between items 1->2, 2->3, 3->4) */}
              {index < FARM_JOURNEY_STEPS.length - 1 && (
                <div className="hidden lg:flex absolute top-24 -right-4 transform -translate-y-1/2 z-20 text-emerald-400 font-bold text-2xl select-none">
                  →
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FarmJourney;
