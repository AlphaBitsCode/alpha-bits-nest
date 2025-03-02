
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { MoveLeft, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full overflow-hidden relative flex items-center justify-center bg-gradient-to-br from-brand-navy via-brand-blue to-brand-teal">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute inset-0 opacity-${2 + i} animate-float`}
            style={{
              animationDelay: `${i * 0.5}s`,
              background: `radial-gradient(circle at ${50 + i * 10}% ${
                40 + i * 10
              }%, rgba(38, 149, 162, 0.${3 + i}) 0%, rgba(46, 51, 91, 0.${
                i + 1
              }) 50%)`,
              transform: `scale(${1 + i * 0.1})`,
              filter: `blur(${5 + i * 2}px)`,
            }}
          />
        ))}
      </div>

      {/* Floating Card */}
      <div className="relative z-10 glassmorphism p-8 md:p-12 max-w-lg w-full mx-4 animate-float" style={{ animationDelay: "1s" }}>
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-full p-3 shadow-lg">
          <AlertCircle className="h-8 w-8 text-brand-navy" />
        </div>
        
        <div className="flex flex-col items-center justify-center text-white space-y-6 mt-4">
          {/* Logo */}
          <img 
            src="/images/AB_Logo_white_icon.png" 
            alt="AlphaBits Logo" 
            className="h-16 w-16 object-contain mb-2"
          />
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-2">404</h1>
            <div className="h-0.5 w-20 bg-white/50 mx-auto my-4"></div>
            <h2 className="text-xl md:text-2xl font-medium mb-4">Page Not Found</h2>
            <p className="text-white/80 max-w-sm mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <a 
            href="/" 
            className="group flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-6 py-3 transition-all duration-300"
          >
            <MoveLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Return to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
