import React, { useState } from 'react';
import { ArrowRight, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Sparkles, Eye } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';

interface HeroModelOption {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge: string;
  glowColor: string;
  hex: string;
  highlight: string;
}

const HERO_MODELS: HeroModelOption[] = [
  {
    id: 'lineup',
    name: 'Complete Industrial Lineup',
    subtitle: '1L Bottle • 5L Canister • 200L Drum',
    image: '/images/products/hero-lineup.webp',
    badge: 'Full Capacity Range',
    glowColor: 'rgba(217, 119, 6, 0.15)',
    hex: '#d97706',
    highlight: 'Direct supply in workshop bottles, canisters, and industrial steel drums'
  },
  {
    id: 'amber',
    name: 'Amber Golden Insulating Varnish',
    subtitle: 'Standard Synthetic Resin Formulation',
    image: '/images/products/amber-bottle.webp',
    badge: 'Flagship Grade',
    glowColor: 'rgba(217, 119, 6, 0.15)',
    hex: '#d97706',
    highlight: 'Deep amber sheen, high dielectric strength & moisture resistance'
  },
  {
    id: 'ruby-red',
    name: 'Ruby Red Insulating Varnish',
    subtitle: 'Visual Differentiation & Phase Coding',
    image: '/images/products/ruby-red-bottle.webp',
    badge: 'High Visibility',
    glowColor: 'rgba(185, 28, 28, 0.15)',
    hex: '#b91c1c',
    highlight: 'Vivid red film ideal for inspection, end-turn marking & tamper sealing'
  },
  {
    id: 'orange',
    name: 'Industrial Orange Varnish',
    subtitle: 'High-Penetration Protective Tone',
    image: '/images/products/orange-bottle.webp',
    badge: 'Heavy Motor Duty',
    glowColor: 'rgba(234, 88, 12, 0.15)',
    hex: '#ea580c',
    highlight: 'Superior flow, deep inter-coil bonding & heat degradation resistance'
  },
  {
    id: 'clear',
    name: 'Clear Transparent Varnish',
    subtitle: 'Optical Clarity & Copper Inspection',
    image: '/images/products/clear-bottle.webp',
    badge: 'True Tone',
    glowColor: 'rgba(56, 189, 248, 0.12)',
    hex: '#38bdf8',
    highlight: 'Crystal-clear coating preserving 100% optical visibility of copper & coils'
  }
];

