import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Pavimentação",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=500&h=300&fit=crop",
  },
  {
    title: "Laudo Técnico",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=300&fit=crop",
  },
  {
    title: "Infraestrutura Urbana",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=500&h=300&fit=crop",
  },
  {
    title: "Fundações",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
    image: "https://images.unsplash.com/photo-1590496793907-4127c1e8e48e?w=500&h=300&fit=crop",
  },
  {
    title: "Construção Civil",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop",
  },
  {
    title: "Projetos Especiais",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
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

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`relative h-48 md:h-56 rounded overflow-hidden group cursor-pointer transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                  <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">{service.title}</h3>
                  <p className="text-xs mb-2 md:mb-3 opacity-90 line-clamp-2">{service.description}</p>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 font-bold text-[10px] md:text-xs h-7 md:h-8 px-3 md:px-4">
                    Saiba Mais
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
