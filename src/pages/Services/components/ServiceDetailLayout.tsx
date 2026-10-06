import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../../../types';
import { getServiceDetails, ServiceDetailExtended } from '../../../data/serviceDetailsConfig';
import { CONTACT_DETAILS } from '../../../utils/constants';
import { ServiceRequestForm } from './ServiceRequestForm';
import {
  FileText,
  MessagesSquare,
  ClipboardCheck,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Phone,
  MessageCircle
} from 'lucide-react';

interface ServiceDetailLayoutProps {
  service: ServiceItem;
  otherServices?: ServiceItem[];
}

export const ServiceDetailLayout: React.FC<ServiceDetailLayoutProps> = ({ service }) => {
  const details: ServiceDetailExtended = getServiceDetails(service.slug);

  // Accordion state: by default, first FAQ is open (matches Reference Image 3)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f8faf7] min-h-screen">
      {/* ==================================================
          1. HEADER / HERO SECTION (Consultation / Service Enquiry)
         ================================================== */}
      <section className="relative overflow-hidden w-full bg-[#072415] text-white py-10 sm:py-12 lg:py-14 flex items-center">
        {/* Background Farmland Landscape */}
        <img
          src="/assets/hero-farm.png"
          alt="Agricultural Farmland Landscape"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] pointer-events-none select-none opacity-40"
        />

        {/* Dark-Green Overlay for Text Legibility */}
        <div
          className="absolute inset-0 bg-[#072415]/65 sm:bg-[#072415]/55 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#03150a]/92 via-[#062012]/65 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#04170c]/50 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation: Home / Services / [Service Title] */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/80 mb-2 font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/50">/</span>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span className="text-white/50">/</span>
            <span className="text-white font-semibold">{details.title || service.title}</span>
          </div>

          {/* Service Title Heading in Hero Banner */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
            {details.title || service.title}
          </h1>
        </div>
      </section>

      {/* Main Body Content */}
      <div className="py-6 sm:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* MAIN SERVICE DETAIL 2-COLUMN GRID SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-10">

            {/* LEFT COLUMN: Service Details (Image, Overview, Scope of Work, Why Choose) */}
            <div className="lg:col-span-7 space-y-8">

              {/* Large Rounded Service Image */}
              <div className="w-full h-64 sm:h-80 md:h-[380px] rounded-2xl overflow-hidden shadow-xs border border-[#e2ece0] bg-[#edf4ec]">
                <img
                  src={details.image}
                  alt={details.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              {/* Service Overview */}
              <div className="relative">
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight mb-3">
                  Service Overview
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {details.overview}
                </p>

                {/* Decorative Leaf on Right */}
                <img
                  src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-16 sm:w-20 h-auto opacity-35 pointer-events-none select-none z-0"
                />
              </div>

              {/* Subtle Divider Line */}
              <div className="w-12 sm:w-16 h-[1.5px] bg-[#15803d]/40" aria-hidden="true" />

              {/* Scope of Work */}
              <div className="relative">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight mb-4 sm:mb-5">
                  Scope of Work
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
                  {details.scopeOfWork.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#e2ece0] shadow-2xs">
                      <span className="w-6 h-6 rounded-full bg-[#1b5e20] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-2xs">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Leaf on Right */}
                <img
                  src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-16 sm:w-22 h-auto opacity-35 pointer-events-none select-none z-0"
                />
              </div>

              {/* Why Choose / Why Prepare Your Land */}
              <div className="relative">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight mb-4 sm:mb-5">
                  {details.whyTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
                  {details.whyPoints.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#e2ece0] shadow-2xs">
                      <span className="w-6 h-6 rounded-full bg-[#1b5e20] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-2xs">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Leaf on Right */}
                <img
                  src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-16 sm:w-22 h-auto opacity-35 pointer-events-none select-none z-0"
                />
              </div>

            </div>

            {/* RIGHT COLUMN: Service Request Form & Direct Contact Sidebar */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
              <ServiceRequestForm currentServiceSlug={service.slug} />

              {/* Quick Direct Helpline Card */}
              <div className="bg-[#f0f6ef] rounded-2xl p-5 border border-[#dce8da] space-y-3">
                <h4 className="font-serif font-bold text-base text-[#0e3922]">Need Instant Support?</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Speak directly with our chief agricultural engineers regarding your farmland feasibility:
                </p>
                <div className="flex flex-col gap-2.5 pt-1">
                  <a
                    href={`tel:${CONTACT_DETAILS.phone}`}
                    className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#15803d] hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call: {CONTACT_DETAILS.phoneDisplay}</span>
                  </a>
                  <a
                    href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                      CONTACT_DETAILS.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#25D366] hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ==================================================
            3. WHAT HAPPENS NEXT? SECTION
           ================================================== */}
          <section className="relative overflow-hidden bg-[#eef5eb] border border-[#dce8d9] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 my-8 sm:my-10 shadow-xs">
            {/* Decorative Leaves Flanking Left and Right */}
            <img
              src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
              alt=""
              aria-hidden="true"
              className="absolute -left-4 sm:-left-2 top-2 sm:top-4 w-20 sm:w-28 h-auto opacity-30 pointer-events-none select-none -scale-x-100 z-0"
            />
            <img
              src="/assets/f0428fe6-7a9d-4007-b7c9-37234cc039e6.png"
              alt=""
              aria-hidden="true"
              className="absolute -right-4 sm:-right-2 top-2 sm:top-4 w-20 sm:w-28 h-auto opacity-30 pointer-events-none select-none z-0"
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                  What happens next?
                </h3>
              </div>

              {/* 4 Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-3 items-start relative">
                {/* Step 1 */}
                <div className="flex flex-col items-start relative">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#1b5e20] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#d8e7d5] flex items-center justify-center text-[#1b5e20] shadow-2xs">
                      <FileText className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    Share requirements
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Tell us about your land and needs.
                  </p>
                  {/* Arrow to Next Step (Desktop only) */}
                  <span className="hidden md:block absolute -right-2 top-2 text-slate-400 font-bold text-sm">
                    →
                  </span>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-start relative">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#1b5e20] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#d8e7d5] flex items-center justify-center text-[#1b5e20] shadow-2xs">
                      <MessagesSquare className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    Discuss your land
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Our team will get in touch to understand your site.
                  </p>
                  {/* Arrow to Next Step */}
                  <span className="hidden md:block absolute -right-2 top-2 text-slate-400 font-bold text-sm">
                    →
                  </span>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-start relative">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#1b5e20] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#d8e7d5] flex items-center justify-center text-[#1b5e20] shadow-2xs">
                      <ClipboardCheck className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    Confirm scope & estimate
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    We'll plan the work based on your requirements.
                  </p>
                  {/* Arrow to Next Step */}
                  <span className="hidden md:block absolute -right-2 top-2 text-slate-400 font-bold text-sm">
                    →
                  </span>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-start relative">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#1b5e20] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#d8e7d5] flex items-center justify-center text-[#1b5e20] shadow-2xs">
                      <CalendarDays className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-slate-900 leading-snug">
                    Schedule the work
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Once confirmed, we'll arrange a suitable time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================================================
            4. ILLUSTRATIVE SERVICE VISUALS
           ================================================== */}
          <section className="my-8 sm:my-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
              <div className="flex items-center gap-3">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                  Illustrative service visuals
                </h3>
                <span className="hidden sm:inline-block w-16 h-[1.5px] bg-[#15803d]/40" aria-hidden="true" />
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-normal">
                {details.visualsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {details.visuals.map((visual, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-[#dce8d9] shadow-2xs group bg-white flex flex-col"
                >
                  <div className="h-44 sm:h-48 md:h-52 overflow-hidden bg-slate-100">
                    <img
                      src={visual.image}
                      alt={visual.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-[#0f2d18] text-white text-xs sm:text-sm font-medium py-2.5 px-3.5 leading-snug">
                    {visual.title}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================================================
            5. FREQUENTLY ASKED QUESTIONS SECTION
           ================================================== */}
          <section className="my-8 sm:my-12">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 sm:mb-5">
              <div className="flex items-center gap-3">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                  Frequently Asked Questions
                </h3>
                <span className="hidden sm:inline-block w-16 h-[1.5px] bg-[#15803d]/40" aria-hidden="true" />
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3">
              {details.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${isOpen
                      ? 'bg-[#f0f7ef] border-[#c2ddbe] shadow-2xs'
                      : 'bg-white border-[#e2ece0] hover:bg-[#fafdf9]'
                      }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      type="button"
                      className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-3 focus:outline-none cursor-pointer"
                    >
                      <div className="flex items-center gap-3 sm:gap-3.5 flex-1 min-w-0">
                        {/* Plus/Minus Indicator */}
                        {isOpen ? (
                          <div className="w-6 h-6 rounded-full bg-[#1b5e20] text-white flex items-center justify-center shrink-0">
                            <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full border border-[#1b5e20] text-[#1b5e20] flex items-center justify-center shrink-0">
                            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                        )}

                        <span
                          className={`font-serif font-bold text-sm sm:text-base ${isOpen ? 'text-[#0f2d18]' : 'text-slate-800'
                            }`}
                        >
                          {faq.question}
                        </span>
                      </div>

                      <div className="shrink-0 text-slate-500 ml-2">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                    </button>

                    {/* Accordion Answer Content */}
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-4.5 sm:pb-4.5 pt-0">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-9 sm:pl-9.5">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailLayout;
