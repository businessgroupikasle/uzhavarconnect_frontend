import React from 'react';
import { Maximize2 } from 'lucide-react';
import { GalleryItem } from '../../../data/galleryData';

interface GalleryCardProps {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
  className?: string;
  imageClassName?: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
  item,
  onOpen,
  className = '',
  imageClassName = '',
}) => {
  return (
    <div
      onClick={() => onOpen(item)}
      className={`relative overflow-hidden rounded-2xl bg-slate-100 group cursor-pointer shadow-xs hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${imageClassName}`}
        loading="lazy"
      />

      {/* Dark gradient overlay for bottom text */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />

      {/* Top-Right Expand Icon */}
      <div className="absolute top-2.5 right-2.5 z-10">
        <button
          type="button"
          aria-label={`Enlarge ${item.title}`}
          onClick={(e) => {
            e.stopPropagation();
            onOpen(item);
          }}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/45 hover:bg-black/70 backdrop-blur-xs text-white flex items-center justify-center transition-colors shadow-xs"
        >
          <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Bottom-Left Title */}
      <div className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-3.5 z-10">
        <p className="text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow-sm capitalize">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;
