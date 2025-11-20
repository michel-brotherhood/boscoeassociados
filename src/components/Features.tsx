import { Headset, Users, Cog, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Headset,
    title: "Atendimento Personalizado",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: Users,
    title: "Profissionais Qualificados",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: Cog,
    title: "Tecnologia de Ponta",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Comprovados",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
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
                  className={`text-center p-6 md:p-8 transition-all duration-700 relative ${
                    !isLast ? "lg:border-r border-border/30" : ""
                  } ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
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
