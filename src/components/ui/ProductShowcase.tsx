import React, { useState } from 'react';
import { Info, Layers, Package, MessageCircle, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import type { ProductItem } from '../../types';
import { ProductModal } from './ProductModal';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';

export const ProductShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  return (
    <section id="products" className="py-16 sm:py-24 relative overflow-hidden bg-[#0c1018] border-t border-industrial-800/80">
      {/* Background calm ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>🇮🇳</span>
            <span>స్వదేశీ నాణ్యత • Industrial Product Range</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Our Insulating Varnish Products <span className="text-amber-400 font-semibold text-xl sm:text-2xl lg:text-3xl block sm:inline sm:ml-2">(ఉత్పత్తులు)</span>
          </h2>
          <p className="text-amber-100/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Direct wholesale supply from our Vijayawada manufacturing plant. Engineered for Indian motor rewinders, submersible pump makers, and transformer manufacturers with GST invoices and safe transport dispatch.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {PRODUCTS.map((prod) => {
            const isHovered = hoveredCardId === prod.id;

            return (
              <div
                key={prod.id}
                onMouseEnter={() => setHoveredCardId(prod.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-[#141a26] to-[#0f131d] border border-amber-500/20 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/10"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300">
                    {prod.badge}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/25">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Factory Direct</span>
                  </span>
                </div>

                {/* Real Product Photography Stage */}
                <div className={`my-2 h-48 sm:h-56 rounded-xl bg-gradient-to-b from-[#101520] via-[#0d111a] to-[#0a0d14] border p-2 overflow-hidden relative flex items-center justify-center transition-all duration-300 ${isHovered ? 'border-amber-400/40 shadow-inner' : 'border-white/5'}`}>
                  {/* Subtle warm backlight */}
                  <div className="absolute w-28 h-28 rounded-full bg-amber-500/10 blur-xl pointer-events-none" />

                  <img
                    src={prod.image}
                    alt={prod.imageAlt || prod.name}
                    className={`relative z-10 w-full h-full object-contain transition-transform duration-500 select-none drop-shadow-md ${isHovered ? 'scale-105' : 'scale-100'}`}
                    loading="lazy"
                  />
                  {/* Genuine Photo Tag */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] bg-industrial-900/90 text-amber-300 border border-amber-400/25 backdrop-blur-sm z-20 font-medium">
                    Genuine Photo
                  </div>
                </div>

                {/* Content Info */}
                <div className="space-y-2.5 mt-3 text-left flex-1">
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-amber-300 transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400/90 mt-0.5">
                      {prod.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-industrial-300 line-clamp-3 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Colours Strip */}
                  <div className="pt-1.5">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-300/80 font-bold block mb-1 flex items-center gap-1">
                      <Layers className="w-3 h-3 text-amber-400" />
                      Colours:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prod.colours.slice(0, 4).map((c, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-industrial-950 border border-white/5 text-[11px] text-industrial-200"
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full shadow-sm flex-shrink-0"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span>{c.name}</span>
                        </span>
                      ))}
                      {prod.colours.length > 4 && (
                        <span className="text-[10px] text-amber-300/80 self-center font-medium">
                          +{prod.colours.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Packaging Snippet */}
                  <div className="pt-1.5">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-300/80 font-bold block mb-0.5 flex items-center gap-1">
                      <Package className="w-3 h-3 text-amber-400" />
                      Packaging:
                    </span>
                    <p className="text-xs text-industrial-300">
                      {prod.packagingOptions.slice(0, 3).join(', ')}...
                    </p>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-5 pt-4 border-t border-industrial-800/80 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 text-amber-200 hover:text-white text-xs font-semibold transition-all shadow-sm"
                  >
                    <Info className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.product(prod.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md"
                    title={`Enquire about ${prod.name} on WhatsApp`}
                    aria-label={`Enquire about ${prod.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Technical Spec Notice */}
        <div className="mt-10 text-center text-xs text-industrial-400 bg-industrial-900/40 border border-white/5 rounded-xl p-3.5 max-w-2xl mx-auto backdrop-blur-sm">
          <p>
            <strong className="text-slate-200">Note:</strong> Technical specifications, test reports, and customized formulation properties are available upon request for industrial and manufacturing clients.
          </p>
        </div>
      </div>

      {/* Modal Dialog */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
