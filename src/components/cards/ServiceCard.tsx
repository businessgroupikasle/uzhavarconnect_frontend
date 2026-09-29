import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../../types';
import { 
  Tractor, 
  Map, 
  Droplets, 
  Database, 
  Sprout, 
  Wrench, 
  HandCoins, 
  Handshake, 
  Home, 
  Building, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  Tractor: <Tractor className="w-8 h-8" />,
  Map: <Map className="w-8 h-8" />,
  Droplets: <Droplets className="w-8 h-8" />,
  Database: <Database className="w-8 h-8" />,
  Sprout: <Sprout className="w-8 h-8" />,
  Wrench: <Wrench className="w-8 h-8" />,
  HandCoins: <HandCoins className="w-8 h-8" />,
  Handshake: <Handshake className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Building: <Building className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const icon = iconMap[service.iconName] || <Sprout className="w-8 h-8" />;

  return (
    <div
      className={`group relative bg-white rounded-3xl p-6 sm:p-7 transition-all duration-300 border border-slate-100/90 shadow-sm hover:shadow-card-hover hover:-translate-y-1 flex flex-col justify-between ${
        featured ? 'ring-2 ring-emerald-500/30' : ''
      }`}
    >
      <div>
        {/* Top Icon and Badge */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-[#15803d] flex items-center justify-center group-hover:bg-[#15803d] group-hover:text-white transition-all duration-300 shadow-inner">
            {icon}
          </div>

          {service.highlightBadge && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-[#15803d] border border-emerald-200">
              {service.highlightBadge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#0e3922] group-hover:text-[#16a34a] transition-colors leading-snug">
          <Link to={`/services/${service.slug}`} className="focus:outline-none focus:underline">
            {service.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {service.shortDescription}
        </p>
      </div>

      {/* Card Action Link */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/services/${service.slug}`}
          className="text-sm font-bold text-[#15803d] group-hover:text-[#0e3922] inline-flex items-center gap-1.5 transition-colors"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>

        <Link
          to={`/book-a-service?service=${service.slug}`}
          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-50 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
