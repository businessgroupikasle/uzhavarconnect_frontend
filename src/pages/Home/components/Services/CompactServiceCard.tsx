import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../../../../types';
import { getServiceIcon } from './ServiceIcons';

interface CompactServiceCardProps {
  service: ServiceItem;
}

export const CompactServiceCard: React.FC<CompactServiceCardProps> = ({ service }) => {
  const isPopular = service.slug === 'farm-maintenance-amc';

  if (isPopular) {
    return (
      <Link
        to={`/services/${service.slug}`}
        className="group block h-full focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-2 rounded-xl sm:rounded-2xl"
        aria-label={service.title}
      >
        <div className="relative overflow-visible h-full min-h-[140px] sm:min-h-[155px] bg-[#15803d] hover:bg-[#166534] rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#15803d] shadow-[0_4px_20px_rgba(21,128,61,0.25)] hover:shadow-[0_8px_30px_rgba(21,128,61,0.4)] group-hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out flex flex-col items-center justify-center text-center">

          {/* Centered White Circle Badge with Green Rays + Gear Icon Inside */}
          <div className="shrink-0 mb-3 relative flex items-center justify-center">
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white text-[#15803d] shadow-md flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110 relative p-1">
              {/* Three Green Rays INSIDE top of white circle */}
              <div className="flex justify-center gap-0.5 mb-0.5">
                <span className="w-0.5 h-1.5 bg-[#15803d] rounded-full transform -rotate-12" />
                <span className="w-0.5 h-2 bg-[#15803d] rounded-full" />
                <span className="w-0.5 h-1.5 bg-[#15803d] rounded-full transform rotate-12" />
              </div>
              {/* Gear Icon in center of circle */}
              {getServiceIcon(
                service.slug,
                "w-6 h-6 sm:w-7 sm:h-7 text-[#15803d]"
              )}
            </div>
          </div>

          {/* Centered White Title with line break for (AMC) */}
          <h3 className="relative z-10 text-[13px] sm:text-[14.5px] font-bold text-white leading-tight">
            Farm Maintenance<br />(AMC)
          </h3>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block h-full focus:outline-none focus:ring-2 focus:ring-[#15803d] focus:ring-offset-2 rounded-xl sm:rounded-2xl"
      aria-label={service.title}
    >
      <div className="relative overflow-hidden h-full min-h-[140px] sm:min-h-[155px] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-[#e5ece4] group-hover:border-[#15803d]/40 shadow-[0_2px_10px_rgba(15,46,27,0.03)] group-hover:shadow-[0_12px_28px_-6px_rgba(21,128,61,0.15)] group-hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out flex flex-col items-center justify-center text-center">

        {/* Centered Green Icon inside Circle Container */}
        <div className="shrink-0 mb-3 relative flex items-center justify-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#f0fdf4] group-hover:bg-[#dcfce7] text-[#15803d] flex items-center justify-center transition-all duration-300 ease-out group-hover:scale-110">
            {getServiceIcon(
              service.slug,
              "w-6 h-6 sm:w-7 sm:h-7 text-[#15803d] transition-transform duration-300 ease-out"
            )}
          </div>
        </div>

        {/* Centered Title */}
        <h3 className="relative z-10 text-[13px] sm:text-[14.5px] font-semibold text-[#0c2e1b] group-hover:text-[#15803d] transition-colors duration-300 leading-snug">
          {service.title}
        </h3>
      </div>
    </Link>
  );
};

export default CompactServiceCard;
