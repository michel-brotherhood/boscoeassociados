import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-secondary/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          TIRAMOS O SEU PROJETO<br />
          DOS SONHOS DO PAPEL
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          WP Engenharia é Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Ut purus non, lacinia vel, luctus eget, aliquet nec.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg">
          PEÇA O SEU ORÇAMENTO
        </Button>
      </div>
    </section>
  );
};

export default Hero;
