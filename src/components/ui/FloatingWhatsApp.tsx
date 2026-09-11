import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 select-none">
      {/* Tooltip bubble - hidden on small mobile to avoid blocking content, visible on sm+ */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-2xl bg-industrial-900 border border-emerald-500/40 text-xs text-white shadow-2xl backdrop-blur-lg animate-in fade-in slide-in-from-bottom-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-medium">Need Varnish or Packaging? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-industrial-400 hover:text-white p-0.5 rounded-full transition-colors ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <a
        href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.general)}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white shadow-2xl shadow-emerald-950/60 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label={`Chat with Sri Durga Matha on WhatsApp (${COMPANY_INFO.phoneFormatted})`}
        title={`Chat with Sri Durga Matha on WhatsApp (${COMPANY_INFO.phoneFormatted})`}
      >
        {/* Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20 transition-transform group-hover:rotate-12" />

        {/* Small Active Green Dot */}
        <span className="absolute top-1 right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-400 border-2 border-industrial-950 rounded-full" />
      </a>
    </div>
  );
};
