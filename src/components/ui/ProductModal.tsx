import React from 'react';
import { X, MessageCircle, Check, Package, Palette, ShieldAlert, Phone } from 'lucide-react';
import type { ProductItem } from '../../types';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-industrial-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-industrial-900 border border-industrial-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-industrial-800 hover:bg-industrial-700 text-industrial-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Title and Image Preview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pr-8">
          <div className="md:col-span-8 space-y-2">
            {product.badge && (
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-varnish-amber/20 text-amber-300 border border-varnish-amber/30">
                {product.badge}
              </span>
            )}
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              {product.name}
            </h2>
            <p className="text-sm font-medium text-varnish-amber-light">
              {product.subtitle}
            </p>
            <div className="pt-2 text-xs text-industrial-300 leading-relaxed">
              <p>{product.description}</p>
              <p className="italic text-industrial-400 font-normal mt-1">{product.tagline}</p>
            </div>
          </div>

          {/* Real Product Model Photo in Modal */}
          <div className="md:col-span-4 flex items-center justify-center">
            <div className="w-full h-48 sm:h-56 rounded-xl bg-industrial-950/90 border border-industrial-800 p-2 relative overflow-hidden flex items-center justify-center shadow-inner">
              <img
                src={product.image}
                alt={product.imageAlt || product.name}
                className="w-full h-full object-contain select-none"
              />
              <span className="absolute bottom-2 right-2 text-[10px] px-2 py-0.5 rounded bg-industrial-900/90 border border-industrial-700 text-industrial-400">
                Factory Photo
              </span>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mt-6">
          <h4 className="text-xs uppercase tracking-wider font-semibold text-industrial-400 mb-3 flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400" />
            Typical Industrial Applications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.applications.map((app, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2 rounded-lg bg-industrial-850 border border-industrial-800 text-xs text-industrial-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Colours & Packaging in 2 columns */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-industrial-800 pt-5">
          {/* Colours */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-industrial-400 mb-3 flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-varnish-amber" />
              Available Colours
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.colours.map((col, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-industrial-850 border border-industrial-800 text-xs text-industrial-300"
                >
                  <span
                    className="w-3 h-3 rounded-full border border-white/30"
                    style={{ backgroundColor: col.hex }}
                  />
                  <span>{col.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Packaging Options */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-industrial-400 mb-3 flex items-center gap-1.5">
              <Package className="w-4 h-4 text-sky-400" />
              Packaging Options
            </h4>
            <ul className="space-y-1.5 text-xs text-industrial-300">
              {product.packagingOptions.map((pkg, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-industrial-500">•</span>
                  <span>{pkg}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Strict Technical Specifications Note */}
        <div className="mt-6 p-3.5 rounded-xl bg-industrial-950 border border-industrial-800 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-industrial-300">
            <span className="font-semibold text-white">Technical Information: </span>
            {product.technicalInfo} Contact our team directly with your specific electrical and application standards.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-industrial-800">
          <a
            href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.product(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-sm shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-industrial-800 hover:bg-industrial-750 text-amber-200 border border-amber-500/30 font-heading font-semibold text-sm transition-all"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call {COMPANY_INFO.phoneFormatted}</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-industrial-950 hover:bg-industrial-850 text-industrial-400 hover:text-white text-sm font-medium border border-industrial-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
