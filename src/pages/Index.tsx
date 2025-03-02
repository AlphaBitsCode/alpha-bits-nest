
import { useEffect } from 'react';
import Navigation from '@/components/ui/navigation';
import { Hero } from '@/components/ui/animated-hero';
import { FeatureSteps } from '@/components/ui/feature-section';
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
      title: 'Innovative Solutions',
      content: 'Smart agricultural & educational products. Our Mushroom-in-a-Box and Farm In Box bring sustainable tech to homes and schools.', 
      image: '/images/office/office_aofarm1.jpg' 
    },
    { 
      step: 'Services',
      title: 'Technical Leadership',
      content: 'Expert AIoT development and CTO-as-a-Service. We guide your business through digital transformation with practical solutions.',
      image: '/images/office/office_3.jpg'
    },
    { 
      step: 'Experience',
      title: 'Proven Expertise',
      content: 'Decades of combined experience in technology, product innovation, and sustainable solutions across multiple industries.',
      image: '/images/office/office_2.jpg'
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
      <Footer />
    </div>
  );
};

export default Index;
