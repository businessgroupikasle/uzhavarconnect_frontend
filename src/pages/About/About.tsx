import React from 'react';
import { usePageSeo } from '../../utils/seo';
import { AboutHero } from './components/AboutHero';
import { AboutWhoWeAre } from './components/AboutWhoWeAre';
import { AboutMissionVision } from './components/AboutMissionVision';
import { AboutValuesStandFor } from './components/AboutValuesStandFor';
import { AboutOnePartner } from './components/AboutOnePartner';
import { AboutProcess } from './components/AboutProcess';
import { AboutCTA } from './components/AboutCTA';

export const About: React.FC = () => {
  usePageSeo({
    title: 'About Us | Agriculture Farm Land Developer',
    description: 'Learn about Uzhavar Connect, our vision, mission, expert agricultural engineering capabilities, and commitment to revitalizing agricultural land across Tamil Nadu.',
  });

  return (
    <div className="bg-[#f8faf7] min-h-screen">
      {/* 1. About Hero */}
      <AboutHero />

      {/* 2. Who We Are */}
      <AboutWhoWeAre />

      {/* 3. Our Mission + Our Vision */}
      <AboutMissionVision />

      {/* 4. What We Stand For */}
      <AboutValuesStandFor />

      {/* 5. One Partner. Every Stage. */}
      <AboutOnePartner />

      {/* 6. How We Work With You */}
      <AboutProcess />

      {/* 7. Final Agricultural CTA */}
      <AboutCTA />
    </div>
  );
};

export const AboutPage = About;
export default About;
