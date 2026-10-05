import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../../../data/services';
import { DISTRICTS_TAMIL_NADU, CONTACT_DETAILS } from '../../../utils/constants';
import { CheckCircle2, Lock, ArrowRight } from 'lucide-react';

interface ServiceRequestFormProps {
  currentServiceSlug: string;
}

export const ServiceRequestForm: React.FC<ServiceRequestFormProps> = ({ currentServiceSlug }) => {
  const navigate = useNavigate();

  const matchedService = SERVICES_DATA.find((s) => s.slug === currentServiceSlug) || SERVICES_DATA[0];

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    district: '',
    serviceSlug: currentServiceSlug,
    farmSize: '',
    details: '',
    fileName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  // Update selected service if slug prop changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      serviceSlug: currentServiceSlug,
    }));
  }, [currentServiceSlug]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid name';
    }

    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (cleanMobile.length !== 10) {
      errs.mobile = 'Please enter a 10-digit mobile number';
    } else if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      errs.mobile = 'Mobile number must start with 6, 7, 8, or 9';
    }

    if (!formData.district.trim()) {
      errs.district = 'District is required';
    }

    if (!formData.serviceSlug) {
      errs.serviceSlug = 'Please select a service';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'mobile') {
      const numericVal = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, mobile: numericVal }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // If changing the service dropdown, update the URL route so the whole page syncs!
    if (name === 'serviceSlug') {
      navigate(`/services/${value}`);
    }

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const generatedRef = `UZH-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setRefNumber(generatedRef);

    const messageLines = [
      `*New Service Request - Uzhavar Connect*`,
      `📋 *Reference:* ${generatedRef}`,
      `👤 *Name:* ${formData.fullName}`,
      `📞 *Mobile:* ${formData.mobile}`,
      formData.email ? `✉️ *Email:* ${formData.email}` : null,
      `📍 *District:* ${formData.district}`,
      `🌾 *Service:* ${matchedService.title}`,
      formData.farmSize ? `📐 *Land Size:* ${formData.farmSize}` : null,
      formData.details ? `📝 *Requirements:* ${formData.details}` : null,
      formData.fileName ? `📎 *Attached Photo/Document:* ${formData.fileName}` : null,
    ].filter(Boolean).join('\n');

    const whatsappTarget = (CONTACT_DETAILS.whatsapp || '+917550119994').replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(messageLines)}`;

    try {
      window.open(whatsappUrl, '_blank');
    } catch {
      // In case window.open is blocked by browser
    }

    const enquiryRecord = {
      ...formData,
      referenceNumber: generatedRef,
      serviceTitle: matchedService.title,
      submittedAt: new Date().toISOString(),
    };

    // Save locally in browser localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('uzhavar_enquiries') || '[]');
      existing.unshift(enquiryRecord);
      localStorage.setItem('uzhavar_enquiries', JSON.stringify(existing));
    } catch {
      // LocalStorage access fallback
    }

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
      const endpoint = `${baseUrl.replace(/\/$/, '')}/enquiries`;

      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(enquiryRecord),
        });
      } catch {
        // Fallback for offline/demo simulation
      }

      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    const messageLines = [
      `*New Service Request - Uzhavar Connect*`,
      `📋 *Reference:* ${refNumber}`,
      `👤 *Name:* ${formData.fullName}`,
      `📞 *Mobile:* ${formData.mobile}`,
      `📍 *District:* ${formData.district}`,
      `🌾 *Service:* ${matchedService.title}`,
      formData.farmSize ? `📐 *Land Size:* ${formData.farmSize}` : null,
      formData.details ? `📝 *Requirements:* ${formData.details}` : null,
    ].filter(Boolean).join('\n');

    const whatsappTarget = (CONTACT_DETAILS.whatsapp || '+917550119994').replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(messageLines)}`;

    return (
      <div className="bg-white rounded-2xl border border-[#cbe0c6] shadow-sm relative overflow-hidden p-6 sm:p-8">
        <div className="absolute top-0 inset-x-0 h-1.5 bg-[#1b5e20]" />

        <div className="text-center py-6">
          <div className="w-14 h-14 bg-emerald-100 text-[#15803d] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="font-serif font-bold text-2xl text-slate-900">
            Enquiry Received!
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Our agricultural specialist will contact you shortly regarding <span className="font-semibold text-slate-800">{matchedService.title}</span>.
          </p>

          <div className="mt-4 p-3 bg-[#f2f8f0] rounded-xl border border-[#d6e8d2] text-xs font-mono text-slate-700 max-w-xs mx-auto">
            Reference ID: <span className="font-bold text-[#1b5e20]">{refNumber}</span>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#15803d] hover:bg-[#166534] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-xs w-full sm:w-auto"
            >
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                setIsSuccess(false);
                setFormData((prev) => ({ ...prev, mobile: '', details: '', fileName: '' }));
              }}
              className="px-4 py-2.5 text-xs text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-[#e2ece0] shadow-sm relative overflow-hidden p-5 sm:p-7">
      {/* Top Green Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-[#1b5e20]" />

      {/* Heading & Description */}
      <div className="mb-5 sm:mb-6">
        <h2 className="font-serif font-bold text-2xl sm:text-[26px] text-slate-900 tracking-tight">
          Request This Service
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5" noValidate>
        {/* Row 1: Full Name & Mobile Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div>
            <label className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={`w-full rounded-lg border ${errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                } focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none placeholder:text-slate-400 transition-colors`}
            />
            {errors.fullName && (
              <span className="text-[11px] text-red-500 mt-1 block font-medium">
                {errors.fullName}
              </span>
            )}
          </div>

          <div>
            <label className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              maxLength={10}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter 10-digit mobile number"
              className={`w-full rounded-lg border ${errors.mobile ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                } focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none placeholder:text-slate-400 transition-colors`}
            />
            {errors.mobile && (
              <span className="text-[11px] text-red-500 mt-1 block font-medium">
                {errors.mobile}
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Email & Location / District */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div>
            <label className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-slate-300 focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none placeholder:text-slate-400 transition-colors"
            />
          </div>

          <div>
            <label className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Location / District <span className="text-red-500">*</span>
            </label>
            <select
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className={`w-full rounded-lg border ${errors.district ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                } focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none text-slate-700 bg-white transition-colors`}
            >
              <option value="">Enter your district</option>
              {DISTRICTS_TAMIL_NADU.map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
            </select>
            {errors.district && (
              <span className="text-[11px] text-red-500 mt-1 block font-medium">
                {errors.district}
              </span>
            )}
          </div>
        </div>

        {/* Row 3: Service & Farm / Land Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div>
            <label className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Service <span className="text-red-500">*</span>
            </label>
            <select
              name="serviceSlug"
              value={formData.serviceSlug}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-slate-300 focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none text-slate-800 bg-white font-medium transition-colors"
            >
              {SERVICES_DATA.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Farm / Land Size
            </label>
            <select
              name="farmSize"
              value={formData.farmSize}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-slate-300 focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none text-slate-700 bg-white transition-colors"
            >
              <option value="">Select land size</option>
              <option value="5 Cent to 1 Acre">5 Cent to 1 Acre</option>
              <option value="1 to 5 Acres">1 to 5 Acres</option>
              <option value="5 to 10 Acres">5 to 10 Acres</option>
              <option value="10 Acres & Above">10 Acres & Above</option>
            </select>
          </div>
        </div>

        {/* Row 4: Requirement Details */}
        <div>
          <label className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
            Requirement Details
          </label>
          <textarea
            name="details"
            rows={3}
            value={formData.details}
            onChange={handleInputChange}
            placeholder="Tell us about your requirements, land condition or any specific information..."
            className="w-full rounded-lg border border-slate-300 focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none placeholder:text-slate-400 transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 sm:py-3.5 px-6 bg-[#b37d2e] hover:bg-[#9d691e] active:scale-[0.98] disabled:opacity-75 text-white font-semibold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
          >
            {isSubmitting ? (
              <span>Submitting Enquiry...</span>
            ) : (
              <>
                <span>Submit Service Enquiry</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">
                  →
                </span>
              </>
            )}
          </button>

          {/* Subtitle below button */}


          {/* Privacy Message */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-500">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>We use your details only to respond to your enquiry.</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServiceRequestForm;
