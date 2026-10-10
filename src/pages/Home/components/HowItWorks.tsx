import React from 'react';
import { FileText, MapPin, FileCheck, Settings, ArrowRight, ArrowDown } from 'lucide-react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Share Your Requirement',
    description: 'Tell us about your land and your goals.',
    icon: <FileText className="w-6 h-6 text-[#15803d] stroke-[2]" />
  },
  {
    number: 2,
    title: 'Site Consultation',
    description: 'We visit your site and understand your needs.',
    icon: <MapPin className="w-6 h-6 text-[#15803d] stroke-[2]" />
  },
  {
    number: 3,
    title: 'Plan & Estimate',
    description: 'Get a clear plan and transparent estimate.',
    icon: <FileCheck className="w-6 h-6 text-[#15803d] stroke-[2]" />
  },
  {
    number: 4,
    title: 'Project Execution',
    description: 'We implement the plan with quality and care.',
    icon: <Settings className="w-6 h-6 text-[#15803d] stroke-[2]" />
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16 bg-[#deebe0] border-b border-[#cde0d0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Small centered label with flanking horizontal rules (WCAG AA Compliant contrast) */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
            <span className="w-8 sm:w-12 h-[1px] bg-[#166534]/50" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#166534] uppercase">
              HOW IT WORKS
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#166534]/50" aria-hidden="true" />
          </div>

          {/* Large centered heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0c2e1b] tracking-tight font-serif leading-tight">
            A simple process. A greener tomorrow.
          </h2>
        </div>

        {/* Desktop Layout: 4 Compact Cards in 1 Row with Connecting Arrows (>= 1024px) */}
        <div className="hidden lg:flex items-center justify-between gap-3 xl:gap-4">
          {PROCESS_STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Process Card */}
              <div className="flex-1 bg-white rounded-2xl p-5 xl:p-6 shadow-[0_2px_10px_rgba(15,46,27,0.03)] border border-slate-200/70 hover:shadow-md transition-shadow duration-300 min-h-[160px] flex flex-col justify-between">
                {/* Top: Number Badge (left) & Green Icon (right) */}
                <div className="flex items-center justify-between w-full mb-3.5">
                  <span className="w-8 h-8 rounded-full bg-[#1b4324] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {step.number}
                  </span>
                  <div className="shrink-0">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[15px] xl:text-base font-bold text-[#0c2e1b] text-center mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs xl:text-[13px] text-slate-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Green Arrow between cards */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="shrink-0 text-[#15803d] px-1" aria-hidden="true">
                  <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile & Tablet Layout: Vertically stacked cards with downward arrows (< 1024px) */}
        <div className="lg:hidden flex flex-col items-center gap-3 max-w-md mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Process Card */}
              <div className="w-full bg-white rounded-2xl p-5 shadow-[0_2px_10px_rgba(15,46,27,0.03)] border border-slate-200/70 flex flex-col justify-between">
                {/* Top: Number Badge (left) & Green Icon (right) */}
                <div className="flex items-center justify-between w-full mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#1b4324] text-white font-bold text-sm flex items-center justify-center shrink-0">
                    {step.number}
                  </span>
                  <div className="shrink-0">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-[#0c2e1b] text-center mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Downward Arrow */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="text-[#15803d] py-1" aria-hidden="true">
                  <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
