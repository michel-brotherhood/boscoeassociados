import { Medal } from "lucide-react";

const QualityControl = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-secondary flex items-center justify-center shadow-lg">
            <Medal className="w-14 h-14 text-primary" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-4 text-primary uppercase">
            CONTROLE DE QUALIDADE
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-foreground max-w-3xl">
            A <strong>BOSCO &amp; ASSOCIADOS</strong> garante a excelência da qualidade na prestação de seus serviços,
            mantendo-se em constante atualização das tendências do mercado, participando de feiras, seminários e cursos
            especializados, cumprindo todos os requisitos nacionais e internacionais. Proporcionando assim,
            confiabilidade nas atividades desenvolvidas para assegurar a qualidade total dentro dos padrões ISO.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;
