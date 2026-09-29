import React from 'react';

export const GalleryIntro: React.FC = () => {
  return (
    <section className="bg-white pt-8 sm:pt-10 pb-4 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Main Heading with Botanical Leaf Decoration beside it */}
        <div className="inline-flex items-center justify-center gap-2.5 sm:gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0f2619] tracking-tight">
            The farm, in every frame.
          </h2>
          {/* Subtle Green Leaf Icon */}
          <span className="inline-block text-[#22c55e] transform -rotate-12 translate-y-0.5">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8Z" />
            </svg>
          </span>
        </div>


      </div>
    </section>
  );
};

export default GalleryIntro;
