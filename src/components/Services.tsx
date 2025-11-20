import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { HardHat, FileText, Building2, Anchor, Home, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Pavimentação",
    description: "Soluções completas em pavimentação asfáltica e de concreto para obras de infraestrutura.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=500&h=300&fit=crop",
  },
  {
    title: "Laudo Técnico",
    description: "Laudos técnicos especializados com precisão e conformidade às normas vigentes.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=300&fit=crop",
  },
  {
    title: "Infraestrutura Urbana",
    description: "Projetos completos de infraestrutura urbana com excelência e qualidade.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=500&h=300&fit=crop",
  },
  {
    title: "Fundações",
    description: "Execução de fundações profundas e rasas com tecnologia e segurança.",
    icon: Anchor,
    image: "https://images.unsplash.com/photo-1590496793907-4127c1e8e48e?w=500&h=300&fit=crop",
  },
  {
    title: "Construção Civil",
    description: "Obras de construção civil residencial, comercial e industrial.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop",
  },
  {
    title: "Projetos Especiais",
    description: "Desenvolvimento de projetos especiais sob medida para necessidades específicas.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
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
            <p className="text-primary text-xs md:text-sm font-semibold mb-1 uppercase tracking-wide">Conheça os</p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
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
