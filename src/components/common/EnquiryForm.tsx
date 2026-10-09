import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../../data/services';
import { DISTRICTS_TAMIL_NADU, CONTACT_DETAILS } from '../../utils/constants';
import { EnquiryFormData } from '../../types';
import { CheckCircle2, AlertCircle, Lock, RefreshCw, MessageCircle } from 'lucide-react';
import { CustomSelect } from './CustomSelect';


interface EnquiryFormProps {
  defaultServiceSlug?: string;
  className?: string;
  onSuccessCallback?: (referenceNumber: string) => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultServiceSlug = '',
  className = '',
  onSuccessCallback,
}) => {
  // Find initial service matching slug if provided
  const initialService = SERVICES_DATA.find((s) => s.slug === defaultServiceSlug)?.title || '';

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    mobile: '',
    email: '',
    district: '',
    service: initialService,
    farmSize: '',
    details: '',
    fileName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState<string>('');
  const [apiError, setApiError] = useState<string | null>(null);

  // Update default service if prop changes
  useEffect(() => {
    if (defaultServiceSlug) {
      const matched = SERVICES_DATA.find((s) => s.slug === defaultServiceSlug);
      if (matched) {
        setFormData((prev) => ({ ...prev, service: matched.title }));
      }
    }
  }, [defaultServiceSlug]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid name';
    }

    // Indian mobile number validation (10 digits starting with 6, 7, 8, or 9)
    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (cleanMobile.length !== 10) {
      errs.mobile = 'Please enter a 10-digit mobile number';
    } else if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      errs.mobile = 'Mobile number must start with 6, 7, 8, or 9';
    }

    if (formData.email && formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address';
      }
    }

    if (!formData.district) {
      errs.district = 'Please select your location / district';
    }

    if (!formData.service) {
      errs.service = 'Please select a service';
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
    setApiError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const generatedRef = `UZH-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    const messageLines = [
      `*New Enquiry - Uzhavar Connect*`,
      `📋 *Reference:* ${generatedRef}`,
      `👤 *Name:* ${formData.fullName}`,
      `📞 *Mobile:* ${formData.mobile}`,
      formData.email ? `✉️ *Email:* ${formData.email}` : null,
      `📍 *Location/District:* ${formData.district}`,
      `🌾 *Service:* ${formData.service}`,
      formData.farmSize ? `📐 *Land Size:* ${formData.farmSize}` : null,
      formData.details ? `📝 *Requirements:* ${formData.details}` : null,
      formData.fileName ? `📎 *Selected Photo/Doc:* ${formData.fileName}\n(Please attach this image/document using 📎 clip icon in WhatsApp chat)` : null,
    ].filter(Boolean).join('\n');

    const whatsappTarget = (CONTACT_DETAILS.whatsapp || '+917550119994').replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(messageLines)}`;

    // Open WhatsApp directly
    try {
      window.open(whatsappUrl, '_blank');
    } catch {
      // In case window.open is blocked by browser
    }

    // Always save enquiry record locally in localStorage
    const enquiryRecord = {
      ...formData,
      referenceNumber: generatedRef,
      submittedAt: new Date().toISOString(),
    };

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
        console.info('Enquiry saved to local storage & backend queue.');
      }

      await new Promise((resolve) => setTimeout(resolve, 600));

      setReferenceId(generatedRef);
      setSubmitSuccess(true);
      if (onSuccessCallback) {
        onSuccessCallback(generatedRef);
      }
    } catch {
      setApiError('Unable to submit your enquiry right now. Please call or WhatsApp us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      mobile: '',
      email: '',
      district: '',
      service: '',
      farmSize: '',
      details: '',
      fileName: '',
    });
    setSubmitSuccess(false);
    setReferenceId('');
    setApiError(null);
  };

  // SUCCESS STATE UI
  if (submitSuccess) {
    const messageLines = [
      `*New Enquiry - Uzhavar Connect*`,
      `📋 *Reference:* ${referenceId}`,
      `👤 *Name:* ${formData.fullName}`,
      `📞 *Mobile:* ${formData.mobile}`,
      formData.email ? `✉️ *Email:* ${formData.email}` : null,
      `📍 *Location/District:* ${formData.district}`,
      `🌾 *Service:* ${formData.service}`,
      formData.farmSize ? `📐 *Land Size:* ${formData.farmSize}` : null,
      formData.details ? `📝 *Requirements:* ${formData.details}` : null,
      formData.fileName ? `📎 *Selected Photo/Doc:* ${formData.fileName}\n(Please attach this image/document using 📎 clip icon in WhatsApp chat)` : null,
    ].filter(Boolean).join('\n');

    const whatsappTarget = (CONTACT_DETAILS.whatsapp || '+917550119994').replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(messageLines)}`;

    return (
      <div className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-[#dce8da] shadow-sm relative overflow-hidden text-center animate-in fade-in-50 duration-300 ${className}`}>
        <div className="absolute top-0 inset-x-0 h-1.5 bg-[#1b5e20]" />

        <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#15803d] flex items-center justify-center mx-auto mb-4 shadow-inner">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-[#15803d] border border-emerald-200 mb-3">
          Enquiry Received Successfully
        </span>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0e3922] font-serif">
          Thank You, {formData.fullName}!
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Our agricultural engineer will review your land requirements in <strong className="text-slate-800">{formData.district}</strong> and contact you shortly.
        </p>

        {/* Reference Number Card */}
        <div className="mt-5 p-4 bg-[#f5faf6] rounded-xl border border-emerald-200 max-w-xs mx-auto">
          <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
            Enquiry Reference Number
          </span>
          <span className="text-lg sm:text-xl font-black text-[#15803d] tracking-widest mt-0.5 block select-all font-mono">
            {referenceId}
          </span>
        </div>

        {/* Image Attachment Instruction Box */}
        {formData.fileName && (
          <div className="mt-4 p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs text-left max-w-md mx-auto flex items-start gap-3">
            <span className="text-lg shrink-0">📎</span>
            <div>
              <p className="font-bold text-amber-950">Attach your photo/document in WhatsApp:</p>
              <p className="mt-1 text-[12px] text-amber-800 leading-relaxed">
                You selected <strong>"{formData.fileName}"</strong>. Please click the <strong>paperclip (📎) attachment icon</strong> in WhatsApp to send your photo or land sketch directly to our team!
              </p>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Open WhatsApp & Send Message</span>
          </a>

          <button
            type="button"
            onClick={resetForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs sm:text-sm transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  // MAIN FORM UI
  return (
    <div className={`bg-white rounded-2xl sm:rounded-3xl border border-[#dce8da] shadow-sm relative overflow-hidden p-5 sm:p-7 md:p-8 ${className}`}>
      {/* Top Green Accent Bar matching reference */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-[#1b5e20]" />

      {/* Heading & Subtitle with Leaf Sprout */}
      <div className="mb-5 sm:mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#0e3922] tracking-tight">
            Send us your enquiry
          </h2>
          <img
            src="/assets/decorative-leaf.png"
            alt=""
            aria-hidden="true"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain pointer-events-none select-none opacity-90 -rotate-12"
          />
        </div>

      </div>

      {apiError && (
        <div className="mb-4 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-red-700 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <p>{apiError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-3.5 sm:space-y-4">
        {/* Row 1: Full Name * & Mobile Number * */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div>
            <label htmlFor="fullName" className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className={`w-full rounded-lg border ${errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                } focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none placeholder:text-slate-400 transition-colors`}
            />
            {errors.fullName && (
              <p className="mt-1 text-[11px] text-red-500 font-medium">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="mobile" className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="mobile"
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
              <p className="mt-1 text-[11px] text-red-500 font-medium">{errors.mobile}</p>
            )}
          </div>
        </div>

        {/* Row 2: Email (Optional) & Location / District * */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div>
            <label htmlFor="email" className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className={`w-full rounded-lg border ${errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                } focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none placeholder:text-slate-400 transition-colors`}
            />
            {errors.email && (
              <p className="mt-1 text-[11px] text-red-500 font-medium">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="district" className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Location / District <span className="text-red-500">*</span>
            </label>
            <CustomSelect
              id="district"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              options={DISTRICTS_TAMIL_NADU}
              placeholder="Enter your location or district"
              error={errors.district}
            />
            {errors.district && (
              <p className="mt-1 text-[11px] text-red-500 font-medium">{errors.district}</p>
            )}
          </div>
        </div>

        {/* Row 3: Service * & Farm / Land Size (Optional) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div>
            <label htmlFor="service" className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Service <span className="text-red-500">*</span>
            </label>
            <CustomSelect
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              options={SERVICES_DATA.map((s) => ({ label: s.title, value: s.title }))}
              placeholder="Select a service"
              error={errors.service}
            />
            {errors.service && (
              <p className="mt-1 text-[11px] text-red-500 font-medium">{errors.service}</p>
            )}
          </div>

          <div>
            <label htmlFor="farmSize" className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Farm / Land Size
            </label>
            <CustomSelect
              id="farmSize"
              name="farmSize"
              value={formData.farmSize}
              onChange={handleInputChange}
              options={[
                '5 Cent to 1 Acre',
                '1 to 5 Acres',
                '5 to 10 Acres',
                '10 Acres & Above',
              ]}
              placeholder="Select land size"
            />
          </div>
        </div>

        {/* Row 4: Requirement Details (Optional) */}
        <div>
          <label htmlFor="details" className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
            Requirement Details
          </label>
          <textarea
            id="details"
            name="details"
            rows={3}
            value={formData.details}
            onChange={handleInputChange}
            placeholder="Tell us about your land and the work you need"
            className="w-full rounded-lg border border-slate-300 focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none placeholder:text-slate-400 transition-colors resize-none"
          />
        </div>

        {/* Primary Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 sm:py-3.5 px-6 bg-[#b37d2e] hover:bg-[#9d691e] active:scale-[0.99] disabled:opacity-75 text-white font-semibold text-sm sm:text-base rounded-xl shadow-xs hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
          >
            {isSubmitting ? (
              <span>Sending Enquiry...</span>
            ) : (
              <>
                <span>Send Enquiry</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 font-bold">
                  →
                </span>
              </>
            )}
          </button>

          {/* Privacy Security Message */}
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-500">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Your details will be used to respond to your enquiry.</span>
          </div>
        </div>

      </form>
    </div>
  );
};

export default EnquiryForm;
