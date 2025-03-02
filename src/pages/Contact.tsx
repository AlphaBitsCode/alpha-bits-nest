
import { useEffect, useRef } from 'react';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { MapPin, Phone, Mail, Calendar, Clock, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { WorldMap } from '@/components/ui/world-map';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
  useScrollAnimation();
  const location = useLocation();
  const contactSectionRef = useRef<HTMLElement>(null);
  
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
    }
  }, [location]);
  
  const navData = {
    logo: {
      url: "/",
      src: "/images/AB_Logo_icon.png",
      alt: "Alpha Bits Logo",
      title: "Alpha Bits",
    },
    menu: [
      { title: "Home", url: "/" },
      {
        title: "Products",
        url: "/products",
        items: [
          {
            title: "Mushroom-in-a-Box",
            description: "A complete kit for growing gourmet mushrooms at home",
            icon: <MapPin className="size-5 shrink-0" />,
            url: "/products/mushroom-in-a-box",
          },
          {
            title: "Farm In Box",
            description: "Educational package for schools to teach sustainable farming",
            icon: <MapPin className="size-5 shrink-0" />,
            url: "/products/farm-in-box",
          },
        ],
      },
      {
        title: "Services",
        url: "/services",
        items: [
          {
            title: "AIoT Product Development",
            description: "Smart, connected products that solve real-world problems",
            icon: <MapPin className="size-5 shrink-0" />,
            url: "/services/aiot-product-development",
          },
          {
            title: "CTO-as-a-Service",
            description: "Access top-tier technical leadership without the overhead",
            icon: <MapPin className="size-5 shrink-0" />,
            url: "/services/cto-as-a-service",
          },
        ],
      },
      { title: "Experience", url: "/experience" },
      { title: "About", url: "/about" },
      { title: "Locations", url: "/locations" },
      { title: "Contact", url: "/contact" },
    ]
  };
  
  return (
    <div className="min-h-screen">
      <Navbar1 {...navData} />
      
      <div className="pt-16">
        {/* World Map Hero Section */}
        <div className="py-8 bg-white w-full">
          <div className="max-w-7xl mx-auto text-center px-4">
            <p className="font-bold text-xl md:text-4xl text-black">
              Global{" "}
              <span className="text-brand-teal">
                {"Connections".split("").map((word, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </p>
            <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
              We're building innovative solutions that connect people and businesses across continents. 
              Based in Vietnam, we serve clients and partners worldwide.
            </p>
          </div>
          <WorldMap
            dots={[
              {
                start: { lat: 10.762622, lng: 106.660172 }, // Ho Chi Minh City
                end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
              },
              {
                start: { lat: 10.762622, lng: 106.660172 }, // Ho Chi Minh City
                end: { lat: 51.5074, lng: -0.1278 }, // London
              },
              {
                start: { lat: 10.762622, lng: 106.660172 }, // Ho Chi Minh City
                end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              },
              {
                start: { lat: 10.762622, lng: 106.660172 }, // Ho Chi Minh City
                end: { lat: 1.3521, lng: 103.8198 }, // Singapore
              },
              {
                start: { lat: 10.762622, lng: 106.660172 }, // Ho Chi Minh City
                end: { lat: -33.8688, lng: 151.2093 }, // Sydney
              },
            ]}
            lineColor="#36b6ad" // Use brand-teal color
          />
        </div>
        
        <section id="contact" ref={contactSectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50 relative">
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
            
            <div className="grid md:grid-cols-2 gap-12 scrolled-section">
              {/* Telegram QR Code */}
              <div>
                <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-brand-navy mb-6">Connect via Telegram</h3>
                  
                  <div className="flex flex-col items-center justify-center space-y-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      {/* QR code image */}
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://t.me/alpha_bits_bot" 
                        alt="Telegram QR Code for @alpha_bits_bot" 
                        className="w-64 h-64"
                      />
                    </div>
                    
                    <div className="text-center">
                      <p className="text-lg font-medium text-brand-navy mb-2">Scan to Chat</p>
                      <p className="text-gray-600">Or find us at <span className="font-medium text-brand-teal">@alpha_bits_bot</span></p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-col h-full">
                <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-6">
                  <h3 className="text-xl font-bold text-brand-navy mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone size={24} className="text-brand-teal mr-4 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-base font-medium text-brand-navy">Phone</p>
                        <p className="text-base text-gray-600">+84 888 900 317</p>
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
                
                <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
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
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
