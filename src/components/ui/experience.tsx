
import { useEffect, useRef } from 'react';
import { CalendarClock, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/lib/animations';

const Experience = () => {
  useScrollAnimation();
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sectionOffset = parallaxRef.current.offsetTop;
      const scrollDifference = scrollPosition - sectionOffset + 500;
      
      if (scrollDifference > 0) {
        const parallaxElements = parallaxRef.current.querySelectorAll('.parallax-element');
        parallaxElements.forEach((element: any) => {
          const speed = element.getAttribute('data-speed') || 0.2;
          element.style.transform = `translateY(${scrollDifference * speed}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden" ref={parallaxRef}>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div 
          className="parallax-element absolute top-10 left-10 w-64 h-64 rounded-full bg-brand-teal/10"
          data-speed="0.2"
        ></div>
        <div 
          className="parallax-element absolute bottom-20 right-20 w-80 h-80 rounded-full bg-brand-blue/10"
          data-speed="0.3"
        ></div>
        <div 
          className="parallax-element absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-brand-navy/10"
          data-speed="0.4"
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 scrolled-section">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-green/10 text-brand-green rounded-full mb-3">
            EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Decades of Industry Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team brings together diverse backgrounds in technology, agriculture, and business leadership to drive innovation.
          </p>
        </div>
        
        {/* AO Farm - Digital Farm Labs Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center scrolled-section mb-16">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden glassmorphism">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000&auto=format&fit=crop" 
                  alt="Digital Farm Tour" 
                  className="w-full h-auto rounded-lg transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">AO Farm - Digital Farm Labs</h3>
            <p className="text-gray-600 mb-6">
              Experience the future of agriculture through interactive tours and hands-on experiences at our digital farm laboratory.
            </p>
            
            <div className="mb-8 space-y-4">
              <div className="flex p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <CalendarClock size={24} className="text-brand-teal mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-navy">Guided Tours</h4>
                  <p className="text-sm text-gray-500">Available Monday-Friday, 9am-4pm. Tours last approximately 90 minutes.</p>
                </div>
              </div>
              
              <div className="flex p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <CalendarClock size={24} className="text-brand-teal mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-navy">Hands-On Workshops</h4>
                  <p className="text-sm text-gray-500">Weekend workshops for both beginners and advanced participants. Reservation required.</p>
                </div>
              </div>
              
              <div className="flex p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <CalendarClock size={24} className="text-brand-teal mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-brand-navy">Educational Programs</h4>
                  <p className="text-sm text-gray-500">Specialized programs for schools and educational institutions. Contact us for details.</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-brand-navy hover:bg-brand-navy/90 text-white font-medium rounded-lg transition-all duration-300"
              >
                Book a Tour
                <ArrowRight size={16} className="ml-2" />
              </a>
              <span className="ml-4 text-sm text-gray-500">
                Limited spots available
              </span>
            </div>
          </div>
        </div>
        
        <div className="scrolled-section">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Experience Highlights</h3>
              <p className="text-gray-600">Discover the unique features of our digital farm experience</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-brand-teal font-bold">01</span>
                </div>
                <h4 className="text-lg font-semibold text-brand-navy mb-2">Smart Greenhouse</h4>
                <p className="text-gray-600 text-sm">
                  Tour our IoT-enabled greenhouse with automated climate control and plant monitoring systems.
                </p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-brand-blue font-bold">02</span>
                </div>
                <h4 className="text-lg font-semibold text-brand-navy mb-2">Mushroom Lab</h4>
                <p className="text-gray-600 text-sm">
                  Learn about cutting-edge fungi cultivation techniques in our specialized mushroom laboratory.
                </p>
              </div>
              
              <div className="p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-brand-green font-bold">03</span>
                </div>
                <h4 className="text-lg font-semibold text-brand-navy mb-2">Data Center</h4>
                <p className="text-gray-600 text-sm">
                  Explore how we use data analytics and AI to optimize growing conditions and crop yields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
