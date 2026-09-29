import React from 'react';
import { FileText, MapPin, FileCheck, Settings, ArrowRight } from 'lucide-react';

interface ProcessStep {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    icon: <FileText className="w-8 h-8 text-[#15803d] stroke-[1.8]" />,
    title: 'Listen to your goals',
    description: 'Understand your land and what you want to achieve.'
  },
  {
    number: 2,
    icon: <MapPin className="w-8 h-8 text-[#15803d] stroke-[1.8]" />,
    title: 'Assess your land',
    description: 'Visit, evaluate and understand your needs.'
  },
  {
    number: 3,
    icon: <FileCheck className="w-8 h-8 text-[#15803d] stroke-[1.8]" />,
    title: 'Agree on the plan',
    description: 'Share a clear plan and transparent estimate.'
  },
  {
    number: 4,
    icon: <Settings className="w-8 h-8 text-[#15803d] stroke-[1.8]" />,
    title: 'Execute and support',
    description: 'Implement with quality and stay with you beyond completion.'
  }
];

export const AboutProcess: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#deebe0] pt-6 sm:pt-8 pb-12 sm:pb-16 border-b border-[#cde0d0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* Eyebrow Label with flanking horizontal rules */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/45" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#15803d] uppercase">
              HOW WE WORK WITH YOU
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/45" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0c2e1b] tracking-tight font-serif leading-tight">
            A simple process. A greener tomorrow.
          </h2>
        </div>

        {/* 4 Process Cards with Green Connecting Arrows */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col">
                {/* White Card */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-slate-200/70 shadow-sm flex flex-col justify-start h-full group hover:shadow-md transition-all duration-300">
                  {/* Top Row: Number Badge + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Dark Green Circular Numbered Badge */}
                    <div className="w-8 h-8 rounded-full bg-[#1b5028] text-white font-bold flex items-center justify-center text-xs sm:text-sm shrink-0 shadow-sm">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="shrink-0">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-[17px] font-bold text-[#0c2e1b] font-serif mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Desktop Connecting Arrow (between cards 1->2, 2->3, 3->4) */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div 
                    className="hidden lg:flex absolute -right-4 xl:-right-4 top-1/2 -translate-y-1/2 z-20 text-[#15803d] pointer-events-none"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutProcess;
