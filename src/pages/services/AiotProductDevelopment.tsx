
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Cpu, Zap } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';

const AiotProductDevelopment = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "AIoT Product Development | Alpha Bits";
  }, []);

  const features = [
    'Hardware prototype development',
    'Firmware and software integration',
    'Cloud connectivity and data analytics',
    'Scalable production planning',
    'User experience design'
  ];
  
  const processSteps = [
    {
      title: 'Discovery & Requirements',
      description: 'We work closely with your team to understand your business needs, market opportunities, and technical requirements.'
    },
    {
      title: 'Concept & Design',
      description: 'Our expert designers and engineers develop initial concepts and technical specifications for your AIoT product.'
    },
    {
      title: 'Prototype Development',
      description: 'We build functional prototypes to test and validate the core functionality and user experience.'
    },
    {
      title: 'Testing & Refinement',
      description: 'Rigorous testing with real users helps us refine the product before moving to production.'
    },
    {
      title: 'Production & Deployment',
      description: 'We guide you through the production process and help with deployment and ongoing support.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="py-24 flex-grow bg-gradient-to-b from-brand-navy to-brand-blue text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
          
          {/* Circuit board pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M100 0 L100 100 L0 100" fill="none" stroke="white" strokeWidth="0.5"></path>
              <circle cx="50" cy="50" r="3" fill="white"></circle>
              <circle cx="0" cy="0" r="2" fill="white"></circle>
              <circle cx="100" cy="0" r="2" fill="white"></circle>
              <circle cx="0" cy="100" r="2" fill="white"></circle>
              <circle cx="100" cy="100" r="2" fill="white"></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)"></rect>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Link to="/services" className="inline-flex items-center text-white hover:text-brand-teal transition-colors duration-300">
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center scrolled-section">
            <div>
              <div className="inline-flex items-center space-x-3 mb-4">
                <Cpu size={30} className="text-brand-teal" />
                <span className="text-white/80 text-sm uppercase tracking-wider">Service</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                AIoT Product Development
              </h1>
              
              <p className="text-white/80 mb-8 text-lg">
                We combine AI and IoT technologies to create smart, connected products that solve real-world problems and drive business innovation. Our expert team guides you through the entire development process from concept to production.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={20} className="text-brand-teal mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-block px-8 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Discuss Your Project
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-teal to-brand-blue opacity-30 blur-lg rounded-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <img 
                  src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=1000&auto=format&fit=crop"
                  alt="AIoT Product Development"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="text-center">
                  <Zap size={30} className="text-brand-teal mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Accelerate Your Innovation</h3>
                  <p className="text-white/70">
                    Our proven development process helps you bring your AIoT product to market faster and with greater confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 scrolled-section">
            <h2 className="text-2xl font-bold mb-12 text-center">Our Development Process</h2>
            <div className="relative">
              {/* Process connection line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/20 transform -translate-x-1/2 hidden md:block"></div>
              
              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                    <div className="md:w-1/2 flex justify-center">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-full max-w-sm">
                        <span className="inline-block w-10 h-10 rounded-full bg-brand-teal text-white font-bold flex items-center justify-center mb-4">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-white/70">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Center dot for the timeline */}
                    <div className="absolute left-1/2 w-5 h-5 bg-brand-teal rounded-full transform -translate-x-1/2 hidden md:block z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AiotProductDevelopment;
