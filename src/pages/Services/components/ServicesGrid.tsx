import React from 'react';
import { Link } from 'react-router-dom';

interface AgriculturalServiceItem {
  title: string;
  description: string;
  slug: string;
  image: string;
}

const AGRICULTURAL_SERVICES: AgriculturalServiceItem[] = [
  {
    title: 'Land Preparation & Development Works',
    description: 'Land levelling, ploughing and farm groundwork.',
    slug: 'land-preparation-and-development',
    image: '/assets/illustrations/land-preparation.png',
  },
  {
    title: 'Farm Layout & Planning',
    description: 'Practical layouts for efficient land use.',
    slug: 'farm-layout-and-planning',
    image: '/assets/services/farm-layout-planning.jpg',
  },
  {
    title: 'Drip Irrigation Installation',
    description: 'Water-efficient irrigation for your crops.',
    slug: 'drip-irrigation-installation',
    image: '/assets/gallery/gallery-irrigation-4zone-manifold.jpg',
  },
  {
    title: 'Water Tank Works',
    description: 'Farm water storage construction and installation.',
    slug: 'water-tank-works',
    image: '/assets/gallery/gallery-land-dev-circular-tank.jpg',
  },
  {
    title: 'All Types of Tree Plantation',
    description: 'Fruit, timber and green-belt planting.',
    slug: 'all-types-of-tree-plantation',
    image: '/assets/gallery/gallery-plantation-grafted-sapling.jpg',
  },
  {
    title: 'Farm Maintenance (AMC)',
    description: 'Ongoing and annual care for your farm.',
    slug: 'farm-maintenance-amc',
    image: '/assets/gallery/gallery-land-dev-landscape-path.jpg',
  },
  {
    title: 'Harvest Support',
    description: 'Harvesting and post-harvest assistance.',
    slug: 'harvest-support',
    image: '/assets/services/service-harvest-support.jpg',
  },
  {
    title: 'Buyback Assistance',
    description: 'Support for produce buyback and market connections.',
    slug: 'buyback-assistance',
    image: '/assets/services/service-buyback.jpg',
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8faf7] pt-8 sm:pt-12 lg:pt-14 pb-8 sm:pb-12">
      {/* 1. Left Decorative Leaf - Flanking Upper Left */}
      <img
        src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
        alt=""
        aria-hidden="true"
        className="absolute top-2 sm:top-4 left-0 sm:left-4 md:left-8 lg:left-12 w-24 sm:w-32 md:w-40 lg:w-44 h-auto pointer-events-none select-none opacity-80 -scale-x-100 rotate-12 z-0"
      />

      {/* 2. Right Decorative Leaf - Flanking Upper Right */}
      <img
        src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
        alt=""
        aria-hidden="true"
        className="absolute top-2 sm:top-4 right-0 sm:right-4 md:right-8 lg:right-12 w-24 sm:w-32 md:w-40 lg:w-44 h-auto pointer-events-none select-none opacity-80 -rotate-12 z-0"
      />

      {/* 3. Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          {/* Eyebrow with flanking horizontal lines */}
          <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-2.5">
            <span className="w-8 sm:w-11 h-[1.5px] bg-[#15803d]/45" aria-hidden="true" />
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#15803d] uppercase">
              OUR SERVICES
            </span>
            <span className="w-8 sm:w-11 h-[1.5px] bg-[#15803d]/45" aria-hidden="true" />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#0f2619] tracking-tight leading-tight">
            Our Agricultural Services
          </h2>


        </div>

        {/* 8-Service Two-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {AGRICULTURAL_SERVICES.map((service) => (
            <div
              key={service.slug}
              className="relative overflow-hidden bg-[#fbfdfa] hover:bg-white border border-[#e2ece0] hover:border-[#c8ddc4] rounded-2xl p-3 sm:p-4 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md flex flex-row items-center gap-3.5 sm:gap-5 group"
            >
              {/* Agricultural image on the left (fixed size, rounded corners, object-fit: cover) */}
              <div className="w-32 sm:w-40 md:w-44 lg:w-48 h-28 sm:h-32 md:h-36 flex-shrink-0 rounded-xl overflow-hidden bg-[#edf4ec]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Service Details on the right */}
              <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-1 relative z-10">
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg lg:text-[18px] leading-snug group-hover:text-[#15803d] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-1.5 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                <div className="mt-2.5 sm:mt-3">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#15803d] hover:text-[#166534] group/link transition-colors focus:outline-none"
                  >
                    <span className="border-b border-[#15803d] pb-0.5">View Service</span>
                    <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1 font-bold">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Pale-green decorative leaf graphic toward bottom-right of the card */}
              <img
                src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
                alt=""
                aria-hidden="true"
                className="absolute -bottom-2 -right-2 w-16 sm:w-20 h-auto pointer-events-none select-none opacity-30 sm:opacity-35 z-0 transition-opacity group-hover:opacity-45"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
