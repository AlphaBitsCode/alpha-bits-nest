
import { useEffect, useState, useRef } from 'react';

export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxLayers = document.querySelectorAll('.parallax-element');
      
      parallaxLayers.forEach((layer: any) => {
        const speed = layer.getAttribute('data-speed') || 0.5;
        const yPos = -(scrolled * speed);
        layer.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.scrolled-section');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
};

export const useImageLoader = (imgRef: React.RefObject<HTMLImageElement>) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = imgRef.current;
    if (!image) return;

    if (image.complete) {
      setIsLoaded(true);
    } else {
      image.classList.add('loading');
      image.onload = () => {
        setIsLoaded(true);
        image.classList.remove('loading');
        image.classList.add('loaded');
      };
    }
  }, [imgRef]);

  return isLoaded;
};

export const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const index = useRef(0);

  useEffect(() => {
    if (!text) return;
    
    index.current = 0;
    setDisplayText('');
    
    const interval = setInterval(() => {
      if (index.current < text.length) {
        setDisplayText(prev => prev + text.charAt(index.current));
        index.current += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);
    
    return () => clearInterval(interval);
  }, [text, speed]);
  
  return displayText;
};
