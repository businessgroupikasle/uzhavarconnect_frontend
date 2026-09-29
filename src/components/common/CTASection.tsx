import React from 'react';
import { WhatsAppButton } from '../buttons/WhatsAppButton';
import { Button } from '../buttons/Button';
import { PhoneCall } from 'lucide-react';
import { CONTACT_DETAILS } from '../../utils/constants';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  showPhoneOption?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Grow Your Land. Grow Your Future.",
  subtitle = "Get expert guidance for your agricultural land development. Let's create a greener and more prosperous tomorrow together.",
  buttonLabel = "Get Free Consultation",
  showPhoneOption = true,
}) => {
  return (
    <section className="relative overflow-hidden my-8 sm:my-12 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-3xl shadow-xl bg-gradient-to-r from-[#072e18] via-[#0e3922] to-[#14532d]">
      {/* Background graphic elements */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/cta-bg.svg')` }}
      />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-emerald-300 border border-emerald-400/20 mb-4 backdrop-blur-sm">
              Turn Your Farmland Into Wealth
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0 justify-center">
            <WhatsAppButton
              size="lg"
              label={buttonLabel}
              className="w-full sm:w-auto text-base sm:text-lg py-4 px-8 shadow-xl bg-emerald-600 hover:bg-emerald-700"
            />
            {showPhoneOption && (
              <Button
                variant="secondary"
                size="lg"
                href={`tel:${CONTACT_DETAILS.phone}`}
                icon={<PhoneCall className="w-5 h-5 text-emerald-700" />}
                iconPosition="left"
                className="w-full sm:w-auto bg-white/95 text-slate-800 hover:bg-white border-0 py-4 px-7 shadow-lg"
              >
                Call {CONTACT_DETAILS.phoneDisplay}
              </Button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
