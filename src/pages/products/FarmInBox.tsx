import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, ExternalLink, Check, Clock, ShoppingCart, Info } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
 import Footer from '@/components/ui/footer';
import { useScrollAnimation } from '@/lib/animations';
import { Toaster } from '@/components/ui/sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { PreorderForm } from '@/components/ui/preorder-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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
    'Remote monitoring mobile app',
    'Proudly Made in Vietnam 🇻🇳'
  ];

  const eduFeatures = [
    'Scratch plugins available',
    'Custom LMS integration is possible'
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <Toaster />

      {/* Hero Section with Video Background and Parallax Effect */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/40 to-transparent z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover scale-[1.02] transition-transform duration-[20s] hover:scale-[1.05]"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-slide-up">
              Farm In Box
            </h1>
            <p className="text-xl text-white/85 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              Watch the fascinating journey of growth and sustainability with our educational farming kit. 
              Perfect for classrooms, bringing hands-on learning to life.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 transition-all duration-500 transform hover:scale-105">
                <Link to="#info" className="flex items-center">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105"
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
        
        {/* Subtle gradient overlay at bottom for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </section>
      
      <section id="info" className="py-12 flex-grow relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6 animate-fade-in">
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
                Farm In Box - School
              </h1>
              <p className="text-gray-600 mb-6 text-lg">
                A comprehensive educational package designed for schools and learning institutions to teach sustainable farming practices, biology, and environmental science through hands-on experience.
              </p>
              
              <ul className="space-y-3 mb-8">
                {features.map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <ChevronRight size={20} className="text-brand-teal mr-2 flex-shrink-0 mt-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="group-hover:text-brand-navy transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center mb-8 bg-gradient-to-r from-brand-teal/10 to-brand-teal/5 px-5 py-3 rounded-lg backdrop-blur-sm border border-brand-teal/10 animate-pulse">
                <Clock size={20} className="text-brand-teal mr-3 flex-shrink-0" />
                <span className="text-brand-navy font-medium">Ready to ship! Lead time: 4-6 weeks</span>
              </div>

              <div className="mt-8 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold py-4">
                      <ShoppingCart size={20} className="mr-2" />
                      Pre-order Your Farm In Box
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-brand-navy mb-4">Pre-order Your Farm In Box</DialogTitle>
                    </DialogHeader>
                    <PreorderForm 
                      defaultProduct="Farm-In-Box"
                      buttonText="Request Pricing & Delivery"
                      className="mt-4"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-md transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-teal to-brand-blue rounded-lg opacity-30 blur-lg animate-pulse"></div>
                <div className="relative glassmorphism overflow-hidden rounded-lg p-1 shadow-md">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <img 
                      src="/images/farminbox/farminbox_box2.jpg" 
                      alt="Farm in Box Educational Kit" 
                      className="w-full h-96 object-cover object-center hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Features/Specs Section with Glassmorphism */}
          <div className="mt-24 scrolled-section relative">
            <div className="absolute -inset-10 bg-gradient-to-r from-brand-blue/5 via-brand-teal/5 to-brand-green/5 rounded-3xl blur-3xl pointer-events-none"></div>
            
            <h2 className="text-2xl font-bold text-brand-navy mb-12 text-center relative">
              <span className="relative inline-block">
                Product Features & Specifications
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal to-brand-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="transform hover:translate-y-[-5px] transition-all duration-500">
                <Card className="border-0 shadow-md bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-transparent bg-gradient-to-r from-brand-teal to-brand-green bg-clip-text">Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {productSpecs.map((spec, index) => (
                        <li key={index} className="flex items-start group">
                          <div className="mt-0.5 mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-brand-teal to-brand-green flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                            <Check size={12} />
                          </div>
                          <span className="group-hover:text-brand-navy transition-colors duration-300">{spec}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h3 className="font-medium text-brand-navy mb-3">Educational Features</h3>
                      <ul className="space-y-3">
                        {eduFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start group">
                            <div className="mt-0.5 mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-brand-green to-brand-blue flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                              <Check size={12} />
                            </div>
                            <span className="group-hover:text-brand-navy transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <h3 className="font-medium text-brand-navy mb-4">Early Adopters</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <a href="https://griteducation.edu.vn/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-lg bg-white p-3 shadow-sm border border-gray-100 hover:border-brand-teal/20 transition-all duration-300">
                            <img 
                              src="/images/farminbox/partner_grit.png" 
                              alt="Grit Education Logo"
                              className="w-full h-12 object-contain object-center transition-transform duration-300 group-hover:scale-105"
                            />
                          </a>
                          <a href="https://kdi.edu.vn/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-lg bg-white p-3 shadow-sm border border-gray-100 hover:border-brand-teal/20 transition-all duration-300">
                            <img 
                              src="/images/farminbox/partner_kdi.png" 
                              alt="KDI Education Logo"
                              className="w-full h-12 object-contain object-center transition-transform duration-300 group-hover:scale-105"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl overflow-hidden shadow-xl transform hover:translate-y-[-5px] transition-all duration-500">
                <div className="w-full max-w-md mx-auto p-4">
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/30">
                    <iframe 
                      className="w-full aspect-[9/16]"
                      src="https://www.youtube.com/embed/YAEJn9OzoWo?controls=1&rel=0"
                      title="Farm In Box - March 2025"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute inset-0 pointer-events-none border border-white/20 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Live Demo Section */}
          <div id="demo" className="mt-24 mb-12 scrolled-section relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/5 via-brand-blue/5 to-brand-teal/5 rounded-3xl blur-3xl pointer-events-none"></div>
            
            <div className="max-w-4xl mx-auto glassmorphism p-8 rounded-2xl shadow-2xl relative z-10 transform hover:translate-y-[-5px] transition-all duration-500">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 text-center">Live Demo</h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="group">
                  <div className="overflow-hidden rounded-lg border border-white/30">
                    <img 
                      src="/images/farminbox/farminbox_screenshot2.png" 
                      alt="Farm in Box Dashboard Screenshot" 
                      className="w-full rounded-lg shadow-md group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-600 mb-6">
                    Experience our Farm In Box in action! We're running a live experiment growing mushrooms, and you can monitor it in real-time. 
                    Our dashboard provides up-to-date timelapse footage, environmental readings, and growth data.
                  </p>
                  
                  <p className="text-gray-600 mb-8">
                    This is the exact same monitoring system that comes with every Farm In Box kit, allowing students and educators to track and analyze their growing projects.
                  </p>
                  
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a 
                        href="https://farminbox.alphabits.team/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-navy via-brand-blue to-brand-navy text-white font-medium rounded-lg transition-all duration-500 transform hover:translate-y-[-2px] hover:shadow-lg"
                      >
                        Visit Live Dashboard <ExternalLink size={16} className="ml-2" />
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-white/95 backdrop-blur-md border border-white/20 shadow-xl">
                      <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-600">See real-time data from our mushroom growing experiment</p>
                        <img 
                          src="/images/farminbox/farminbox_screenshot1.png" 
                          alt="Dashboard Preview" 
                          className="w-full h-24 object-cover rounded-md"
                        />
                      </div>
                    </HoverCardContent>
                  </HoverCard>
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
