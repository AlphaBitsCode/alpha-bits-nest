
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, Package, Briefcase, Users, Info, MapPin, PhoneCall } from 'lucide-react';
import { NavBar } from './tubelight-navbar';

const Navigation = () => {
  const location = useLocation();

  // Determine the active tab based on the current location
  useEffect(() => {
    const path = location.pathname;
    
    // Set active tab based on current path
    if (path === '/') {
      document.title = 'Home | Alpha Bits';
    } else if (path.startsWith('/products')) {
      document.title = 'Products | Alpha Bits';
    } else if (path.startsWith('/services')) {
      document.title = 'Services | Alpha Bits';
    } else if (path.startsWith('/about')) {
      document.title = 'About | Alpha Bits';
    }
  }, [location]);

  const navItems = [
    { 
      name: 'Home', 
      url: '/', 
      icon: Home 
    },
    { 
      name: 'Products', 
      url: '/products',
      icon: Package,
      dropdown: true,
      items: [
        { name: 'Mushroom-in-a-Box', url: '/products/mushroom-in-a-box' },
        { name: 'Farm In Box', url: '/products/farm-in-box' }
      ]
    },
    { 
      name: 'Services', 
      url: '/services',
      icon: Briefcase,
      dropdown: true,
      items: [
        { name: 'AIoT Product Development', url: '/services/aiot-product-development' },
        { name: 'CTO-as-a-Service', url: '/services/cto-as-a-service' }
      ]
    },
    { 
      name: 'About', 
      url: '/about', 
      icon: Info 
    },
    { 
      name: 'Experience', 
      url: '/#experience', 
      icon: Users 
    },
    { 
      name: 'Locations', 
      url: '/#locations', 
      icon: MapPin 
    },
    { 
      name: 'Contact', 
      url: '/#contact', 
      icon: PhoneCall 
    }
  ];

  return (
    <NavBar items={navItems} className="bg-transparent" />
  );
};

export default Navigation;
