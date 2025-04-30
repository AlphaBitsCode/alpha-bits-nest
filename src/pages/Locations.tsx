
import Locations from '@/components/ui/locations';
import { Navbar1 } from '@/components/ui/shadcnblocks-com-navbar1';
import Footer from '@/components/ui/footer';
import { Helmet } from "react-helmet";

const LocationsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar1 />
      <div className="pt-20">
        <Locations />
      </div>
      <Footer />
    </div>
  );
};

export default LocationsPage;
