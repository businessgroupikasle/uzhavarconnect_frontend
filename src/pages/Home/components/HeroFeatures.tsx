import React from 'react';
import { Leaf, Sprout, Users } from 'lucide-react';

interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const features: FeatureItem[] = [
  {
    id: 'healthy-land',
    icon: <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-[#86efac]" />,
    title: 'Healthy Land',
    subtitle: 'Healthier Lives',
  },
  {
    id: 'sustainable-farming',
    icon: <Sprout className="w-4 h-4 sm:w-5 sm:h-5 text-[#86efac]" />,
    title: 'Sustainable',
    subtitle: 'Farming',
  },
  {
    id: 'stronger-rural',
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#86efac]" />,
    title: 'Stronger',
    subtitle: 'Rural India',
  },
];

export const HeroFeatures: React.FC = () => {
  return (
    <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-10 select-none">
      {features.map((item) => (
        <div key={item.id} className="flex items-center gap-3 group">
          {/* Circular Green Icon Container matching reference image */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#86efac]/80 bg-[#062313]/70 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-inner group-hover:border-[#4ade80] transition-colors">
            {item.icon}
          </div>

          {/* Text: Title + Subtitle */}
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide leading-tight">
              {item.title}
            </span>
            <span className="text-[11px] sm:text-xs text-emerald-200/85 font-medium leading-tight mt-0.5">
              {item.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroFeatures;
