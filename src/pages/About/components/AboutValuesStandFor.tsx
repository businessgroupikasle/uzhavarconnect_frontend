import React from 'react';
import { Users, Award, Leaf } from 'lucide-react';

interface ValueCardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const VALUES_DATA: ValueCardItem[] = [
  {
    icon: <Users className="w-10 h-10 text-[#15803d] stroke-[1.8]" />,
    title: 'Farmer-first thinking',
    description: "We put farmers' needs at the heart of everything we do."
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-[#15803d]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <circle cx="9" cy="12" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="0.75" fill="currentColor" stroke="none" />
        <circle cx="15" cy="12" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Transparent communication',
    description: 'Clear, honest and timely at every step.'
  },
  {
    icon: <Award className="w-10 h-10 text-[#15803d] stroke-[1.8]" />,
    title: 'Quality workmanship',
    description: 'Reliable execution with attention to detail.'
  },
  {
    icon: <Leaf className="w-10 h-10 text-[#15803d] stroke-[1.8]" />,
    title: 'Responsible resource use',
    description: 'Sustainable practices for healthier land tomorrow.'
  }
];

export const AboutValuesStandFor: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Eyebrow Label with flanking horizontal rules */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/45" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#15803d] uppercase">
              WHAT WE STAND FOR
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/45" aria-hidden="true" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2e1b] tracking-tight font-serif leading-tight">
            Our values grow stronger together.
          </h2>
        </div>

        {/* Four Value Cards in 1 Row on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {VALUES_DATA.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 text-center border border-slate-200/70 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-start h-full"
            >
              {/* Icon at Top */}
              <div className="mb-4 flex items-center justify-center h-12">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-[17px] font-bold text-[#0c2e1b] mb-2 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutValuesStandFor;
