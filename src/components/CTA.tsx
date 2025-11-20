import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Solicite o seu Orçamento
        </h2>
        <p className="text-sm mb-6 opacity-90 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, 
          lacinia vel, luctus eget, aliquet nec.
        </p>
        <Button 
          variant="3d"
          size="lg" 
          className="font-bold px-6 py-5 text-sm"
        >
          PEÇA O SEU ORÇAMENTO
        </Button>
      </div>
    </section>
  );
};

export default CTA;
