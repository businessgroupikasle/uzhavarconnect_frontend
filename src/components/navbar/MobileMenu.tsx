import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS, CONTACT_DETAILS } from '../../utils/constants';
import { X, Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Prevent background scrolling and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* 1. Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 2. Slide-out Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-drawer-in">
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-5 border-b border-slate-100">
            <Link to="/" onClick={onClose} className="flex items-center">
              <img
                src="/assets/logo.jpeg"
                alt="Uzhavar Connect"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#15803d]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-semibold transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-emerald-50 text-[#15803d]'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#15803d]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-2">
                      {link.name}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#15803d]" />
                      )}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Drawer Action & Contact Footer */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          {/* Prominent CTA matching reference button */}
          <Link
            to="/book-a-service"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-full bg-[#b87d2b] hover:bg-[#a26b20] text-white font-semibold text-base shadow-sm transition-colors text-center"
          >
            <span>Book a Service</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* WhatsApp Action */}
          <a
            href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace('+', '')}?text=${encodeURIComponent(
              CONTACT_DETAILS.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-[#15803d] hover:bg-[#166534] text-white font-semibold text-sm shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Direct Phone Call */}
          <a
            href={`tel:${CONTACT_DETAILS.phone}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs text-center"
          >
            <Phone className="w-3.5 h-3.5 text-[#15803d]" />
            <span>Call: {CONTACT_DETAILS.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
