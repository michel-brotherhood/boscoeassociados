import { Headset, Users, Cog, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Headset,
    title: "Atendimento Personalizado",
    description: "Equipe dedicada para entender suas necessidades e oferecer soluções customizadas em sistemas eletrônicos para seu projeto predial ou industrial.",
  },
  {
    icon: Users,
    title: "Profissionais Qualificados",
    description: "Consultores, Engenheiros, Arquitetos e Técnicos especializados, altamente treinados e preparados para projetos de alta complexidade.",
  },
  {
    icon: Cog,
    title: "Tecnologia de Ponta",
    description: "Utilizamos as mais modernas tecnologias em cabeamento estruturado, CFTV, alarme de incêndio, sonorização e controle predial.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Comprovados",
    description: "22 anos de experiência com portfólio consolidado em projetos nacionais e internacionais nas áreas predial e industrial.",
  },
];

const Features = () => {
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
    <section ref={sectionRef} className="relative z-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLast = index === features.length - 1;
              return (
                <div 
                  key={index} 
                  className={`text-center p-6 md:p-8 transition-all duration-700 relative rounded-lg
                    ${!isLast ? "lg:border-r border-border/60" : ""} 
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    animation: isVisible ? `fadeInScale 0.6s ease-out forwards ${index * 150}ms` : 'none'
                  }}
                >
                  {/* Icon with continuous animation */}
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-4 cursor-pointer hover:bg-primary/20 hover:scale-125 hover:rotate-12 transition-all duration-500"
                    style={{ animation: 'float 3s ease-in-out infinite' }}
                  >
                    <Icon 
                      className="w-8 h-8 md:w-10 md:h-10 text-primary transition-all duration-500 hover:scale-125 hover:rotate-12" 
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-[250px] mx-auto">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
