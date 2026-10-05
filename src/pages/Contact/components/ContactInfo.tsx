import React from 'react';
import { CONTACT_DETAILS } from '../../../utils/constants';
import { Phone, Mail, MapPin } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-5">
      {/* 1. Header with Decorative Leaf Sprout */}
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold font-serif text-[#0e3922] tracking-tight">
            Get in touch
          </h2>
          {/* Small Decorative Sprout Leaf Graphic */}
          <img
            src="/assets/decorative-leaf.png"
            alt=""
            aria-hidden="true"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain pointer-events-none select-none opacity-90 -rotate-12"
          />
        </div>

      </div>

      {/* 2. Contact Cards Stack (4 Rounded Cards) */}
      <div className="space-y-2.5 sm:space-y-3">
        {/* Card 1: Call Us */}
        <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-[#f0f6ef] border border-[#dce8da] shadow-2xs">
          <div className="w-11 h-11 rounded-full bg-[#0e3922] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
            <Phone className="w-5 h-5 fill-current" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="block text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
              Call Us
            </span>
            <div className="mt-1 flex flex-col gap-1">
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="block text-xs sm:text-[13px] text-slate-700 hover:text-[#15803d] font-semibold transition-colors"
              >
                {CONTACT_DETAILS.phoneDisplay}
              </a>
              {CONTACT_DETAILS.phoneSecondary && (
                <a
                  href={`tel:${CONTACT_DETAILS.phoneSecondary}`}
                  className="block text-xs sm:text-[13px] text-slate-700 hover:text-[#15803d] font-semibold transition-colors"
                >
                  {CONTACT_DETAILS.phoneSecondaryDisplay}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Card 2: WhatsApp */}
        <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-[#f0f6ef] border border-[#dce8da] shadow-2xs">
          <div className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
            {/* WhatsApp SVG Icon */}
            <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 fill-white" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.83-3.05-.2-.32a8.19 8.19 0 01-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.82c.01 4.54-3.69 8.25-8.19 8.25zm4.51-6.18c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.31z" />
            </svg>
          </div>
          <div className="min-w-0 flex-1">
            <span className="block text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
              WhatsApp
            </span>
            <div className="mt-1 flex flex-col gap-1">
              <a
                href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                  CONTACT_DETAILS.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs sm:text-[13px] text-slate-700 hover:text-[#15803d] font-semibold transition-colors"
              >
                {CONTACT_DETAILS.whatsappDisplay || CONTACT_DETAILS.phoneDisplay}
              </a>
              {CONTACT_DETAILS.whatsappSecondary && (
                <a
                  href={`https://wa.me/${CONTACT_DETAILS.whatsappSecondary.replace(/\D/g, '')}?text=${encodeURIComponent(
                    CONTACT_DETAILS.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs sm:text-[13px] text-slate-700 hover:text-[#15803d] font-semibold transition-colors"
                >
                  {CONTACT_DETAILS.whatsappSecondaryDisplay}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Card 3: Email Us */}
        <a
          href={`mailto:${CONTACT_DETAILS.email}`}
          className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-[#f0f6ef] hover:bg-[#e5f0e3] border border-[#dce8da] transition-all group shadow-2xs"
        >
          <div className="w-11 h-11 rounded-full bg-[#0e3922] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-[#15803d] transition-colors leading-tight">
              Email Us
            </span>
            <span className="block text-xs sm:text-[13px] text-slate-600 truncate mt-0.5 font-medium">
              {CONTACT_DETAILS.email}
            </span>
          </div>
        </a>

        {/* Card 4: Office Address:
 */}
        <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-[#f0f6ef] border border-[#dce8da] shadow-2xs">
          <div className="w-11 h-11 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block text-xs sm:text-[13px] font-bold text-slate-900 leading-tight">
              Office Address:

            </span>
            <div className="text-xs sm:text-[13px] text-slate-700 mt-1 leading-relaxed">
              <p className="font-semibold text-slate-900">{CONTACT_DETAILS.building}, {CONTACT_DETAILS.street}</p>
              <p>{CONTACT_DETAILS.locality}, {CONTACT_DETAILS.city}</p>
              <p>{CONTACT_DETAILS.state} - {CONTACT_DETAILS.pincode}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Farmer & Specialist Image from Reference Design */}
      <div className="pt-1">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#dce8da] shadow-xs relative bg-[#eef6ee]">
          <img
            src="/assets/contact-farmer.png"
            alt="Better Conversations, Brighter Tomorrows - Uzhavar Connect Field Advisory"
            className="w-full h-auto object-cover select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
