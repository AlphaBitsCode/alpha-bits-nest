
import { motion } from 'framer-motion';
import { Cpu, Users, ShieldAlert, CheckCircle2, LightbulbIcon, Database, Brain, ChevronRight, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  painPoints: string[];
  color: string;
  accentColor: string;
  illustration: string;
  challengeIcon: React.ReactNode;
  url: string;
}

export function ServicesShowcase() {
  const services: ServiceData[] = [
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
      ],
      painPoints: [
        'Product development efforts that stall or fail to deliver ROI',
        'Lack of in-house expertise to build connected solutions',
        'Integration challenges between hardware, software, and cloud systems',
        'Difficulty scaling prototypes to production-ready products'
      ],
      color: 'from-brand-teal/20 to-brand-blue/20',
      accentColor: 'bg-brand-teal',
      illustration: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop',
      challengeIcon: <Database className="w-8 h-8 text-brand-teal" />,
      url: '/services/aiot-product-development'
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
      ],
      painPoints: [
        'Unclear technology strategy preventing business growth',
        'Limited budget for a full-time senior technical leader',
        'Challenges aligning technology decisions with business objectives',
        'Difficulty hiring and managing technical talent'
      ],
      color: 'from-blue-300/20 to-purple-300/20',
      accentColor: 'bg-blue-500',
      illustration: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
      challengeIcon: <Brain className="w-8 h-8 text-brand-blue" />,
      url: '/services/cto-as-a-service'
    },
    {
      id: 'software-development',
      title: 'Enterprise Software Development',
      description: 'Leveraging 20+ years of hands-on development expertise to deliver cutting-edge software solutions that drive business growth in the AI era.',
      icon: <Code size={40} className="text-brand-blue mb-4" />,
      features: [
        'AI-powered enterprise applications',
        'Advanced data platform integration',
        'Cloud-native architecture design',
        'Scalable microservices development',
        'Real-time analytics systems'
      ],
      painPoints: [
        'Complex digital transformation challenges',
        'Need for AI integration in legacy systems',
        'Data silos limiting business intelligence',
        'Scalability and performance bottlenecks'
      ],
      color: 'from-brand-navy/20 to-brand-blue/20',
      accentColor: 'bg-brand-navy',
      illustration: 'https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=800&auto=format&fit=crop',
      challengeIcon: <Code className="w-8 h-8 text-brand-navy" />,
      url: '/services/software-development'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full mb-3">
            OUR SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
            Services Tailored to Your Needs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive services designed to address your specific technical and business challenges.
          </p>
        </motion.div>
        
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="flex flex-col md:flex-row items-center gap-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Illustration Part */}
              <div className={`w-full md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${service.color} opacity-70 blur-lg rounded-xl`}></div>
                  <div className="relative bg-white shadow-xl rounded-xl overflow-hidden">
                    <img 
                      src={service.illustration} 
                      alt={service.title}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <div className="flex items-center mb-3">
                        {service.challengeIcon}
                        <h3 className="text-xl text-white font-bold ml-3">Challenge</h3>
                      </div>
                      <ul className="space-y-2">
                        {service.painPoints.slice(0, 2).map((point, i) => (
                          <li key={i} className="flex items-start text-white/90">
                            <ShieldAlert size={16} className="text-gray-200 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Part */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center space-x-3 mb-4">
                  {service.icon}
                  <span className="text-brand-blue text-sm uppercase tracking-wider">Service</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100 shadow-sm">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <LightbulbIcon size={20} className="text-brand-teal mr-2" />
                    <span>Our Solution</span>
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 size={18} className="text-brand-teal mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  to={service.url}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-navy text-white font-medium hover:bg-brand-blue transition-colors"
                >
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
