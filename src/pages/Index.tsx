
import { useEffect } from 'react';
import Navigation from '@/components/ui/navigation';
import { Hero } from '@/components/ui/animated-hero';
import { FeatureSteps } from '@/components/ui/feature-section';
import Locations from '@/components/ui/locations';
import Contact from '@/components/ui/contact';
import Footer from '@/components/ui/footer';
import { useParallax } from '@/lib/animations';

const Index = () => {
  useParallax();
  
  useEffect(() => {
    // Smooth scroll to section when URL hash changes
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

    // Initial check for hash in URL
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const features = [
    { 
      step: 'Products',
      title: 'Smart Solutions',
      content: 'Smart, sustainable solutions for modern agriculture and education with our Mushroom-in-a-Box and Farm In Box products.', 
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
      step: 'Services',
      title: 'Expert Development',
      content: 'Expert AIoT product development and CTO-as-a-Service offerings to guide your business through digital transformation.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Experience',
      title: 'Industry Expertise',
      content: 'Decades of combined expertise in technology leadership, product development, and sustainable innovation.',
      image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=2070&auto=format&fit=crop'
    },
  ];
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <section className="py-20 bg-gray-50">
        <FeatureSteps 
          features={features}
          title="Our Core Pillars"
          autoPlayInterval={4000}
          imageHeight="h-[400px]"
        />
      </section>
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
