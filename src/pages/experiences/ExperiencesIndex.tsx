
import { useEffect } from 'react';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Trees, Calendar } from 'lucide-react';
import { useScrollAnimation } from '@/lib/animations';
import { ensureGoogleTranslateLoaded, getSelectedLanguage, changeLanguage } from '@/lib/language-utils';

const ExperiencesIndex = () => {
  useScrollAnimation();
  
  useEffect(() => {
    document.title = "Experiences | Alpha Bits";
    
    // Apply saved language preference if not English
    const savedLanguage = getSelectedLanguage();
    if (savedLanguage !== 'en') {
      ensureGoogleTranslateLoaded(() => {
        changeLanguage(savedLanguage);
      });
    }
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar1 />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scrolled-section">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-navy/10 text-brand-navy rounded-full mb-3">
                IMMERSIVE
              </span>
              <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
                Alpha Bits Experiences
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover our immersive experiences designed to educate, inspire, and connect. 
                From our sustainable agriculture facility to community events, we offer unique opportunities to engage with cutting-edge technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* AO Farm Card */}
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 scrolled-section">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="/images/office/office_aofarm1.jpg" 
                    alt="AO Farm" 
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Trees className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">AO Farm</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Visit our sustainable agriculture research facility where we develop and test our agricultural technology products. 
                    Experience hands-on demonstrations and see how we're addressing food security challenges.
                  </p>
                  <Link to="/experiences/ao-farm">
                    <Button variant="outline" className="w-full justify-between border-gray-300 hover:border-brand-teal hover:text-brand-teal group">
                      Learn More 
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Events & Meet-ups Card */}
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 scrolled-section">
                <div className="aspect-video overflow-hidden bg-brand-navy/5 flex items-center justify-center">
                  <img 
                    src="/images/office/office_5.jpg" 
                    alt="Events & Meet-ups" 
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Events & Meet-ups</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Join our community events and connect with industry experts. Learn about the latest trends 
                    in technology, AI, and sustainable solutions. Expand your network and gain valuable insights.
                  </p>
                  <Link to="/experiences/events">
                    <Button variant="outline" className="w-full justify-between border-gray-300 hover:border-brand-blue hover:text-brand-blue group">
                      View Upcoming Events
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center scrolled-section">
              <p className="text-gray-600 mb-6">
                Looking for a customized experience for your team or organization?
              </p>
              <Link to="/contact">
                <Button className="bg-brand-navy hover:bg-brand-navy/90">
                  Contact Us for Details
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

export default ExperiencesIndex;
