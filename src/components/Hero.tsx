import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-industrial.jpg";

const slides = [
  {
    title: "CONSULTORIA EM INSTALAÇÕES",
    description: "Com 13 anos atuando na área de consultoria, a Ditec é reconhecida pela excelência no comissionamento de instalações prediais, incluindo ar condicionado, ventilação, elétrica, hidráulica, incêndio e automação.",
  },
  {
    title: "FISCALIZAÇÃO E COMISSIONAMENTO DE OBRAS",
    description: "Tenha suporte e respaldo técnico durante a execução de seu empreendimento, através de nossos serviços de fiscalização e comissionamento de obras.",
  },
  {
    title: "ENSAIOS, TESTES E LAUDOS",
    description: "Contrate nossos serviços para realização de sistemas ensaios elétricos, hidráulicos e balanceamento de sistemas de climatização.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex items-center">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>

        <div className="max-w-2xl text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            {slides[currentSlide].description}
          </p>
          <Button variant="secondary" size="lg" className="bg-white text-foreground hover:bg-white/90">
            Conheça mais sobre o serviço
          </Button>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
