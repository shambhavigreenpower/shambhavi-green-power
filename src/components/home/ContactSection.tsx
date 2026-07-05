import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, ArrowRight, MessageSquare, Check, HelpCircle } from "lucide-react";
import { COMPANY_INFO } from "../../lib/constants";
import { Button } from "../ui/Button";

interface FormErrors {
  name?: string;
  phone?: string;
  city?: string;
  serviceType?: string;
  systemSize?: string;
  monthlyBill?: string;
}

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    serviceType: "Residential Solar (Home)",
    systemSize: "1-3 kW (Small Home)",
    monthlyBill: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    // Indian Phone Validation (10 digits, starts with 6, 7, 8, 9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-+]/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
    }

    // City Validation
    if (!formData.city.trim()) {
      newErrors.city = "City or Village is required";
    }

    // Monthly Bill Validation
    if (!formData.monthlyBill.trim()) {
      newErrors.monthlyBill = "Monthly electricity bill is required";
    } else if (isNaN(Number(formData.monthlyBill)) || Number(formData.monthlyBill) <= 0) {
      newErrors.monthlyBill = "Enter a valid electricity bill amount";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      // Dispatch email notification to the Vercel Serverless Function
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to send email inquiry");
      }

      setIsSuccess(true);

      // Construct WhatsApp details
      const prefilledText = `Hello Shambhavi Solar, my name is *${formData.name}*.\nI want a quote for *${formData.serviceType}*.\nSystem Capacity: *${formData.systemSize}*\nMonthly Bill: *₹${formData.monthlyBill}*\nCity/Village: *${formData.city}*\nEmail: *${formData.email || "N/A"}*\nMessage: ${formData.message || "None"}\n\nPlease contact me for further details!`;
      const encodedText = encodeURIComponent(prefilledText);
      const whatsappURL = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodedText}`;

      // Open prefilled WhatsApp link in a new tab
      window.open(whatsappURL, "_blank");

      // Reset form fields
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        serviceType: "Residential Solar (Home)",
        systemSize: "1-3 kW (Small Home)",
        monthlyBill: "",
        message: "",
      });
    } catch (err: any) {
      console.error("API contact submission error:", err);
      // Fallback: If api/contact fails or is not available locally, still proceed to WhatsApp
      setIsSuccess(true);
      
      const prefilledText = `Hello Shambhavi Solar, my name is *${formData.name}*.\nI want a quote for *${formData.serviceType}*.\nSystem Capacity: *${formData.systemSize}*\nMonthly Bill: *₹${formData.monthlyBill}*\nCity/Village: *${formData.city}*\nEmail: *${formData.email || "N/A"}*\nMessage: ${formData.message || "None"}\n\nPlease contact me for further details!`;
      const encodedText = encodeURIComponent(prefilledText);
      const whatsappURL = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodedText}`;
      
      window.open(whatsappURL, "_blank");

      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        serviceType: "Residential Solar (Home)",
        systemSize: "1-3 kW (Small Home)",
        monthlyBill: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section-id" className="py-24 px-4 bg-brand-surface text-brand-dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 2-Column Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details + Embed Map (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs uppercase font-display font-extrabold tracking-widest text-brand-primary block mb-3">
                SECURE FREE SAVINGS CONSULT
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-brand-dark tracking-tight leading-tight">
                Get In Touch Today
              </h2>
              <p className="font-sans text-sm md:text-base text-gray-500 mt-4 leading-relaxed">
                Connect directly with owner Dr. Krushik Sheladiya or submit the form to receive custom capacity calculations within 24 hours.
              </p>
            </div>

            {/* Direct Contact Cards info list */}
            <div className="flex flex-col gap-4 font-sans text-sm">
              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-brand-primary/5 shadow-sm">
                <div className="p-3 bg-brand-primary/10 border border-brand-light/10 text-brand-primary rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <h4 className="font-display font-extrabold text-brand-dark text-sm mb-0.5">Ahmedabad Head Office</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <h4 className="font-display font-extrabold text-brand-dark text-sm mb-0.5">Khambha Branch Office</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{COMPANY_INFO.branchAddress}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-brand-primary/5 shadow-sm">
                <div className="p-3 bg-brand-primary/10 border border-brand-light/10 text-brand-primary rounded-xl">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-brand-dark text-sm mb-1">Phone / WhatsApp</h4>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-brand-primary font-bold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-brand-primary/5 shadow-sm">
                <div className="p-3 bg-brand-primary/10 border border-brand-light/10 text-brand-primary rounded-xl">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-brand-dark text-sm mb-1">Email Queries</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-primary font-bold hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-brand-primary/15 shadow-md">
              <iframe
                title="Shambhavi Solar Map Location"
                src={COMPANY_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Quick Contact Buttons Row */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-brand-primary text-white font-display text-xs font-bold hover:bg-brand-light transition-all shadow-md"
              >
                <Phone className="h-3.5 w-3.5" /> Call Now
              </a>
              <a
                href={COMPANY_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-display text-xs font-bold hover:opacity-90 transition-all shadow-md"
              >
                <MessageSquare className="h-3.5 w-3.5" /> Chat WhatsApp
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-brand-dark text-white font-display text-xs font-bold hover:bg-black transition-all shadow-md"
              >
                <Mail className="h-3.5 w-3.5" /> Send Email
              </a>
            </div>
          </div>

          {/* Right Column: Quote Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-brand-dark text-white rounded-3xl p-6 md:p-10 border border-brand-primary/15 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="mb-8 border-b border-brand-primary/20 pb-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent font-display block mb-1">
                ONLINE EVALUATION REQUEST
              </span>
              <h3 className="font-display font-extrabold text-xl md:text-2xl text-white">
                Request a Free Solar Quote
              </h3>
              <p className="font-sans text-xs md:text-sm text-gray-400 mt-1">
                Input your current bill size to calculate potential government solar subsidy slabs.
              </p>
            </div>

            {/* Quote Form Submission */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display">
                    Full Name *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={`px-4 py-3 bg-brand-dark border rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-light/40 transition-all ${
                      errors.name ? "border-red-500" : "border-brand-primary/20 focus:border-brand-light"
                    }`}
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name}</span>}
                </div>

                {/* Phone Number field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-phone" className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display">
                    Phone Number (Indian Format) *
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    required
                    maxLength={15}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 96629 87211"
                    className={`px-4 py-3 bg-brand-dark border rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-light/40 transition-all ${
                      errors.phone ? "border-red-500" : "border-brand-primary/20 focus:border-brand-light"
                    }`}
                  />
                  {errors.phone && <span className="text-red-400 text-xs mt-1">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Email Address field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display">
                    Email Address
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. info@shambhavigreenpower.com"
                    className="px-4 py-3 bg-brand-dark border border-brand-primary/20 focus:border-brand-light rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-light/40 transition-all"
                  />
                </div>

                {/* City/Village field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-city" className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display">
                    City / Village *
                  </label>
                  <input
                    id="form-city"
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Khamba, Amreli"
                    className={`px-4 py-3 bg-brand-dark border rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-light/40 transition-all ${
                      errors.city ? "border-red-500" : "border-brand-primary/20 focus:border-brand-light"
                    }`}
                  />
                  {errors.city && <span className="text-red-400 text-xs mt-1">{errors.city}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Service Type Dropdown field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-service" className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display">
                    Service Type *
                  </label>
                  <select
                    id="form-service"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="px-4 py-3 bg-brand-dark border border-brand-primary/20 focus:border-brand-light rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-light/40 transition-all text-white"
                  >
                    <option>Residential Solar (Home)</option>
                    <option>Commercial Solar (Business/Industry)</option>
                    <option>Agricultural Solar (Pump/Farm)</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* System Size Dropdown field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-size" className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display">
                    System Size Range
                  </label>
                  <select
                    id="form-size"
                    name="systemSize"
                    value={formData.systemSize}
                    onChange={handleChange}
                    className="px-4 py-3 bg-brand-dark border border-brand-primary/20 focus:border-brand-light rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-light/40 transition-all text-white"
                  >
                    <option>1-3 kW (Small Home)</option>
                    <option>3-5 kW (Medium Home)</option>
                    <option>5-10 kW (Large Home)</option>
                    <option>10-50 kW (Commercial)</option>
                    <option>50kW+ (Industrial/Large Farm)</option>
                  </select>
                </div>
              </div>

              {/* Monthly Electricity Bill input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-bill" className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display">
                  Monthly Electricity Bill (₹) *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-light font-display font-extrabold text-sm">
                    ₹
                  </span>
                  <input
                    id="form-bill"
                    type="number"
                    name="monthlyBill"
                    required
                    value={formData.monthlyBill}
                    onChange={handleChange}
                    placeholder="Enter bill amount in rupees"
                    className={`w-full pl-8 pr-4 py-3 bg-brand-dark border rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-light/40 transition-all ${
                      errors.monthlyBill ? "border-red-500" : "border-brand-primary/20 focus:border-brand-light"
                    }`}
                  />
                </div>
                {errors.monthlyBill && <span className="text-red-400 text-xs mt-1">{errors.monthlyBill}</span>}
              </div>

              {/* Custom Message input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-message" className="text-xs font-bold uppercase tracking-wider text-gray-400 font-display">
                  Custom Message (Optional)
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your rooftop or pump requirements..."
                  className="px-4 py-3 bg-brand-dark border border-brand-primary/20 focus:border-brand-light rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-light/40 transition-all resize-none"
                />
              </div>

              {/* Submit CTA button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-brand-accent text-brand-dark font-display font-black text-sm uppercase tracking-wider rounded-xl hover:bg-yellow-500 disabled:opacity-50 transition-all flex items-center justify-center gap-2 group cursor-pointer border-2 border-yellow-300 shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="h-5 w-5 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit — Get Free Quote</span>
                      <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              {/* Success Notification checkmark banner */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="p-4 bg-brand-primary/30 border border-brand-light/40 rounded-xl flex items-start gap-3 mt-4"
                  >
                    <Check className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">Thank You! Message Sent.</h4>
                      <p className="font-sans text-xs text-gray-300 mt-0.5">
                        Prefilled details have been sent. Owner Dr. Krushik Sheladiya will call you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
