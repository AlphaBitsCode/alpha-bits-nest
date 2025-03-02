
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function ServicesCta() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-navy to-brand-blue text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Rocket size={40} className="mx-auto mb-6 text-brand-teal" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Challenges?</h2>
          <p className="text-white/80 mb-8">
            Let's discuss how our services can help you overcome technical obstacles and drive innovation in your business.
          </p>
          <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8">
            <Link to="/contact">Schedule a Free Consultation</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
