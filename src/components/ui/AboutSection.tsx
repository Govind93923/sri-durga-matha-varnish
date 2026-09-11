import React from 'react';
import { Building2, Calendar, FileText, MapPin, User, CheckCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-[#0c1018] border-t border-industrial-800/80">
      {/* Calm ambient background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span>🇮🇳</span>
              <span>మా గురించి • Indian Manufacturing Business</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
              Built Around Trust, Quality & Indian Industrial Values <span className="text-amber-400 font-semibold text-xl sm:text-2xl lg:text-3xl block mt-1">(విశ్వసనీయత మరియు నాణ్యత)</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-industrial-200 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                <strong className="text-white">నమస్తే! Sri Durga Matha Varnish And Colors</strong> is a dedicated Indian manufacturing business founded by <strong className="text-amber-300">Chetan Surakasi</strong> in Vijayawada, Andhra Pradesh.
              </p>
              <p>
                We specialize in manufacturing high-performance synthetic insulating varnish in multiple colour options (Amber Golden, Ruby Red, Industrial Orange, Clear Transparent) alongside customized container sizes and in-house stitched corrugated boxes.
              </p>
              <p>
                As a GST-registered enterprise operating since 2018, we take pride in serving hundreds of motor rewinding workshops, submersible pump manufacturers, transformer repair facilities, and electrical dealers across South India with direct factory wholesale supply and dependable transport dispatch.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="pt-1 space-y-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-industrial-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Verified manufacturing facility registered under GST since 2018</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-industrial-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Dedicated support for custom color shades and packaging configurations</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-industrial-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Direct factory communication with no middle-tier broker markups</span>
              </div>
            </div>
          </div>

          {/* Right Column: Elegant Glass Information Credentials Panel */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#141a26] to-[#0e121a] border border-amber-500/20 p-4 sm:p-7 backdrop-blur-xl shadow-xl relative overflow-hidden">
              {/* Top border sheen */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400/40 via-amber-300/80 to-amber-400/40" />

              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-industrial-800/80">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative flex-shrink-0">
                    <img
                      src="/images/durga-matha-emblem.webp"
                      alt="Maa Durga Matha Emblem"
                      className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-amber-400 shadow-md"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-heading font-bold text-white truncate">
                      Official Business Credentials
                    </h3>
                    <p className="text-[11px] text-amber-300/80 font-medium truncate">
                      Government Tax Registered Manufacturing Enterprise
                    </p>
                  </div>
                </div>
                <div className="p-1.5 sm:p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* Verified Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 py-4 sm:py-5">
                <div className="p-3 sm:p-3.5 rounded-xl bg-industrial-950/70 border border-white/5">
                  <div className="flex items-center gap-1.5 text-industrial-400 text-xs mb-1">
                    <FileText className="w-3.5 h-3.5 text-amber-400" />
                    <span className="uppercase tracking-wider text-[10px]">GST Number</span>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-white block truncate">
                    {COMPANY_INFO.gstNumber}
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-industrial-950/70 border border-white/5">
                  <div className="flex items-center gap-1.5 text-industrial-400 text-xs mb-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span className="uppercase tracking-wider text-[10px]">Registration Date</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white block truncate">
                    {COMPANY_INFO.establishedDate}
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-industrial-950/70 border border-white/5">
                  <div className="flex items-center gap-1.5 text-industrial-400 text-xs mb-1">
                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                    <span className="uppercase tracking-wider text-[10px]">Business Structure</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white block truncate">
                    {COMPANY_INFO.businessType}
                  </span>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-industrial-950/70 border border-white/5">
                  <div className="flex items-center gap-1.5 text-industrial-400 text-xs mb-1">
                    <User className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="uppercase tracking-wider text-[10px]">Proprietor</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white block truncate">
                    {COMPANY_INFO.proprietor}
                  </span>
                </div>
              </div>

              {/* Location & Turnover Strip */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-industrial-950/70 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-left">
                <div className="flex items-center gap-2 text-xs text-industrial-200">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="truncate">
                    <strong>Location:</strong> Vijayawada, Andhra Pradesh – 520012
                  </span>
                </div>
                <div className="text-xs text-industrial-400 flex-shrink-0">
                  Turnover: <strong className="text-slate-200">{COMPANY_INFO.annualTurnover}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Facility & In-House Infrastructure Photo Gallery */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-industrial-850/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 block mb-1">
                Manufacturing Unit Insights
              </span>
              <h3 className="text-xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                Our Workshop & Packaging Infrastructure
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-industrial-400 max-w-md mt-1.5 sm:mt-0">
              Direct glimpses from our Vijayawada facility showcasing carton fabrication, industrial cutting machinery, and bulk varnish storage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {/* Facility Photo 1: Stitching */}
            <div className="group relative rounded-2xl overflow-hidden bg-industrial-900/80 border border-white/5 hover:border-amber-400/40 transition-all duration-300">
              <div className="h-44 sm:h-48 overflow-hidden">
                <img
                  src="/images/facility/facility-stitching.webp"
                  alt="Industrial Box Stitching Machinery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 text-left">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-semibold">
                  In-House Machinery
                </span>
                <h4 className="text-xs sm:text-sm font-heading font-bold text-white mt-0.5">
                  Box Stitching Plant
                </h4>
                <p className="text-xs text-industrial-400 mt-0.5">
                  Heavy-duty wire stapling & carton box assembly workstation.
                </p>
              </div>
            </div>

            {/* Facility Photo 2: Scoring */}
            <div className="group relative rounded-2xl overflow-hidden bg-industrial-900/80 border border-white/5 hover:border-amber-400/40 transition-all duration-300">
              <div className="h-44 sm:h-48 overflow-hidden">
                <img
                  src="/images/facility/facility-scoring.webp"
                  alt="Cardboard Scoring & Rotary Cutting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 text-left">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-300 font-semibold">
                  Carton Production
                </span>
                <h4 className="text-xs sm:text-sm font-heading font-bold text-white mt-0.5">
                  Rotary Scoring Machine
                </h4>
                <p className="text-xs text-industrial-400 mt-0.5">
                  Precision corrugated board creasing for custom size cartons.
                </p>
              </div>
            </div>

            {/* Facility Photo 3: Box Craft */}
            <div className="group relative rounded-2xl overflow-hidden bg-industrial-900/80 border border-white/5 hover:border-amber-400/40 transition-all duration-300">
              <div className="h-44 sm:h-48 overflow-hidden">
                <img
                  src="/images/packaging/pkg-custom-box.webp"
                  alt="Custom Corrugated Packaging Assembly"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 text-left">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-semibold">
                  Custom Orders
                </span>
                <h4 className="text-xs sm:text-sm font-heading font-bold text-white mt-0.5">
                  Bespoke Box Fabrication
                </h4>
                <p className="text-xs text-industrial-400 mt-0.5">
                  Tailored shipper boxes built specifically for varnish transit.
                </p>
              </div>
            </div>

            {/* Facility Photo 4: Bulk Drums */}
            <div className="group relative rounded-2xl overflow-hidden bg-industrial-900/80 border border-white/5 hover:border-emerald-400/40 transition-all duration-300">
              <div className="h-44 sm:h-48 overflow-hidden">
                <img
                  src="/images/facility/facility-bulk-drums.webp"
                  alt="Bulk Industrial Varnish Drums"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3.5 text-left">
                <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-semibold">
                  Bulk Capacity
                </span>
                <h4 className="text-xs sm:text-sm font-heading font-bold text-white mt-0.5">
                  Bulk Drum Dispensing
                </h4>
                <p className="text-xs text-industrial-400 mt-0.5">
                  200L industrial steel drums for high-volume electrical OEM supply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
