import React from 'react';
import { MessageCircle, Phone, Navigation, Sparkles } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-[#0c1018] via-[#101522] to-[#0c1018] border-t border-industrial-800/80">
      {/* Central Ambient Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#151b27] via-[#111622] to-[#0d1119] border border-amber-500/25 p-6 sm:p-10 md:p-12 backdrop-blur-xl shadow-xl space-y-5">
          {/* Centered Sacred Durga Matha Emblem */}
          <div className="flex justify-center mb-1">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 blur-sm opacity-70" />
              <img
                src="/images/durga-matha-emblem.webp"
                alt="Sri Durga Matha"
                className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-full object-cover border-2 border-amber-400 shadow-lg"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>శ్రీ దుర్గా మాతా • Ready To Supply Your Facility</span>
          </div>

          <div className="space-y-2.5 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Have a Varnish Requirement?
              <span className="block text-lg sm:text-xl md:text-2xl text-amber-300 font-semibold mt-1.5">
                మీకు ఇన్సులేటింగ్ వార్నిష్ కావాలా? నేరుగా మాతో మాట్లాడండి.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-amber-100/80 font-normal leading-relaxed">
              Tell us what you need. We'll help you find the right varnish shade, container size, and packaging configuration with direct transport godown dispatch.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-3">
            <a
              href={createWhatsAppLink("Hello Chetan Surakasi, I have a varnish requirement and would like to discuss products and packaging options.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-md shadow-emerald-800/20 transition-all hover:scale-[1.01]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us (విచారణ)</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 shadow-md shadow-amber-500/20 transition-all hover:scale-[1.01]"
            >
              <Phone className="w-4 h-4 text-slate-950" />
              <span>Call {COMPANY_INFO.phoneFormatted}</span>
            </a>

            <a
              href={COMPANY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm bg-industrial-900 hover:bg-industrial-800 text-amber-200 border border-white/10 shadow-sm transition-all hover:scale-[1.01]"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Bottom verified reassurance */}
          <div className="pt-5 border-t border-industrial-800/80 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-industrial-400">
            <span>GST: {COMPANY_INFO.gstNumber}</span>
            <span className="hidden sm:inline">•</span>
            <span>Vijayawada Facility</span>
            <span className="hidden sm:inline">•</span>
            <span>Direct Proprietor Communication</span>
          </div>
        </div>
      </div>
    </section>
  );
};
