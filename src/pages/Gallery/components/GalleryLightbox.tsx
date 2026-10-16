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
  // Prevent background scrolling while popup is open
  useEffect(() => {
    if (!item) return;

    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [Boolean(item)]);

  // Keyboard navigation handlers
  useEffect(() => {
    if (!item) return;

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
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all duration-300 overscroll-contain select-none"
      onWheel={(e) => e.preventDefault()}
      onTouchMove={(e) => e.preventDefault()}
    >
      {/* Top Bar with Title and Close button */}
      <div
        className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 sm:gap-3.5">
          <span className="text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-[#15803d] text-white shadow-md border border-[#22c55e]/30 tracking-wide">
            {item.category}
          </span>
          <span className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white shadow-md tracking-wide">
            Image <span className="font-semibold text-white">{currentIndex + 1}</span> of <span className="font-semibold text-white">{allItems.length}</span>
          </span>
        </div>

        <button
          onClick={onClose}
          type="button"
          aria-label="Close lightbox"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-black text-white border border-white/25 shadow-xl backdrop-blur-sm flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] transition-transform duration-200 group-hover:rotate-90" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        type="button"
        aria-label="Previous image"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-black text-white border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.2]" />
      </button>

      <button
        onClick={handleNext}
        type="button"
        aria-label="Next image"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/65 hover:bg-black text-white border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.2]" />
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
