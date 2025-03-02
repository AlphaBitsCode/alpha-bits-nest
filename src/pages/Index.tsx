
import { useEffect } from 'react';
import Navigation from '@/components/ui/navigation';
import { Hero } from '@/components/ui/animated-hero';
import { FeatureSteps } from '@/components/ui/feature-section';
import Footer from '@/components/ui/footer';
import { useParallax } from '@/lib/animations';
import { AlertCircle, CheckCircle } from 'lucide-react';

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
      title: 'AIoT Products',
      content: 'Smart, sustainable products for Agriculture and Education that solve real-world challenges.', 
      image: '/images/farminbox/farminbox_box1.jpg' 
    },
    { 
      step: 'Services',
      title: 'AIoT Product Development',
      content: 'AIoT development and strategic technical leadership to guide your digital transformation journey.',
      image: '/images/office/office_2.jpg'
    },
    { 
      step: 'Experiences',
      title: 'AO Farm Experience',
      content: 'One-of-a-kind Digital Farm Labs allowing visits to learn and immerse in a new world of Precision Agriculture.',
      image: '/images/office/office_aofarm1.jpg'
    },
  ];

  const painPoints = [
    {
      problem: "Outdated technology restricting growth",
      solution: "Modern AIoT solutions that scale with your business"
    },
    {
      problem: "Lack of expertise to implement digital transformation",
      solution: "Expert CTO-level guidance without the full-time cost"
    },
    {
      problem: "Inefficient agricultural processes wasting resources",
      solution: "Smart farming solutions that optimize yield and reduce waste"
    },
    {
      problem: "Complex product development cycles causing delays",
      solution: "Streamlined development processes that bring products to market faster"
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Customer Pain Points Section */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Challenges We Solve</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Businesses face numerous obstacles in today's tech-driven world. 
              See how we address your most pressing challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-[1.01]">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.problem}</h3>
                    <div className="mt-4 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-1" />
                      <p className="text-white/80">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <a href="/services" className="inline-block px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300">
              See How We Can Help
            </a>
          </div>
        </div>
      </section>
      
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
