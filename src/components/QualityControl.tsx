import { Award, CheckCircle2 } from "lucide-react";

const QualityControl = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-8 lg:gap-12 items-center">
          {/* Selo/Badge de Certificação */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/70 to-secondary animate-pulse opacity-20 blur-xl"></div>
              
              {/* Main seal circle */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl border-8 border-white">
                {/* Inner white circle */}
                <div className="w-52 h-52 md:w-60 md:h-60 rounded-full bg-white flex flex-col items-center justify-center shadow-inner">
                  <Award className="w-20 h-20 md:w-24 md:h-24 text-primary mb-3" strokeWidth={1.5} />
                  <div className="text-center px-4">
                    <p className="text-primary font-extrabold text-xl md:text-2xl uppercase tracking-tight leading-tight">
                      Controle de
                    </p>
                    <p className="text-primary font-extrabold text-xl md:text-2xl uppercase tracking-tight">
                      Qualidade
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      <p className="text-secondary text-xs font-bold uppercase">
                        Certificado ISO
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative notches on the seal edge */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-white rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 30}deg) translate(130px, -50%)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Ribbon decoration */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-12 bg-secondary shadow-lg" 
                   style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 50% 70%, 10% 100%)' }}>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide mb-6 text-primary uppercase">
              Controle de Qualidade
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-foreground mb-4">
              A <strong className="text-primary">BOSCO &amp; ASSOCIADOS</strong> garante a excelência da qualidade na prestação de seus serviços,
              mantendo-se em constante atualização das tendências do mercado, participando de feiras, seminários e cursos
              especializados, cumprindo todos os requisitos nacionais e internacionais.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-foreground">
              Proporcionando assim, confiabilidade nas atividades desenvolvidas para assegurar a qualidade total dentro dos 
              <strong className="text-secondary"> padrões ISO</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;
