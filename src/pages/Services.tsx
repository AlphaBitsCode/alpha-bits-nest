
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Users, ChevronRight } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';

const Services = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "Services | Alpha Bits";
  }, []);
  
  const services = [
    {
      id: 'aiot-product-development',
      title: 'AIoT Product Development',
      description: 'We combine AI and IoT technologies to create smart, connected products that solve real-world problems and drive business innovation.',
      icon: <Cpu size={40} className="text-brand-teal mb-4" />,
      features: [
        'Hardware prototype development',
        'Firmware and software integration',
        'Cloud connectivity and data analytics',
        'Scalable production planning',
        'User experience design'
      ]
    },
    {
      id: 'cto-as-a-service',
      title: 'CTO-as-a-Service',
      description: 'Access top-tier technical leadership without the overhead. Our experienced CTOs guide your technology strategy, team building, and execution.',
      icon: <Users size={40} className="text-brand-teal mb-4" />,
      features: [
        'Technology roadmap development',
        'Technical team leadership',
        'Architecture and infrastructure planning',
        'Vendor selection and management',
        'Digital transformation strategy'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="py-24 flex-grow bg-brand-navy text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white to-transparent"></div>
          
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${5 + Math.random() * 10}px`,
                height: `${5 + Math.random() * 10}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 20px 2px rgba(255, 255, 255, 0.1)',
                opacity: 0.1 + Math.random() * 0.3,
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scrolled-section">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full mb-3">
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Expert Solutions for Your Business
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our specialized services help businesses innovate, adapt, and succeed in an increasingly digital world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 scrolled-section">
            {services.map((service, index) => (
              <Link 
                key={index} 
                to={`/services/${service.id}`}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-[1.01]"
              >
                <div className="text-center md:text-left">
                  {service.icon}
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight size={16} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="inline-flex items-center text-brand-teal group-hover:underline">
                    Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
