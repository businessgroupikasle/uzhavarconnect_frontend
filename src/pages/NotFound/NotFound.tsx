import React from 'react';
import { usePageSeo } from '../../utils/seo';
import { Button } from '../../components/buttons/Button';
import { Home, Compass } from 'lucide-react';
import { CONTACT_DETAILS } from '../../utils/constants';

export const NotFound: React.FC = () => {
  usePageSeo({
    title: '404 - Page Not Found | Uzhavar Connect',
    description: 'The requested agricultural service or page could not be found.',
    canonicalUrl: 'https://uzhavarconnect.com/404',
  });

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#f8faf7] px-4 py-16">
      <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl">
        
        <div className="w-20 h-20 rounded-full bg-emerald-50 text-[#15803d] flex items-center justify-center mx-auto mb-6 text-2xl font-black shadow-inner">
          404
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#15803d] bg-emerald-100 px-3 py-1 rounded-full">
          404 Error
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-[#0e3922] mt-3">
          Field Not Found
        </h1>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          Looks like this furrow hasn't been cultivated yet. The page you are looking for might have moved or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            to="/"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Return Home
          </Button>

          <Button
            to="/services"
            variant="secondary"
            size="md"
            icon={<Compass className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            All Services
          </Button>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-400">
          Need immediate support? Call our helpline at{' '}
          <a href={`tel:${CONTACT_DETAILS.phone}`} className="font-bold text-emerald-700 underline">
            {CONTACT_DETAILS.phoneDisplay}
          </a>
          {CONTACT_DETAILS.phoneSecondary && (
            <>
              {' / '}
              <a href={`tel:${CONTACT_DETAILS.phoneSecondary}`} className="font-bold text-emerald-700 underline">
                {CONTACT_DETAILS.phoneSecondaryDisplay}
              </a>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export const NotFoundPage = NotFound;
export default NotFound;
