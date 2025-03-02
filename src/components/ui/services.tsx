
import { Cpu, Users, Zap, Check } from 'lucide-react';
import { useScrollAnimation } from '@/lib/animations';

const Services = () => {
  useScrollAnimation();
  
  const services = [
    {
      icon: <Cpu size={40} className="text-brand-teal mb-6" />,
      title: 'AIoT Product Development',
      description: 'We combine AI and IoT technologies to create smart, connected products that solve real-world problems and drive business innovation.',
      features: [
        'Hardware prototype development',
        'Firmware and software integration',
        'Cloud connectivity and data analytics',
        'Scalable production planning',
        'User experience design'
      ]
    },
    {
      icon: <Users size={40} className="text-brand-teal mb-6" />,
      title: 'CTO-as-a-Service',
      description: 'Access top-tier technical leadership without the overhead. Our experienced CTOs guide your technology strategy, team building, and execution.',
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
    <section id="services" className="py-20 bg-brand-navy text-white relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Expert Solutions for Your Business
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our specialized services help businesses innovate, adapt, and succeed in an increasingly digital world.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 scrolled-section">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-[1.01]"
            >
              <div className="text-center md:text-left">
                {service.icon}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={20} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center scrolled-section">
          <div className="inline-block p-10 relative">
            <div className="relative z-10">
              <Zap size={30} className="text-brand-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Need a custom solution?</h3>
              <p className="text-white/70 mb-6 max-w-xl mx-auto">
                Our team of experts is ready to help you develop tailored solutions that meet your unique business requirements.
              </p>
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
