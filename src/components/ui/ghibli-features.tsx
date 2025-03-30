
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string;
}

interface GhibliFeaturesProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function GhibliFeatures({
  features,
  className,
  title = "How We Help Businesses",
  autoPlayInterval = 4000,
  imageHeight = "h-[400px]",
}: GhibliFeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("py-20 relative overflow-hidden", className)}>
      {/* Ghibli-style background elements */}
      <div className="absolute inset-0 bg-ghibli-gradient/50 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center font-ghibli text-ghibli-night"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16">
          <motion.div 
            className="order-2 md:order-1 space-y-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center border-2",
                    index === currentFeature
                      ? "bg-ghibli-accent border-ghibli-accent text-white"
                      : "bg-white/50 border-ghibli-night/20 text-ghibli-night/50",
                  )}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCurrentFeature(index)}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3 className={cn(
                    "text-xl md:text-2xl font-semibold font-ghibli transition-colors",
                    index === currentFeature ? "text-ghibli-night" : "text-ghibli-night/60"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn(
                    "text-sm md:text-lg transition-colors",
                    index === currentFeature ? "text-ghibli-night/80" : "text-ghibli-night/50"
                  )}>
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={cn(
              "order-1 md:order-2 relative overflow-hidden rounded-xl shadow-xl",
              imageHeight
            )}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ghibli-night/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white mb-2">
                          {feature.step}
                        </span>
                        <h3 className="text-2xl font-bold text-white font-ghibli">
                          {feature.title || feature.step}
                        </h3>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
