
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import MushroomInBox from "./pages/products/MushroomInBox";
import FarmInBox from "./pages/products/FarmInBox";
import Services from "./pages/Services";
import LocationsPage from "./pages/Locations"
import ContactPage from "./pages/Locations"
import AiotProductDevelopment from "./pages/services/AiotProductDevelopment";
import CtoAsAService from "./pages/services/CtoAsAService";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/mushroom-in-a-box" element={<MushroomInBox />} />
          <Route path="/products/farm-in-box" element={<FarmInBox />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/aiot-product-development" element={<AiotProductDevelopment />} />
          <Route path="/services/cto-as-a-service" element={<CtoAsAService />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
