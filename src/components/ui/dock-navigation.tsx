
import { Link } from "react-router-dom";
import { Home, Package, Briefcase, Info, Users, MapPin, PhoneCall, GraduationCap, Server, Cube } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { useLocation } from "react-router-dom";

const DockNavigation = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      name: 'Home', 
      url: '/', 
      icon: <Home className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    },
    { 
      name: 'IoT Solutions', 
      url: '/products',
      icon: <Server className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    },
    { 
      name: 'Education', 
      url: '/products',
      icon: <GraduationCap className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    },
    { 
      name: 'Alpha Cube', 
      url: '/products/alpha-cube',
      icon: <Cube className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    },
    { 
      name: 'Services', 
      url: '/services',
      icon: <Briefcase className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    },
    { 
      name: 'About', 
      url: '/about', 
      icon: <Info className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    },
    { 
      name: 'Experience', 
      url: '/experience', 
      icon: <Users className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    },
    { 
      name: 'Locations', 
      url: '/locations', 
      icon: <MapPin className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    },
    { 
      name: 'Contact', 
      url: '/contact', 
      icon: <PhoneCall className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    }
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-screen-xl">
      <Dock className="items-end pb-2">
        {navItems.map((item, idx) => (
          <Link to={item.url} key={idx}>
            <DockItem 
              className={`aspect-square rounded-full ${location.pathname === item.url ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-neutral-800'}`}
            >
              <DockLabel>{item.name}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
};

export default DockNavigation;
