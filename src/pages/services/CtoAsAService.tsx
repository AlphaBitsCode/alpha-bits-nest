
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Users, Award } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';

const CtoAsAService = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "CTO-as-a-Service | Alpha Bits";
  }, []);

  const features = [
    'Technology roadmap development',
    'Technical team leadership',
    'Architecture and infrastructure planning',
    'Vendor selection and management',
    'Digital transformation strategy'
  ];
  
  const benefits = [
    {
      title: 'Reduced Overhead',
      description: 'Gain access to executive-level technical leadership without the full-time salary and benefits package.'
    },
    {
      title: 'Expertise On Demand',
      description: 'Draw from our diverse experience across industries and technologies as needed for your specific challenges.'
    },
    {
      title: 'Risk Mitigation',
      description: 'Leverage our proven methodologies and best practices to avoid costly technical mistakes.'
    },
    {
      title: 'Scalable Approach',
      description: 'Adjust our involvement based on your current needs and project phases.'
    },
    {
      title: 'Knowledge Transfer',
      description: 'We mentor your team and build internal capabilities that remain after our engagement.'
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
          
          {/* Abstract dots pattern */}
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${5 + Math.random() * 15}px`,
                height: `${5 + Math.random() * 15}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.1)',
                opacity: 0.1 + Math.random() * 0.3,
              }}
            ></div>
          ))}
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
                <Users size={30} className="text-brand-teal" />
                <span className="text-white/80 text-sm uppercase tracking-wider">Service</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                CTO-as-a-Service
              </h1>
              
              <p className="text-white/80 mb-8 text-lg">
                Access top-tier technical leadership without the overhead. Our experienced CTOs guide your technology strategy, team building, and execution to achieve your business objectives efficiently.
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
                Schedule a Consultation
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-teal to-brand-blue opacity-30 blur-lg rounded-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1000&auto=format&fit=crop"
                  alt="CTO as a Service"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="text-center">
                  <Award size={30} className="text-brand-teal mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Expert Leadership</h3>
                  <p className="text-white/70">
                    Benefit from our team's decades of combined experience leading technical teams and organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 scrolled-section">
            <h2 className="text-2xl font-bold mb-12 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-[1.01]"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center mb-4">
                    <span className="text-brand-teal font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-block max-w-2xl bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Ready to accelerate your technical leadership?</h3>
                <p className="text-white/80 mb-6">
                  Our CTO-as-a-Service offering is tailored to your specific needs and can scale with your business.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block px-8 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CtoAsAService;
