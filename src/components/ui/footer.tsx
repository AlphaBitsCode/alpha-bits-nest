
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/ab4e2f49-f675-4ebc-b152-16d6324970e5.png" 
                alt="Alpha Bits Logo" 
                className="h-10 w-auto bg-white p-1 rounded"
              />
              <span className="ml-3 text-xl font-bold">Alpha Bits</span>
            </div>
            <p className="text-white/70 mb-6">
              Innovative technology solutions for modern businesses. Specializing in AIoT product development and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-white/70 hover:text-white transition-colors duration-200">Mushroom-in-a-Box</a>
              </li>
              <li>
                <a href="#products" className="text-white/70 hover:text-white transition-colors duration-200">Farm In Box</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Product Support</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Documentation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-200">AIoT Development</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors duration-200">CTO-as-a-Service</a>
              </li>
              <li>
                <a href="#experience" className="text-white/70 hover:text-white transition-colors duration-200">AO Farm Experience</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Consulting</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#locations" className="text-white/70 hover:text-white transition-colors duration-200">Locations</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Careers</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} Alpha Bits. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex flex-wrap justify-center sm:justify-end space-x-8">
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
