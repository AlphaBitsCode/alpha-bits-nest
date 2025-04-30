
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ChallengesSection } from '@/components/services/ChallengesSection';
import { ServicesShowcase } from '@/components/services/ServicesShowcase';
import { ServicesCta } from '@/components/services/ServicesCta';
import { Helmet } from "react-helmet";

const Services = () => {
  useScrollAnimation();
  const location = useLocation();
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    document.title = "Services | Alpha Bits";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // If there's a hash in the URL, scroll to that section
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar1 />
      <ServicesHero />
      <ChallengesSection />
      <ServicesShowcase />
      <ServicesCta />
      <Footer />
    </div>
  );
};

export default Services;
