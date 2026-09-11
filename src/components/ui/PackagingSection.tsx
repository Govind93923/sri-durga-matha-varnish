import React, { useState } from 'react';
import { Package, Box, Layers, MessageCircle, ShieldCheck, ArrowRight, Camera, Eye } from 'lucide-react';
import { PACKAGING_OPTIONS } from '../../data/products';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';

export const PackagingSection: React.FC = () => {
  const [activePackageId, setActivePackageId] = useState<string>(PACKAGING_OPTIONS[0].id);
  const [showSecondary, setShowSecondary] = useState<boolean>(false);

  const activePackage = PACKAGING_OPTIONS.find((p) => p.id === activePackageId) || PACKAGING_OPTIONS[0];

  const handleSelectPackage = (id: string) => {
    setActivePackageId(id);
    setShowSecondary(false);
  };

  const currentDisplayImage = showSecondary && activePackage.secondaryImage
    ? activePackage.secondaryImage
    : activePackage.image;

  return (
    <section id="packaging" className="py-16 sm:py-24 relative overflow-hidden bg-[#0d1118] border-t border-industrial-800/80">
      {/* Calm ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Box className="w-4 h-4" />
            <span>ప్యాకేజింగ్ • Industrial Packaging Solutions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Packaging That Fits Your Requirement <span className="text-amber-400 font-semibold text-xl sm:text-2xl lg:text-3xl block sm:inline sm:ml-2">(మీ అవసరానికి తగిన ప్యాకింగ్)</span>
          </h2>
          <p className="text-amber-100/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            From handy 1L bottles for electrical workshops to sturdy 5L canisters, 200L industrial steel drums, and in-house stitched heavy corrugated boxes built specifically for Indian transport conditions.
          </p>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-10 sm:mb-12">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#121722] border border-white/5 backdrop-blur-sm text-left shadow-md hover:border-amber-400/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center mb-3 shadow-sm">
              <Package className="w-4 h-4 text-amber-400" />
            </div>
            <h4 className="text-sm font-bold text-white font-heading">Custom Packaging</h4>
            <p className="text-xs text-industrial-300 mt-1 leading-relaxed">
              Bespoke container formats, custom labels, and tailored batch volume allocations.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#121722] border border-white/5 backdrop-blur-sm text-left shadow-md hover:border-amber-400/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center mb-3 shadow-sm">
              <Layers className="w-4 h-4 text-amber-400" />
            </div>
            <h4 className="text-sm font-bold text-white font-heading">Multiple Sizes</h4>
            <p className="text-xs text-industrial-300 mt-1 leading-relaxed">
              Readily available in 1L bottles, 5L canisters, and 200L bulk industrial drums.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#121722] border border-white/5 backdrop-blur-sm text-left shadow-md hover:border-amber-400/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center mb-3 shadow-sm">
              <Box className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-sm font-bold text-white font-heading">Bulk Requirements</h4>
            <p className="text-xs text-industrial-300 mt-1 leading-relaxed">
              Scalable factory dispatch directly supporting large OEM orders and distributor consignments.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#121722] border border-white/5 backdrop-blur-sm text-left shadow-md hover:border-amber-400/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center mb-3 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <h4 className="text-sm font-bold text-white font-heading">Custom Outer Boxes</h4>
            <p className="text-xs text-industrial-300 mt-1 leading-relaxed">
              In-house manufactured corrugated cartons designed for safe transport and stacking.
            </p>
          </div>
        </div>

        {/* Real Packaging Visualizer & Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-gradient-to-b from-[#141a26] to-[#0e121a] border border-amber-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-xl backdrop-blur-md">
          {/* Left Column: Real Packaging Model Explorer */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center w-full">
            <div className="w-full rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#111622] to-[#0a0d14] border border-white/5 p-3 sm:p-4 relative shadow-lg overflow-hidden group">
              {/* Image Viewport */}
              <div className="relative w-full h-[270px] sm:h-[380px] md:h-[420px] rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-b from-[#0f1420] to-[#080b12] border border-white/5 flex items-center justify-center">
                <img
                  src={currentDisplayImage}
                  alt={activePackage.title}
                  key={`${activePackage.id}-${showSecondary}`}
                  className="w-full h-full object-contain p-2 sm:p-3 transition-transform duration-500 group-hover:scale-105 select-none"
                  loading="lazy"
                />

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-industrial-900/90 border border-white/10 text-[11px] text-industrial-200 backdrop-blur-md flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="truncate max-w-[170px] sm:max-w-none">{activePackage.title}</span>
                </div>

                {/* Capacity Tag */}
                <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium backdrop-blur-md">
                  {activePackage.capacity}
                </div>

                {/* Secondary View Toggle Pill (if available) */}
                {activePackage.secondaryImage && (
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between p-2 rounded-xl bg-industrial-900/95 border border-white/10 backdrop-blur-md">
                    <span className="text-[11px] sm:text-xs text-industrial-300 flex items-center gap-1.5 pl-1 truncate">
                      <Camera className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span className="truncate">{showSecondary ? 'Factory Batch View' : 'Product Unit View'}</span>
                    </span>
                    <button
                      onClick={() => setShowSecondary(!showSecondary)}
                      className="px-2.5 py-1 rounded-lg bg-industrial-800 hover:bg-industrial-700 text-amber-300 text-xs font-medium border border-white/10 flex items-center gap-1 transition-colors flex-shrink-0"
                    >
                      <Eye className="w-3 h-3" />
                      <span>{showSecondary ? 'Unit View' : 'Factory View'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Packaging Options Selector */}
          <div className="lg:col-span-5 flex flex-col space-y-4 sm:space-y-5 text-left w-full">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-300/80">
                Choose Packaging Format
              </span>
              <div className="space-y-2">
                {PACKAGING_OPTIONS.map((pkg) => {
                  const isSelected = pkg.id === activePackageId;
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => handleSelectPackage(pkg.id)}
                      className={`w-full p-3 sm:p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-industrial-800 border-amber-400 shadow-md shadow-amber-500/15'
                          : 'bg-industrial-950/60 border-white/5 hover:bg-industrial-900 hover:border-amber-500/30'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs sm:text-sm font-semibold ${isSelected ? 'text-white' : 'text-industrial-200'}`}>
                            {pkg.title}
                          </span>
                          {pkg.badge && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-industrial-800 text-amber-300 border border-amber-500/25">
                              {pkg.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-industrial-400 block mt-0.5">
                          Capacity: {pkg.capacity}
                        </span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-amber-400 translate-x-0.5' : 'text-industrial-600'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Package Details Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-industrial-950/90 border border-white/5 space-y-2.5">
              <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                {activePackage.title} Specifications
              </h4>
              <p className="text-xs text-industrial-300 leading-relaxed">
                {activePackage.description}
              </p>
              <div className="pt-2 border-t border-industrial-800/70 space-y-1.5 text-xs text-industrial-400">
                <div>
                  <strong className="text-slate-200">Material:</strong> {activePackage.material}
                </div>
                <div>
                  <strong className="text-slate-200">Suitable For:</strong> {activePackage.suitableFor}
                </div>
              </div>
            </div>

            {/* Packaging CTA */}
            <div className="pt-1">
              <a
                href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.customPackaging)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-md shadow-emerald-950/30 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Packaging on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
