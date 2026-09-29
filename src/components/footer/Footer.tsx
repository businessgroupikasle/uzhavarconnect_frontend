import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_DETAILS } from '../../utils/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#062413] text-white pt-12 sm:pt-14 pb-6 sm:pb-8 border-t border-[#041a0d]">
      
      {/* Decorative Leaf Background Watermark on Right */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none z-0 overflow-hidden">
        <img
          src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
          alt=""
          aria-hidden="true"
          className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain opacity-35 sm:opacity-45 translate-x-8 translate-y-8"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Even Grid across full width */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 pb-8 sm:pb-10 items-start">
          
          {/* 1. Left Column: Logo & Brand Identity (col-span-4) */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              {/* Logo */}
              <Link to="/" className="shrink-0 focus:outline-none focus:ring-2 focus:ring-[#f0ad25] rounded-xl">
                <img
                  src="/assets/logo.jpeg"
                  alt="Uzhavar Connect Logo"
                  className="h-16 sm:h-18 w-auto object-contain drop-shadow-md rounded-lg"
                />
              </Link>

              {/* Brand Titles */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-wide text-white leading-tight font-serif">
                  UZHAVAR CONNECT
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-emerald-300 font-semibold mt-1">
                  AGRICULTURE FARM LAND DEVELOPER
                </span>
                <span className="text-xs sm:text-sm text-emerald-100/90 font-medium mt-0.5">
                  Connecting Farmers with Growth
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed pt-1">
              End-to-end agricultural farm land development across Tamil Nadu. We specialize in soil enhancement, drip irrigation, plantations, farmhouses, and fencing to transform lands into productive agro-assets.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-200/80 pt-1">
              <Clock className="w-3.5 h-3.5 text-[#f0ad25] shrink-0" />
              <span>Working Hours: {CONTACT_DETAILS.workingHours}</span>
            </div>
          </div>

          {/* 2 & 3. Quick Links & Contact Details: 1 Row with 2 Columns on mobile */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
            
            {/* Quick Links */}
            <div className="md:pl-2 lg:pl-6">
              <h3 className="text-[#f0ad25] text-sm sm:text-base lg:text-lg font-bold tracking-wide font-serif">
                Quick Links
              </h3>
              {/* Gold Underline */}
              <div className="w-7 sm:w-8 h-[2px] sm:h-[2.5px] bg-[#f0ad25] mt-1 sm:mt-1.5 mb-3 sm:mb-4 rounded-full" aria-hidden="true" />
              
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-normal text-white/85">
                <li>
                  <Link to="/" className="hover:text-[#f0ad25] hover:translate-x-1 inline-block transition-all duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#f0ad25] hover:translate-x-1 inline-block transition-all duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-[#f0ad25] hover:translate-x-1 inline-block transition-all duration-200">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-[#f0ad25] hover:translate-x-1 inline-block transition-all duration-200">
                    Project Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-[#f0ad25] hover:translate-x-1 inline-block transition-all duration-200">
                    Agri Insights & Blog
                  </Link>
                </li>
                <li>
                  <Link to="/book-a-service" className="hover:text-[#f0ad25] hover:translate-x-1 inline-block transition-all duration-200">
                    Book a Consultation
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#f0ad25] hover:translate-x-1 inline-block transition-all duration-200">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 sm:space-y-3.5">
              <div>
                <h3 className="text-[#f0ad25] text-sm sm:text-base lg:text-lg font-bold tracking-wide font-serif">
                  Contact Details
                </h3>
                {/* Gold Underline */}
                <div className="w-7 sm:w-8 h-[2px] sm:h-[2.5px] bg-[#f0ad25] mt-1 sm:mt-1.5 mb-3 sm:mb-4 rounded-full" aria-hidden="true" />
              </div>

              <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-white/90">
                {/* Phone */}
                <li>
                  <a
                    href={`tel:${CONTACT_DETAILS.phone}`}
                    className="flex items-start sm:items-center gap-2 sm:gap-3 hover:text-[#f0ad25] transition-colors group"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center shrink-0 group-hover:border-[#f0ad25] group-hover:scale-105 transition-all text-[#f0ad25] mt-0.5 sm:mt-0">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-[11px] text-white/60 font-medium leading-none mb-0.5">Call Us:</span>
                      <span className="font-semibold text-white text-[11px] sm:text-sm group-hover:text-[#f0ad25] transition-colors">
                        {CONTACT_DETAILS.phoneDisplay}
                      </span>
                    </div>
                  </a>
                </li>

                {/* WhatsApp */}
                <li>
                  <a
                    href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                      CONTACT_DETAILS.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start sm:items-center gap-2 sm:gap-3 hover:text-[#25D366] transition-colors group"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all text-[#25D366] mt-0.5 sm:mt-0">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 sm:w-4 sm:h-4 fill-current" fill="currentColor">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.83-3.05-.2-.32a8.19 8.19 0 01-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.82c.01 4.54-3.69 8.25-8.19 8.25zm4.51-6.18c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.31z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] sm:text-[11px] text-white/60 font-medium leading-none mb-0.5">WhatsApp:</span>
                      <span className="font-semibold text-white text-[11px] sm:text-sm group-hover:text-[#25D366] transition-colors">
                        {CONTACT_DETAILS.whatsappDisplay || CONTACT_DETAILS.phoneDisplay}
                      </span>
                    </div>
                  </a>
                </li>

                {/* Email */}
                <li>
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="flex items-start sm:items-center gap-2 sm:gap-3 hover:text-[#f0ad25] transition-colors group"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center shrink-0 group-hover:border-[#f0ad25] group-hover:scale-105 transition-all text-[#f0ad25] mt-0.5 sm:mt-0">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] sm:text-[11px] text-white/60 font-medium leading-none mb-0.5">Email Us:</span>
                      <span className="font-semibold text-white text-[10.5px] sm:text-sm break-all group-hover:text-[#f0ad25] transition-colors">
                        {CONTACT_DETAILS.email}
                      </span>
                    </div>
                  </a>
                </li>

                {/* Office Address */}
                <li className="flex items-start gap-2 sm:gap-3 pt-0.5">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-900/60 border border-emerald-700/60 flex items-center justify-center shrink-0 text-[#f0ad25] mt-0.5">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-white/90 text-[10px] sm:text-[13px] leading-tight sm:leading-relaxed">
                    <span className="block text-[10px] sm:text-[11px] text-white/60 font-medium mb-0.5">Office Address:</span>
                    <p className="font-semibold text-white">
                      No. 263/1B, SENTAMIL NAGAR PHASE 2, PAPPAMPATTI,
                    </p>
                    <p className="text-white/85">
                      EDAYARPALAYAM, Coimbatore, Tamil Nadu - 641016
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-white/20 mt-2 mb-6" aria-hidden="true" />

        {/* Bottom Bar: Copyright | Crafted & Maintained | Legal & Site Map */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/80 font-normal">
          {/* Copyright */}
          <p className="text-center md:text-left">
            © {currentYear} Uzhavar Connect. All rights reserved.
          </p>

          {/* Crafted and Maintained by Ikasle Business Group & Legal (Matches Screenshot) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-center">
            <span>
              Crafted and Maintained by{' '}
              <a
                href="https://ikasleinnovations.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f0ad25] hover:text-[#ffd276] font-semibold underline underline-offset-4 transition-colors cursor-pointer"
                title="Ikasle Business Group (opens in new tab)"
              >
                Ikasle Business Group
              </a>
            </span>

            <span className="hidden sm:inline text-white/30" aria-hidden="true">|</span>

            <div className="flex items-center gap-3">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/40">•</span>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-white/40">•</span>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Site Map
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
