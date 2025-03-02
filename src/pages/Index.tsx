
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
      title: 'Products',
      content: 'Smart, sustainable products for agriculture and education that solve real-world challenges.', 
      image: '/images/mushroom-box/mushroombox1.png' 
    },
    { 
      step: 'Services',
      title: 'Development Services',
      content: 'AIoT development and strategic technical leadership to guide your digital transformation journey.',
      image: '/images/office/office_3.jpg'
    },
    { 
      step: 'Experiences',
      title: 'AO Farm Experience',
      content: 'One-of-a-kind Digital Farm Labs allowing visits to learn and immerse in a new world of Precision Agriculture.',
      image: '/images/office/office_aofarm1.jpg'
    },
  ];
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <section className="py-20 bg-gray-50">
        <FeatureSteps 
          features={features}
          title="What We Offer"
          autoPlayInterval={4000}
          imageHeight="h-[400px]"
        />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
