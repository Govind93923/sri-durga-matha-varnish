import { IndianTopRibbon } from './components/ui/IndianTopRibbon';
import { Navbar } from './components/ui/Navbar';
import { HeroSection } from './components/ui/HeroSection';
import { IndianTrustStrip } from './components/ui/IndianTrustStrip';
import { ProductShowcase } from './components/ui/ProductShowcase';
import { ColorShowcase } from './components/ui/ColorShowcase';
import { PackagingSection } from './components/ui/PackagingSection';
import { AboutSection } from './components/ui/AboutSection';
import { CapabilitiesSection } from './components/ui/CapabilitiesSection';
import { WhyChooseUs } from './components/ui/WhyChooseUs';
import { IndustrialRequirements } from './components/ui/IndustrialRequirements';
import { ContactSection } from './components/ui/ContactSection';
import { FinalCTA } from './components/ui/FinalCTA';
import { Footer } from './components/ui/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';

export function App() {
  return (
    <div className="relative min-h-screen bg-industrial-950 text-slate-100 flex flex-col selection:bg-amber-500 selection:text-black">
      {/* Top Sacred & Desi Auspicious Ribbon */}
      <IndianTopRibbon />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Product Journey */}
      <main className="flex-1">
        <HeroSection />
        <IndianTrustStrip />
        <ProductShowcase />
        <ColorShowcase />
        <PackagingSection />
        <AboutSection />
        <CapabilitiesSection />
        <WhyChooseUs />
        <IndustrialRequirements />
        <ContactSection />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
