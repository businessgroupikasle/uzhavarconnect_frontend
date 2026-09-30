import React from 'react';
import { usePageSeo } from '../../utils/seo';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, CONTACT_DETAILS } from '../../utils/constants';

export const Terms: React.FC = () => {
  usePageSeo({
    title: 'Terms & Conditions | Uzhavar Connect',
    description: 'Terms and Conditions for agricultural land development and consultation services by Uzhavar Connect.',
    canonicalUrl: 'https://uzhavarconnect.com/terms-and-conditions',
  });

  return (
    <div className="bg-[#f8faf7] min-h-screen py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm">
        
        <div className="mb-8 pb-6 border-b border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-[#15803d]">
            Service Agreement
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0e3922] mt-2">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            Last Updated: January 1, 2025
          </p>
        </div>

        <div className="prose prose-emerald max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            Welcome to <strong>{COMPANY_NAME}</strong>. By visiting our website or submitting consultation requests for agricultural land development services, you agree to these terms.
          </p>

          <h2 className="text-xl font-bold text-[#0e3922]">1. Nature of Services</h2>
          <p>
            Uzhavar Connect provides agricultural civil works, land clearing, laser leveling, drip irrigation design, sapling procurement, farm maintenance (AMC), and farmhouse construction services across Tamil Nadu. All physical project execution is governed by a separate written service contract specifying milestones, deliverables, and payment schedules.
          </p>

          <h2 className="text-xl font-bold text-[#0e3922]">2. Feasibility & Estimates</h2>
          <p>
            Preliminary feasibility consultations provided via phone or website are exploratory. Formal quotations and project feasibility depend on actual on-ground soil reports, water yield tests, boundary verification (Patta/FMB), and physical site conditions.
          </p>

          <h2 className="text-xl font-bold text-[#0e3922]">3. Land Ownership & Clearances</h2>
          <p>
            Clients must hold lawful ownership or authorized tenancy of the farmland before heavy machinery or construction begins. The client is responsible for providing demarcated boundaries and resolving any boundary disputes prior to site work.
          </p>

          <h2 className="text-xl font-bold text-[#0e3922]">4. Agricultural Yields & Weather Factors</h2>
          <p>
            While Uzhavar Connect implements the highest scientific standards of agronomy and precision irrigation, agricultural yields can be influenced by natural climatic conditions, severe weather anomalies, or pest infestations beyond reasonable control. We follow Integrated Pest Management (IPM) to mitigate risks.
          </p>

          <h2 className="text-xl font-bold text-[#0e3922]">5. Contact & Grievances</h2>
          <p>
            For any clarifications regarding our terms, reach us at{' '}
            <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-emerald-700 font-bold underline">
              {CONTACT_DETAILS.email}
            </a>.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
          <Link to="/" className="text-sm font-bold text-[#15803d] hover:underline">
            ← Return to Home
          </Link>
          <Link to="/privacy-policy" className="text-sm font-bold text-slate-600 hover:text-slate-900">
            Privacy Policy →
          </Link>
        </div>

      </div>
    </div>
  );
};

export const TermsPage = Terms;
export default Terms;
