
import Locations from '@/components/ui/locations';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';

const LocationsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Locations />
      </div>
      <Footer />
    </div>
  );
};

export default LocationsPage;
