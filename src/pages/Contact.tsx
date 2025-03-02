
import { WorldMap } from '@/components/ui/world-map';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
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
      
      {/* World Map Section */}
      <div className="pt-24 py-12 dark:bg-black bg-white w-full">
        <div className="max-w-7xl mx-auto text-center px-4">
          <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
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
            Our team works across global locations to deliver innovative solutions anywhere. 
            Connect with us from Da Nang, San Francisco, Berlin, or Singapore.
          </p>
        </div>
        <WorldMap
          lineColor="#2695A2"
          dots={[
            {
              start: { lat: 16.0544, lng: 108.2022 }, // Da Nang, Vietnam
              end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
            },
            {
              start: { lat: 16.0544, lng: 108.2022 }, // Da Nang, Vietnam
              end: { lat: 52.5200, lng: 13.4050 }, // Berlin
            },
            {
              start: { lat: 16.0544, lng: 108.2022 }, // Da Nang, Vietnam
              end: { lat: 1.3521, lng: 103.8198 }, // Singapore
            },
          ]}
        />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl font-bold mb-6 gradient-text">Get in Touch</h1>
            <p className="text-gray-600 mb-8">
              Ready to discuss your project? Have questions about our products or services? We're here to help.
            </p>
            
            <div className="space-y-8 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Headquarters</h3>
                  <p className="text-gray-600">123 Tech Park, Da Nang, Vietnam</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Our Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (GMT+7 Vietnam)</p>
                </div>
              </div>
            </div>
            
            <a href="https://cal.com/alphabits/mini" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full mb-6">
                Book a 30-minute Consultation <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">Connect via Telegram</h2>
            <div className="flex justify-center mb-6">
              <img 
                src="/images/AB_Logo_icon.png" 
                alt="Alpha Bits QR Code" 
                className="w-48 h-48 object-contain"
              />
            </div>
            <p className="text-center text-gray-600 mb-4">
              Scan this QR code with your Telegram app to chat with us directly
            </p>
            <p className="text-center font-semibold">
              @alpha_bits_bot
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
