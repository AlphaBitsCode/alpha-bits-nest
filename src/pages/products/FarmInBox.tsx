
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ExternalLink, Check, Clock } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import { LeadForm } from '@/components/ui/lead-form';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FarmInBox = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "Farm In Box | Alpha Bits";
  }, []);

  const features = [
    'Interactive learning materials',
    'Sustainable farming techniques',
    'STEM curriculum integration',
    'Digital monitoring tools',
    'Teacher support resources'
  ];

  const productSpecs = [
    'Monitor Soil Health with 7 Parameters',
    'Auto Watering based on soil conditions',
    '24/7 continuous care',
    'Customisable grow layout by software, 21 slots as default',
    'Individual slot with individual web & app account login',
    'Timelapse playback',
    'Super Admin account with full manual control',
    'Remote monitoring app'
  ];

  const eduFeatures = [
    'Scratch plugins available',
    'Custom LMS integration is possible',
    'Made in Vietnam'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Toaster />

      {/* Hero Section with Video Background */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy/40 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/images/farminbox/farminbox_timelapse1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Farm In Box
            </h1>
            <p className="text-xl text-white/85 mb-8">
              Watch the fascinating journey of growth and sustainability with our educational farming kit. 
              Perfect for classrooms, bringing hands-on learning to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90">
                <Link to="#info" className="flex items-center">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                onClick={(e) => {
                  e.preventDefault();
                  const demoSection = document.querySelector('#demo');
                  if (demoSection) {
                    demoSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span className="flex items-center">
                  Watch Live Demo <ExternalLink size={16} className="ml-1" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section id="info" className="py-12 flex-grow bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Link to="/products" className="inline-flex items-center text-brand-navy hover:text-brand-teal transition-colors duration-300">
              <ArrowLeft size={16} className="mr-2" />
              Back to Products
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center scrolled-section">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
                PRODUCT
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                Farm In Box - Educational Kit
              </h1>
              <p className="text-gray-600 mb-6 text-lg">
                A comprehensive educational package designed for schools and learning institutions to teach sustainable farming practices, biology, and environmental science through hands-on experience.
              </p>
              
              <ul className="space-y-3 mb-8">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight size={20} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center mb-8 bg-brand-teal/10 px-5 py-3 rounded-lg">
                <Clock size={20} className="text-brand-teal mr-3 flex-shrink-0" />
                <span className="text-brand-navy font-medium">Ready to ship! Lead time: 4-6 weeks</span>
              </div>

              <div className="mt-8">
                <LeadForm 
                  productName="Farm In Box" 
                  buttonText="Request Pricing & Delivery"
                  className="px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                />
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal to-brand-blue rounded-lg opacity-30 blur-lg animate-pulse"></div>
                <div className="relative glassmorphism overflow-hidden rounded-lg p-1">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src="/images/farminbox/farminbox_box2.jpg" 
                      alt="Farm in Box Educational Kit" 
                      className="w-full h-96 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Features/Specs Section */}
          <div className="mt-16 scrolled-section">
            <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">Product Features & Specifications</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-brand-teal">Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {productSpecs.map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={18} className="text-brand-green mr-2 flex-shrink-0 mt-1" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h3 className="font-medium text-brand-navy mb-3">Educational Features</h3>
                      <ul className="space-y-3">
                        {eduFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={18} className="text-brand-green mr-2 flex-shrink-0 mt-1" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md flex justify-center items-center h-[600px]">
                <div className="w-full max-w-[320px] h-full">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YAEJn9OzoWo?controls=1&rel=0"
                    title="Farm In Box - March 2025"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          
          {/* Live Demo Section */}
          <div id="demo" className="mt-16 scrolled-section">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 text-center">Live Public Demo</h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/images/farminbox/farminbox_screenshot2.png" 
                    alt="Farm in Box Dashboard Screenshot" 
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                
                <div>
                  <p className="text-gray-600 mb-6">
                    Experience our Farm In Box in action! We're running a live experiment growing mushrooms, and you can monitor it in real-time. 
                    Our dashboard provides up-to-date timelapse footage, environmental readings, and growth data.
                  </p>
                  
                  <p className="text-gray-600 mb-8">
                    This is the exact same monitoring system that comes with every Farm In Box kit, allowing students and educators to track and analyze their growing projects.
                  </p>
                  
                  <a 
                    href="https://farminbox.alphabits.team/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-3 bg-brand-navy hover:bg-brand-navy/90 text-white font-medium rounded-lg transition-all duration-300"
                  >
                    Visit Live Dashboard <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 scrolled-section">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 text-center">Why Farm In Box?</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Farm In Box is designed to bridge the gap between theoretical education and practical experience in sustainable farming. 
                  It provides students with a hands-on approach to learning about agriculture, biology, and environmental science.
                </p>
                
                <p className="text-gray-600">
                  Our comprehensive kit includes everything educators need to implement a successful farming program in their institutions,
                  with step-by-step guides, curriculum integration materials, and ongoing support.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">For Educators</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight size={16} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm">Ready-to-use curriculum materials</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight size={16} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm">Professional development resources</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight size={16} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm">Assessment tools and rubrics</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-brand-navy mb-2">For Students</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ChevronRight size={16} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm">Hands-on learning experience</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight size={16} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm">Development of practical skills</span>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight size={16} className="text-brand-teal mr-2 flex-shrink-0 mt-1" />
                        <span className="text-sm">Understanding of sustainable practices</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <LeadForm 
                    productName="Farm In Box" 
                    buttonText="Request Pricing & Delivery"
                    className="px-6 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FarmInBox;
