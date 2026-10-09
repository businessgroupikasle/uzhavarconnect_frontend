import React from 'react';
import { Breadcrumbs } from '../../../components/common/Breadcrumbs';

export const BlogHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#072e18] via-[#0e3922] to-[#14532d] text-white py-12 sm:py-16 text-center">
      <div 
        className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/assets/hero-farm.svg')` }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          Agricultural Guides & Knowledge Hub
        </h1>

        <div className="mt-3.5 flex justify-center">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
