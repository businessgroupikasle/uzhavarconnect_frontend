import React from 'react';
import { usePageSeo } from '../../utils/seo';
import { EnquiryForm } from '../../components/common/EnquiryForm';
import { ContactHero } from './components/ContactHero';
import { ContactInfo } from './components/ContactInfo';
import { ContactFindUs } from './components/ContactFindUs';

export const Contact: React.FC = () => {
  usePageSeo({
    title: 'Contact Us | Agricultural Land Development Consultation',
    description: 'Get in touch with Uzhavar Connect for free farmland feasibility studies, machine booking, drip irrigation estimates, and turnkey farming inquiries in Tamil Nadu.',
  });

  return (
    <div className="bg-[#f8faf7]">
      {/* 1. Contact Hero */}
      <ContactHero />

      {/* 2. Main Contact Section (Get in touch + Enquiry Form) */}
      <section className="py-8 sm:py-12 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Get In Touch Cards + Advisory Photo */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Right Column: Send Us Your Enquiry Card */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Find Us Section */}
      <ContactFindUs />
    </div>
  );
};

export const ContactPage = Contact;
export default Contact;
