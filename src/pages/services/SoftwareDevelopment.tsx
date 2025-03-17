
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, Code, Database, BarChart, GitBranch, Workflow, Brain, Zap, Clock, Bot, Blocks, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { LeadForm } from '@/components/ui/lead-form';
import { Toaster } from '@/components/ui/sonner';
import { useScrollAnimation } from '@/lib/animations';

const SoftwareDevelopment = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "Software Development Services | Alpha Bits";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Custom ERP Solutions",
      description: "Tailored Enterprise Resource Planning systems to streamline your business operations, inventory management, and financial processes.",
      icon: <Workflow className="w-10 h-10 text-brand-teal p-1" />
    },
    {
      title: "CRM Development",
      description: "Custom Customer Relationship Management systems that help you track leads, manage customer interactions, and boost sales performance.",
      icon: <Database className="w-10 h-10 text-brand-blue p-1" />
    },
    {
      title: "HRM Systems",
      description: "Human Resource Management solutions to efficiently handle recruitment, employee data, performance evaluation, and payroll.",
      icon: <GitBranch className="w-10 h-10 text-brand-green p-1" />
    },
    {
      title: "AI Platforms",
      description: "Bespoke AI platforms leveraging machine learning and deep learning to solve your business challenges and drive innovation.",
      icon: <Brain className="w-10 h-10 text-brand-purple p-1" />
    },
    {
      title: "Business Process Automation",
      description: "AI-powered automation systems to reduce manual tasks, minimize errors, and increase operational efficiency.",
      icon: <BarChart className="w-10 h-10 text-brand-navy p-1" />
    },
    {
      title: "Data Mining & Analytics",
      description: "Extract valuable insights from your data with custom data mining solutions and comprehensive analytics dashboards.",
      icon: <Code className="w-10 h-10 text-brand-teal p-1" />
    }
  ];

  const aiTools = [
    {
      tool: "Lovable.dev",
      role: "Project Management",
      description: "Serves as our integrated development platform, combining project management, development, DevOps, design, and business analysis capabilities.",
      icon: <Blocks className="w-10 h-10 text-brand-blue p-1" />
    },
    {
      tool: "Trae AI",
      role: "Coding Assistant",
      description: "Handles code optimization, refactoring, syntax refinement, and small-scope content improvements.",
      icon: <Code className="w-10 h-10 text-brand-teal p-1" />
    },
    {
      tool: "Google Gemini",
      role: "Data Analyst",
      description: "Powers our data analysis, generating insights, and helping us understand complex datasets to inform business decisions.",
      icon: <LineChart className="w-10 h-10 text-brand-green p-1" />
    },
    {
      tool: "Warp AI",
      role: "DevOps Engineer",
      description: "Acts as our trusted DevOps engineer, streamlining deployment pipelines, infrastructure management, and system optimization.",
      icon: <GitBranch className="w-10 h-10 text-brand-navy p-1" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar1 />
      <Toaster />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/services" className="inline-flex items-center text-brand-navy hover:text-brand-teal transition-colors duration-300">
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full mb-3">
                SERVICE
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                AI-Powered Software Development
              </h1>
              <p className="text-gray-600 mb-6 text-lg">
                We build software at unprecedented speed by embracing AI tools and focusing on data-driven approaches to solve business problems. Our team created this very website in just 7 hours, demonstrating our commitment to efficiency without compromising quality.
              </p>
              
              <div className="mt-8">
                <LeadForm 
                  productName="Software Development" 
                  buttonText="Request Consultation"
                  className="px-6 py-3 bg-brand-blue hover:bg-brand-blue/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue to-brand-teal rounded-lg opacity-30 blur-lg animate-pulse"></div>
                <div className="relative glassmorphism overflow-hidden rounded-lg p-1">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573495804683-641191e042ea?q=80&w=1000&auto=format&fit=crop"
                      alt="Software Development Team" 
                      className="w-full h-96 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* AI-Powered Development Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
              OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
              Rapid Software Delivery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe software development lead time should be measured in days, not months. Our AI-enhanced approach allows us to build high-quality solutions at unprecedented speed.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-brand-teal/10 p-3 rounded-full mr-4">
                    <Zap className="w-8 h-8 text-brand-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">Super Efficiency</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We built this entire website in just 7 hours straight - a task that would typically take weeks using conventional methods. Check out our GitHub repo to see the development history!
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <Clock className="text-brand-blue mr-3 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Software lead time in days, not months</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-blue mr-3 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Rapid prototyping and iteration</span>
                  </li>
                  <li className="flex items-start">
                    <Bot className="text-brand-blue mr-3 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">AI-augmented development teams</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-brand-blue/10 p-3 rounded-full mr-4">
                    <Database className="w-8 h-8 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">Data-Driven Approach</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We start by dissecting your data needs and business processes, creating a solid foundation before building user interfaces and tools.
                </p>
                <ul className="space-y-3 mt-6">
                  <li className="flex items-start">
                    <Database className="text-brand-teal mr-3 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Focus on data layer first</span>
                  </li>
                  <li className="flex items-start">
                    <Workflow className="text-brand-teal mr-3 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Process digitization and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Brain className="text-brand-teal mr-3 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Intelligent agents built on top of your data</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* AI Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full mb-3">
              OUR TOOLKIT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
              AI-Powered Development Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge AI tools to enhance every aspect of the software development lifecycle, from planning to deployment.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gray-50 p-3 rounded-xl shadow-sm inline-block mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-1 text-brand-navy">{tool.tool}</h3>
                <p className="text-sm text-brand-blue font-medium mb-3">{tool.role}</p>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full mb-3">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
              Comprehensive Software Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver high-quality software solutions tailored to your specific business needs, leveraging cutting-edge technologies and AI-enhanced development practices.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white p-3 rounded-xl shadow-sm inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-navy">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
              OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-navy">
              Our Development Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a structured yet flexible development methodology, enhanced by AI tools, to ensure your project's success from conception to deployment.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-blue/20 rounded-full"></div>
              
              {[
                {
                  title: "Data Analysis & Planning",
                  description: "We start by understanding your data structure, business processes, and challenges, using AI-powered analytics to identify optimal solutions."
                },
                {
                  title: "Architecture & Design",
                  description: "Our AI tools help create efficient system architecture and design specifications, ensuring a solid foundation for your software solution."
                },
                {
                  title: "Rapid Development",
                  description: "Using AI-assisted coding and agile methodologies, we build your software with unprecedented speed without sacrificing quality."
                },
                {
                  title: "Deployment & Integration",
                  description: "Our AI-powered DevOps ensures smooth deployment and seamless integration with your existing systems and workflows."
                },
                {
                  title: "Continuous Improvement",
                  description: "We leverage AI to monitor performance, identify optimization opportunities, and continuously enhance your software over time."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex mb-12 items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-full md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-blue rounded-full z-10"></div>
                    <h3 className="text-xl font-bold mb-2 text-brand-navy">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy to-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI-Powered Software?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's discuss how our AI-enhanced development approach can help you achieve your business goals with record-breaking efficiency.
            </p>
            <div className="flex justify-center">
              <LeadForm 
                productName="Software Development" 
                buttonText="Request Free Consultation"
                className="px-8 py-4 bg-white hover:bg-white/90 text-brand-navy font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SoftwareDevelopment;
