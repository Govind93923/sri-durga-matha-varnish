import { Cpu, Zap, RotateCcw, Wrench, MessageCircle, ArrowRight } from 'lucide-react';
import { createWhatsAppLink } from '../../data/company';

export const IndustrialRequirements: React.FC = () => {
  const categories = [
    {
      icon: RotateCcw,
      title: "Motor Manufacturers & Rewinders",
      description: "Insulating coatings for stator, rotor, and armature windings providing protection against vibration and moisture ingress."
    },
    {
      icon: Zap,
      title: "Transformer Manufacturers",
      description: "Coating solutions for transformer coil stacks, core laminations, and general electrical winding impregnation."
    },
    {
      icon: Cpu,
      title: "Electrical Component Makers",
      description: "Coating formulations for relays, solenoids, chokes, and specialized electrical assemblies requiring clear or colored identification."
    },
    {
      icon: Wrench,
      title: "Distributors, Dealers & Bulk Buyers",
      description: "Wholesale distribution supply with custom outer box branding, flexible pack sizing, and consistent batch dispatch."
    }
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#0d1118] border-t border-industrial-800/80">
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>పరిశ్రమలు • Industrial Sectors We Serve</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Industrial Requirements <span className="text-amber-400 font-semibold text-xl sm:text-2xl lg:text-3xl block sm:inline sm:ml-2">(వివిధ పారిశ్రామిక రంగాలు)</span>
          </h2>
          <p className="text-amber-100/80 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
            Speak with our team about your specific insulating varnish requirement. We cater to diverse workshop, OEM, and dealer demands across the region.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#141a26] to-[#0e121a] border border-amber-500/20 text-left space-y-2.5 transition-all hover:border-amber-400/40 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-heading font-bold text-white">
                  {cat.title}
                </h3>
                <p className="text-xs text-industrial-200 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Centered CTA */}
        <div className="text-center px-2">
          <a
            href={createWhatsAppLink("Hello Sri Durga Matha Varnish, I would like to discuss our industrial insulating varnish requirement.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-heading font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-[1.01] transition-all w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discuss Your Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
