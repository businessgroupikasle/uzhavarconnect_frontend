import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '../../utils/constants';

interface WhatsAppButtonProps {
  customMessage?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
  floating?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage,
  size = 'md',
  className = '',
  label = 'Get Free Consultation',
  floating = false,
}) => {
  const message = encodeURIComponent(customMessage || CONTACT_DETAILS.whatsappMessage);
  const whatsappUrl = `https://wa.me/${CONTACT_DETAILS.whatsapp.replace('+', '')}?text=${message}`;

  if (floating) {
    return (
      <aside aria-label="WhatsApp quick contact">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Uzhavar Connect on WhatsApp"
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl shadow-black/25 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400 group border-2 border-white/40 select-none"
        >
          {/* Authentic WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 sm:w-8 sm:h-8 fill-white transition-transform duration-200 group-hover:scale-105"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.83-3.05-.2-.32a8.19 8.19 0 01-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.82c.01 4.54-3.69 8.25-8.19 8.25zm4.51-6.18c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.31z" />
          </svg>
        </a>
      </aside>
    );
  }

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 gap-2',
    lg: 'text-base sm:text-lg px-7 py-3.5 sm:px-8 sm:py-4 gap-2.5',
  }[size];

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center font-bold text-white bg-[#15803d] hover:bg-[#166534] rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 ${sizeClasses} ${className}`}
    >
      <MessageCircle className="w-5 h-5 shrink-0 text-white fill-current" />
      <span>{label}</span>
      <span className="ml-1">→</span>
    </a>
  );
};

export default WhatsAppButton;
