import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { MenuProvider } from "@/contexts/MenuContext";
import { Flame, CheckCircle2, AlertTriangle, Shield } from "lucide-react";

const AlarmeIncendio = () => {
  return (
    <MenuProvider>
      <div className="min-h-screen">
        <Header />
        <PageHero 
          title="Detecção e Alarme de Incêndio"
          breadcrumbs={[
            { label: "Início", path: "/" },
            { label: "Serviços", path: "/#servicos" }
          ]}
          backgroundImage="/assets/services/alarme-incendio.webp"
        />
        
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Flame className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Proteção Contra Incêndio
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Desenvolvemos projetos completos de sistemas de detecção e alarme de incêndio, garantindo a segurança de pessoas e patrimônio. Nossos projetos seguem rigorosamente as normas do Corpo de Bombeiros e legislações vigentes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos equipamentos de alta confiabilidade e tecnologia de ponta para detecção precoce de incêndio, proporcionando tempo adequado para evacuação e acionamento de medidas de combate.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Componentes do Sistema
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Central de alarme endereçável",
                    "Detectores de fumaça e temperatura",
                    "Acionadores manuais",
                    "Sirenes e sinalizadores",
                    "Módulos de interface",
                    "Sistema de supervisão",
                    "Integração com sprinklers",
                    "Documentação e as-built"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Normas e Legislação
                  </h3>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <p className="text-muted-foreground mb-4">
                    Nossos projetos atendem às principais normas:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• ABNT NBR 17240 - Sistemas de detecção e alarme de incêndio</li>
                    <li>• IT 09 do Corpo de Bombeiros - Compartimentação horizontal e vertical</li>
                    <li>• IT 19 do Corpo de Bombeiros - Sistema de detecção e alarme</li>
                    <li>• NFPA 72 - National Fire Alarm and Signaling Code</li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Projetos Técnicos</h4>
                    <p className="text-sm text-muted-foreground">
                      Memoriais descritivos, plantas baixas e diagramas unifilares completos.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Aprovação no Corpo de Bombeiros</h4>
                    <p className="text-sm text-muted-foreground">
                      Acompanhamento e suporte para obtenção do AVCB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Segurança é Prioridade
                </h3>
                <p className="text-muted-foreground mb-6">
                  Solicite um projeto de detecção e alarme de incêndio.
                </p>
                <Button 
                  variant="3d" 
                  size="lg"
                  onClick={() => window.open("https://wa.me/5521993698629", "_blank")}
                >
                  SOLICITAR ORÇAMENTO
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </MenuProvider>
  );
};

export default AlarmeIncendio;
