import React from 'react';
import { Truck, ShieldCheck, Factory, PhoneCall } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';

export const IndianTrustStrip: React.FC = () => {
  const trustPillars = [
    {
      icon: Factory,
      title: "Direct Nirmata (డైరెక్ట్ తయారీదారు)",
      subtitle: "100% In-House Manufacturing",
      desc: "Direct supply from our Vijayawada unit. Zero intermediary markups, genuine liquid volume, and direct wholesale pricing.",
      badge: "Vijayawada Unit",
      accent: "text-amber-400",
      border: "border-amber-500/20"
    },
    {
      icon: Truck,
      title: "Daily Transport Dispatch",
      subtitle: "Navata • Kranti • VRL • ANL",
      desc: "Daily lorry parcel booking to all districts of Andhra Pradesh, Telangana, Tamil Nadu & Karnataka. Goods safely delivered to your transport godown.",
      badge: "South India Wide",
      accent: "text-amber-300",
      border: "border-amber-500/20"
    },
    {
      icon: ShieldCheck,
      title: "GST Tax Invoice & ITC",
      subtitle: `GSTIN: ${COMPANY_INFO.gstNumber}`,
      desc: "Government verified manufacturing enterprise since 2018. Get authentic GST invoices and input tax credit on every order.",
      badge: "Govt. Verified",
      accent: "text-emerald-400",
      border: "border-emerald-500/20"
    },
    {
      icon: PhoneCall,
      title: "Direct Talk with Proprietor",
      subtitle: "Telugu • Hindi • English",
      desc: "Speak directly with Chetan Surakasi on call or WhatsApp for quick quotations, sample testing, and custom formulation requirements.",
      badge: "Personal Support",
      accent: "text-amber-400",
      border: "border-amber-500/20"
    }
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-gradient-to-b from-[#151b27] via-[#121622] to-[#0e121a] border border-amber-500/25 p-4 sm:p-6 lg:p-8 shadow-xl backdrop-blur-xl">
        {/* Header Ribbon */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pb-5 mb-5 border-b border-industrial-800/80 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl drop-shadow-sm flex-shrink-0">🇮🇳</span>
            <div>
              <h3 className="text-sm sm:text-lg lg:text-xl font-heading font-bold text-white tracking-tight">
                విశ్వసనీయ భారతీయ తయారీ <span className="text-amber-400 font-semibold">| Trusted Indian Manufacturing</span>
              </h3>
              <p className="text-xs text-amber-200/80 mt-0.5">
                Serving Motor Rewinding Workshops, Electrical Contractors & Transformer Units Since 2018
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-2.5 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-200 hover:text-white hover:bg-amber-500/20 text-xs font-semibold transition-all shadow-sm flex-1 sm:flex-none"
            >
              <span>Call: {COMPANY_INFO.phoneFormatted}</span>
            </a>
            <a
              href={createWhatsAppLink("Namaste Sri Durga Matha Varnish, I would like to inquire about direct factory dispatch and wholesale prices.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-xs font-bold shadow-md shadow-emerald-800/20 transition-all flex-1 sm:flex-none"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-xl bg-[#0f141f]/90 border ${pillar.border} flex flex-col justify-between text-left hover:bg-[#131926] hover:border-amber-400/40 hover:shadow-md transition-all duration-300 group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-industrial-900 border border-white/5 group-hover:scale-105 transition-transform">
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${pillar.accent}`} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/25">
                      {pillar.badge}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-heading font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <span className={`text-[11px] sm:text-xs font-semibold block mb-1.5 ${pillar.accent}`}>
                    {pillar.subtitle}
                  </span>
                  <p className="text-[11px] sm:text-xs text-industrial-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-industrial-800/60 text-[10px] text-amber-300/70 font-mono font-medium flex items-center gap-1">
                  <span>✓</span>
                  <span>Direct Factory Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
