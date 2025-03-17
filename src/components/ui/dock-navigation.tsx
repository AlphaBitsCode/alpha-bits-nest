
import { Link } from "react-router-dom";
import { Home, Package, Briefcase, Info, Users, MapPin, PhoneCall, GraduationCap, Server, Box, Clock } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
      icon: <Box className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
      badge: { text: 'Coming Soon' },
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
            <HoverCard openDelay={300} closeDelay={200}>
              <HoverCardTrigger>
                <DockItem 
                  className={`aspect-square rounded-full ${location.pathname === item.url ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-neutral-800'}`}
                >
                  <DockLabel>
                    <span className="flex items-center">
                      {item.name}
                      {item.badge && (
                        <span className="ml-1 bg-brand-teal/20 px-1 py-0.5 rounded-full text-[8px] text-brand-teal flex items-center">
                          <Clock className="w-2 h-2 mr-0.5" />
                          {item.badge.text}
                        </span>
                      )}
                    </span>
                  </DockLabel>
                  <DockIcon>{item.icon}</DockIcon>
                </DockItem>
              </HoverCardTrigger>
              {item.badge && (
                <HoverCardContent className="w-auto p-2">
                  <div className="text-xs">
                    <span className="font-medium">{item.name}</span> - Coming Summer 2025
                  </div>
                </HoverCardContent>
              )}
            </HoverCard>
          </Link>
        ))}
      </Dock>
    </div>
  );
};

export default DockNavigation;
