import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-[550px] flex items-center justify-center text-white mb-[-80px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[#1a2332]/85"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center pb-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 leading-tight tracking-tight">
          TIRAMOS O SEU PROJETO<br />
          DOS SONHOS DO PAPEL
        </h1>
        <p className="text-xs md:text-sm lg:text-base mb-5 md:mb-7 max-w-2xl mx-auto opacity-90 leading-relaxed px-4">
          WP Engenharia é Lorem ipsum dolor sit amet, consectetur adipiscing<br className="hidden md:block" />
          elit. Ut purus non, lacinia vel, ullamcorper mauris pulvinar libero leo.
        </p>
        <Button 
          variant="3d" 
          size="lg" 
          className="font-bold px-6 md:px-8 text-xs md:text-sm relative overflow-hidden group"
          onClick={() => window.location.href = '#contato'}
        >
          <span className="relative z-10">PEÇA O SEU ORÇAMENTO</span>
          <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
