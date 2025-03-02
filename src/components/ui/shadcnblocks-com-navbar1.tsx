
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";
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
          url: "/products/mushroom-in-a-box",
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
          icon: <Zap className="size-5 shrink-0" />,
          url: "/services/aiot-product-development",
        },
        {
          title: "CTO-as-a-Service",
          description: "Access top-tier technical leadership without the overhead",
          icon: <Sunset className="size-5 shrink-0" />,
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
    // Reduced py-4 to py-2 to decrease vertical spacing
    <section className="py-2">
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
                <Button variant="outline" size="icon" className="rounded-full">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              {/* Updated SheetContent to be translucent and modern */}
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
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  {mobileExtraLinks.length > 0 && (
                    <div className="border-t border-gray-200/50 py-4">
                      <div className="grid grid-cols-2 justify-start">
                        {mobileExtraLinks.map((link, idx) => (
                          <Link
                            key={idx}
                            className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-white/50 hover:text-primary"
                            to={link.url}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  {(auth.login.text || auth.signup.text) && (
                    <div className="flex flex-col gap-3">
                      {auth.login.text && (
                        <Button asChild variant="outline" className="bg-white/50 backdrop-blur-sm">
                          <Link to={auth.login.url}>{auth.login.text}</Link>
                        </Button>
                      )}
                      {auth.signup.text && (
                        <Button asChild className="bg-primary/90 backdrop-blur-sm">
                          <Link to={auth.signup.url}>{auth.signup.text}</Link>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

// Fixed renderMenuItem function to fix hover menu disappearing
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

// Modernized mobile menu items with translucent style
const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline text-primary">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          <div className="glassmorphism bg-white/30 p-2 rounded-lg space-y-1">
            {item.items.map((subItem) => (
              <Link
                key={subItem.title}
                className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-white/50 hover:text-primary"
                to={subItem.url}
              >
                {subItem.icon && (
                  <div className="bg-brand-teal/10 p-2 rounded-full">
                    {subItem.icon}
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold">{subItem.title}</div>
                  {subItem.description && (
                    <p className="text-sm leading-snug text-muted-foreground">
                      {subItem.description}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link 
      key={item.title} 
      to={item.url} 
      className="font-semibold bg-white/30 backdrop-blur-sm px-4 py-3 rounded-lg hover:bg-white/50 transition-all duration-300 flex items-center"
    >
      {item.title}
    </Link>
  );
};

export { Navbar1 };
