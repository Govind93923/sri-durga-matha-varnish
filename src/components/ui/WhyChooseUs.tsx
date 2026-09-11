import React from 'react';
import { Sliders, Box, Factory, Users, ShieldCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Sliders,
      title: "Product Flexibility",
      tag: "Colour & Formula",
      description: "Multiple colour options available including Amber, Red, Orange, Clear, and custom shades to match your component coding and inspection requirements.",
      color: "text-amber-400",
      border: "hover:border-amber-400/40"
    },
    {
      icon: Box,
      title: "Custom Packaging",
      tag: "Sizes & Boxes",
      description: "Packaging can be customized according to requirements. From 1L consumer bottles to 5L canisters, 20L drums, and branded carton packaging.",
      color: "text-amber-300",
      border: "hover:border-amber-400/40"
    },
    {
      icon: Factory,
      title: "Direct Manufacturer",
      tag: "No Intermediaries",
      description: "Connect directly with Chetan Surakasi and the manufacturing unit in Vijayawada, ensuring direct responsiveness, clear communication, and reliable production updates.",
      color: "text-emerald-400",
      border: "hover:border-emerald-400/40"
    },
    {
      icon: Users,
      title: "Customer-Focused Supply",
      tag: "Tailored Delivery",
      description: "Solutions designed around customer requirements. We work flexibly with motor rewinders, transformer makers, and regional dealers to meet real-world production schedules.",
      color: "text-amber-400",
      border: "hover:border-amber-400/40"
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 relative overflow-hidden bg-[#0c1018] border-t border-industrial-800/80">
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>ప్రత్యేకతలు • Operational Advantage</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Why Choose Sri Durga Matha <span className="text-amber-400 font-semibold text-xl sm:text-2xl lg:text-3xl block sm:inline sm:ml-2">(మా ప్రత్యేకతలు)</span>
          </h2>
          <p className="text-amber-100/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Factual advantages focused entirely on manufacturing flexibility, verified identity, and direct factory accessibility.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-gradient-to-b from-[#141a26] to-[#0e121a] border border-amber-500/20 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-lg text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-industrial-950 border border-white/5 flex items-center justify-center">
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${p.color}`} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-industrial-950 border border-white/5 text-industrial-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-industrial-400 block mb-1">
                    {p.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-industrial-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-industrial-800/80 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-[11px] text-industrial-400 font-medium">
                    Verified Factory Commitment
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
