import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Home, Wrench, Shield, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';
import { ServiceItem } from '../../types';
import { CONTACT_DETAILS } from '../../utils/constants';
import { usePageSeo } from '../../utils/seo';

export const Sitemap: React.FC = () => {
  usePageSeo({
    title: 'HTML Sitemap | Uzhavar Connect',
    description: 'Easily navigate across all pages, services, infrastructure solutions, and legal documentation of Uzhavar Connect.',
    canonicalUrl: 'https://uzhavarconnect.com/sitemap',
  });
  return (
    <div className="bg-[#f8faf7] min-h-screen py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f5e9] text-[#1b5e20] text-xs sm:text-sm font-semibold mb-4 border border-[#c8e6c9]">
            <Map className="w-4 h-4 text-[#2e7d32]" />
            Site Navigation Overview
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#0e3922] tracking-tight">
            Uzhavar Connect Site Map
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Easily navigate across all pages, services, infrastructure solutions, and legal documentation of Uzhavar Connect.
          </p>
        </div>

        {/* Sitemap Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Main Pages */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2ece0] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center gap-3 mb-4 text-[#0e3922]">
              <div className="w-10 h-10 rounded-xl bg-[#eef7ee] flex items-center justify-center text-[#1b5e20]">
                <Home className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold font-serif">Main Pages</h2>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li>
                <Link to="/" className="flex items-center justify-between py-1 hover:text-[#1b5e20] hover:translate-x-1 transition-all">
                  <span>Home Page</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center justify-between py-1 hover:text-[#1b5e20] hover:translate-x-1 transition-all">
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center justify-between py-1 hover:text-[#1b5e20] hover:translate-x-1 transition-all">
                  <span>Services Directory</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="flex items-center justify-between py-1 hover:text-[#1b5e20] hover:translate-x-1 transition-all">
                  <span>Gallery & Project Showcase</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/blog" className="flex items-center justify-between py-1 hover:text-[#1b5e20] hover:translate-x-1 transition-all">
                  <span>Agri Insights & Blog</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/book-a-service" className="flex items-center justify-between py-1 hover:text-[#1b5e20] hover:translate-x-1 transition-all">
                  <span>Book Farm Consultation</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center justify-between py-1 hover:text-[#1b5e20] hover:translate-x-1 transition-all">
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Farm Land Services */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2ece0] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center gap-3 mb-4 text-[#0e3922]">
              <div className="w-10 h-10 rounded-xl bg-[#eef7ee] flex items-center justify-center text-[#1b5e20]">
                <Wrench className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold font-serif">Development Services</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {SERVICES_DATA.map((service: ServiceItem) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex items-center justify-between py-1 hover:text-[#1b5e20] hover:translate-x-1 transition-all"
                  >
                    <span className="truncate pr-2">{service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Company Information */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2ece0] shadow-2xs hover:shadow-xs transition-shadow">
            <div className="flex items-center gap-3 mb-4 text-[#0e3922]">
              <div className="w-10 h-10 rounded-xl bg-[#eef7ee] flex items-center justify-center text-[#1b5e20]">
                <Shield className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold font-serif">Legal & Corporate</h2>
            </div>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li>
                <Link to="/privacy-policy" className="flex items-center justify-between py-1 hover:text-[#1b5e20] hover:translate-x-1 transition-all">
                  <span>Privacy Policy</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="flex items-center justify-between py-1 hover:text-[#1b5e20] hover:translate-x-1 transition-all">
                  <span>Terms & Conditions</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </Link>
              </li>
              <li>
                <a
                  href="https://ikasleinnovations.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-1 hover:text-[#1b5e20] hover:translate-x-1 transition-all"
                >
                  <span>Maintained by Ikasle Business Group</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Corporate Office</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {CONTACT_DETAILS.fullAddress}
              </p>
              <p className="text-xs text-slate-600 mt-2">
                Phone: <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-[#1b5e20] hover:underline font-semibold">{CONTACT_DETAILS.phoneDisplay}</a>
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Sitemap;
