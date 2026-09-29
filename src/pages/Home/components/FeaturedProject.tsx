import React from 'react';
import { Button } from '../../../components/buttons/Button';
import { Sprout, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#f8faf7] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Layout: Content on Left, Farm Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase mb-3 text-[#15803d] bg-emerald-50 border border-emerald-200/60">
              FEATURED PROJECT
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0e3922] tracking-tight leading-tight">
              Turning Agricultural Land into{' '}
              <span className="text-[#16a34a]">Productive & Profitable Farms</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We develop well-planned, sustainable and high-yield farms with modern infrastructure and long-term support. From raw dry topography to lush plantation estates with comfortable farmhouse stays.
            </p>

            <div className="mt-8">
              <Button
                to="/gallery"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                className="bg-[#15803d] hover:bg-[#166534] px-7 py-3.5"
              >
                View Our Projects
              </Button>
            </div>
          </div>

          {/* Right Image matching screenshot */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="/assets/featured-farmhouse.svg"
                alt="Featured Farm House and Integrated Farm Land"
                loading="lazy"
                className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-emerald-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    Eco-Luxury Farm House & Coconut Estate
                  </h4>
                  <p className="text-xs text-emerald-700 font-medium">
                    Pollachi, Tamil Nadu • 25 Acres Turnkey Execution
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-[#15803d] rounded-full">
                  Completed
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Stat Cards Row matching screenshot */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-emerald-50 hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center shrink-0">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0e3922]">
                500+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600">
                Acres Developed
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-emerald-50 hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0e3922]">
                300+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600">
                Happy Farmers
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-emerald-50 hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0e3922]">
                High
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600">
                Productivity Farms
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-emerald-50 hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#15803d] flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#0e3922]">
                Better
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600">
                ROI Opportunities
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProject;
