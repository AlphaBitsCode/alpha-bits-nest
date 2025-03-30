
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function GhibliOfficeHours() {
  return (
    <section id="cto-service" className="py-20 relative overflow-hidden">
      {/* Moving background clouds */}
      <div className="absolute inset-0 bg-ghibli-cloud/30 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-1">
              <img 
                src="/images/office/office_5.jpg" 
                alt="CTO Office Hours" 
                className="w-full h-80 object-cover"
              />
              <div className="ghibli-glass p-6">
                <h3 className="text-2xl font-bold text-ghibli-night mb-4 font-ghibli">Weekly Open Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="ghibli-icon-bg">
                      <Calendar className="w-5 h-5 text-ghibli-forest" />
                    </div>
                    <span className="text-ghibli-night">Every Tuesday & Thursday</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="ghibli-icon-bg">
                      <Clock className="w-5 h-5 text-ghibli-forest" />
                    </div>
                    <span className="text-ghibli-night">3:00 PM Vietnam Time (GMT+7)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="ghibli-icon-bg">
                      <Users className="w-5 h-5 text-ghibli-forest" />
                    </div>
                    <span className="text-ghibli-night">Free 30-minute consultation</span>
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
            <div className="ghibli-glass p-8 transform -rotate-1">
              <span className="inline-block px-4 py-2 rounded-full text-xs font-medium bg-ghibli-dream text-ghibli-night mb-3">
                CTO-AS-A-SERVICE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-ghibli-night font-ghibli">
                Book Your First <span className="text-ghibli-accent">Free Trial</span> Office Hour
              </h2>
              <p className="text-ghibli-night/80 mb-6">
                Facing technical challenges or need strategic guidance for your product development? 
                Our experienced CTOs offer complimentary 30-minute consultations during weekly office hours.
              </p>
              
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/50">
                <h4 className="font-semibold mb-3 text-ghibli-night">During your free consultation:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-ghibli-accent/20 rounded-full p-1">
                      <ArrowRight className="w-4 h-4 text-ghibli-accent" />
                    </div>
                    <span className="text-ghibli-night/90">Discuss your current technical challenges</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-ghibli-accent/20 rounded-full p-1">
                      <ArrowRight className="w-4 h-4 text-ghibli-accent" />
                    </div>
                    <span className="text-ghibli-night/90">Get actionable advice on product development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-ghibli-accent/20 rounded-full p-1">
                      <ArrowRight className="w-4 h-4 text-ghibli-accent" />
                    </div>
                    <span className="text-ghibli-night/90">Learn how our fractional CTO service can help you</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/contact?service=cto-trial">
                <Button className="ghibli-button w-full sm:w-auto">
                  Book Your CTO Office Hour
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
