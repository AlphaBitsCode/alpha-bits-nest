import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Cpu, 
  Users, 
  ChevronRight, 
  ShieldAlert, 
  CheckCircle2, 
  Rocket, 
  Brain, 
  LightbulbIcon, 
  Clock, 
  Database, 
  BarChart,
  FileText,
  DollarSign,
  LineChart,
  TrendingUp
} from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Services = () => {
  useScrollAnimation();
  const location = useLocation();
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    document.title = "Services | Alpha Bits";
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // If there's a hash in the URL, scroll to that section
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
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
    }
  ];

  const challengeGroups = [
    {
      title: "Technical Challenges",
      color: "bg-gradient-to-r from-gray-100 to-gray-200",
      icon: <Brain className="w-8 h-8 text-gray-700" />,
      challenges: [
        "Keeping up with rapidly evolving technologies",
        "Integrating complex systems across platforms",
        "Securing data and devices in connected environments"
      ]
    },
    {
      title: "Business Challenges",
      color: "bg-gradient-to-r from-slate-100 to-slate-200",
      icon: <BarChart className="w-8 h-8 text-gray-700" />,
      challenges: [
        "Adapting business models for digital transformation",
        "Balancing innovation costs with ROI expectations",
        "Navigating regulatory requirements across markets"
      ]
    },
    {
      title: "Operational Challenges",
      color: "bg-gradient-to-r from-stone-100 to-stone-200",
      icon: <Clock className="w-8 h-8 text-gray-700" />,
      challenges: [
        "Accelerating time-to-market for new products",
        "Managing technical debt while innovating",
        "Scaling solutions from prototype to production"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section with Fixed Curved Design */}
      <section className="relative pt-16 pb-24 bg-gradient-to-b from-brand-navy to-brand-blue text-white overflow-hidden">
        {/* Curved bottom edge with fixed image */}
        <div className="absolute bottom-0 left-0 w-full">
          <img 
            src="/lovable-uploads/1ff11976-eb1a-46b9-a334-d5dbcaa9d6d1.png" 
            alt="Wave divider" 
            className="w-full h-16 object-cover"
          />
        </div>

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
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full mb-3">
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expert Solutions for Your <span className="text-brand-teal">Digital Challenges</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Our specialized services help businesses innovate, adapt, and succeed in an increasingly digital world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <a href="#challenges">Explore Challenges</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="py-20 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
              CHALLENGES WE SOLVE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
              Transforming Challenges into Opportunities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand the obstacles you face on your innovation journey. Our services are designed to directly address these pain points.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {challengeGroups.map((group, index) => (
              <motion.div 
                key={index} 
                className={`rounded-xl p-6 shadow-lg ${group.color} backdrop-blur-sm border border-gray-200`}
                variants={itemVariants}
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{group.title}</h3>
                <ul className="space-y-3">
                  {group.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start">
                      <ShieldAlert size={18} className="text-gray-600 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 italic mb-8">
                "The biggest challenge is staying ahead of the technology curve while keeping costs down. Alpha Bits has been instrumental in helping us achieve this balance."
              </p>
              <div className="inline-flex items-center justify-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <img src="#" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Sarah Chua</p>
                  <p className="text-sm text-gray-600">CEO, SmartRetail, MY</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Illustrations */}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy to-brand-blue text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Rocket size={40} className="mx-auto mb-6 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Challenges?</h2>
            <p className="text-white/80 mb-8">
              Let's discuss how our services can help you overcome technical obstacles and drive innovation in your business.
            </p>
            <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8">
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
