import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../../../../types';
import { getServiceIcon } from './ServiceIcons';

interface CompactServiceCardProps {
  service: ServiceItem;
}

export const CompactServiceCard: React.FC<CompactServiceCardProps> = ({ service }) => {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block h-full focus:outline-none focus:ring-2 focus:ring-[#15803d] focus:ring-offset-2 rounded-2xl"
      aria-label={service.title}
    >
      <div className="relative overflow-hidden h-full bg-white rounded-2xl p-5 sm:p-6 border border-[#e5ece4] group-hover:border-[#86efac] shadow-[0_2px_10px_rgba(15,46,27,0.03)] group-hover:shadow-[0_16px_36px_-6px_rgba(21,128,61,0.2),0_6px_16px_rgba(0,0,0,0.04)] group-hover:-translate-y-2 active:scale-[0.98] active:translate-y-0 transition-all duration-300 ease-out flex flex-col items-center justify-center text-center">
        {/* Animated Top Accent Line (Sweeps across on hover) */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-[#15803d] to-emerald-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />

        {/* Soft Ambient Radial Glow on Hover */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Centered Clean Green Icon with Hover Pop & Aura */}
        <div className="shrink-0 mb-3.5 relative flex items-center justify-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-transparent group-hover:bg-emerald-50/90 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.25)] flex items-center justify-center transition-all duration-300 ease-out text-[#15803d] group-hover:text-[#16a34a]">
            {getServiceIcon(
              service.slug,
              "w-10 h-10 transition-transform duration-300 ease-out group-hover:scale-115 group-hover:-translate-y-0.5"
            )}
          </div>
        </div>

        {/* Centered Title */}
        <h3 className="relative z-10 text-[14.5px] sm:text-[15.5px] font-semibold text-[#0c2e1b] group-hover:text-[#15803d] transition-colors duration-300 leading-snug">
          {service.title}
        </h3>
      </div>
    </Link>
  );
};

export default CompactServiceCard;
