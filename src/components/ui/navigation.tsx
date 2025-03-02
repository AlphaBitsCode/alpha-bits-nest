
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Products', 
      path: '/products',
      dropdown: true,
      items: [
        { name: 'Mushroom-in-a-Box', path: '/products/mushroom-in-a-box' },
        { name: 'Farm In Box', path: '/products/farm-in-box' }
      ]
    },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: true,
      items: [
        { name: 'AIoT Product Development', path: '/services/aiot-product-development' },
        { name: 'CTO-as-a-Service', path: '/services/cto-as-a-service' }
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Locations', path: '/#locations' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl md:text-2xl text-brand-navy">Alpha Bits</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => {
                  if (item.name === 'Products') setProductsDropdownOpen(true);
                  if (item.name === 'Services') setServicesDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (item.name === 'Products') setProductsDropdownOpen(false);
                  if (item.name === 'Services') setServicesDropdownOpen(false);
                }}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center ${
                    isActive(item.path)
                      ? 'text-brand-teal'
                      : isScrolled
                      ? 'text-gray-700 hover:text-brand-teal'
                      : 'text-gray-800 hover:text-brand-teal'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${
                      (item.name === 'Products' && productsDropdownOpen) || 
                      (item.name === 'Services' && servicesDropdownOpen) 
                        ? 'rotate-180' 
                        : ''
                    }`} />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div 
                    className={`absolute left-0 mt-0 w-60 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 transform origin-top-left ${
                      (item.name === 'Products' && productsDropdownOpen) || 
                      (item.name === 'Services' && servicesDropdownOpen) 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                  >
                    <div className="py-2">
                      {item.items?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`block px-4 py-3 text-sm ${
                            isActive(subItem.path)
                              ? 'text-brand-teal bg-gray-50'
                              : 'text-gray-700 hover:text-brand-teal hover:bg-gray-50'
                          } transition-colors duration-200`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-teal focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md shadow-lg">
          {menuItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => {
                      if (item.name === 'Products') setProductsDropdownOpen(!productsDropdownOpen);
                      if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                    }}
                    className={`flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.path) ? 'text-brand-teal' : 'text-gray-700 hover:text-brand-teal'
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform duration-300 ${
                      (item.name === 'Products' && productsDropdownOpen) || 
                      (item.name === 'Services' && servicesDropdownOpen) 
                        ? 'rotate-180' 
                        : ''
                    }`} />
                  </button>
                  
                  <div 
                    className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${
                      (item.name === 'Products' && productsDropdownOpen) || 
                      (item.name === 'Services' && servicesDropdownOpen) 
                        ? 'max-h-40 opacity-100 py-2' 
                        : 'max-h-0 opacity-0 py-0'
                    }`}
                  >
                    {item.items?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`block px-4 py-2 text-sm rounded-md ${
                          isActive(subItem.path)
                            ? 'text-brand-teal bg-gray-50'
                            : 'text-gray-600 hover:text-brand-teal hover:bg-gray-50'
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path) ? 'text-brand-teal' : 'text-gray-700 hover:text-brand-teal'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
