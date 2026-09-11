import React from 'react';
import { Phone, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const IndianTopRibbon: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#1c080e] via-[#2d0f17] to-[#1c080e] border-b border-amber-500/20 text-amber-100/90 text-[11px] py-1.5 px-3 sm:px-4 relative z-40 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
        {/* Sacred Auspicious Invocation */}
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="text-amber-300 font-serif">॥ श्री दुर्गा मातायै नमः ॥</span>
          <span className="text-amber-500/60">•</span>
          <span className="text-amber-200">|| శ్రీ దుర్గా మాతాయై నమః ||</span>
          <span className="hidden lg:inline text-amber-500/60">•</span>
          <span className="hidden lg:inline text-amber-300/80 text-[10px] font-sans">
            Trusted by Rewinders & Manufacturers Since 2018
          </span>
        </div>

        {/* Center: Make in India & Regional Location */}
        <div className="hidden md:flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/40 border border-amber-400/25 text-[10px] text-white font-medium">
            <span>🇮🇳</span>
            <span>Make in India</span>
          </span>
          <span className="text-amber-500/60">•</span>
          <span className="text-amber-100/90 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-400/80" />
            <span>Vijayawada, Andhra Pradesh</span>
          </span>
        </div>

        {/* Right: GST & Direct Factory Call */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1 text-emerald-300 font-mono text-[10px] bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>GST: {COMPANY_INFO.gstNumber}</span>
          </span>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-1.5 text-white hover:text-amber-300 font-semibold tracking-wide transition-colors"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span>Call: {COMPANY_INFO.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
