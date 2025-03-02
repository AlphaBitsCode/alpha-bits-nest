
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, Package, Briefcase, Users, Info, MapPin, PhoneCall } from 'lucide-react';
import DockNavigation from './dock-navigation';

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
    } else if (path === '/locations') {
      document.title = 'Locations | Alpha Bits';
    } else if (path === '/contact') {
      document.title = 'Contact | Alpha Bits';
    } else if (path === '/experience') {
      document.title = 'Experience | Alpha Bits';
    }
  }, [location]);

  return <DockNavigation />;
};

export default Navigation;
