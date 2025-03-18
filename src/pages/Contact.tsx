
import { useEffect, useRef } from 'react';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { MapPin, Phone, Mail, Calendar, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { useLocation, Link } from 'react-router-dom';
import { ensureGoogleTranslateLoaded, getSelectedLanguage, changeLanguage } from '@/lib/language-utils';

const ContactPage = () => {
  useScrollAnimation();
  const location = useLocation();
  const contactSectionRef = useRef<HTMLElement>(null);
  const locationsSectionRef = useRef<HTMLElement>(null);
  
  const locations = [
    {
      name: 'HQ Office',
      address: 'Lakeview 1, Thu Thiem, District 2, Ho Chi Minh, Vietnam',
      phone: '+84 868 000 317',
      image: 'images/office/office_1.jpg',
      mapUrl: 'https://maps.app.goo.gl/Lqkdzj2wKofe11My9'
    },
    {
      name: 'AO Farm',
      address: 'Bien Hoa City, Dong Nai, Vietnam',
      phone: '+84 868 000 317',
      image: 'images/office/office_aofarm1.jpg',
      mapUrl: 'https://maps.app.goo.gl/cbXZ6upchgHPwpWW8'
    }
  ];

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);

    // Check if there's a hash in the URL
    if (location.hash === '#contact') {
      setTimeout(() => {
        contactSectionRef.current?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    } else if (location.hash === '#locations') {
      setTimeout(() => {
        locationsSectionRef.current?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
    }
    
    // Apply saved language preference if not English
    const savedLanguage = getSelectedLanguage();
    if (savedLanguage !== 'en') {
      ensureGoogleTranslateLoaded(() => {
        changeLanguage(savedLanguage);
      });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar1 />

      <div className="pt-16">
        {/* Contact Section */}
        <section id="contact" ref={contactSectionRef} className="py-16 bg-gradient-to-b from-white/95 to-gray-50/95 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 scrolled-section">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-navy/10 text-brand-navy rounded-full mb-3">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions about our products or services? Reach out to us and our team will be happy to assist you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 scrolled-section max-w-6xl mx-auto">
              <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-xl p-8 border border-white/20 hover:border-white/40 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-brand-navy">Schedule a Meeting</h3>
                  <Calendar size={24} className="text-brand-teal" />
                </div>

                <p className="text-gray-600 mb-6">
                  Book a 30-minute consultation with our team to discuss your project or learn more about our services.
                </p>

                <Button asChild className="w-full">
                  <a href="https://cal.com/alphabits/mini" target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Call
                  </a>
                </Button>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col h-full">
                <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-xl p-8 border border-white/20 hover:border-white/40 transition-all mb-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone size={24} className="text-brand-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-brand-navy">Phone</p>
                        <p className="text-base text-gray-600">+84 868 000 317</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail size={24} className="text-brand-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-brand-navy">Email</p>
                        <p className="text-base text-gray-600">contact@alphabits.team</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin size={24} className="text-brand-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-brand-navy">Headquarters</p>
                        <p className="text-base text-gray-600">Lakeview 1, Thu Thiem, District 2, Ho Chi Minh, Vietnam</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock size={24} className="text-brand-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-brand-navy">Timezone</p>
                        <p className="text-base text-gray-600">GMT+7 (Vietnam Time Zone)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-xl p-8 border border-white/20 hover:border-white/40 transition-all mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-brand-navy">Chat with AI Representative</h3>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Get instant assistance 24/7 by scanning the QR code below to chat with our AI representative on WhatsApp.
                  </p>

                  <div className="flex justify-center scrolled-section">
                    <div className="bg-white/20 backdrop-blur-lg p-6 rounded-2xl border-2 border-white/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <img
                        src="/images/qr_whatsapp_ai.png"
                        alt="WhatsApp QR Code"
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" ref={locationsSectionRef} className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scrolled-section">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full mb-3">
                OUR LOCATIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Where to Find Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit our headquarters or farm location to experience our innovations firsthand.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 scrolled-section">
              {locations.map((location, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-xl shadow-lg h-full transition-all duration-300 hover:shadow-xl">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={location.image} 
                        alt={location.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6 bg-white border-t border-gray-100">
                      <h3 className="text-xl font-bold text-brand-navy mb-3">{location.name}</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPin size={20} className="text-brand-teal mr-3 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-600">{location.address}</p>
                            <a 
                              href={location.mapUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-sm text-brand-blue hover:text-brand-navy inline-block mt-1 transition-colors duration-300"
                            >
                              View on Google Maps →
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Phone size={20} className="text-brand-teal mr-3 flex-shrink-0 mt-1" />
                          <p className="text-gray-600">{location.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center scrolled-section">
              <p className="text-gray-600 mb-6">
                Planning a visit? Contact us in advance to schedule a meeting or tour.
              </p>
              <Button asChild onClick={() => contactSectionRef.current?.scrollIntoView({behavior: 'smooth'})}>
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
