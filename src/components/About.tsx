import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-engineering.jpg";

const About = () => {
  return (
    <section id="ditec" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImage}
              alt="Ditec Engineering"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-primary">S</span>obre a nossa empresa
            </h2>
            <div className="space-y-4 text-muted-foreground">
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
              <p>
                Nossa equipe é formada por engenheiros altamente qualificados, com vasta
                experiência em gestão de projetos e obras de grande porte.
              </p>
            </div>
            <Button className="mt-6" size="lg">
              mais informações
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
