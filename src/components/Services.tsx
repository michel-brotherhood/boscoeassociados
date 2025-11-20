import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const services = [
  "Consultoria Técnica",
  "Projetos de Redes de Cabeamento Estruturado",
  "Projetos de Supervisão e Controle Predial",
  "Projetos de Instalações Telefônicas",
  "Projetos de Instalações de Redes Lógicas Locais",
  "Projetos de Detecção e Alarme de Incêndio",
  "Projetos de Circuito Fechado de TV",
  "Projetos de Sonorização Ambiente",
  "Gerenciamento e Fiscalização de Obras",
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} id="servicos" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8 md:mb-12">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6">
              A BOSCO & ASSOCIADOS é uma empresa dedicada a todos os segmentos de Engenharia e Arquitetura, executando:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-500 hover:translate-x-2 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-foreground font-medium">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
