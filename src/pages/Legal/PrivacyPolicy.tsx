import React from 'react';
import { usePageSeo } from '../../utils/seo';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, CONTACT_DETAILS } from '../../utils/constants';

export const PrivacyPolicy: React.FC = () => {
  usePageSeo({
    title: 'Privacy Policy | Uzhavar Connect',
    description: 'Privacy Policy for Uzhavar Connect agricultural land development and service management platform.',
  });

  return (
    <div className="bg-[#f8faf7] min-h-screen py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm">
        
        <div className="mb-8 pb-6 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-[#15803d]">
            Legal Information
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0e3922] mt-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: January 1, 2025
          </p>
        </div>

        <div className="prose prose-emerald max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            At <strong>{COMPANY_NAME}</strong>, we respect your privacy and are committed to protecting any personal and farmland information you share with us through our website and consulting channels.
          </p>

          <h2 className="text-xl font-bold text-[#0e3922]">1. Information We Collect</h2>
          <p>
            When you submit an enquiry form or request a consultation, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your name and contact phone number / WhatsApp number</li>
            <li>Email address (if provided)</li>
            <li>Farmland location, district, and approximate land area / acreage</li>
            <li>Land condition notes and uploaded survey or document copies</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0e3922]">2. How We Use Your Information</h2>
          <p>
            We use your information solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Evaluate soil, water, and crop feasibility for your agricultural parcel</li>
            <li>Contact you to discuss project scopes, timelines, and cost estimates</li>
            <li>Coordinate on-site agronomist inspections and machinery deployment</li>
            <li>Send periodic digital updates and reports if you enter into an AMC contract</li>
          </ul>

          <h2 className="text-xl font-bold text-[#0e3922]">3. Data Sharing & Security</h2>
          <p>
            We <strong>do not sell, rent, or trade</strong> your personal contact or land information to any external marketing agencies. Data is restricted strictly to authorized Uzhavar Connect agricultural engineers and field supervisors.
          </p>

          <h2 className="text-xl font-bold text-[#0e3922]">4. Contacting Us</h2>
          <p>
            If you have questions regarding this policy or wish to update/delete your contact information, please write to us at{' '}
            <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-emerald-700 font-bold underline">
              {CONTACT_DETAILS.email}
            </a>{' '}
            or call{' '}
            <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-emerald-700 font-bold underline">
              {CONTACT_DETAILS.phoneDisplay}
            </a>.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
          <Link to="/" className="text-sm font-bold text-[#15803d] hover:underline">
            ← Return to Home
          </Link>
          <Link to="/terms-and-conditions" className="text-sm font-bold text-slate-600 hover:text-slate-900">
            Terms & Conditions →
          </Link>
        </div>

      </div>
    </div>
  );
};

export const PrivacyPolicyPage = PrivacyPolicy;
export default PrivacyPolicy;