export const HeroSection: React.FC = () => {
  const [activeModelId, setActiveModelId] = useState<string>('lineup');
  const activeModel = HERO_MODELS.find((m) => m.id === activeModelId) || HERO_MODELS[0];

  return (
    <section id="home" className="relative min-h-[calc(100vh-64px)] pt-6 sm:pt-10 md:pt-14 pb-14 sm:pb-20 flex items-center overflow-hidden bg-grid-pattern">
      {/* Calm Ambient Radiant Light Diffusion */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none transition-all duration-700 opacity-60"
        style={{ backgroundColor: activeModel.glowColor }}
      />
      <div className="absolute top-1/3 left-10 w-[420px] h-[420px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 flex flex-col space-y-5 sm:space-y-6 text-left">
            {/* Indian Trust Pill */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-rose-500/5 to-amber-500/10 border border-amber-400/30 text-xs text-amber-100 w-fit backdrop-blur-md shadow-sm">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <span className="text-base">🇮🇳</span>
                <span>Make in India</span>
              </span>
              <span className="text-amber-400/60">•</span>
              <span className="font-semibold text-amber-300">సొంత తయారీ యూనిట్</span>
              <span className="text-amber-400/60">•</span>
              <span className="flex items-center gap-1 text-white/90 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-400" /> Vijayawada, A.P.
              </span>
            </div>

            {/* Main Headlines with Telugu Subtitle */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="text-xs sm:text-sm font-bold text-amber-400 tracking-wider font-heading uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>భారతీయ పరిశ్రమలకు నాణ్యమైన ఇన్సులేటింగ్ వార్నిష్</span>
              </div>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
                Insulating Varnish.{' '}
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
                  Engineered for Performance.
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-200/90 font-medium mt-1.5 tracking-normal">
                  శ్రీ దుర్గా మాతా వార్నిష్ మరియు కలర్స్
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-industrial-200 max-w-xl font-normal leading-relaxed">
                Direct manufacturing in Vijayawada. Formulated for Indian ambient temperatures, rewinding workshops, electrical motors, and transformer plants with custom colours and transport-ready packing.
              </p>
            </div>

            {/* Value Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-industrial-100 bg-industrial-900/60 p-2 sm:p-2.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Direct Nirmata (డైరెక్ట్ తయారీదారు)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-industrial-100 bg-industrial-900/60 p-2 sm:p-2.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Multiple Colours (Amber, Red, Orange, Clear)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-industrial-100 bg-industrial-900/60 p-2 sm:p-2.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Desi Sizes (1L, 5L Can, 200L Drum)</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-industrial-100 bg-industrial-900/60 p-2 sm:p-2.5 rounded-lg border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Daily Navata / Kranti / VRL Dispatch</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:scale-[1.01]"
              >
                <span>Explore Products (ఉత్పత్తులు)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppLink("Namaste Sri Durga Matha Varnish, I would like to get direct factory wholesale rates and product details.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-lg shadow-emerald-700/20 hover:shadow-emerald-600/30 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry (విచారణ)</span>
              </a>
            </div>

            {/* Verified Credentials Strip */}
            <div className="pt-5 border-t border-industrial-800/60 grid grid-cols-3 gap-2 sm:gap-4 text-left">
              <div className="p-2 sm:p-2.5 rounded-lg bg-industrial-900/50 border border-white/5">
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-400/90 font-semibold">Business</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate block">{COMPANY_INFO.businessType}</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-industrial-900/50 border border-white/5">
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-400/90 font-semibold">GST Registered</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate block">23-08-2018</span>
              </div>
              <div className="p-2 sm:p-2.5 rounded-lg bg-industrial-900/50 border border-white/5">
                <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-400/90 font-semibold">Location</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate block">Vijayawada, A.P.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Photographed Product Showcase */}
          <div className="lg:col-span-6 relative flex flex-col items-center w-full">
            {/* Soft Ambient Backlight */}
            <div
              className="absolute inset-0 max-w-[450px] max-h-[450px] m-auto rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-50"
              style={{ backgroundColor: activeModel.glowColor }}
            />

            {/* Product Model Showcase Stage */}
            <div className="w-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#151b27] via-[#111622] to-[#0d1119] border border-amber-500/25 p-4 sm:p-6 shadow-xl relative overflow-hidden">
              {/* Top Bar with Genuine Photo Badge */}
              <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-industrial-800/80">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: activeModel.hex }} />
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                    {activeModel.name}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold flex-shrink-0">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Real Photo</span>
                </div>
              </div>

              {/* Main Model Presentation Stage */}
              <div className="relative w-full h-[260px] sm:h-[340px] md:h-[370px] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-[#111722] via-[#0d121c] to-[#0a0e16] border border-white/5 flex items-center justify-center group shadow-inner">
                {/* Soft Radial Ambient Behind Product */}
                <div
                  className="absolute inset-0 m-auto w-40 h-40 rounded-full blur-2xl opacity-30 pointer-events-none transition-all duration-500"
                  style={{ backgroundColor: activeModel.hex }}
                />

                {/* Product Image */}
                <img
                  src={activeModel.image}
                  alt={activeModel.name}
                  key={activeModel.id}
                  className="relative z-10 w-full h-full object-contain p-2 sm:p-3 transition-all duration-500 group-hover:scale-105 select-none drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)]"
                  loading="eager"
                />

                {/* Floating Spec Badges */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-industrial-900/90 border border-amber-400/25 text-[11px] font-semibold text-amber-200 backdrop-blur-md shadow-md z-20">
                  {activeModel.badge}
                </div>

                <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-industrial-900/90 border border-emerald-500/25 text-[11px] font-semibold text-emerald-300 backdrop-blur-md flex items-center gap-1 shadow-md z-20">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>Factory Direct</span>
                </div>
              </div>

              {/* Model Subtitle and Description */}
              <div className="mt-3.5 p-3 rounded-xl bg-industrial-900/70 border border-white/5 flex items-center justify-between text-left gap-2">
                <div className="space-y-0.5 min-w-0">
                  <p className="text-xs font-bold text-white truncate">
                    {activeModel.subtitle}
                  </p>
                  <p className="text-[11px] text-amber-200/80 truncate">
                    {activeModel.highlight}
                  </p>
                </div>
                <a
                  href={createWhatsAppLink(`Hello Sri Durga Matha Varnish, I would like to order / enquire about ${activeModel.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all flex-shrink-0"
                  title="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </a>
              </div>

              {/* Model Switcher Selector Strip */}
              <div className="mt-3.5 pt-3 border-t border-industrial-800/70">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    Select Model View:
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-industrial-300 font-medium">
                    5 Real Variations
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                  {HERO_MODELS.map((model) => {
                    const isSelected = model.id === activeModelId;
                    return (
                      <button
                        key={model.id}
                        onClick={() => setActiveModelId(model.id)}
                        className={`group relative rounded-xl border p-1 transition-all overflow-hidden flex flex-col items-center text-center cursor-pointer ${
                          isSelected
                            ? 'bg-industrial-800 border-amber-400 shadow-md shadow-amber-500/20 ring-1 ring-amber-400/40 scale-102'
                            : 'bg-industrial-950/70 border-white/10 hover:border-amber-500/40 hover:bg-industrial-900/80'
                        }`}
                      >
                        <div className="w-full h-10 sm:h-12 rounded-lg overflow-hidden bg-industrial-950 flex items-center justify-center mb-1">
                          <img
                            src={model.image}
                            alt={model.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <span className={`text-[9px] sm:text-[10px] font-medium truncate w-full px-0.5 ${isSelected ? 'text-amber-300 font-semibold' : 'text-industrial-300 group-hover:text-white'}`}>
                          {model.id === 'lineup' ? 'Lineup' : model.id.replace('-', ' ')}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
