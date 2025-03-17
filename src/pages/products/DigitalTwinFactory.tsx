
import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, ArrowLeft, ChevronRight } from 'lucide-react';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/lib/animations';

const DigitalTwinFactory = () => {
  useScrollAnimation();

  React.useEffect(() => {
    document.title = "Digital Twin for Factory | Alpha Bits";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar1 />

      <div className="flex-grow container mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link to="/products" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full">
                COMING SOON
              </span>
              <h1 className="text-4xl font-bold text-brand-navy">Digital Twin for Factory</h1>
              <p className="text-gray-600">
                Our Digital Twin for Factory provides end-to-end manufacturing process simulation and 
                optimization for industrial facilities, helping manufacturers improve efficiency, 
                reduce waste, and enhance product quality.
              </p>
              
              <div className="space-y-4 mt-6">
                <h2 className="text-xl font-medium text-brand-navy">Key Features</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <span>Real-time equipment monitoring and predictive maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <span>Production line optimization and bottleneck detection</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <span>Energy consumption analysis and reduction strategies</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <span>Quality control automation and defect prediction</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <span>Supply chain integration and inventory optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  This product is currently in development. Sign up to be notified when it becomes available.
                </p>
                <Button asChild>
                  <Link to="/contact">Request More Information</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-navy/20 rounded-full blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/20">
                <img 
                  src="/images/aiot/digitalfactory_1.jpg" 
                  alt="Digital Twin for Factory"
                  className="w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium text-brand-navy">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DigitalTwinFactory;
