
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ChallengesSection } from '@/components/services/ChallengesSection';
import { ServicesShowcase } from '@/components/services/ServicesShowcase';
import { ServicesCta } from '@/components/services/ServicesCta';

const Services = () => {
  useScrollAnimation();
  const location = useLocation();
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
      <title>Professional AIoT Services | Alpha Bits</title>
      <meta name="description" content="Alpha Bits delivers expert technology services including CTO advisory, enterprise IoT solutions, and custom software development to transform your business operations." />
      <meta name="keywords" content="CTO Advisory, Enterprise IoT, Software Development, AIoT Services, Digital Transformation, Alpha Bits" />
      <meta property="og:title" content="Professional AIoT Services | Alpha Bits" />
      <meta property="og:description" content="Expert technology services including CTO advisory, enterprise IoT solutions, and custom software development to transform your business operations." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://alphabits.team/services" />
      <meta property="og:image" content="/images/office/office_5.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      
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
