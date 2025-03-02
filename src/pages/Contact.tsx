
import Contact from '@/components/ui/contact';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
