
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Users, Award, Brain, CheckCircle2, Clock, Shield } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

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
      description: 'Gain access to executive-level technical leadership without the full-time salary and benefits package.',
      icon: <Clock className="text-blue-500" size={24} />
    },
    {
      title: 'Expertise On Demand',
      description: 'Draw from our diverse experience across industries and technologies as needed for your specific challenges.',
      icon: <Brain className="text-indigo-500" size={24} />
    },
    {
      title: 'Risk Mitigation',
      description: 'Leverage our proven methodologies and best practices to avoid costly technical mistakes.',
      icon: <Shield className="text-green-500" size={24} />
    },
    {
      title: 'Scalable Approach',
      description: 'Adjust our involvement based on your current needs and project phases.',
      icon: <CheckCircle2 className="text-amber-500" size={24} />
    },
    {
      title: 'Knowledge Transfer',
      description: 'We mentor your team and build internal capabilities that remain after our engagement.',
      icon: <Users className="text-pink-500" size={24} />
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assessment & Discovery",
      description: "We start by understanding your business goals, current technical state, and challenges."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We create a tailored technology roadmap aligned with your business objectives."
    },
    {
      number: "03",
      title: "Implementation Support",
      description: "Our experienced CTOs guide your team through execution of the technology strategy."
    },
    {
      number: "04",
      title: "Optimization & Growth",
      description: "We continuously refine the approach based on results and changing business needs."
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
      <Navigation />
      
      {/* Hero Section */}
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
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
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
                <Link to="/contact">Schedule a Consultation</Link>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full mb-3">
              OUR PROCESS
            </span>
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">How We Work With You</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our structured approach ensures we deliver maximum value while integrating seamlessly with your team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Process connection line */}
              <div className="absolute left-[40px] top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
              
              <div className="space-y-10">
                {processSteps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-8"
                    variants={itemVariants}
                  >
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-teal text-brand-teal flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md z-10">
                      {step.number}
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex-1">
                      <h3 className="text-xl font-bold mb-2 text-brand-navy">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
              KEY BENEFITS
            </span>
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">Why Choose Our CTO Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our service is designed to provide all the advantages of executive technical leadership without the traditional overhead.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to accelerate your technical leadership?</h3>
            <p className="text-white/80 mb-6">
              Our CTO-as-a-Service offering is tailored to your specific needs and can scale with your business.
            </p>
            <Button asChild size="lg" className="bg-white text-brand-navy hover:bg-white/90">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CtoAsAService;
