import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { CONTACT_DETAILS } from '../../utils/constants';

interface FloatingActionsProps {
  customMessage?: string;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ customMessage }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const message = encodeURIComponent(customMessage || CONTACT_DETAILS.whatsappMessage);
  const whatsappUrl = `https://wa.me/${CONTACT_DETAILS.whatsapp.replace('+', '')}?text=${message}`;

  return (
    <>
      {/* 1. FLOATING WHATSAPP CIRCULAR ICON BUTTON */}
      <aside aria-label="WhatsApp quick contact">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="fixed bottom-[86px] sm:bottom-[98px] right-4 sm:right-6 z-50 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl shadow-black/25 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400 group border-2 border-white/40 select-none cursor-pointer"
        >
          {/* Authentic WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-6.5 h-6.5 sm:w-7 sm:h-7 fill-white transition-transform duration-200 group-hover:scale-105"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.83-3.05-.2-.32a8.19 8.19 0 01-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.82c.01 4.54-3.69 8.25-8.19 8.25zm4.51-6.18c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.31z" />
          </svg>
        </a>
      </aside>

      {/* 2. CIRCULAR BACK-TO-TOP BUTTON */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-7 sm:bottom-8 right-4 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0e3922] hover:bg-[#15803d] text-white flex items-center justify-center shadow-lg shadow-black/25 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-400 border border-white/20 select-none cursor-pointer ${
          showBackToTop
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-3 scale-75 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.5] text-white transition-transform group-hover:-translate-y-0.5" />
      </button>
    </>
  );
};

export default FloatingActions;
