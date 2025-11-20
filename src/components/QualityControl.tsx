import { Award, CheckCircle2 } from "lucide-react";

const QualityControl = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-8 lg:gap-12 items-center">
          {/* Selo/Badge de Certificação - Versão Moderna e Compacta */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Glow effect animado */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-secondary/40 to-primary/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Main seal circle - tamanho reduzido */}
              <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary via-primary/90 to-secondary flex items-center justify-center shadow-xl border-4 border-white overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                {/* Efeito de brilho diagonal */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Inner white circle */}
                <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full bg-white flex flex-col items-center justify-center shadow-inner">
                  <div className="relative">
                    {/* Ícone com animação de pulso sutil */}
                    <Award className="w-14 h-14 md:w-16 md:h-16 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    {/* Efeito de raios ao redor do ícone */}
                    <div className="absolute inset-0 animate-pulse opacity-20">
                      <div className="absolute top-0 left-1/2 w-0.5 h-4 bg-primary -translate-x-1/2 -translate-y-4"></div>
                      <div className="absolute bottom-0 left-1/2 w-0.5 h-4 bg-primary -translate-x-1/2 translate-y-4"></div>
                      <div className="absolute left-0 top-1/2 h-0.5 w-4 bg-primary -translate-y-1/2 -translate-x-4"></div>
                      <div className="absolute right-0 top-1/2 h-0.5 w-4 bg-primary -translate-y-1/2 translate-x-4"></div>
                    </div>
                  </div>
                  
                  <div className="text-center px-3">
                    <p className="text-primary font-extrabold text-base md:text-lg uppercase tracking-tight leading-tight">
                      Controle de
                    </p>
                    <p className="text-primary font-extrabold text-base md:text-lg uppercase tracking-tight">
                      Qualidade
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                      <p className="text-secondary text-[10px] font-bold uppercase tracking-wide">
                        Certificado ISO
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative notches modernos e menores */}
                <div className="absolute inset-0">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white/80 rounded-full group-hover:bg-white transition-colors duration-300"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 22.5}deg) translate(95px, -50%)`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Ribbon decoration moderna e menor */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-secondary to-secondary/80 shadow-lg transition-transform duration-300 group-hover:translate-y-1" 
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
