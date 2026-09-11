import React from 'react';
import { Phone, MapPin, MessageCircle, ShieldCheck, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090c12] border-t border-industrial-800/80 pt-12 sm:pt-16 pb-10 relative text-left">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-industrial-800/70">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <img
                  src="/images/durga-matha-emblem.webp"
                  alt="Sri Durga Matha Logo"
                  className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-amber-400/90 shadow-md"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-base sm:text-lg text-white block">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-300 font-semibold flex items-center gap-1.5">
                  <span>శ్రీ దుర్గా మాతా</span>
                  <span className="text-amber-500/60">•</span>
                  <span>Insulating Varnish & Colors</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-industrial-300 max-w-sm leading-relaxed">
              Leading Vijayawada manufacturer of high-grade synthetic insulating varnish in multiple colour formulations with custom bottle, canister, drum, and carton box packaging.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-industrial-900/90 border border-white/5 text-xs text-emerald-300 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>GST Registered: {COMPANY_INFO.gstNumber}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-300/90">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-industrial-400">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">Home Overview</a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-300 transition-colors">Insulating Varnish Products</a>
              </li>
              <li>
                <a href="#colours" className="hover:text-amber-300 transition-colors">Varnish Colours & Formulations</a>
              </li>
              <li>
                <a href="#packaging" className="hover:text-amber-300 transition-colors">Custom Packaging & Boxes</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">About Our Business</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-amber-300 transition-colors">Manufacturing Capabilities</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">Factory Contact & Maps</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-amber-300/90">
              Factory Location & Inquiries
            </h4>
            <div className="space-y-2 text-xs text-industrial-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} – {COMPANY_INFO.address.pincode}, India
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-amber-300 transition-colors font-mono font-semibold">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </div>

              <div className="pt-1.5">
                <a
                  href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us ({COMPANY_INFO.phoneFormatted})</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Indian Desi Respectful Closing Banner */}
        <div className="py-5 mt-6 border-b border-industrial-800/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500/20 via-white/10 to-green-500/20 border border-amber-400/30 text-[10px] text-amber-200 font-bold flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Make in India</span>
            </span>
            <div>
              <span className="text-xs font-semibold text-white block">
                ॥ ధన్యవాదములు • धन्यवाद • Thank You for Supporting Indian Manufacturing ॥
              </span>
              <span className="text-[11px] text-amber-300/90">
                విజయవాడ, ఆంధ్రప్రదేశ్ • Proudly Made in Andhra Pradesh, Bharat
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-industrial-300">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-[11px]">
              MSME & GST Registered
            </span>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-industrial-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-300">Proprietor: <strong className="text-white">{COMPANY_INFO.proprietor}</strong></span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
