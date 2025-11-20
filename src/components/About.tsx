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
      className="py-16 md:py-20 lg:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative">
          {/* Image Section - Left Side */}
          <div 
            className={`relative h-[400px] lg:h-[600px] transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src={aboutImage}
              alt="Sobre a Empresa"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Card - Right Side with Overlap */}
          <div 
            className={`bg-white p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center shadow-2xl lg:ml-[-100px] relative z-10 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-primary text-xs md:text-sm font-bold mb-2 uppercase tracking-wider">
              UM POUCO
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight">
              Quem Somos
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                A BOSCO & ASSOCIADOS é composta de uma equipe altamente técnica, especializada e treinada, constituída de Consultores, Engenheiros, Arquitetos, Técnicos, Projetistas e Desenhistas, prontos à atender aos Clientes com soluções personalizadas através de tecnologias no estado da arte.
              </p>
              <p>
                Há 22 anos, vem a cada dia conquistando uma reputação inquestionável como uma das mais eficientes empresas de projeto e consultoria de Sistemas Eletrônicos do mercado nacional e com alguns projetos internacionais, nas áreas prediais e industriais.
              </p>
            </div>
            <Button 
              variant="3d"
              className="mt-8 font-bold px-8 py-6 text-sm md:text-base w-fit"
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
