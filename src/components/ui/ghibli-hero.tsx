
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Sun, Tree, TreeDeciduous } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function GhibliHero() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const taglines = [
    "Free your dreams,",
    "Let us handle your technology."
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Parallax background layers */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="absolute inset-0 bg-ghibli-gradient opacity-80"></div>
      </div>
      
      {/* Floating clouds */}
      <motion.div 
        className="absolute top-[5%] right-[10%] z-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud className="w-24 h-24 text-white/80" />
      </motion.div>
      
      <motion.div 
        className="absolute top-[20%] left-[15%] z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Cloud className="w-16 h-16 text-white/80" />
      </motion.div>
      
      <motion.div 
        className="absolute top-[30%] right-[25%] z-10"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Cloud className="w-20 h-20 text-white/90" />
      </motion.div>
      
      {/* Sun */}
      <motion.div 
        className="absolute top-[10%] left-[25%] z-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <Sun className="w-32 h-32 text-ghibli-sunset/70" />
      </motion.div>
      
      {/* Trees */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="relative h-64">
          <motion.div 
            className="absolute bottom-0 left-[10%]"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <TreeDeciduous className="w-40 h-40 text-ghibli-forest" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 right-[20%]"
            animate={{ x: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Tree className="w-32 h-32 text-ghibli-forest" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-[40%]"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <TreeDeciduous className="w-36 h-36 text-ghibli-forest" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 right-[5%]"
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <Tree className="w-44 h-44 text-ghibli-forest" />
          </motion.div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 h-screen flex flex-col justify-center items-center">
        <motion.div 
          className="ghibli-glass p-8 md:p-12 max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-ghibli text-ghibli-night leading-tight mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {taglines[0]}
            <br />
            <span className="text-ghibli-accent">{taglines[1]}</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-ghibli-night/80 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            We transform complex technology challenges into elegant, effortless solutions
            that let your business thrive while you focus on what truly matters.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-ghibli-accent hover:bg-ghibli-accent/90 text-white rounded-full px-8"
              >
                Start Your Journey
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-ghibli-forest text-ghibli-forest hover:bg-ghibli-forest/10 rounded-full px-8"
              >
                Explore Our Magic
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
