
import { Book, Home, Menu, Briefcase, Package, Users, InfoIcon, MapPin, PhoneCall, Factory, Trees, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/images/AB_Logo_icon.png",
    alt: "Alpha Bits Logo",
    title: "Alpha Bits",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Products",
      url: "/products",
      items: [
        {
          title: "Mushroom-in-a-Box",
          description: "A complete kit for growing gourmet mushrooms at home",
          icon: <Book className="size-5 shrink-0" />,
          url: "/products/mushroom-in-box",
        },
        {
          title: "Farm In Box",
          description: "Educational package for schools to teach sustainable farming",
          icon: <Trees className="size-5 shrink-0" />,
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
          icon: <Briefcase className="size-5 shrink-0" />,
          url: "/services/aiot-product-development",
        },
        {
          title: "CTO-as-a-Service",
          description: "Access top-tier technical leadership without the overhead",
          icon: <Users className="size-5 shrink-0" />,
          url: "/services/cto-as-a-service",
        },
      ],
    },
    { title: "About", url: "/about" },
    { title: "Experience", url: "/experience" },
    { title: "Locations", url: "/locations" },
    { title: "Contact", url: "/contact" },
  ],
  mobileExtraLinks = [
    { name: "About", url: "/about" },
    { name: "Experience", url: "/experience" },
    { name: "Locations", url: "/locations" },
    { name: "Contact", url: "/contact" },
  ],
  auth = {
    login: { text: "", url: "" },
    signup: { text: "", url: "" },
  },
}: Navbar1Props) => {
  return (
    <section className="py-1">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link to={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          {(auth.login.text || auth.signup.text) && (
            <div className="flex gap-2">
              {auth.login.text && (
                <Button asChild variant="outline" size="sm">
                  <Link to={auth.login.url}>{auth.login.text}</Link>
                </Button>
              )}
              {auth.signup.text && (
                <Button asChild size="sm">
                  <Link to={auth.signup.url}>{auth.signup.text}</Link>
                </Button>
              )}
            </div>
          )}
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link to={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-8" alt={logo.alt} />
              <span className="text-lg font-semibold">{logo.title}</span>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full bg-white/30 backdrop-blur-sm border-white/20">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto bg-white/60 backdrop-blur-xl border border-white/30 shadow-xl">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="w-8" alt={logo.alt} />
                      <span className="text-lg font-semibold">
                        {logo.title}
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-4 flex flex-col gap-1.5">
                  <Link 
                    to="/" 
                    className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-lg hover:bg-white/40 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <Home size={18} strokeWidth={2} className="text-brand-navy" />
                    Home
                  </Link>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-none">
                      <div className="flex items-center">
                        <Link 
                          to="/products" 
                          className="flex-1 px-4 py-1.5 font-medium flex items-center gap-2"
                        >
                          <Package size={18} strokeWidth={2} className="text-brand-teal" />
                          Products
                        </Link>
                        <AccordionTrigger className="py-0 pr-3" />
                      </div>
                      <AccordionContent className="pt-1 pb-1 shadow-none">
                        <div className="bg-transparent p-1 rounded-lg space-y-1 shadow-none">
                          {menu[1].items?.map((item) => (
                            <Link
                              key={item.title}
                              to={item.url}
                              className="flex select-none gap-2 rounded-md p-1.5 leading-none outline-none transition-colors hover:bg-white/40 hover:text-primary"
                            >
                              {item.icon && (
                                <div className="bg-brand-teal/10 p-1.5 rounded-full">
                                  {item.icon}
                                </div>
                              )}
                              <div>
                                <div className="text-sm font-medium">{item.title}</div>
                                {item.description && (
                                  <p className="text-xs leading-snug text-muted-foreground line-clamp-1">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="services" className="border-none">
                      <div className="flex items-center">
                        <Link 
                          to="/services" 
                          className="flex-1 px-4 py-1.5 font-medium flex items-center gap-2"
                        >
                          <Briefcase size={18} strokeWidth={2} className="text-brand-blue" />
                          Services
                        </Link>
                        <AccordionTrigger className="py-0 pr-3" />
                      </div>
                      <AccordionContent className="pt-1 pb-1 shadow-none">
                        <div className="bg-transparent p-1 rounded-lg space-y-1 shadow-none">
                          {menu[2].items?.map((item) => (
                            <Link
                              key={item.title}
                              to={item.url}
                              className="flex select-none gap-2 rounded-md p-1.5 leading-none outline-none transition-colors hover:bg-white/40 hover:text-primary"
                            >
                              {item.icon && (
                                <div className="bg-brand-blue/10 p-1.5 rounded-full">
                                  {item.icon}
                                </div>
                              )}
                              <div>
                                <div className="text-sm font-medium">{item.title}</div>
                                {item.description && (
                                  <p className="text-xs leading-snug text-muted-foreground line-clamp-1">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Link 
                    to="/experience" 
                    className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-lg hover:bg-white/40 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <Lightbulb size={18} strokeWidth={2} className="text-brand-green" />
                    Experience
                  </Link>
                  
                  <Link 
                    to="/about" 
                    className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-lg hover:bg-white/40 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <InfoIcon size={18} strokeWidth={2} className="text-brand-navy" />
                    About
                  </Link>
                  
                  <Link 
                    to="/locations" 
                    className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-lg hover:bg-white/40 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <MapPin size={18} strokeWidth={2} className="text-brand-blue" />
                    Locations
                  </Link>
                  
                  <Link 
                    to="/contact" 
                    className="bg-white/30 backdrop-blur-sm px-4 py-1.5 rounded-lg hover:bg-white/40 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <PhoneCall size={18} strokeWidth={2} className="text-brand-teal" />
                    Contact
                  </Link>
                  
                  <div className="border-t border-gray-200/30 mt-2 pt-4 text-center">
                    <p className="text-sm text-muted-foreground">
                      <span className="italic font-medium">Alpha Bits</span> - Turning Ideas into Reality
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

// This is the desktop menu item rendering
const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="z-50 data-[state=open]:bg-accent/50">
          <Link to={item.url} className="text-muted-foreground hover:text-accent-foreground">
            {item.title}
          </Link>
        </NavigationMenuTrigger>
        <NavigationMenuContent className="z-[1000]">
          <ul className="w-80 p-3">
            <NavigationMenuLink asChild>
              <div className="grid gap-2">
                {item.items.map((subItem) => (
                  <li key={subItem.title}>
                    <Link
                      className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                      to={subItem.url}
                    >
                      {subItem.icon}
                      <div>
                        <div className="text-sm font-semibold">
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <p className="text-sm leading-snug text-muted-foreground">
                            {subItem.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </div>
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <Link
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
        to={item.url}
      >
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

export { Navbar1 };
