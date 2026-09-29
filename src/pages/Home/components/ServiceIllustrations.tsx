import React from 'react';
import { Link } from 'react-router-dom';

interface IllustrationItem {
  title: string;
  image: string;
  slug: string;
}

const ILLUSTRATIONS: IllustrationItem[] = [
  {
    title: 'Land Preparation & Development Works',
    image: '/assets/illustrations/land-preparation.png',
    slug: 'land-preparation-and-development'
  },
  {
    title: 'Drip Irrigation Installation',
    image: '/assets/illustrations/drip-irrigation.png',
    slug: 'drip-irrigation-installation'
  },
  {
    title: 'All Types of Tree Plantation',
    image: '/assets/illustrations/tree-plantation.png',
    slug: 'all-types-of-tree-plantation'
  }
];

export const ServiceIllustrations: React.FC = () => {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14 bg-[#deebe0] border-b border-[#cde0d0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-7">
          {/* Small Heading with flanking horizontal rules */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/45" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#15803d] uppercase">
              SERVICE ILLUSTRATIONS
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#15803d]/45" aria-hidden="true" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0c2e1b] tracking-tight font-serif mb-2.5 leading-tight">
            Our services in action.
          </h2>

          {/* Description */}

        </div>

        {/* 3 Service Illustration Cards in 1 Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {ILLUSTRATIONS.map((item) => (
            <Link
              key={item.title}
              to={`/services/${item.slug}`}
              className="group block rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white border border-slate-200/60 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#15803d] focus:ring-offset-2"
              aria-label={item.title}
            >
              {/* Illustration Image */}
              <div className="overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-48 sm:h-52 md:h-44 lg:h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Label Strip */}
              <div className="py-3 px-3 sm:py-3.5 sm:px-4 text-center bg-white">
                <h3 className="text-xs sm:text-sm lg:text-[15px] font-semibold text-[#0c2e1b] group-hover:text-[#15803d] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceIllustrations;
