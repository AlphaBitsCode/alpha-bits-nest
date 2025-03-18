
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Cpu, Zap, CheckCircle2, LightbulbIcon, Database, Cloud } from 'lucide-react';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FeatureSteps } from '@/components/ui/feature-section';

const AiotProductDevelopment = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "AIoT Product Development | Alpha Bits";
  }, []);

  const features = [
    'Data-driven hardware prototyping with real-time performance metrics',
    'Analytics-powered firmware and software optimization',
    'Advanced data collection and cloud analytics integration',
    'Metric-based scalability and production planning',
    'User behavior analytics and experience optimization'
  ];
  
  const processSteps = [
    {
      step: "Vision & Strategy",
      title: "Step 1: Vision",
      content: "We analyze market data and industry trends to align your business goals with quantifiable opportunities, creating strategies backed by concrete metrics.",
      image: "/images/aiot/digitalfactory_1.jpg"
    },
    {
      step: "Value Creation",
      title: "Step 2: Value Creation",
      content: "Using predictive analytics and market insights, we transform your vision into measurable value propositions with clear KPIs and ROI targets.",
      image: "/images/aiot/digitalfarm_aofarm1.png"
    },
    {
      step: "Rapid Innovation",
      title: "Step 3: Innovation",
      content: "We develop data-driven prototypes that demonstrate measurable value, using real-time analytics to validate features and performance metrics.",
      image: "/images/aiot/aoit-inhouse-project-1.webp"
    },
    {
      step: "Market Validation",
      title: "Step 4: Validation",
      content: "Through comprehensive data collection and analysis, we validate product-market fit with quantifiable user feedback and performance benchmarks.",
      image: "/images/aiot/energytwin_ss1.jpg"
    },
    {
      step: "Scale & Growth",
      title: "Step 5: Growth",
      content: "Leveraging advanced analytics, we help scale your product while continuously monitoring and optimizing key performance indicators for sustained growth.",
      image: "/images/aiot/digitalfactory_1.jpg"
    }
  ];

  const useCases = [
    {
      title: "Smart Home & Building Automation",
      description: "Create connected environments that improve comfort, security, and energy efficiency.",
      icon: <Cloud className="text-blue-500" size={24} />
    },
    {
      title: "Industrial IoT & Manufacturing",
      description: "Optimize production processes and enable predictive maintenance with smart sensors and analytics.",
      icon: <Database className="text-purple-500" size={24} />
    },
    {
      title: "Agricultural Technology",
      description: "Develop solutions that enhance crop yields, reduce resource usage, and enable precision farming.",
      icon: <LightbulbIcon className="text-green-500" size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      <Navbar1 />
      
      {/* Hero Section */}
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
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
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
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={20} className="text-brand-teal mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-teal to-brand-blue opacity-30 blur-lg rounded-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <picture>
                                  <source 
                                    srcSet="/images/aiot/aoit-inhouse-project-1.webp" 
                                    type="image/webp" 
                                  />
                                  <source 
                                    srcSet="/images/aiot/digitalfarm_aofarm1.png" 
                                    type="image/jpeg" 
                                  />
                                  <img 
                                    src="/images/aiot/digitalfarm_aofarm1.png"
                                    alt="AIoT Product Development"
                                    className="w-full h-auto rounded-lg mb-6"
                                  />
                                </picture>
                <div className="text-center">
                  <Zap size={30} className="text-brand-teal mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Accelerate Your Innovation</h3>
                  <p className="text-white/70">
                    Our proven development process helps you bring your AIoT product to market faster and with greater confidence.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full mb-3">
              DEVELOPMENT PROCESS
            </span>
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">Our Proven Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured yet flexible process that has successfully delivered countless AIoT products.
            </p>
          </div>

          <FeatureSteps 
            features={processSteps} 
            title="How We Build Your AIoT Product" 
            imageHeight="h-[300px] md:h-[400px]"
          />
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
              APPLICATIONS
            </span>
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">Popular Use Cases</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AIoT development expertise spans multiple industries and applications.
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {useCases.map((useCase, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
                variants={itemVariants}
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full mb-3">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of our successful AIoT product development projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="group relative rounded-xl overflow-hidden shadow-md aspect-[4/3]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/aiot/digitalfarm_aofarm1.png" 
                alt="Smart Agriculture System" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Smart Agriculture System</h3>
                <p className="text-white/80 text-sm">Precision farming solution that increased crop yields by 30%</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative rounded-xl overflow-hidden shadow-md aspect-[4/3]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/aiot/digitalfactory_1.jpg" 
                alt="Industrial Monitoring Platform" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Industrial Monitoring Platform</h3>
                <p className="text-white/80 text-sm">Reduced equipment downtime by 45% with predictive maintenance</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative rounded-xl overflow-hidden shadow-md aspect-[4/3]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/aiot/energytwin_ss1.jpg" 
                alt="Smart Office/Home Hub" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white mb-2">Smart Home Hub</h3>
                <p className="text-white/80 text-sm">Integrated solution that improved energy efficiency by 25%</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Bring Your AIoT Product to Life?</h3>
            <p className="text-white/80 mb-6">
              Let's discuss how we can help you develop innovative connected products that drive real business value.
            </p>
            <Button asChild size="lg" className="bg-white text-brand-navy hover:bg-white/90">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AiotProductDevelopment;
