import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, User, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';
import { ContactForm } from './ContactForm';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-[#0c1018] border-t border-industrial-800/80">
      {/* Background Ambience */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Phone className="w-3.5 h-3.5" />
            <span>సంప్రదించండి • Direct Communication</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Let's Discuss Your Requirement <span className="text-amber-400 font-semibold text-xl sm:text-2xl lg:text-3xl block sm:inline sm:ml-2">(నేరుగా సంప్రదించండి)</span>
          </h2>
          <p className="text-amber-100/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Reach out directly to Chetan Surakasi and our manufacturing team in Vijayawada for orders, customized packaging, color inquiries, or quotation requests.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Map on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Info & Google Maps Embed */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left w-full">
            {/* Primary Details Card */}
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#141a26] to-[#0e121a] border border-amber-500/20 p-5 sm:p-7 backdrop-blur-xl shadow-xl space-y-5">
              <div className="border-b border-industrial-800/80 pb-4">
                <div className="flex items-center gap-3 mb-2 min-w-0">
                  <div className="relative flex-shrink-0">
                    <img
                      src="/images/durga-matha-emblem.webp"
                      alt="Sri Durga Matha"
                      className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-amber-400 shadow-md"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 block truncate">
                      విజయవాడ తయారీ యూనిట్ • Manufacturer
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white truncate">
                      {COMPANY_INFO.name}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-amber-200/90 bg-industrial-950/70 p-2 rounded-lg border border-white/5">
                  <User className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>
                    Proprietor: <strong className="text-white">{COMPANY_INFO.proprietor}</strong>
                  </span>
                </div>
              </div>

              {/* Contact Methods List */}
              <div className="space-y-3.5">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-industrial-950 border border-white/5 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-industrial-400 font-semibold block">
                      Direct Facility Phone & WhatsApp
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-base sm:text-lg font-bold font-mono text-white hover:text-amber-300 transition-colors"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                    <span className="text-[11px] text-industrial-400 block mt-0.5">
                      Available Mon – Sat for orders & queries
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-industrial-950 border border-white/5 flex items-center justify-center text-rose-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-industrial-400 font-semibold block">
                      Factory Address
                    </span>
                    <address className="not-italic text-xs sm:text-sm text-industrial-200 leading-relaxed mt-0.5">
                      {COMPANY_INFO.address.line1},<br />
                      {COMPANY_INFO.address.line2},<br />
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.district},<br />
                      {COMPANY_INFO.address.state} – {COMPANY_INFO.address.pincode}, India
                    </address>
                  </div>
                </div>

                {/* GST Notice */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-industrial-950 border border-white/5 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-industrial-400 font-semibold block">
                      GST Registered
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-white">
                      {COMPANY_INFO.gstNumber}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-industrial-800/80">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/30 text-amber-200 hover:text-white font-heading font-semibold text-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-industrial-800 hover:bg-industrial-700 text-white font-heading font-semibold text-xs border border-white/10 transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#111622] border border-white/5 overflow-hidden shadow-xl">
              <div className="p-3 sm:p-4 border-b border-industrial-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                    Visit Us in Vijayawada
                  </h4>
                </div>
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-300 hover:underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Open Maps</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="w-full h-56 sm:h-64 bg-industrial-950 relative">
                <iframe
                  title="Sri Durga Matha Varnish And Colors Location Map"
                  src={COMPANY_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-6 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
