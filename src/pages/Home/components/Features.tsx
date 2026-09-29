import React from 'react';
import { SectionTitle } from '../../../components/common/SectionTitle';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  Award, 
  Smartphone 
} from 'lucide-react';

const reasons = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Modern Technology & Machinery',
    description: 'Precision laser land levelers, hydraulic root rakers, auger pit diggers, and GPS-guided master contour planning for error-free execution.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Single-Point Accountability',
    description: 'No running around coordinating multiple subcontractors. We take full responsibility for civil works, irrigation, plantation, and farmhouses.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Digital Remote Farm Monitoring',
    description: 'Ideal for NRI landowners and city-based professionals. Receive scheduled photo and video drone reports with measurable agronomic milestones.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Strict Milestone Timelines',
    description: 'Every project is scheduled with realistic, seasonal weather-aware deadlines ensuring saplings are planted right before the optimal monsoon.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Certified Nursery Stock Only',
    description: 'We source high-yielding, disease-tested grafted cultivars directly from certified agricultural research nurseries and mother plants.'
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'Transparent Fixed Pricing',
    description: 'Itemized material bills, transparent labor rates, and zero unexpected contractor markups. You know your exact costs before a shovel touches the ground.'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="WHY UZHAVAR CONNECT"
          title="Engineering Farmlands with Trust & Science"
          subtitle="We combine traditional agricultural wisdom with modern civil and hydraulic engineering to build generational agricultural wealth."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-100 hover:border-emerald-200 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#15803d] flex items-center justify-center mb-5 shadow-inner">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#0e3922] mb-2.5">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export const WhyChooseUs = Features;
export default Features;
