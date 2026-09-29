import React from 'react';
import { GalleryItem } from '../../../data/galleryData';
import { GalleryCard } from './GalleryCard';
import { GalleryCategory } from './GalleryFilters';

interface GalleryGridProps {
  activeCategory: GalleryCategory;
  items: GalleryItem[];
  additionalItems: GalleryItem[];
  allCatalogItems?: GalleryItem[];
  onOpen: (item: GalleryItem) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  activeCategory,
  items,
  additionalItems,
  allCatalogItems,
  onOpen,
}) => {
  const fullList = allCatalogItems || [...items, ...additionalItems];

  const displayedItems =
    activeCategory === 'All Images'
      ? [...items, ...additionalItems]
      : fullList.filter((item) => item.category === activeCategory);

  if (displayedItems.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 p-8 shadow-xs">
        <p className="text-slate-500 text-sm font-medium">No images found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
      {displayedItems.map((item) => (
        <GalleryCard
          key={item.id}
          item={item}
          onOpen={onOpen}
          className="aspect-[4/3] w-full"
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
