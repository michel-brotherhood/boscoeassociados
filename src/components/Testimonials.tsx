import { useEffect, useRef, useState } from "react";
import { StaggerTestimonials } from "./ui/stagger-testimonials";

const testimonials = [
  {
    tempId: 0,
    testimonial: "A Bosco & Associados entregou um projeto de CFTV e controle de acesso excepcional. A equipe técnica demonstrou profissionalismo e domínio total das tecnologias aplicadas.",
    by: "Fabiano Belchior, Gerente de Facilities",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    tempId: 1,
    testimonial: "Trabalhar com a Bosco foi uma experiência excelente. O projeto de cabeamento estruturado foi executado com precisão e dentro do cronograma estabelecido.",
    by: "Juliana Silva, Coordenadora de Projetos",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
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
    <section ref={sectionRef} className="py-12 md:py-16 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className={`mb-6 md:mb-8 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-primary text-xs md:text-sm font-semibold mb-1 uppercase tracking-wide">O que estão</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Dizendo Sobre Nós
          </h2>
        </div>

        <StaggerTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
