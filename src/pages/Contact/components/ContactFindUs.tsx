import React from 'react';
import { MapPin } from 'lucide-react';

export const ContactFindUs: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#e8f2e5] border-t border-[#d8e8d4] py-8 sm:py-10 md:py-12">
      {/* Decorative Leaf - Left Side */}
      <img
        src="/assets/decorative-leaf.png"
        alt=""
        aria-hidden="true"
        className="absolute left-[-20px] sm:left-[-10px] md:left-4 -bottom-4 sm:bottom-0 w-28 sm:w-36 md:w-48 h-auto object-contain pointer-events-none select-none opacity-40 rotate-12"
      />

      {/* Decorative Leaf - Right Side (Mirrored) */}
      <img
        src="/assets/decorative-leaf.png"
        alt=""
        aria-hidden="true"
        className="absolute right-[-20px] sm:right-[-10px] md:right-4 -bottom-4 sm:bottom-0 w-28 sm:w-36 md:w-48 h-auto object-contain pointer-events-none select-none opacity-40 -scale-x-100 -rotate-12"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-center">
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Circular Location Icon Badge */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#d2e7ce] text-[#0e3922] flex items-center justify-center shrink-0 shadow-2xs">
            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 fill-[#0e3922]" />
          </div>

          {/* Heading & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0e3922] tracking-tight">
              Find us
            </h3>
            <p className="mt-0.5 text-xs sm:text-sm text-slate-600 font-normal">
              Office location will be added here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFindUs;
