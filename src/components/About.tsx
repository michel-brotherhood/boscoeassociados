import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-engineering.jpg";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className="py-16 md:py-20 lg:py-24 bg-muted"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          {/* Image Section */}
          <div 
            className={`relative h-[400px] lg:h-auto transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src={aboutImage}
              alt="Sobre a Empresa"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div 
            className={`bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center shadow-lg transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-primary text-xs md:text-sm font-bold mb-2 uppercase tracking-wider">
              UM POUCO
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              Sobre a Empresa
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut ent tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut ent tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut ent tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut ent tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut ent tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut ent tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <Button 
              variant="3d"
              className="mt-8 font-bold px-8 text-sm md:text-base w-fit"
            >
              SAIBA MAIS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
