import React, { useState } from 'react';
import { Palette, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { COLOR_VARIANTS } from '../../data/products';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';

export const ColorShowcase: React.FC = () => {
  const [activeColorId, setActiveColorId] = useState<string>(COLOR_VARIANTS[0].id);

  const activeVariant = COLOR_VARIANTS.find((c) => c.id === activeColorId) || COLOR_VARIANTS[0];

  return (
    <section id="colours" className="py-16 sm:py-24 relative overflow-hidden bg-[#0a0e16] border-t border-industrial-800/80">
      {/* Calm ambient background glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: activeVariant.hex }}
      />
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-rose-500/10 to-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Palette className="w-4 h-4 text-amber-400" />
            <span>రంగులు • Formulation Versatility</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Available in Different Colours <span className="text-amber-400 font-semibold text-xl sm:text-2xl lg:text-3xl block sm:inline sm:ml-2">(వివిధ రంగులలో లభ్యం)</span>
          </h2>
          <p className="text-amber-100/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Standard rewinding shades and customized batch formulations. Trusted across Indian motor rewinding shops for clear phase identification, inspection coats, and high-gloss dielectric coverage.
          </p>
        </div>

        {/* Real Product Color Model Customizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Real Bottle Showcase Display */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative w-full">
            <div className="w-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#141a26] via-[#101420] to-[#0c0f18] border border-amber-500/25 p-4 sm:p-6 relative shadow-xl overflow-hidden group">
              {/* Top Bar with Real Spec Badge */}
              <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-industrial-800/80">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm transition-all"
                    style={{ backgroundColor: activeVariant.hex }}
                  />
                  <span className="text-sm sm:text-base font-bold text-white">
                    {activeVariant.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Photo</span>
                </div>
              </div>

              {/* Central Bottle Display */}
              <div className="relative w-full h-[270px] sm:h-[360px] md:h-[400px] rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#101520] via-[#0d111a] to-[#0a0d14] border border-white/5 flex items-center justify-center overflow-hidden shadow-inner">
                {/* Dynamic liquid color backlight */}
                <div
                  className="absolute w-36 h-36 rounded-full blur-2xl opacity-25 pointer-events-none transition-all duration-500"
                  style={{ backgroundColor: activeVariant.hex }}
                />

                {/* Real Varnish Bottle Photo */}
                <img
                  src={activeVariant.image}
                  alt={`${activeVariant.name} Varnish Model`}
                  key={activeVariant.id}
                  className="relative z-10 w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105 select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
                  loading="lazy"
                />

                {/* Floating Badge */}
                {activeVariant.badge && (
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-industrial-900/90 border border-amber-400/25 text-[11px] font-bold text-amber-200 backdrop-blur-md shadow-md z-20">
                    {activeVariant.badge}
                  </div>
                )}

                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-industrial-900/90 border border-white/10 text-[11px] font-mono text-industrial-300 backdrop-blur-md z-20">
                  1 Litre Workshop Bottle
                </div>
              </div>

              {/* Status Overlay */}
              <div className="mt-3.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 p-3 sm:p-3.5 rounded-xl bg-industrial-900/80 border border-white/5 backdrop-blur-md text-left">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-sm flex-shrink-0"
                    style={{ backgroundColor: activeVariant.hex }}
                  />
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-white block truncate">
                      Active: {activeVariant.name}
                    </span>
                    <span className="text-[11px] text-amber-200/80 truncate block">
                      Standard workshop container with tamper-evident seal
                    </span>
                  </div>
                </div>
                <a
                  href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.color(activeVariant.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm flex-shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Order Shade</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Color Selector & Specs */}
          <div className="lg:col-span-5 flex flex-col space-y-4 sm:space-y-5 text-left w-full">
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-amber-300 mb-2.5 flex items-center gap-2">
                <span>🎨</span>
                <span>Select Varnish Colour:</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {COLOR_VARIANTS.map((variant) => {
                  const isSelected = variant.id === activeColorId;
                  return (
                    <button
                      key={variant.id}
                      onClick={() => setActiveColorId(variant.id)}
                      className={`flex items-center justify-between p-3 sm:p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-industrial-800 border-amber-400 shadow-md shadow-amber-500/15 ring-1 ring-amber-400/40'
                          : 'bg-[#0f141f]/90 border-white/5 hover:bg-industrial-900 hover:border-amber-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className="w-5 h-5 rounded-full border border-white/30 flex-shrink-0 shadow-sm"
                          style={{ backgroundColor: variant.hex }}
                        />
                        <div className="min-w-0">
                          <span className={`text-xs sm:text-sm font-bold block truncate ${isSelected ? 'text-white' : 'text-industrial-100'}`}>
                            {variant.name}
                          </span>
                          <span className="text-[11px] text-amber-300/80 font-medium truncate block">
                            {variant.popularUse}
                          </span>
                        </div>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-amber-400 text-industrial-950 flex items-center justify-center font-bold text-xs shadow-sm flex-shrink-0 ml-2">
                          ✓
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Color Information Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-b from-[#121724] to-[#0e121c] border border-amber-500/20 space-y-2.5 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Color Details
                </span>
                <span
                  className="text-xs font-mono font-bold px-2 py-0.5 rounded-full border border-amber-400/30 bg-industrial-950"
                  style={{ color: activeVariant.hex }}
                >
                  {activeVariant.name}
                </span>
              </div>
              <p className="text-xs text-industrial-200 leading-relaxed">
                {activeVariant.description}
              </p>
              <div className="text-[11px] text-amber-200/80 pt-2 border-t border-industrial-800/70">
                <strong className="text-white font-semibold">Recommended Application:</strong> {activeVariant.popularUse}
              </div>
            </div>

            {/* Custom Color Callout */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#141b2b] to-[#101522] border border-amber-400/30 space-y-2 shadow-md">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                  Need a specific colour? Talk to us.
                </h4>
              </div>
              <p className="text-xs text-amber-100/80">
                Multiple colour options available. Contact us for your requirement. We accommodate specialized formulations for regular bulk supply.
              </p>
              <div className="pt-1.5">
                <a
                  href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.color(activeVariant.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Request {activeVariant.name} on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
