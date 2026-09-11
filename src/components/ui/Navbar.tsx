import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, createWhatsAppLink } from '../../data/company';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Colours', href: '#colours' },
    { label: 'Packaging', href: '#packaging' },
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Main Navbar Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-industrial-950/95 backdrop-blur-xl border-b border-amber-500/20 shadow-xl py-2 sm:py-2.5'
            : 'bg-industrial-950/85 backdrop-blur-md border-b border-white/5 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Logo & Brand with Durga Matha Emblem */}
            <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group text-left min-w-0">
              <div className="relative flex-shrink-0">
                {/* Radiant Divine Aura Glow */}
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-600 to-amber-400 blur-[4px] opacity-70 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/images/durga-matha-emblem.webp"
                  alt="Sri Durga Matha Logo"
                  className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-amber-400/90 shadow-md shadow-amber-950/40 group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-bold text-sm sm:text-base lg:text-lg tracking-tight text-white group-hover:text-amber-300 transition-colors truncate">
                    Sri Durga Matha
                  </span>
                  <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 font-semibold shadow-sm flex-shrink-0">
                    విజయవాడ
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] tracking-wider uppercase font-semibold text-amber-300/85 truncate">
                  Varnish And Colors • శ్రీ దుర్గా మాతా
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-0.5 bg-industrial-900/90 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1 text-xs font-medium text-industrial-200 hover:text-amber-300 hover:bg-amber-500/10 rounded-full transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-full hover:text-white transition-all shadow-sm"
                title={`Call ${COMPANY_INFO.phoneFormatted}`}
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{COMPANY_INFO.phoneFormatted}</span>
              </a>

              <a
                href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-xs font-bold shadow-md shadow-emerald-700/20 hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions: Phone Call + WhatsApp + Menu */}
            <div className="lg:hidden flex items-center gap-1.5">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="sm:hidden p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:text-white hover:bg-amber-500/20 transition-colors"
                aria-label={`Call ${COMPANY_INFO.phoneFormatted}`}
                title={`Call ${COMPANY_INFO.phoneFormatted}`}
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden p-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white shadow-sm transition-colors"
                aria-label="WhatsApp Enquiry"
                title="WhatsApp Enquiry"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-industrial-900 border border-industrial-800 text-industrial-200 hover:text-white focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-industrial-950/95 border-b border-industrial-800 backdrop-blur-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-industrial-200 hover:text-amber-300 hover:bg-industrial-900/80 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-industrial-800 flex flex-col gap-2.5">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-industrial-900 border border-amber-500/30 text-sm font-semibold text-amber-200 hover:bg-industrial-850"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY_INFO.phoneFormatted}</span>
              </a>
              <a
                href={createWhatsAppLink(COMPANY_INFO.whatsappTemplates.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
              <div className="flex items-center justify-center gap-2 text-[11px] text-industrial-400 mt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>GST Registered: {COMPANY_INFO.gstNumber}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
