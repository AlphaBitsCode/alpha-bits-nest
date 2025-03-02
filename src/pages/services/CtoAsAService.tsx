
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  Users, 
  Award, 
  Brain, 
  CheckCircle2, 
  Clock, 
  Shield, 
  DollarSign, 
  LineChart, 
  FileText,
  Zap,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CtoAsAService = () => {
  useScrollAnimation();
  const location = useLocation();
  
  useEffect(() => {
    document.title = "CTO-as-a-Service | Alpha Bits";
    
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

  const features = [
    'Technology roadmap development',
    'Technical team leadership',
    'AI implementation strategy',
    'Cost optimization analysis',
    'Data-driven decision making'
  ];
  
  const benefits = [
    {
      title: 'Significant Cost Reduction',
      description: 'Cut your tech expenses by up to 50% within 1-2 months through strategic optimization and AI implementation.',
      icon: <DollarSign className="text-gray-700" size={24} />
    },
    {
      title: 'AI-Powered Efficiency',
      description: 'Implement AI tools that automate routine tasks and allow your team to focus on high-value strategic work.',
      icon: <Brain className="text-gray-700" size={24} />
    },
    {
      title: 'Data-Driven Insights',
      description: 'Gain complete visibility into your business performance with proper data tracking and analysis systems.',
      icon: <LineChart className="text-gray-700" size={24} />
    },
    {
      title: 'Flexible Scaling',
      description: 'Adjust your technical resources based on actual needs rather than maintaining unnecessary overhead.',
      icon: <TrendingUp className="text-gray-700" size={24} />
    },
    {
      title: 'Change Management',
      description: 'We guide your team through the transition to more efficient processes with minimal disruption.',
      icon: <Users className="text-gray-700" size={24} />
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Assessment & Analysis",
      description: "We analyze your current tech stack, team structure, and spending to identify inefficiencies and opportunities."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We create a tailored technology roadmap that leverages AI tools and optimizes your tech spending."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Our experienced CTOs guide your team through execution, including AI tool integration and process optimization."
    },
    {
      number: "04",
      title: "Data Framework Setup",
      description: "We establish proper data tracking systems that provide actionable insights for better business decisions."
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

  const costSavingExamples = [
    {
      title: "Software Development",
      before: "$10,000+/month",
      after: "$2,000/month",
      description: "Replace large development teams with AI-augmented solutions and strategic outsourcing."
    },
    {
      title: "Cloud Infrastructure",
      before: "$2,000+/month",
      after: "$500/month",
      description: "Optimize your cloud resources and implement auto-scaling to match actual usage patterns."
    },
    {
      title: "Data Management",
      before: "Limited insights",
      after: "Complete visibility",
      description: "Transform raw data into actionable insights that drive real business decisions."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 flex-grow bg-gradient-to-b from-brand-navy to-brand-blue text-white relative overflow-hidden">
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
              
              <p className="text-white/80 mb-6 text-lg">
                Cut your tech costs in half within 1-2 months. Our experienced CTOs help you leverage AI tools, optimize spending, and gain valuable data insights to drive your business forward.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">We Can Help If You Have:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={20} className="text-brand-teal mr-3 flex-shrink-0 mt-0.5" />
                    <span>A tech team of 10+ people or significant technical overhead</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-brand-teal mr-3 flex-shrink-0 mt-0.5" />
                    <span>Monthly hosting or cloud expenses exceeding $2,000</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-brand-teal mr-3 flex-shrink-0 mt-0.5" />
                    <span>Limited access to or visibility of critical business data</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-brand-teal mr-3 flex-shrink-0 mt-0.5" />
                    <span>Challenges implementing AI tools or optimizing workflows</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-brand-teal mr-3 flex-shrink-0 mt-0.5" />
                    <span>A desire to cut costs while maintaining or improving output</span>
                  </li>
                </ul>
              </div>
              
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
                  <DollarSign size={30} className="text-brand-teal mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">Cost-Effective Leadership</h3>
                  <p className="text-white/70">
                    Achieve better results with significantly lower costs through our AI-driven approach and technical leadership.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Savings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
              REAL RESULTS
            </span>
            <h2 className="text-3xl font-bold mb-4 text-brand-navy">Dramatic Cost Reduction</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our clients typically see these transformative changes in their technical operations and expenses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {costSavingExamples.map((example, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">{example.title}</h3>
                <div className="flex justify-between items-center mb-6 text-sm">
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded">Before: {example.before}</div>
                  <ArrowLeft className="text-gray-400 rotate-180" size={16} />
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded">After: {example.after}</div>
                </div>
                <p className="text-gray-600">{example.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-start mb-4">
              <MessageSquare className="text-brand-teal mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">From Our CEO</h3>
                <p className="text-gray-600 italic">
                  "I was in the same position until I completely transformed our tech approach. Now, AI does the heavy lifting for a fraction of the cost. My monthly software expenses are just $200 instead of burning $10k+ on salaries and inefficiencies. The secret? It all comes down to data — everything that matters relies on accurate data tracking."
                </p>
              </div>
            </div>
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
              Our service is designed to transform your technical operations, cut costs, and provide valuable data insights.
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

      {/* Is This For You Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-navy/10 text-brand-navy rounded-full mb-3">
                IS THIS FOR YOU?
              </span>
              <h2 className="text-3xl font-bold mb-4 text-brand-navy">The Right Fit</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-brand-teal flex items-center">
                  <CheckCircle2 className="mr-2" size={24} />
                  Perfect For You If:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>You want to cut tech costs while improving results</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>You're open to implementing AI tools and automation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>You value data-driven decision making</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>You're ready to embrace innovation and change</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-red-500 flex items-center">
                  <Clock className="mr-2" size={24} />
                  Not Ideal If:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="text-red-400 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>You prefer following traditional processes over innovation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-400 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>Your organization is resistant to adopting new technologies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-400 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>You're not ready to make data-driven decisions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-red-400 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span>You value process adherence over efficiency and results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to slash your tech costs?</h3>
            <p className="text-white/80 mb-6">
              Our CTO-as-a-Service can help you cut expenses by up to 50% while improving your technical capabilities and data insights.
            </p>
            <Button asChild size="lg" className="bg-white text-brand-navy hover:bg-white/90">
              <Link to="/contact">Schedule Your Consultation Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CtoAsAService;
