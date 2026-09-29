import React from 'react';
import { Button } from '../../../components/common/Button';
import { ArrowRight } from 'lucide-react';

export const HeroActions: React.FC = () => {
  return (
    <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
      {/* Primary Golden CTA Button */}
      <Button
        to="/book-a-service"
        variant="primary"
        size="md"
        icon={<ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />}
        iconPosition="right"
        className="w-full sm:w-auto text-sm sm:text-[15px] font-semibold px-6 py-2.5 sm:px-7 sm:py-3 shadow-md group"
      >
        Book a Service
      </Button>

      {/* Secondary Translucent CTA Button with Golden Border */}
      <Button
        to="/services"
        variant="secondary"
        size="md"
        className="w-full sm:w-auto text-sm sm:text-[15px] font-semibold px-6 py-2.5 sm:px-7 sm:py-3"
      >
        Explore Services
      </Button>
    </div>
  );
};

export default HeroActions;
