import { useEffect } from 'react';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const AoFarmPage = () => {
  useEffect(() => {
    document.title = "AO Farm | Alpha Bits";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar1 />
      
      <div className="pt-24">
        {/* AO Farm Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scrolled-section">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-navy/10 text-brand-navy rounded-full mb-3">
                EXPERIENCES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                AO Farm - Digital Farm Labs
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Explore our innovative agricultural research facility where technology meets sustainability.
                AO Farm is where we develop and test our agricultural technology products.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="rounded-xl overflow-hidden scrolled-section">
                <img 
                  src="/images/office/office_aofarm1.jpg" 
                  alt="AO Farm Facility" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <div className="flex flex-col justify-center scrolled-section">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Sustainable Agriculture Lab</h3>
                <p className="text-gray-600 mb-6">
                  Our AO Farm facility serves as both a research lab and a showcase for our agricultural technology innovations. 
                  Here, we develop sustainable farming solutions that address critical challenges in food production and security.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">Controlled Environment Agriculture</h4>
                      <p className="text-gray-600">Advanced hydroponic and aeroponic systems for year-round crop production.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">IoT Monitoring Systems</h4>
                      <p className="text-gray-600">Comprehensive sensor networks tracking environmental conditions in real-time.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">Mushroom Cultivation Lab</h4>
                      <p className="text-gray-600">Specialized facilities for developing and testing our mushroom cultivation technology.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center order-2 md:order-1 scrolled-section">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Visitor Experience</h3>
                <p className="text-gray-600 mb-6">
                  AO Farm isn't just a research lab — it's an educational experience. We offer guided tours and workshops for schools, 
                  businesses, and individuals interested in learning about sustainable agriculture and food technology.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">Educational Tours</h4>
                      <p className="text-gray-600">Experience hands-on demonstrations of modern farming techniques and technologies.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">Workshops & Training</h4>
                      <p className="text-gray-600">Participate in specialized workshops on mushroom cultivation and urban farming.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-brand-teal font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-brand-navy">Product Testing</h4>
                      <p className="text-gray-600">See our products in action and understand how they can be applied in various settings.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden order-1 md:order-2 scrolled-section">
                <img 
                  src="/images/office/office_aofarm2.jpg" 
                  alt="AO Farm Visitor Experience" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-xl text-gray-600 font-medium mb-6 scrolled-section">
                Book a tour of our AO Farm facility to see our innovations in action
              </p>
              <Link to="/contact">
                <Button className="bg-brand-navy hover:bg-brand-navy/90 text-white font-medium rounded-lg transition-all duration-300 scrolled-section">
                  Schedule a Visit
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default AoFarmPage;
