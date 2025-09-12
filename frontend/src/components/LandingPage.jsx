import React, { useEffect } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import TrustSection from "./TrustSection";
import PricingSection from "./PricingSection";
import ClientsSection from "./ClientsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const LandingPage = () => {
  useEffect(() => {
    // Load Wistia player script
    const script = document.createElement('script');
    script.src = 'https://fast.wistia.com/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script if needed
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="landing-page" style={{ background: 'var(--bg-primary)' }}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TrustSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;