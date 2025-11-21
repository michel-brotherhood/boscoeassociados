import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { MenuProvider } from "@/contexts/MenuContext";
import { Phone, CheckCircle2, Network, Headphones } from "lucide-react";

const InstalacoesTelefonicas = () => {
  return (
    <MenuProvider>
      <PageTransition>
        <div className="min-h-screen">
        <Header />
        <PageHero 
          title="Instalações Telefônicas"
          breadcrumbs={[
            { label: "Início", path: "/" },
            { label: "Serviços", path: "/#servicos" }
          ]}
          backgroundImage="/assets/services/instalacoes-telefonicas.webp"
        />
        
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Infraestrutura Telefônica Corporativa
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Projetamos e implementamos infraestruturas telefônicas completas para ambientes corporativos, incluindo sistemas analógicos, digitais e VoIP, garantindo comunicação eficiente e confiável.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nossos projetos contemplam desde a infraestrutura física até a integração com sistemas de PABX, Contact Centers e soluções de comunicação unificada.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Soluções Oferecidas
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Projeto de infraestrutura telefônica",
                    "Dimensionamento de centrais PABX",
                    "Sistemas VoIP e telefonia IP",
                    "Integração com operadoras",
                    "Ramais e pontos telefônicos",
                    "Contact Center e URA",
                    "Correio de voz e conferências",
                    "Manutenção e suporte técnico"
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
                    <Headphones className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Tecnologias Implementadas
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Telefonia Convencional</h4>
                    <p className="text-sm text-muted-foreground">
                      Sistemas analógicos e digitais tradicionais com alta confiabilidade.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">VoIP / Telefonia IP</h4>
                    <p className="text-sm text-muted-foreground">
                      Soluções modernas com redução de custos e recursos avançados.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">PABX Híbrido</h4>
                    <p className="text-sm text-muted-foreground">
                      Combinação de tecnologias analógicas, digitais e IP.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Comunicação Unificada</h4>
                    <p className="text-sm text-muted-foreground">
                      Integração de voz, vídeo, mensagens e colaboração.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Modernize Sua Telefonia
                </h3>
                <p className="text-muted-foreground mb-6">
                  Solicite um projeto personalizado para sua empresa.
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

export default InstalacoesTelefonicas;
