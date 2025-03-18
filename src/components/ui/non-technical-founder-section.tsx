
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

interface Challenge {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface NonTechnicalFounderSectionProps {
  challenges: Challenge[];
}

export function NonTechnicalFounderSection({ challenges }: NonTechnicalFounderSectionProps) {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.02]"></div>
        <div 
          className="absolute h-64 w-64 rounded-full bg-gradient-to-r from-brand-teal/30 to-brand-blue/20 blur-3xl -top-20 -left-20 opacity-30"
        ></div>
        <div 
          className="absolute h-64 w-64 rounded-full bg-gradient-to-r from-brand-blue/30 to-brand-teal/20 blur-3xl -bottom-20 -right-20 opacity-30"
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 text-sm font-medium bg-red-100 text-red-800 rounded-full mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>THE TECH DILEMMA</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Non-Technical Founders Face <span className="text-red-600">Critical Decisions</span> Without Proper Guidance
          </h2>
          <p className="text-gray-600 text-lg">
            Making the wrong technology choices can lead to expensive rewrites, missed deadlines, and even business failure. 
            See if these challenges sound familiar:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gray-200 hover:border-red-200 hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4">{challenge.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.description}</p>
                </CardContent>
                {index === challenges.length - 1 && (
                  <CardFooter className="pt-0">
                    <Link to="/services/cto-as-a-service" className="text-brand-teal hover:text-brand-teal/80 font-medium text-sm inline-flex items-center">
                      Learn how we help →
                    </Link>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-brand-navy to-brand-blue rounded-lg text-white text-center">
          <h3 className="text-xl font-bold mb-4">
            Don't let technical confusion cost you time and money
          </h3>
          <p className="mb-6">
            Our Fractional CTO service provides expert guidance to help you navigate the complex technology landscape 
            and make decisions that align with your business goals.
          </p>
          <Link to="/services/cto-as-a-service">
            <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90">
              Get Expert Technology Guidance
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
