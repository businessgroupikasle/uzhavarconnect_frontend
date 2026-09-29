import React from 'react';

export const GALLERY_CATEGORIES = [
  'All Images',
  'Land Development',
  'Irrigation',
  'Plantation',
  'Farm Infrastructure',
  'Harvest',
  'Farm Maintenance',
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

interface GalleryFiltersProps {
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
}

export const GalleryFilters: React.FC<GalleryFiltersProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="bg-white pb-6 sm:pb-8 pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal scroll container on mobile, centered on tablet/desktop */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-1">
          {GALLERY_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelectCategory(category)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#15803d] text-white shadow-xs font-semibold'
                    : 'bg-white text-slate-700 hover:bg-[#f2f8f0] hover:text-[#15803d] border border-slate-200 hover:border-[#15803d]/40'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryFilters;
