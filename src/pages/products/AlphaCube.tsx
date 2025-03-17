
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { PreorderForm } from '@/components/ui/preorder-form';
import { Toaster } from '@/components/ui/sonner';

const AlphaCube = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  useEffect(() => {
    document.title = "Alpha Cube | Alpha Bits";
    
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const cubeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1],
      }
    }
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };
  
  const glowVariants = {
    initial: { opacity: 0.5, boxShadow: '0 0 20px rgba(0, 255, 150, 0.3)' },
    animate: { 
      opacity: [0.5, 0.8, 0.5], 
      boxShadow: ['0 0 20px rgba(0, 255, 150, 0.3)', '0 0 40px rgba(0, 255, 150, 0.6)', '0 0 20px rgba(0, 255, 150, 0.3)'],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Toaster />
      
      <section className="flex-grow flex items-center justify-center bg-black relative overflow-hidden">
        {/* Ambient light effects */}
        <div className="absolute w-40 h-40 rounded-full bg-teal-400/5 blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-64 h-64 rounded-full bg-green-400/5 blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 py-24 relative z-10 flex flex-col items-center justify-center">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={cubeVariants}
              className="relative mb-16 mx-auto"
            >
              {/* The 3D Cube with isometric view */}
              <motion.div
                variants={glowVariants}
                initial="initial"
                animate="animate"
                className="relative w-64 h-64 md:w-96 md:h-96 mx-auto transform-gpu perspective-1000"
              >
                <div className="absolute inset-0 transform rotate-45 preserve-3d">
                  <div className="absolute w-full h-full bg-black/50 backdrop-blur-md border border-teal-500/20 transform translate-z-48 rotate-y-35 rotate-x-30 glassmorphism">
                    {/* Front face with subtle glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-black/90"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-t from-green-700/20 to-teal-500/30 blur-md"></div>
                    </div>
                  </div>
                </div>
                
                {/* Light beam effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[500px] bg-gradient-to-b from-teal-500/10 via-teal-500/5 to-transparent transform -translate-y-full rotate-12 blur-md"></div>
                
                {/* Subtle mushroom silhouette hint */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-20">
                  <div className="w-full h-12 rounded-t-full bg-white/10"></div>
                  <div className="w-4 h-12 mx-auto bg-white/10"></div>
                </div>
              </motion.div>
              
              {/* Reflection */}
              <div className="mt-4 w-64 h-12 md:w-96 md:h-16 mx-auto bg-gradient-to-t from-teal-500/5 to-transparent blur-md rounded-full"></div>
            </motion.div>
            
            <motion.h1 
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate={controls}
              className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-300">
                Alpha Cube
              </span>
            </motion.h1>
            
            <motion.p 
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate={controls}
              className="text-2xl md:text-3xl text-gray-400 tracking-wide mb-12"
            >
              Summer 2025
            </motion.p>
          </div>

          {/* Pre-order Form */}
          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="max-w-xl w-full mx-auto bg-black/70 backdrop-blur-lg border border-teal-500/20 p-6 md:p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Reserve Your <span className="text-teal-400">Alpha Cube</span>
            </h2>
            <PreorderForm 
              defaultProduct="Alpha-Cube"
              buttonText="Get Notified" 
              className="text-white"
            />
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AlphaCube;
