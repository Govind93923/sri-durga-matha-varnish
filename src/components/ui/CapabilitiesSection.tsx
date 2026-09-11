import React from 'react';
import { Factory, Palette, PackageCheck, Truck, MessageCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';

export const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    {
      icon: Factory,
      title: "Insulating Varnish Manufacturing",
      description: "Dedicated facility manufacturing insulating varnish formulated for coil impregnation, winding insulation, and environmental protection in industrial electrical gear.",
      accent: "from-amber-500 to-amber-700",
      accentBorder: "group-hover:border-amber-500/50",
      accentText: "text-amber-400"
    },
    {
      icon: Palette,
      title: "Colour Variations",
      description: "Formulation capability providing varnish in Amber Golden, Ruby Red, Industrial Orange, Clear Transparent, and batch-specific custom colour requests.",
      accent: "from-rose-500 to-rose-700",
      accentBorder: "group-hover:border-rose-500/50",
      accentText: "text-rose-400"
    },
    {
      icon: PackageCheck,
      title: "Custom Packaging & Boxes",
      description: "Customized filling sizes from 500ml/1L workshop containers to 5L canisters, 20L drums, and custom-designed outer carton boxes.",
      accent: "from-amber-500 to-amber-600",
      accentBorder: "group-hover:border-amber-500/50",
      accentText: "text-amber-300"
    },
    {
      icon: Truck,
      title: "Direct Bulk Supply",
      description: "Direct dispatch from our Vijayawada manufacturing unit for bulk orders, wholesale distributors, motor winding service networks, and industrial manufacturing plants.",
      accent: "from-emerald-500 to-emerald-700",
      accentBorder: "group-hover:border-emerald-500/50",
      accentText: "text-emerald-400"
    }
  ];

  return (
    <section id="capabilities" className="py-16 sm:py-24 relative overflow-hidden bg-[#0d1118] border-t border-industrial-800/80">
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Factory className="w-4 h-4 text-amber-400" />
            <span>సామర్థ్యాలు • Facility Operations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Our Capabilities <span className="text-amber-400 font-semibold text-xl sm:text-2xl lg:text-3xl block sm:inline sm:ml-2">(మా తయారీ సామర్థ్యం)</span>
          </h2>
          <p className="text-amber-100/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Engineered around industrial requirements with dedicated in-house blending, pigment integration, and modular packaging logistics.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-gradient-to-b from-[#141a26] to-[#0e121a] border border-amber-500/20 p-5 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl shadow-md text-left"
              >
                {/* Icon Badge */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cap.accent} p-0.5 mb-5 shadow-md`}>
                  <div className="w-full h-full bg-industrial-950 rounded-[10px] flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${cap.accentText}`} />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs sm:text-sm text-industrial-300 leading-relaxed">
                  {cap.description}
                </p>

                <div className="mt-5 pt-4 border-t border-industrial-800/80 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs text-industrial-400 font-medium">
                    Manufacturing Standard
                  </span>
                  <a
                    href={createWhatsAppLink(`Hello Sri Durga Matha Varnish, I would like to enquire about your ${cap.title} capability.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bulk Enquiry Banner */}
        <div className="mt-10 sm:mt-12 rounded-2xl bg-gradient-to-r from-[#141a26] via-[#111622] to-[#141a26] border border-amber-500/25 p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 text-left shadow-lg">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-heading font-bold text-white">
              Planning a Regular Bulk Supply or Annual Contract?
            </h4>
            <p className="text-xs sm:text-sm text-industrial-300">
              Speak directly with our team to arrange regular scheduled deliveries and tailored master packaging.
            </p>
          </div>
          <a
            href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.bulk)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-heading font-bold shadow-md transition-all hover:scale-[1.01] w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Submit Bulk Enquiry</span>
          </a>
        </div>
      </div>
    </section>
  );
};
