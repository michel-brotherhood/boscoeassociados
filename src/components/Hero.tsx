import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-[500px] flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-secondary/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          TIRAMOS O SEU PROJETO<br />
          DOS SONHOS DO PAPEL
        </h1>
        <p className="text-sm md:text-base mb-6 max-w-xl mx-auto opacity-90">
          WP Engenharia é Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Ut purus non, lacinia vel, luctus eget, aliquet nec.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-5 text-sm">
          PEÇA O SEU ORÇAMENTO
        </Button>
      </div>
    </section>
  );
};

export default Hero;
