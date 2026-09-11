import React, { useState } from 'react';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, COLOR_VARIANTS, PACKAGING_OPTIONS } from '../../data/products';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';
import type { EnquiryFormState } from '../../types';

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<EnquiryFormState>({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    productInterestedIn: PRODUCTS[0].name,
    requiredColour: COLOR_VARIANTS[0].name,
    packagingRequirement: PACKAGING_OPTIONS[0].title,
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof EnquiryFormState, string>> = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.phone.trim()) {
      errs.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{7,15}$/.test(form.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!form.quantity.trim()) errs.quantity = 'Please specify approximate quantity';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate WhatsApp URL
    const waText = COMPANY_INFO.whatsappTemplates.formSubmission({
      name: form.name,
      companyName: form.companyName,
      phone: form.phone,
      product: form.productInterestedIn,
      colour: form.requiredColour,
      packaging: form.packagingRequirement,
      quantity: form.quantity,
      message: form.message
    });

    const waLink = createWhatsAppLink(waText);
    setSubmitted(true);

    // Open WhatsApp in new tab
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-[#141a26]/90 border border-amber-500/20 p-5 sm:p-7 backdrop-blur-xl shadow-xl relative text-left w-full">
      <div className="space-y-1.5 mb-5 border-b border-industrial-800/80 pb-4">
        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-400">
          Direct Quotation & Order Request
        </span>
        <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
          Send Manufacturing Enquiry
        </h3>
        <p className="text-xs text-industrial-300">
          Fill out your requirements below to instantly dispatch a structured order inquiry to our team via WhatsApp.
        </p>
      </div>

      {submitted && (
        <div className="mb-5 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2.5">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <div>
            <strong>Enquiry Prepared!</strong> WhatsApp has been launched with your structured details. If it didn't open automatically,{' '}
            <button
              onClick={handleSubmit}
              className="underline font-bold text-white hover:text-emerald-300 cursor-pointer"
            >
              click here to send
            </button>
            .
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Row 1: Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-xs font-semibold text-industrial-200 mb-1">
              Your Full Name <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Ramesh Kumar"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-industrial-950 border text-sm text-white placeholder-industrial-500 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all ${
                errors.name ? 'border-rose-500 ring-1 ring-rose-500/30' : 'border-white/10'
              }`}
            />
            {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-industrial-200 mb-1">
              Company / Workshop Name
            </label>
            <input
              type="text"
              value={form.companyName}
              onChange={(e) => setForm({ ...form, companyName: e.target.value })}
              placeholder="e.g. Sri Krishna Rewinding Works"
              className="w-full px-3.5 py-2.5 rounded-xl bg-industrial-950 border border-white/10 text-sm text-white placeholder-industrial-500 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all"
            />
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-xs font-semibold text-industrial-200 mb-1">
              Phone Number <span className="text-rose-400">*</span>
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="e.g. 9876543210"
              className={`w-full px-3.5 py-2.5 rounded-xl bg-industrial-950 border text-sm text-white placeholder-industrial-500 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all ${
                errors.phone ? 'border-rose-500 ring-1 ring-rose-500/30' : 'border-white/10'
              }`}
            />
            {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-industrial-200 mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="e.g. contact@business.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-industrial-950 border border-white/10 text-sm text-white placeholder-industrial-500 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all"
            />
          </div>
        </div>

        {/* Row 3: Product, Colour, Packaging */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div>
            <label className="block text-[11px] sm:text-xs font-semibold text-industrial-200 mb-1">
              Product
            </label>
            <select
              value={form.productInterestedIn}
              onChange={(e) => setForm({ ...form, productInterestedIn: e.target.value })}
              className="w-full px-2.5 py-2 rounded-xl bg-industrial-950 border border-white/10 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400/50"
            >
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] sm:text-xs font-semibold text-industrial-200 mb-1">
              Required Colour
            </label>
            <select
              value={form.requiredColour}
              onChange={(e) => setForm({ ...form, requiredColour: e.target.value })}
              className="w-full px-2.5 py-2 rounded-xl bg-industrial-950 border border-white/10 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400/50"
            >
              {COLOR_VARIANTS.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] sm:text-xs font-semibold text-industrial-200 mb-1">
              Packaging Format
            </label>
            <select
              value={form.packagingRequirement}
              onChange={(e) => setForm({ ...form, packagingRequirement: e.target.value })}
              className="w-full px-2.5 py-2 rounded-xl bg-industrial-950 border border-white/10 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-400/50"
            >
              {PACKAGING_OPTIONS.map((pkg) => (
                <option key={pkg.id} value={pkg.title}>
                  {pkg.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Quantity */}
        <div>
          <label className="block text-xs font-semibold text-industrial-200 mb-1">
            Estimated Quantity / Batch Requirement <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            required
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            placeholder="e.g. 100 Litres / 20 Cans of 5L / Monthly supply"
            className={`w-full px-3.5 py-2.5 rounded-xl bg-industrial-950 border text-sm text-white placeholder-industrial-500 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all ${
              errors.quantity ? 'border-rose-500 ring-1 ring-rose-500/30' : 'border-white/10'
            }`}
          />
          {errors.quantity && <p className="text-[11px] text-rose-400 mt-1">{errors.quantity}</p>}
        </div>

        {/* Row 5: Notes */}
        <div>
          <label className="block text-xs font-semibold text-industrial-200 mb-1">
            Additional Specifications / Custom Notes
          </label>
          <textarea
            rows={2}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Mention any custom box printing, special viscosity requirements, delivery destination, etc."
            className="w-full px-3.5 py-2 rounded-xl bg-industrial-950 border border-white/10 text-sm text-white placeholder-industrial-500 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-heading font-bold text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Enquiry via WhatsApp</span>
          </button>
        </div>

        <p className="text-[10px] sm:text-[11px] text-industrial-400 text-center pt-0.5">
          Your enquiry will automatically formulate into a clean WhatsApp dispatch message to our proprietor Chetan Surakasi.
        </p>
      </form>
    </div>
  );
};
