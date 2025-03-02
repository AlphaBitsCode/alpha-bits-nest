
import { Youtube, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/images/AB_Logo_white_icon.png" 
                alt="Alpha Bits Logo" 
                className="h-10 w-auto p-1"
              />
              <span className="ml-3 text-xl font-bold">Alpha Bits</span>
            </div>
            <p className="text-white/70 mb-6">
              Innovative technology solutions for modern businesses. Specializing in AIoT product development and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                <Twitter size={18} />
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
                <Link to="/products/mushroom-in-a-box" className="text-white/70 hover:text-white transition-colors duration-200">Mushroom-in-a-Box</Link>
              </li>
              <li>
                <Link to="/products/farm-in-box" className="text-white/70 hover:text-white transition-colors duration-200">Farm In Box</Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-white transition-colors duration-200">Product Support</Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-white transition-colors duration-200">Documentation</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/aiot-product-development" className="text-white/70 hover:text-white transition-colors duration-200">AIoT Development</Link>
              </li>
              <li>
                <Link to="/services/cto-as-a-service" className="text-white/70 hover:text-white transition-colors duration-200">CTO-as-a-Service</Link>
              </li>
              <li>
                <Link to="/experience" className="text-white/70 hover:text-white transition-colors duration-200">AO Farm Experience</Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors duration-200">Consulting</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/experience" className="text-white/70 hover:text-white transition-colors duration-200">Experience</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/locations" className="text-white/70 hover:text-white transition-colors duration-200">Locations</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-white transition-colors duration-200">Contact Us</Link>
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
                <Link to="/about" className="text-white/70 hover:text-white text-sm transition-colors duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white text-sm transition-colors duration-200">Terms of Service</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-white text-sm transition-colors duration-200">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
