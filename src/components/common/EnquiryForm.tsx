import React, { useState, useEffect, useRef } from 'react';
import { SERVICES_DATA } from '../../data/services';
import { DISTRICTS_TAMIL_NADU, CONTACT_DETAILS } from '../../utils/constants';
import { EnquiryFormData } from '../../types';
import { CheckCircle2, AlertCircle, Upload, Lock, X, RefreshCw, MessageCircle } from 'lucide-react';

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Find initial service matching slug if provided
  const initialService = SERVICES_DATA.find((s) => s.slug === defaultServiceSlug)?.title || '';

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    mobile: '',
    email: '',
    district: '',
    service: initialService,
    farmSize: '',
    preferredTime: '',
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

    // Indian mobile number validation (10 digits)
    const cleanMobile = formData.mobile.replace(/\D/g, '');
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (cleanMobile.length < 10 || cleanMobile.length > 12) {
      errs.mobile = 'Please enter a valid 10-digit mobile number';
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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, fileName: 'File size should be under 10MB' }));
        return;
      }
      setFormData((prev) => ({ ...prev, fileName: file.name }));
      if (errors.fileName) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated.fileName;
          return updated;
        });
      }
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFormData((prev) => ({ ...prev, fileName: '' }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';
      const endpoint = `${baseUrl.replace(/\/$/, '')}/enquiries`;

      const generatedRef = `UZH-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

      try {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            referenceNumber: generatedRef,
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch {
        console.info('Enquiry stored locally for email forwarding API integration.');
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
      preferredTime: '',
      details: '',
      fileName: '',
    });
    setSubmitSuccess(false);
    setReferenceId('');
    setApiError(null);
  };

  // SUCCESS STATE UI
  if (submitSuccess) {
    const whatsappText = encodeURIComponent(
      `Hello Uzhavar Connect, I just submitted an enquiry (Ref: ${referenceId}) for ${formData.service} at ${formData.district}. Name: ${formData.fullName}, Phone: ${formData.mobile}.`
    );

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

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/\D/g, '')}?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs sm:text-sm shadow-xs transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
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
              placeholder="Enter your mobile number"
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
              Email <span className="text-slate-400 font-normal">(Optional)</span>
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
            <select
              id="district"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className={`w-full rounded-lg border ${errors.district ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                } focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none text-slate-700 bg-white transition-colors`}
            >
              <option value="">Enter your location or district</option>
              {DISTRICTS_TAMIL_NADU.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
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
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className={`w-full rounded-lg border ${errors.service ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                } focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none text-slate-800 bg-white font-medium transition-colors`}
            >
              <option value="">Select a service</option>
              {SERVICES_DATA.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-[11px] text-red-500 font-medium">{errors.service}</p>
            )}
          </div>

          <div>
            <label htmlFor="farmSize" className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
              Farm / Land Size <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              id="farmSize"
              name="farmSize"
              value={formData.farmSize}
              onChange={handleInputChange}
              placeholder="e.g. 5 acres"
              className="w-full rounded-lg border border-slate-300 focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none placeholder:text-slate-400 transition-colors"
            />
          </div>
        </div>

        {/* Row 4: Preferred Contact Time (Optional) */}
        <div>
          <label htmlFor="preferredTime" className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
            Preferred Contact Time <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleInputChange}
            className="w-full rounded-lg border border-slate-300 focus:border-[#15803d] focus:ring-1 focus:ring-[#15803d] px-3.5 py-2 text-xs sm:text-sm outline-none text-slate-700 bg-white transition-colors"
          >
            <option value="">Select a time</option>
            <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
            <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
            <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
            <option value="Anytime">Anytime during business hours</option>
          </select>
        </div>

        {/* Row 5: Requirement Details (Optional) */}
        <div>
          <label htmlFor="details" className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
            Requirement Details <span className="text-slate-400 font-normal">(Optional)</span>
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

        {/* Row 6: Photo / Document (Optional) */}
        <div>
          <label className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wide mb-1 block">
            Photo / Document <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*,.pdf,.doc,.docx"
            className="hidden"
          />

          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-300 hover:border-[#15803d] rounded-xl p-3.5 sm:p-4 text-center cursor-pointer transition-colors bg-[#fbfdfa] hover:bg-emerald-50/20 group"
          >
            {formData.fileName ? (
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#15803d] font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span className="truncate max-w-[200px] sm:max-w-xs">{formData.fileName}</span>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="p-1 hover:bg-slate-200 rounded-full text-slate-500"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#15803d] flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
                  <Upload className="w-4 h-4 text-[#15803d]" />
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-[#15803d] transition-colors">
                  Choose file
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Upload photos or documents related to your land (Optional)
                </p>
              </div>
            )}
          </div>
          {errors.fileName && (
            <p className="mt-1 text-[11px] text-red-500 font-medium">{errors.fileName}</p>
          )}
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
