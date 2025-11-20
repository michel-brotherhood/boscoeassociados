import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-engineering.jpg";

const About = () => {
  return (
    <section id="ditec" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src={aboutImage}
              alt="Ditec Engineering"
              className="w-full rounded shadow-md"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-primary">S</span>obre a nossa empresa
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>
                Uma empresa que, desde 2002, presta serviços especializados no
                acompanhamento e fiscalização de obras, além de serviços de consultoria e
                assessoria técnica em projetos de instalações prediais.
              </p>
              <p>
                Atua em empreendimentos residenciais, comerciais, industriais, hotéis,
                hospitais e shopping centers de todo o Brasil. Realiza o acompanhamento de
                obras nas cidades de Belo Horizonte, São Paulo, Rio de Janeiro e Brasília.
              </p>
            </div>
            <Button className="mt-6 bg-secondary hover:bg-secondary/90 text-xs px-6 py-2 h-auto">
              mais informações
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
