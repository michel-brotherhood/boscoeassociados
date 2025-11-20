import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Solicite o seu Orçamento
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, 
          lacinia vel, luctus eget, aliquet nec.
        </p>
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-6 text-lg"
        >
          PEÇA O SEU ORÇAMENTO
        </Button>
      </div>
    </section>
  );
};

export default CTA;
