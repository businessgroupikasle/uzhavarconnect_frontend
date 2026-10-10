import React from 'react';
import { Link } from 'react-router-dom';

interface IllustrationItem {
  title: string;
  image: string;
  webpImage: string;
  slug: string;
}

const ILLUSTRATIONS: IllustrationItem[] = [
  {
    title: 'Farm Maintenance (AMC)',
    image: '/assets/illustrations/farm-amc.png',
    webpImage: '/assets/illustrations/farm-amc.webp',
    slug: 'farm-maintenance-amc'
  },
  {
    title: 'Land Preparation & Development Works',
    image: '/assets/illustrations/land-preparation.png',
    webpImage: '/assets/illustrations/land-preparation.webp',
    slug: 'land-preparation-and-development'
  },
  {
    title: 'Drip Irrigation Installation',
    image: '/assets/illustrations/drip-irrigation.png',
    webpImage: '/assets/illustrations/drip-irrigation.webp',
    slug: 'drip-irrigation-installation'
  },
  {
    title: 'All Types of Tree Plantation',
    image: '/assets/illustrations/tree-plantation.png',
    webpImage: '/assets/illustrations/tree-plantation.webp',
    slug: 'all-types-of-tree-plantation'
  }
];

export const ServiceIllustrations: React.FC = () => {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-14 pb-10 sm:pb-12 lg:pb-14 bg-[#deebe0] border-b border-[#cde0d0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          {/* Small Heading with flanking horizontal rules (WCAG AA Compliant contrast) */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
            <span className="w-8 sm:w-12 h-[1px] bg-[#166534]/50" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#166534] uppercase">
              SERVICE ILLUSTRATIONS
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-[#166534]/50" aria-hidden="true" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0c2e1b] tracking-tight font-serif mb-2.5 leading-tight">
            Our services in action.
          </h2>
        </div>

        {/* 4 Service Illustration Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {ILLUSTRATIONS.map((item) => (
            <Link
              key={item.title}
              to={`/services/${item.slug}`}
              className="group block rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 bg-white border border-slate-200/60 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#15803d] focus:ring-offset-2"
              aria-label={item.title}
            >
              {/* Illustration Image with WebP picture element */}
              <div className="overflow-hidden bg-slate-100">
                <picture>
                  <source srcSet={item.webpImage} type="image/webp" />
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width={320}
                    height={208}
                    className="w-full h-48 sm:h-52 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </picture>
              </div>

              {/* Card Label Strip */}
              <div className="py-3.5 px-3.5 text-center bg-white">
                <h3 className="text-xs sm:text-sm lg:text-[14.5px] font-semibold text-[#0c2e1b] group-hover:text-[#15803d] transition-colors leading-snug">
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
