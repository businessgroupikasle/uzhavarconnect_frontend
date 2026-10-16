import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../../../../types';
import { getServiceIcon } from './ServiceIcons';

interface CompactServiceCardProps {
  service: ServiceItem;
  isSelected?: boolean;
  onSelect?: () => void;
}

export const CompactServiceCard: React.FC<CompactServiceCardProps> = ({
  service,
  isSelected = false,
  onSelect,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If not holding modifier key (Ctrl/Cmd/Shift/Alt) and card is not yet selected,
    // select it first instead of immediately navigating.
    // If it is already selected, clicking it allows normal navigation to the service page.
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !isSelected) {
      e.preventDefault();
      onSelect?.();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === ' ' && !isSelected) {
      e.preventDefault();
      onSelect?.();
    }
  };

  const handleFocus = () => {
    if (!isSelected) {
      onSelect?.();
    }
  };

  return (
    <Link
      to={`/services/${service.slug}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      className="group block h-full focus:outline-none rounded-xl sm:rounded-2xl transition-all duration-300"
      aria-label={service.title}
      aria-pressed={isSelected}
    >
      <div
        className={`relative overflow-hidden h-full min-h-[140px] sm:min-h-[155px] rounded-xl sm:rounded-2xl p-4 sm:p-5 border transition-all duration-300 ease-out flex flex-col items-center justify-center text-center cursor-pointer ${
          isSelected
            ? 'bg-[#15803d] hover:bg-[#166534] border-[#15803d] shadow-[0_4px_20px_rgba(21,128,61,0.25)] hover:shadow-[0_8px_30px_rgba(21,128,61,0.4)] -translate-y-1.5'
            : 'bg-white hover:bg-[#fcfdfa] border-[#e5ece4] hover:border-[#15803d]/40 shadow-[0_2px_10px_rgba(15,46,27,0.03)] hover:shadow-[0_12px_28px_-6px_rgba(21,128,61,0.15)] hover:-translate-y-1.5 active:scale-[0.98]'
        }`}
      >
        {/* Centered Icon inside Circle Container */}
        <div className="shrink-0 mb-3 relative flex items-center justify-center">
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 ease-out group-hover:scale-110 relative ${
              isSelected
                ? 'bg-white text-[#15803d] shadow-md p-1'
                : 'bg-[#f0fdf4] group-hover:bg-[#dcfce7] text-[#15803d]'
            }`}
          >
            {/* If Farm Maintenance is selected, preserve the 3 green rays above the gear */}
            {isSelected && service.slug === 'farm-maintenance-amc' && (
              <div className="flex justify-center gap-0.5 mb-0.5">
                <span className="w-0.5 h-1.5 bg-[#15803d] rounded-full transform -rotate-12" />
                <span className="w-0.5 h-2 bg-[#15803d] rounded-full" />
                <span className="w-0.5 h-1.5 bg-[#15803d] rounded-full transform rotate-12" />
              </div>
            )}
            {getServiceIcon(
              service.slug,
              'w-6 h-6 sm:w-7 sm:h-7 text-[#15803d] transition-transform duration-300 ease-out'
            )}
          </div>
        </div>

        {/* Centered Title */}
        <h3
          className={`relative z-10 text-[13px] sm:text-[14.5px] leading-snug transition-colors duration-300 ${
            isSelected
              ? 'font-bold text-white leading-tight'
              : 'font-semibold text-[#0c2e1b] group-hover:text-[#15803d]'
          }`}
        >
          {service.slug === 'farm-maintenance-amc' ? (
            <>Farm Maintenance<br />(AMC)</>
          ) : (
            service.title
          )}
        </h3>
      </div>
    </Link>
  );
};

export default CompactServiceCard;
