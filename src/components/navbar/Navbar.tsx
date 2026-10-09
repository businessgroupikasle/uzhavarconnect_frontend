import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../utils/constants';
import { MobileMenu } from './MobileMenu';
import { Menu, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Subtle elevation shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-300 border-b border-slate-100 ${
          isScrolled ? 'shadow-md shadow-slate-900/5' : 'shadow-sm shadow-slate-900/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[68px] lg:h-[72px]">
            
            {/* 1. Left: UzhavarConnect Logo (Clean proportions matching Reference Image) */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                className="flex items-center group focus:outline-none"
                aria-label="Uzhavar Connect Homepage"
              >
                <img
                  src="/assets/logo.jpeg"
                  alt="Uzhavar Connect - Agriculture Farm Land Developer"
                  className="h-11 sm:h-[50px] lg:h-[56px] w-auto object-contain transition-transform group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            {/* 2. Center: Desktop Navigation Links (Matches Reference Image) */}
            <nav
              className="hidden lg:flex items-center gap-7 xl:gap-8"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `relative py-1 text-[15px] xl:text-[16px] transition-colors duration-150 focus:outline-none ${
                      isActive
                        ? 'text-[#15803d] font-bold'
                        : 'text-slate-600 font-medium hover:text-[#15803d]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {/* Active green underline matching Reference Image */}
                      {isActive && (
                        <span
                          className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[#15803d] rounded-full transition-all duration-200"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* 3. Right: CTA Button (Matches Reference Image) */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#b87d2b] hover:bg-[#a26b20] active:bg-[#925f1b] text-white font-medium text-sm shadow-sm hover:shadow transition-all duration-200 group focus:ring-2 focus:ring-[#b87d2b] focus:ring-offset-2"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* 4. Mobile & Tablet Controls (<1024px) */}
            <div className="flex lg:hidden items-center gap-3">
              {/* Optional Tablet CTA for screens 640px - 1023px */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#b87d2b] hover:bg-[#a26b20] text-white font-medium text-xs shadow-sm transition-all"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl text-slate-700 hover:text-[#15803d] hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-[#15803d] transition-colors"
                aria-label="Open main menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Responsive Slide-over Mobile & Tablet Navigation Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
