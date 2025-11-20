import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Users, Network, Monitor, Phone, Wifi, Flame, Video, Volume2, ClipboardCheck } from "lucide-react";

const services = [
  {
    title: "Consultoria Técnica",
    description: "Consultoria especializada em engenharia e arquitetura para otimização de projetos.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
  },
  {
    title: "Redes de Cabeamento Estruturado",
    description: "Projetos completos de infraestrutura de cabeamento estruturado.",
    icon: Network,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
  },
  {
    title: "Supervisão e Controle Predial",
    description: "Sistemas de supervisão e automação para controle predial integrado.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop",
  },
  {
    title: "Instalações Telefônicas",
    description: "Projetos de infraestrutura telefônica para ambientes corporativos.",
    icon: Phone,
    image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&h=300&fit=crop",
  },
  {
    title: "Redes Lógicas Locais",
    description: "Projetos de redes lógicas locais (LAN) para conectividade eficiente.",
    icon: Wifi,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=300&fit=crop",
  },
  {
    title: "Detecção e Alarme de Incêndio",
    description: "Sistemas de detecção e alarme para segurança contra incêndio.",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=500&h=300&fit=crop",
  },
  {
    title: "Circuito Fechado de TV",
    description: "Projetos de CFTV para monitoramento e segurança patrimonial.",
    icon: Video,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&h=300&fit=crop",
  },
  {
    title: "Sonorização Ambiente",
    description: "Sistemas de áudio ambiente para espaços comerciais e corporativos.",
    icon: Volume2,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&h=300&fit=crop",
  },
  {
    title: "Gerenciamento e Fiscalização",
    description: "Gerenciamento completo e fiscalização técnica de obras.",
    icon: ClipboardCheck,
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=500&h=300&fit=crop",
  },
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-primary text-xs md:text-sm font-semibold mb-1 uppercase tracking-wide">Conheça nossa</p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Atuação
            </h2>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              A BOSCO & ASSOCIADOS é uma empresa dedicada a todos os segmentos de Engenharia e Arquitetura.
            </p>
            <Button className="bg-primary hover:bg-primary/90 font-bold text-xs md:text-sm px-6 md:px-8">
              SAIBA MAIS
            </Button>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index} 
                  className={`group cursor-pointer transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 md:h-56 rounded-lg overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-105">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/90 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <h3 className="text-base md:text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary font-semibold text-xs md:text-sm p-0 h-auto hover:bg-transparent group-hover:translate-x-1 transition-transform"
                    >
                      Saiba Mais →
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
