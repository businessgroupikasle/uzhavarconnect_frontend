import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: 'hero' | 'light';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = '',
  variant = 'hero',
}) => {
  const isHero = variant === 'hero';

  return (
    <nav
      aria-label="Breadcrumb"
      className={`inline-flex items-center ${className}`}
    >
      <ol
        className={`inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
          isHero
            ? 'bg-black/30 backdrop-blur-md border border-white/20 text-white/90 shadow-sm hover:bg-black/40 hover:border-white/30'
            : 'bg-emerald-50/80 border border-emerald-200/80 text-slate-700 shadow-2xs'
        }`}
      >
        {/* Home Item */}
        <li className="inline-flex items-center gap-1.5">
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 transition-colors ${
              isHero
                ? 'text-white/85 hover:text-emerald-300'
                : 'text-slate-600 hover:text-[#15803d]'
            }`}
          >
            <Home
              className={`w-3.5 h-3.5 ${
                isHero ? 'text-[#b37d2e] sm:text-emerald-400' : 'text-[#15803d]'
              }`}
            />
            <span>Home</span>
          </Link>
        </li>

        {/* Dynamic Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label + index} className="inline-flex items-center gap-1.5">
              <ChevronRight
                className={`w-3.5 h-3.5 shrink-0 ${
                  isHero ? 'text-white/40' : 'text-slate-400'
                }`}
              />

              {item.href && !isLast ? (
                <Link
                  to={item.href}
                  className={`transition-colors ${
                    isHero
                      ? 'text-white/85 hover:text-emerald-300'
                      : 'text-slate-600 hover:text-[#15803d]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-semibold tracking-wide ${
                    isHero ? 'text-white' : 'text-[#15803d]'
                  }`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
