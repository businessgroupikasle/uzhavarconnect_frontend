import React, { useState } from 'react';
import { usePageSeo } from '../../utils/seo';
import { GalleryHero } from './components/GalleryHero';
import { GalleryIntro } from './components/GalleryIntro';
import { GalleryFilters, GalleryCategory } from './components/GalleryFilters';
import { GalleryGrid } from './components/GalleryGrid';
import { GalleryLightbox } from './components/GalleryLightbox';
import { GalleryCTA } from './components/GalleryCTA';
import {
  INITIAL_GALLERY_ITEMS,
  ADDITIONAL_GALLERY_ITEMS,
  GalleryItem
} from '../../data/galleryData';
import { ChevronDown } from 'lucide-react';

export const Gallery: React.FC = () => {
  usePageSeo({
    title: 'Project Gallery | Real Farmland Transformations | Uzhavar Connect',
    description: 'Explore land preparation, drip irrigation, high-density tree plantations, and rural farm infrastructure across Tamil Nadu.',
  });

  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All Images');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [hasLoadedMore, setHasLoadedMore] = useState<boolean>(false);

  const initialItems = INITIAL_GALLERY_ITEMS;
  const additionalItems = hasLoadedMore ? ADDITIONAL_GALLERY_ITEMS : [];
  const allCatalogItems = [...INITIAL_GALLERY_ITEMS, ...ADDITIONAL_GALLERY_ITEMS];

  const activeDisplayedItems =
    activeCategory === 'All Images'
      ? [...initialItems, ...additionalItems]
      : allCatalogItems.filter((item) => item.category === activeCategory);

  const handleLoadMore = () => {
    setHasLoadedMore(true);
  };

  return (
    <div className="bg-[#fbfdfa] min-h-screen">
      {/* 1. Hero Section */}
      <GalleryHero />

      {/* 2. Gallery Introduction */}
      <GalleryIntro />

      {/* 3. Category Filter Tabs */}
      <GalleryFilters
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* 4. Responsive Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <GalleryGrid
          activeCategory={activeCategory}
          items={initialItems}
          additionalItems={additionalItems}
          allCatalogItems={allCatalogItems}
          onOpen={(item) => setSelectedItem(item)}
        />

        {/* 5. Load More Images Button */}
        {!hasLoadedMore && activeCategory === 'All Images' && (
          <div className="text-center mt-7 sm:mt-9">
            <button
              onClick={handleLoadMore}
              type="button"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 bg-white hover:bg-[#15803d] text-[#15803d] hover:text-white border-2 border-[#15803d] font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-all duration-200 cursor-pointer group"
            >
              <span>Load More Images</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </button>
          </div>
        )}
      </section>

      {/* 6. Bottom CTA Section */}
      <GalleryCTA />

      {/* 7. Image Preview / Lightbox Modal */}
      <GalleryLightbox
        item={selectedItem}
        allItems={activeDisplayedItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(item) => setSelectedItem(item)}
      />
    </div>
  );
};

export const GalleryPage = Gallery;
export default Gallery;
