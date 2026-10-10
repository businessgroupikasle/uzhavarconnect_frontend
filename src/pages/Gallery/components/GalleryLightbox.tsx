import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../../data/galleryData';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  allItems: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  allItems,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (!item) return;

    // Prevent background scrolling
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Keyboard handlers
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = allItems.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
        onNavigate(allItems[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = allItems.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % allItems.length;
        onNavigate(allItems[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, allItems, onClose, onNavigate]);

  if (!item) return null;

  const currentIndex = allItems.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + allItems.length) % allItems.length;
    onNavigate(allItems[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % allItems.length;
    onNavigate(allItems[nextIndex]);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all duration-300"
    >
      {/* Top Bar with Title and Close button */}
      <div
        className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5">
          <span className="text-[11px] sm:text-xs font-semibold px-2.5 py-1 rounded-full bg-[#15803d] text-white">
            {item.category}
          </span>
          <span className="text-white/60 text-xs sm:text-sm">
            {currentIndex + 1} of {allItems.length}
          </span>
        </div>

        <button
          onClick={onClose}
          type="button"
          aria-label="Close lightbox"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        type="button"
        aria-label="Previous image"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        type="button"
        aria-label="Next image"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl max-h-[82vh] flex flex-col items-center justify-center"
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="max-h-[72vh] sm:max-h-[76vh] max-w-[88vw] object-contain rounded-xl shadow-2xl"
        />

        {/* Caption */}
        <div className="mt-3 text-center">
          <h3 className="font-serif font-bold text-base sm:text-lg text-white capitalize">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto mt-0.5">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
