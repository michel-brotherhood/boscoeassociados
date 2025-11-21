import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { MenuProvider } from "@/contexts/MenuContext";
import { Wifi, CheckCircle2, Server, Globe } from "lucide-react";

const RedesLogicas = () => {
  return (
    <MenuProvider>
      <PageTransition>
        <div className="min-h-screen">
        <Header />
        <PageHero 
          title="Redes Lógicas Locais"
          breadcrumbs={[
            { label: "Início", path: "/" },
            { label: "Serviços", path: "/#servicos" }
          ]}
          backgroundImage="/assets/services/redes-logicas.webp"
        />
        
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Conectividade de Alta Performance
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Desenvolvemos projetos de redes lógicas locais (LAN) para garantir conectividade eficiente, segura e escalável. Nossas soluções contemplam desde pequenas redes até grandes infraestruturas corporativas complexas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Com foco em performance, segurança e disponibilidade, entregamos redes preparadas para as demandas atuais e futuras de seu negócio.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Componentes do Projeto
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Arquitetura de rede hierárquica",
                    "Switches core, distribuição e acesso",
                    "Roteadores e firewalls",
                    "Pontos de acesso Wi-Fi",
                    "VLANs e segmentação de rede",
                    "Redundância e alta disponibilidade",
                    "QoS e priorização de tráfego",
                    "Monitoramento e gestão de rede"
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
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Características Técnicas
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Alta Performance</h4>
                    <p className="text-sm text-muted-foreground">
                      Velocidades de até 10 Gbps ou superior conforme necessidade.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Segurança Integrada</h4>
                    <p className="text-sm text-muted-foreground">
                      Firewalls, autenticação 802.1X e políticas de segurança.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Escalabilidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Arquitetura modular pronta para crescimento futuro.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Gerenciamento Centralizado</h4>
                    <p className="text-sm text-muted-foreground">
                      Plataformas de gestão para configuração e monitoramento.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg mb-12">
                <h3 className="text-lg font-bold text-foreground mb-4">Aplicações</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Corporativo</p>
                    <p className="text-sm text-muted-foreground">Escritórios e sedes empresariais</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Industrial</p>
                    <p className="text-sm text-muted-foreground">Plantas e ambientes fabris</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Comercial</p>
                    <p className="text-sm text-muted-foreground">Shopping centers e varejo</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Rede Confiável e Segura
                </h3>
                <p className="text-muted-foreground mb-6">
                  Solicite um projeto de rede lógica para sua empresa.
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
      </PageTransition>
    </MenuProvider>
  );
};

export default RedesLogicas;
