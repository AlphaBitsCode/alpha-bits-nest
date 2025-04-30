
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import { Hero } from '@/components/ui/animated-hero';
import { CTOOfficeHours } from '@/components/ui/cto-office-hours';
import { CTOChallenges } from '@/components/ui/cto-challenges';
import { FeatureSteps } from '@/components/ui/feature-section';
import { ProductsServicesGrid } from '@/components/ui/products-services-grid';
import Footer from '@/components/ui/footer';
import { useParallax } from '@/lib/animations';
import { Briefcase, Users, Package, BookOpen, Home, Factory, Trees } from 'lucide-react';

const Index = () => {
  useParallax();
  const location = useLocation();
  
  useEffect(() => {
    // Handle hash navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const features = [
    { 
      step: 'Strategic Leadership',
      title: 'Fractional CTO',
      content: 'Access top-tier technical leadership on a part-time basis, providing strategic guidance and technology roadmap development.', 
      image: '/images/office/office_5.jpg' 
    },
    { 
      step: 'Platform Integration',
      title: 'AI & IoT Platform Integrations',
      content: 'Seamless integration of AI and IoT technologies to transform your business operations and drive innovation.', 
      image: '/images/aiot/digitalfactory_1.jpg' 
    },
    { 
      step: 'Data Solutions',
      title: 'Custom Data Platform Development',
      content: 'Build scalable, secure data platforms tailored to your business needs for better insights and decision-making.',
      image: '/images/office/office_2.jpg'
    }
  ];

  const painPoints = [
    {
      problem: "Not sure which business tools and systems to invest in",
      solution: "Smart planning to choose tools that help your business grow"
    },
    {
      problem: "Worried about making expensive technology mistakes",
      solution: "Expert advice to make safe, future-proof technology choices"
    },
    {
      problem: "Unsure if your business can handle more customers and growth",
      solution: "Clear steps to build systems that grow with your business"
    },
    {
      problem: "Finding it hard to choose between different technology vendors",
      solution: "Trusted guidance to pick the right business solutions"
    },
    {
      problem: "Concerned about keeping your business data safe and compliant",
      solution: "Professional help to protect your business and follow regulations"
    },
    {
      problem: "Need help making smart technology decisions for your business",
      solution: "Expert support to guide your technology strategy"
    }
  ];
  
  const highlightedItems = [
    {
      type: 'service' as const,
      title: 'Enterprise IoT',
      description: 'Complete IoT solutions for smart buildings and industrial automation, from prototyping to deployment.',
      icon: <Factory className="h-8 w-8 text-brand-blue" />,
      image: '/images/aiot/digitalfactory_1.jpg',
      color: 'from-brand-blue/20 to-brand-navy/10',
      url: '/services'
    },
    {
      type: 'service' as const,
      title: 'AI & Software',
      description: 'Custom software development and AI solutions for business automation and growth.',
      icon: <Package className="h-8 w-8 text-brand-teal" />,
      image: '/images/office/office_2.jpg',
      color: 'from-brand-teal/20 to-brand-navy/10',
      url: '/services/software-development'
    },
    {
      type: 'service' as const,
      title: 'CTO Advisory',
      description: 'Expert technical leadership and strategic guidance for your digital transformation journey.',
      icon: <Users className="h-8 w-8 text-brand-blue" />,
      image: '/images/office/office_5.jpg',
      color: 'from-brand-blue/20 to-brand-navy/10',
      url: '/services/cto-as-a-service'
    },
    {
      type: 'product' as const,
      title: 'Education Solutions',
      description: 'Innovative STEM and AgriTech educational products for hands-on learning experiences.',
      icon: <BookOpen className="h-8 w-8 text-brand-green" />,
      image: '/images/farminbox/farminbox_box1.jpg',
      color: 'from-brand-green/20 to-brand-navy/10',
      url: '/products'
    }
  ];
  
  return (
    <div className="min-h-screen">
        <title>Alpha Bits | Innovative AIoT Solutions for Business Transformation</title>
        <meta name="description" content="Alpha Bits helps businesses leverage AI and IoT technologies with innovative solutions for digital transformation, including CTO advisory, enterprise IoT, and custom software development." />
        <meta name="keywords" content="AIoT, Alpha Bits, IoT Solutions, Digital Transformation, CTO Advisory, Business Technology, AI Solutions" />
        <meta property="og:title" content="Alpha Bits | Innovative AIoT Solutions" />
        <meta property="og:description" content="Transform your business with AI and IoT technologies. Alpha Bits provides expert CTO advisory and custom technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphabits.team" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      
      {/* Google Translate Element - Hidden but functional */}
      <div id="google_translate_element" className="fixed top-0 left-0 opacity-0 pointer-events-none"></div>
      
      <Navbar1 />
      <Hero />
      
      <CTOChallenges painPoints={painPoints} />
      
      <CTOOfficeHours />
      
      <section className="py-20 bg-gray-50">
        <FeatureSteps 
          features={features}
          title="How We Help Businesses"
          autoPlayInterval={4000}
          imageHeight="h-[400px]"
        />
      </section>
      
      <ProductsServicesGrid items={highlightedItems} />
      
      <Footer />
    </div>
  );
};

export default Index;
