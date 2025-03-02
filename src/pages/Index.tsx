
import { useEffect } from 'react';
import Navigation from '@/components/ui/navigation';
import Hero from '@/components/ui/hero';
import Products from '@/components/ui/products';
import Services from '@/components/ui/services';
import Experience from '@/components/ui/experience';
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
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <Services />
      <Experience />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
