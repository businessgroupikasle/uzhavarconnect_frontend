import React from 'react';
import { usePageSeo } from '../../utils/seo';
import { ServicesHero } from './components/ServicesHero';
import { ServicesGrid } from './components/ServicesGrid';
import { ServicesPremiumCTA } from './components/ServicesPremiumCTA';
import { ServicesConsultationStrip } from './components/ServicesConsultationStrip';

export const Services: React.FC = () => {
  usePageSeo({
    title: 'Our Agricultural Services | Uzhavar Connect',
    description: 'Explore our complete agricultural services: land preparation, farm layout, drip irrigation, water tanks, tree plantations, farm maintenance, harvest support, and buyback assistance.',
  });

  return (
    <div className="bg-[#f8faf7] min-h-screen">
      {/* 1. Services Hero: "Complete care. From soil to harvest." */}
      <ServicesHero />

      {/* 2. Our Services Header & 8-Service Two-Column Grid */}
      <ServicesGrid />

      {/* 3. Premium Service Banner: "End-to-End Farm Management Services" */}
      <ServicesPremiumCTA />

      {/* 4. Consultation CTA Strip: "Not sure where to begin?" */}
      <ServicesConsultationStrip />
    </div>
  );
};

export const ServicesPage = Services;
export default Services;
