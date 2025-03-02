
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { useTypewriter } from '@/lib/animations';

const Hero = () => {
  const headingText = "Transform Your Business with Digital Innovation";
  const displayText = useTypewriter(headingText, 50);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const deltaX = (clientX - centerX) / centerX;
      const deltaY = (clientY - centerY) / centerY;
      
      const particles = heroRef.current.querySelectorAll('.parallax-particle');
      particles.forEach((particle: any) => {
        const speed = parseFloat(particle.getAttribute('data-speed') || '0.05');
        const x = deltaX * 40 * speed;
        const y = deltaY * 40 * speed;
        particle.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen overflow-hidden" ref={heroRef}>
      {/* Background gradient animation */}
      <div className="absolute inset-0 animated-gradient"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="parallax-particle absolute rounded-full bg-white/20"
            data-speed={0.05 + Math.random() * 0.15}
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.4,
            }}
          ></div>
        ))}
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center relative z-10">
        <div className="glassmorphism p-8 md:p-12 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {displayText}
            <span className="inline-block animate-fade-in">|</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-in delay-500">
            Alpha Bits delivers cutting-edge tech solutions for business transformation.
            We specialize in IoT, AI integration, and product development.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-700">
            <a 
              href="#products" 
              className="px-8 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Products
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium rounded-lg border border-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Our Services
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#products" className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300">
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
