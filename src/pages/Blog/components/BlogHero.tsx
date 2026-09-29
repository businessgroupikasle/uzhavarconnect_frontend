import React from 'react';

export const BlogHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#072e18] via-[#0e3922] to-[#14532d] text-white py-12 sm:py-16 text-center">
      <div 
        className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/assets/hero-farm.svg')` }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-emerald-300 border border-emerald-400/20 mb-4 backdrop-blur-sm">
          AGRONOMIC EDUCATION & INSIGHTS
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          Agricultural Guides & Knowledge Hub
        </h1>

        <p className="mt-4 text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          Actionable insights, economic analyses, and engineering roadmaps for profitable, sustainable farming.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
