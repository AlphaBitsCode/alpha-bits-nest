
import React from 'react';
import { Link } from 'react-router-dom';
import { Trees, ArrowLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/lib/animations';

const DigitalTwinFarm = () => {
  useScrollAnimation();

  React.useEffect(() => {
    document.title = "Digital Twin for Farm | Alpha Bits";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

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
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-green/10 text-brand-green rounded-full">
                COMING SOON
              </span>
              <h1 className="text-4xl font-bold text-brand-navy">Digital Twin for Farm</h1>
              <p className="text-gray-600">
                Our Digital Twin for Farm solution provides comprehensive digital modeling for agricultural 
                operations, helping farmers maximize yield, minimize resource usage, and implement 
                sustainable farming practices.
              </p>
              
              <div className="space-y-4 mt-6">
                <h2 className="text-xl font-medium text-brand-navy">Key Features</h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Real-time soil and crop monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Weather prediction and automated irrigation control</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Pest and disease early detection systems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Harvest optimization and yield prediction</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>Resource usage analytics and sustainability metrics</span>
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
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-green/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-navy/20 rounded-full blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/20">
                <img 
                  src="/images/aiot/digitalfarm_aofarm1.png" 
                  alt="Digital Twin for Farm"
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

export default DigitalTwinFarm;
