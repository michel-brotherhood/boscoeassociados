import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { MenuProvider } from "@/contexts/MenuContext";
import { Volume2, CheckCircle2, Radio, Music } from "lucide-react";

const Sonorizacao = () => {
  return (
    <MenuProvider>
      <div className="min-h-screen">
        <Header />
        <PageHero 
          title="Sonorização Ambiente"
          breadcrumbs={[
            { label: "Início", path: "/" },
            { label: "Serviços", path: "/#servicos" }
          ]}
          backgroundImage="/assets/services/sonorizacao.webp"
        />
        
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Volume2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Áudio Profissional
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Desenvolvemos projetos de sistemas de áudio ambiente para espaços comerciais e corporativos, proporcionando qualidade sonora superior e distribuição uniforme. Nossas soluções contemplam desde música ambiente até sistemas de comunicação por voz.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos equipamentos profissionais e tecnologias de ponta para criar ambientes acústicos confortáveis e funcionais, adequados a cada tipo de aplicação.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Music className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Componentes do Sistema
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Amplificadores e processadores",
                    "Caixas acústicas e alto-falantes",
                    "Microfones e periféricos",
                    "Central de áudio multizona",
                    "Sistema de paging (comunicação)",
                    "Players e fontes de áudio",
                    "Controle via app e automação",
                    "Integração com alarme de incêndio"
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
                    <Radio className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Soluções por Aplicação
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Música Ambiente</h4>
                    <p className="text-sm text-muted-foreground">
                      Lojas, restaurantes, hotéis e áreas comuns de condomínios.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Sistema de Paging</h4>
                    <p className="text-sm text-muted-foreground">
                      Comunicação por voz em aeroportos, shopping centers e hospitais.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Salas de Conferência</h4>
                    <p className="text-sm text-muted-foreground">
                      Áudio profissional para reuniões e videoconferências.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Auditórios</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistemas completos para eventos e apresentações.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg mb-12">
                <h3 className="text-lg font-bold text-foreground mb-4">Características Técnicas</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Cobertura Uniforme</p>
                      <p className="text-sm text-muted-foreground">Distribuição homogênea do som em todo o ambiente</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Zoneamento</p>
                      <p className="text-sm text-muted-foreground">Controle independente de volume por área</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Alta Fidelidade</p>
                      <p className="text-sm text-muted-foreground">Equipamentos profissionais com resposta de frequência equilibrada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Integração</p>
                      <p className="text-sm text-muted-foreground">Compatível com sistemas de automação e emergência</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Áudio de Qualidade
                </h3>
                <p className="text-muted-foreground mb-6">
                  Solicite um projeto de sonorização para seu ambiente.
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

export default Sonorizacao;
