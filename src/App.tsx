
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import MushroomInBox from "./pages/products/MushroomInBox";
import FarmInBox from "./pages/products/FarmInBox";
import Services from "./pages/Services";
import LocationsPage from "./pages/Locations"
import ContactPage from "./pages/Contact"
import ExperiencePage from "./pages/Experience";
import AiotProductDevelopment from "./pages/services/AiotProductDevelopment";
import CtoAsAService from "./pages/services/CtoAsAService";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

// Import the new Digital Twin product pages
import DigitalTwinOfficeHome from "./pages/products/DigitalTwinOfficeHome";
import DigitalTwinFarm from "./pages/products/DigitalTwinFarm";
import DigitalTwinFactory from "./pages/products/DigitalTwinFactory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          
          {/* Digital Twin Product Routes */}
          <Route path="/products/office-home" element={<DigitalTwinOfficeHome />} />
          <Route path="/products/farm" element={<DigitalTwinFarm />} />
          <Route path="/products/factory" element={<DigitalTwinFactory />} />
          
          {/* Services routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/service" element={<Navigate to="/services" replace />} />
          <Route path="/services/aiot-product-development" element={<AiotProductDevelopment />} />
          <Route path="/services/cto-as-a-service" element={<CtoAsAService />} />
          <Route path="/services/cto-as-service" element={<Navigate to="/services/cto-as-a-service" replace />} />
          
          {/* Other main routes with alternative paths */}
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/location" element={<Navigate to="/locations" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/experiences" element={<Navigate to="/experience" replace />} />
          
          {/* Privacy, Terms, and Cookie Policy routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          
          {/* Catch-all route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
