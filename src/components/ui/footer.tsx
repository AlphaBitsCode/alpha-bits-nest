
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-navy text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/images/AB_Logo_white_icon.png" 
                alt="Alpha Bits Logo" 
                className="h-10 w-auto p-1"
              />
              <span className="ml-3 text-xl font-bold">Alpha Bits</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Innovative technology solutions for modern businesses. Specializing in AIoT product development and digital transformation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/products/mushroom-in-a-box" className="text-white/70 hover:text-brand-teal transition-colors duration-200">
                  Mushroom-in-a-Box
                </Link>
              </li>
              <li>
                <Link to="/products/farm-in-box" className="text-white/70 hover:text-brand-teal transition-colors duration-200">
                  Farm In Box
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/70 hover:text-brand-teal transition-colors duration-200">
                  Product Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/aiot-product-development" className="text-white/70 hover:text-brand-teal transition-colors duration-200">
                  AIoT Development
                </Link>
              </li>
              <li>
                <Link to="/services/cto-as-a-service" className="text-white/70 hover:text-brand-teal transition-colors duration-200">
                  CTO-as-a-Service
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-white/70 hover:text-brand-teal transition-colors duration-200">
                  AO Farm Experience
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white/90">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-white/70 hover:text-brand-teal transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-white/70 hover:text-brand-teal transition-colors duration-200">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-brand-teal transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 mt-10 border-t border-white/10 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Alpha Bits. All rights reserved.
          </p>
          <div className="mt-6 sm:mt-0">
            <ul className="flex flex-wrap justify-center sm:justify-end gap-8">
              <li>
                <Link to="/privacy-policy" className="text-white/60 hover:text-brand-teal text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-white/60 hover:text-brand-teal text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-white/60 hover:text-brand-teal text-sm transition-colors duration-200">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
