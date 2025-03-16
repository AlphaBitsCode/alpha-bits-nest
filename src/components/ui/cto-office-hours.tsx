
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTOOfficeHours() {
  return (
    <section id="cto-service" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl p-1">
              <div className="bg-white rounded-xl overflow-hidden">
                <img 
                  src="/images/office/office_5.jpg" 
                  alt="CTO Office Hours" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">Weekly Open Office Hours</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-brand-teal" />
                      <span className="text-gray-700">Every Tuesday & Thursday</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-brand-teal" />
                      <span className="text-gray-700">3:00 PM Vietnam Time (GMT+7)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-brand-teal" />
                      <span className="text-gray-700">Free 30-minute consultation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-teal/10 text-brand-teal rounded-full mb-3">
              CTO-AS-A-SERVICE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy">
              Book Your First <span className="text-brand-teal">Free Trial</span> Office Hour
            </h2>
            <p className="text-gray-600 mb-6">
              Facing technical challenges or need strategic guidance for your product development? 
              Our experienced CTOs offer complimentary 30-minute consultations during weekly office hours.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
              <h4 className="font-semibold mb-3">During your free consultation:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-brand-teal/10 rounded-full p-1">
                    <ArrowRight className="w-4 h-4 text-brand-teal" />
                  </div>
                  <span>Discuss your current technical challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-brand-teal/10 rounded-full p-1">
                    <ArrowRight className="w-4 h-4 text-brand-teal" />
                  </div>
                  <span>Get actionable advice on product development</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-brand-teal/10 rounded-full p-1">
                    <ArrowRight className="w-4 h-4 text-brand-teal" />
                  </div>
                  <span>Learn how our fractional CTO service can help you</span>
                </li>
              </ul>
            </div>
            
            <Link to="/contact?service=cto-trial">
              <Button className="w-full sm:w-auto" size="lg">
                Book Your CTO Office Hour
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
