import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Fabiano Belchior",
    role: "Gerente de Facilities",
    text: "A Bosco & Associados entregou um projeto de CFTV e controle de acesso excepcional. A equipe técnica demonstrou profissionalismo e domínio total das tecnologias aplicadas.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    name: "Juliana Silva",
    role: "Coordenadora de Projetos",
    text: "Trabalhar com a Bosco foi uma experiência excelente. O projeto de cabeamento estruturado foi executado com precisão e dentro do cronograma estabelecido.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className={`mb-6 md:mb-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-primary text-xs md:text-sm font-semibold mb-1 uppercase tracking-wide">O que estão</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Dizendo Sobre Nós
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-secondary-foreground/5 p-4 md:p-6 rounded transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="text-xs md:text-sm mb-4 md:mb-6 leading-relaxed opacity-90">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-2 md:gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-xs md:text-sm">{testimonial.name}</div>
                    <div className="text-[10px] md:text-xs opacity-75">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-white/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
