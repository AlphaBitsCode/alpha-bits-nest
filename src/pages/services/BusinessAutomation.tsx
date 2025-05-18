
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { LeadForm } from '@/components/ui/lead-form';
import { Toaster } from '@/components/ui/sonner';
import { CheckCircle, ArrowRight, Clock, DollarSign, TrendingUp, Heart, BarChart3 } from 'lucide-react';

const BusinessAutomation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    document.title = "Business Automation | Alpha Bits";
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      title: "Reduce Operational Costs",
      description: "Put money back into your business with over 20-30% cost savings through smart automation of repetitive tasks.",
      icon: <DollarSign className="w-6 h-6 text-brand-teal" />
    },
    {
      title: "Increase Efficiency & Save Time",
      description: "Free up hundreds of hours per month so your team can focus on what they do best, not repetitive tasks.",
      icon: <Clock className="w-6 h-6 text-brand-teal" />
    },
    {
      title: "Accelerate Growth",
      description: "Scale faster with automated workflows and gain real-time insights to make smarter decisions, faster.",
      icon: <TrendingUp className="w-6 h-6 text-brand-teal" />
    },
    {
      title: "Improve Customer Satisfaction",
      description: "Deliver faster, more consistent customer experiences and improved follow-ups, effortlessly.",
      icon: <Heart className="w-6 h-6 text-brand-teal" />
    },
    {
      title: "Gain Control & Visibility",
      description: "Get the business insights you need, instantly, through real-time dashboards and automated reporting.",
      icon: <BarChart3 className="w-6 h-6 text-brand-teal" />
    }
  ];

  const examples = [
    {
      title: "Sales & Marketing",
      description: "Automate follow-ups, generate marketing content, and nurture leads without manual intervention.",
      industry: "all"
    },
    {
      title: "HR & Operations",
      description: "Streamline employee onboarding, automate approval workflows, and manage internal requests seamlessly.",
      industry: "all"
    },
    {
      title: "Customer Support",
      description: "Auto-route inquiries, provide instant responses to common questions, and ensure consistent customer care.",
      industry: "all"
    },
    {
      title: "Content Distribution",
      description: "Automate content licensing follow-ups, schedule publications, and track media usage across platforms.",
      industry: "media"
    },
    {
      title: "Student Communications",
      description: "Streamline enrollment processes, automate class notifications, and personalize student interactions.",
      industry: "education"
    },
    {
      title: "Production Reporting",
      description: "Automate quality control reports, inventory management, and production line monitoring.",
      industry: "manufacturing"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar1 />
      <Toaster />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-navy to-brand-blue text-white py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/10 blur-xl"
              style={{
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${10 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Is managing tech holding back your business growth?
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Let Alpha Bits be your On-Demand Tech Department. <span className="font-semibold text-brand-teal">Automate Your Business, Unlock Growth.</span>
            </motion.p>
            
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <LeadForm 
                productName="Business Automation" 
                buttonText="Start Your Automation Project Today"
                className="px-8 py-4 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy">
              You Started Your Business to Make an Impact, Not to Become an IT Expert
            </h2>
            <p className="text-lg text-gray-600">
              Yet here you are, spending valuable time managing complex systems, handling repetitive tasks, and dealing with technology that should be making your life easier—not harder.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-red">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Daily Tasks Taking Too Long</h3>
                <p className="text-gray-600">Your team spends hours on manual data entry, sending follow-up emails, and updating information across multiple systems.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-orange">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Operational Friction</h3>
                <p className="text-gray-600">Information gets lost between departments, approvals take forever, and simple tasks require too many steps and people.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-brand-yellow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Technology Complexity</h3>
                <p className="text-gray-600">You've invested in tools, but they don't talk to each other, and managing them all feels like a full-time job.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue to-brand-teal rounded-lg opacity-20 blur-lg"></div>
              <img 
                src="/images/office/automation_2.jpg" 
                alt="Business owner frustration" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy">
                The "You Focus on Business" Promise
              </h2>
              <p className="text-xl text-gray-600">
                We handle the technology. You handle your business.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="prose prose-lg max-w-none">
                <p>
                  <strong className="text-brand-blue">We bring the technology, the tools, and the expert team.</strong> Alpha Bits builds and manages turn-key digital infrastructure that works for you.
                </p>
                <p>
                  <strong className="text-brand-teal">We handle the complexity</strong> – from integrating your existing systems to deploying powerful automation workflows and AI agents.
                </p>
                <p className="text-xl font-medium text-brand-navy mt-6">
                  You just need to focus on your business, serving your customers, and driving innovation. We take care of the tech support and automation.
                </p>
              </div>
            </div>
          </div>
          
          <div ref={ref} className="max-w-5xl mx-auto mt-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center text-brand-navy">
              How We Work With You
            </h3>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-blue/20 rounded-full"></div>
              
              {[
                {
                  title: "Understand Your Business Goals",
                  description: "We start by listening to what you want to achieve in your business – not by talking about technology."
                },
                {
                  title: "Map Your Processes",
                  description: "We identify which tasks are taking up valuable time and where automation can make the biggest impact."
                },
                {
                  title: "Apply Smart Automation",
                  description: "Our team builds custom workflows using powerful yet flexible automation tools, tailored to your specific needs."
                },
                {
                  title: "Test and Refine",
                  description: "We ensure everything works perfectly and make adjustments based on your feedback and changing requirements."
                },
                {
                  title: "Provide Ongoing Support",
                  description: "Our team continues to monitor, maintain, and enhance your automation systems as your business grows."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex mb-12 items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-full md:w-[calc(50%-2rem)] bg-white p-6 rounded-xl shadow-sm ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} border-t-4 border-brand-teal`}>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-blue rounded-full z-10"></div>
                    <h4 className="text-xl font-bold mb-2 text-brand-navy">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy">
              Real Business Benefits You Can Measure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our approach to automation delivers tangible results that impact your bottom line and free up your team to focus on what matters.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-brand-teal/10 p-3 rounded-full inline-flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-navy">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 italic">
              "AI and automation aren't just for massive corporations. We apply these powerful tools to everyday business tasks that are currently slowing you down."
            </p>
          </div>
        </div>
      </section>
      
      {/* Examples Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy">
              Practical Applications for Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how businesses like yours are using our automation solutions to save time and drive growth.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-brand-navy">For All Businesses</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {examples.filter(ex => ex.industry === "all").map((example, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <h3 className="text-xl font-bold mb-3 text-brand-navy">{example.title}</h3>
                  <p className="text-gray-600">{example.description}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-brand-navy mt-12">Industry-Specific Solutions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-brand-blue">
                <h4 className="text-lg font-bold mb-2 text-brand-blue">Media</h4>
                {examples.filter(ex => ex.industry === "media").map((example, index) => (
                  <div key={index} className="mb-4">
                    <h5 className="font-medium text-brand-navy">{example.title}</h5>
                    <p className="text-sm text-gray-600">{example.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-brand-green">
                <h4 className="text-lg font-bold mb-2 text-brand-green">Education</h4>
                {examples.filter(ex => ex.industry === "education").map((example, index) => (
                  <div key={index} className="mb-4">
                    <h5 className="font-medium text-brand-navy">{example.title}</h5>
                    <p className="text-sm text-gray-600">{example.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-brand-orange">
                <h4 className="text-lg font-bold mb-2 text-brand-orange">Manufacturing</h4>
                {examples.filter(ex => ex.industry === "manufacturing").map((example, index) => (
                  <div key={index} className="mb-4">
                    <h5 className="font-medium text-brand-navy">{example.title}</h5>
                    <p className="text-sm text-gray-600">{example.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-navy to-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Partner with Alpha Bits to handle your technology needs while you focus on growing your business.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Tell Us What's Slowing You Down. Let's Automate It.</h3>
              <LeadForm 
                productName="Business Process Automation" 
                buttonText="Start Your Automation Project"
                className="px-8 py-4 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
              />
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center">
                <CheckCircle className="text-brand-teal mr-2" />
                <span>No technical knowledge required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-brand-teal mr-2" />
                <span>Works with your existing systems</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-brand-teal mr-2" />
                <span>Ongoing support included</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy">
              A True Partnership Approach
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              At Alpha Bits, we don't just deliver a solution and walk away. We work alongside your team, becoming an extension of your business.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
              <div className="bg-gray-50 p-6 rounded-lg flex-1">
                <h3 className="text-xl font-bold mb-3 text-brand-navy">Your Business Goals Drive Everything</h3>
                <p className="text-gray-600">We focus on outcomes that matter to your business, not just implementing technology for its own sake.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg flex-1">
                <h3 className="text-xl font-bold mb-3 text-brand-navy">We Speak Your Language</h3>
                <p className="text-gray-600">No confusing tech jargon. We translate complex concepts into clear business benefits you can understand.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg flex-1">
                <h3 className="text-xl font-bold mb-3 text-brand-navy">Long-Term Support</h3>
                <p className="text-gray-600">We're here for the long haul, evolving your automation strategy as your business grows and changes.</p>
              </div>
            </div>
            
            <div className="mt-16">
              <Link to="/contact" className="inline-flex items-center text-brand-blue hover:text-brand-teal transition-colors">
                Learn more about our approach <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BusinessAutomation;
