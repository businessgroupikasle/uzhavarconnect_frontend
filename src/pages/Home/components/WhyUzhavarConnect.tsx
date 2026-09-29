import React from 'react';
import { Users, Award, Leaf, BarChart3 } from 'lucide-react';

const WHY_FEATURES = [
  {
    icon: <Users className="w-10 h-10 text-[#15803d] stroke-[1.8]" />,
    title: 'Farmer-focused approach',
    description: 'We understand your land and your goals.'
  },
  {
    icon: <Award className="w-10 h-10 text-[#15803d] stroke-[1.8]" />,
    title: 'Quality workmanship',
    description: 'Reliable execution with attention to detail.'
  },
  {
    icon: <Leaf className="w-10 h-10 text-[#15803d] stroke-[1.8]" />,
    title: 'End-to-end support',
    description: 'From planning to harvest, we stay with you.'
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-[#15803d] stroke-[1.8]" />,
    title: 'Practical planning',
    description: 'Solutions that are feasible, sustainable and long-term.'
  }
];

export const WhyUzhavarConnect: React.FC = () => {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14 bg-[#f9faf8] border-b border-[#e2e8e0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Small centered label */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/45" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#15803d] uppercase">
              WHY UZHAVAR CONNECT
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/45" aria-hidden="true" />
          </div>

          {/* Large centered heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2e1b] tracking-tight font-serif leading-tight">
            Built for farmers. Driven by impact.
          </h2>
        </div>

        {/* 4 Feature Columns: 2-column grid on mobile/tablet, 4 in ONE row on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-8 lg:gap-0">
          {WHY_FEATURES.map((feature, idx) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center text-center px-2 sm:px-4 lg:px-6 ${
                idx < WHY_FEATURES.length - 1 ? 'lg:border-r lg:border-[#d5ded4]' : ''
              }`}
            >
              {/* Simple Green Icon */}
              <div className="mb-2 sm:mb-3.5 flex items-center justify-center">
                {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, {
                  className: "w-8 h-8 sm:w-10 sm:h-10 text-[#15803d] stroke-[1.8]"
                })}
              </div>

              {/* Small Heading */}
              <h3 className="text-[13.5px] sm:text-base font-bold text-[#0c2e1b] mb-1 sm:mb-1.5 leading-snug">
                {feature.title}
              </h3>

              {/* Short Description */}
              <p className="text-[11.5px] sm:text-[13px] text-slate-600 leading-relaxed max-w-[200px] sm:max-w-[220px] mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUzhavarConnect;
