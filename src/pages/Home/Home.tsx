import React from 'react';
import { usePageSeo } from '../../utils/seo';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { ServiceIllustrations } from './components/ServiceIllustrations';
import { WhyUzhavarConnect } from './components/WhyUzhavarConnect';
import { HowItWorks } from './components/HowItWorks';
import { AboutPreview } from './components/AboutPreview';
import { Testimonials } from './components/Testimonials';

export const Home: React.FC = () => {
  usePageSeo({
    title: 'Uzhavar Connect | Agricultural Land Development & Farm Services',
    overrideFullTitle: true,
    description: 'Uzhavar Connect provides agricultural land development, farm layout planning, farm house development, irrigation and plantation services across Tamil Nadu.',
    canonicalUrl: 'https://uzhavarconnect.com/',
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Overview */}
      <ServicesOverview />

      {/* 3. Service Illustrations */}
      <ServiceIllustrations />

      {/* 4. Why Uzhavar Connect */}
      <WhyUzhavarConnect />

      {/* 5. How It Works (4-Step Process with Connecting Arrows) */}
      <HowItWorks />

      {/* 5. About Preview */}
      <AboutPreview />

      {/* 6. Testimonials & Meaningful Farm CTA (Combined Continuous Section) */}
      <Testimonials />
    </div>
  );
};

export const HomePage = Home;
export default Home;
