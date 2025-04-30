import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import MushroomInBox from "./pages/products/MushroomInBox";
import FarmInBox from "./pages/products/FarmInBox";
import AlphaCube from "./pages/products/AlphaCube";
import Services from "./pages/Services";
import LocationsPage from "./pages/Locations"
import ContactPage from "./pages/Contact"
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

// Import the Digital Twin product pages
import DigitalTwinOfficeHome from "./pages/products/DigitalTwinOfficeHome";
import DigitalTwinFarm from "./pages/products/DigitalTwinFarm";
import DigitalTwinFactory from "./pages/products/DigitalTwinFactory";

// Import service pages
import AiotProductDevelopment from "./pages/services/AiotProductDevelopment";
import CtoAsAService from "./pages/services/CtoAsAService";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";

// Import the experiences pages
import ExperiencesIndex from "./pages/experiences/ExperiencesIndex";
import AoFarmPage from "./pages/experiences/AoFarmPage";
import EventsPage from "./pages/experiences/EventsPage";

// Import blog pages
import BlogIndex from "./pages/blog/BlogIndex";
import BlogPost from "./pages/blog/BlogPost";
import CoursesIndex from "./pages/courses/CoursesIndex";
import CoursesIndexVN from "./pages/courses/CoursesIndexVN";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Base route */}
              <Route path="/" element={<Index />} />
              
              {/* Products routes */}
              <Route path="/products" element={<Products />} />
              <Route path="/product" element={<Navigate to="/products" replace />} />
              <Route path="/products/mushroom-in-a-box" element={<MushroomInBox />} />
              <Route path="/products/mushroom-in-box" element={<Navigate to="/products/mushroom-in-a-box" replace />} />
              <Route path="/products/farm-in-box" element={<FarmInBox />} />
              <Route path="/products/farm-in-a-box" element={<Navigate to="/products/farm-in-box" replace />} />
              <Route path="/products/alpha-cube" element={<AlphaCube />} />
              
              {/* Digital Twin Product Routes */}
              <Route path="/products/office-home" element={<DigitalTwinOfficeHome />} />
              <Route path="/products/farm" element={<DigitalTwinFarm />} />
              <Route path="/products/factory" element={<DigitalTwinFactory />} />
              
              {/* Services routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/service" element={<Navigate to="/services" replace />} />
              <Route path="/services/aiot-product-development" element={<AiotProductDevelopment />} />
              <Route path="/services/cto-as-a-service" element={<CtoAsAService />} />
              <Route path="/services/software-development" element={<SoftwareDevelopment />} />
              <Route path="/services/cto-as-service" element={<Navigate to="/services/cto-as-a-service" replace />} />
              
              {/* Experiences routes */}
              <Route path="/experiences" element={<ExperiencesIndex />} />
              <Route path="/experience" element={<Navigate to="/experiences" replace />} />
              <Route path="/experiences/ao-farm" element={<AoFarmPage />} />
              <Route path="/experiences/events" element={<EventsPage />} />
              
              {/* Blog routes */}
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Other main routes with alternative paths */}
              <Route path="/about" element={<About />} />
              <Route path="/about-us" element={<Navigate to="/about" replace />} />
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/location" element={<Navigate to="/locations" replace />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
              
              {/* Privacy, Terms, and Cookie Policy routes */}
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />

              {/* Courses routes */}
              <Route path="/courses" element={<CoursesIndex />} />
              <Route path="/khoa-hoc-ai-workflow-automation" element={<CoursesIndexVN />} />
              {/* Catch-all route - must be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
