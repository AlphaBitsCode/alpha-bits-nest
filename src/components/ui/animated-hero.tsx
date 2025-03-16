
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["leadership", "expertise", "guidance", "strategy", "success"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full bg-gradient-to-b from-brand-navy/95 to-brand-navy/80 text-white">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-32 items-center justify-center flex-col">
          <div>
            <Link to="/services/cto-as-a-service">
              <Button variant="secondary" size="sm" className="gap-4">
                Fractional CTO Services <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular">
              <span className="text-brand-teal">CTO-level</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white/80 max-w-2xl text-center">
              Access senior CTO expertise without the full-time commitment.
              Book your first complimentary consultation during our weekly open office hours.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Link to="#cto-service">
              <Button size="lg" className="gap-4" variant="default">
                Book Trial Office Hour <Calendar className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/services/cto-as-a-service">
              <Button size="lg" className="gap-4" variant="outline">
                Learn More <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
