import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Users, Network, Monitor, Phone, Wifi, Flame, Video, Volume2, ClipboardCheck } from "lucide-react";
import consultoriaTecnica from "@/assets/services/consultoria-tecnica.webp";
import cabeamentoEstruturado from "@/assets/services/cabeamento-estruturado.webp";
import supervisaoControle from "@/assets/services/supervisao-controle.webp";
import instalacoesTelefonicas from "@/assets/services/instalacoes-telefonicas.webp";
import redesLogicas from "@/assets/services/redes-logicas.webp";
import alarmeIncendio from "@/assets/services/alarme-incendio.webp";
import cftv from "@/assets/services/cftv.webp";
import sonorizacao from "@/assets/services/sonorizacao.webp";
import gerenciamento from "@/assets/services/gerenciamento.webp";

const services = [
  {
    title: "Consultoria Técnica",
    description: "Consultoria especializada em engenharia e arquitetura para otimização de projetos.",
    icon: Users,
    image: consultoriaTecnica,
    category: "consultoria",
  },
  {
    title: "Redes de Cabeamento Estruturado",
    description: "Projetos completos de infraestrutura de cabeamento estruturado.",
    icon: Network,
    image: cabeamentoEstruturado,
    category: "industrial",
  },
  {
    title: "Supervisão e Controle Predial",
    description: "Sistemas de supervisão e automação para controle predial integrado.",
    icon: Monitor,
    image: supervisaoControle,
    category: "predial",
  },
  {
    title: "Instalações Telefônicas",
    description: "Projetos de infraestrutura telefônica para ambientes corporativos.",
    icon: Phone,
    image: instalacoesTelefonicas,
    category: "industrial",
  },
  {
    title: "Redes Lógicas Locais",
    description: "Projetos de redes lógicas locais (LAN) para conectividade eficiente.",
    icon: Wifi,
    image: redesLogicas,
    category: "industrial",
  },
  {
    title: "Detecção e Alarme de Incêndio",
    description: "Sistemas de detecção e alarme para segurança contra incêndio.",
    icon: Flame,
    image: alarmeIncendio,
    category: "predial",
  },
  {
    title: "Circuito Fechado de TV",
    description: "Projetos de CFTV para monitoramento e segurança patrimonial.",
    icon: Video,
    image: cftv,
    category: "predial",
  },
  {
    title: "Sonorização Ambiente",
    description: "Sistemas de áudio ambiente para espaços comerciais e corporativos.",
    icon: Volume2,
    image: sonorizacao,
    category: "predial",
  },
  {
    title: "Gerenciamento e Fiscalização",
    description: "Gerenciamento completo e fiscalização técnica de obras.",
    icon: ClipboardCheck,
    image: gerenciamento,
    category: "consultoria",
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredServices = services.filter(
    (service) => activeFilter === "all" || service.category === activeFilter
  );

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
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 mb-4">
              <Button 
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className="text-xs transition-all duration-300"
              >
                Todos
              </Button>
              <Button 
                variant={activeFilter === "predial" ? "default" : "outline"}
                onClick={() => setActiveFilter("predial")}
                className="text-xs transition-all duration-300"
              >
                Predial
              </Button>
              <Button 
                variant={activeFilter === "industrial" ? "default" : "outline"}
                onClick={() => setActiveFilter("industrial")}
                className="text-xs transition-all duration-300"
              >
                Industrial
              </Button>
              <Button 
                variant={activeFilter === "consultoria" ? "default" : "outline"}
                onClick={() => setActiveFilter("consultoria")}
                className="text-xs transition-all duration-300"
              >
                Consultoria
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mb-4">
              {filteredServices.length} {filteredServices.length === 1 ? 'serviço' : 'serviços'}
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredServices.map((service, index) => {
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
                  <div className="relative h-48 md:h-56 rounded-lg overflow-hidden mb-4 transition-all duration-700 group-hover:scale-105 group-hover:shadow-2xl">
                    {/* Image with parallax effect */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    
                    {/* Gradient overlay with transition */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent group-hover:from-primary/80 group-hover:via-primary/40 transition-all duration-500"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                    
                    {/* Icon with 3D rotation and glow */}
                    <div className="absolute top-4 left-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/90 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <div className="px-2">
                    <h3 className="text-base md:text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary font-semibold text-xs md:text-sm p-0 h-auto hover:bg-transparent group-hover:translate-x-2 transition-transform duration-300"
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
