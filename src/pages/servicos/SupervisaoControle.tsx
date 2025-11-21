import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { MenuProvider } from "@/contexts/MenuContext";
import { Monitor, CheckCircle2, Gauge, Settings } from "lucide-react";

const SupervisaoControle = () => {
  return (
    <MenuProvider>
      <PageTransition>
        <div className="min-h-screen">
        <Header />
        <PageHero 
          title="Supervisão e Controle Predial"
          breadcrumbs={[
            { label: "Início", path: "/" },
            { label: "Serviços", path: "/#servicos" }
          ]}
          backgroundImage="/assets/services/supervisao-controle.webp"
        />
        
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Automação Predial Integrada
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Desenvolvemos sistemas de supervisão e automação para controle predial integrado, permitindo o gerenciamento centralizado de todos os sistemas eletrônicos do edifício através de uma única plataforma.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nossos projetos de automação predial otimizam o consumo de energia, aumentam o conforto dos usuários e facilitam a manutenção, proporcionando economia operacional e sustentabilidade.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Sistemas Integrados
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Sistema de iluminação automatizada",
                    "Controle de ar-condicionado e HVAC",
                    "Gerenciamento de energia elétrica",
                    "Controle de acesso integrado",
                    "Automação de cortinas e persianas",
                    "Sistema de irrigação inteligente",
                    "Monitoramento de alarmes",
                    "Dashboards e relatórios gerenciais"
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
                    <Gauge className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Benefícios da Automação
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Economia de Energia</h4>
                    <p className="text-sm text-muted-foreground">
                      Redução de até 30% no consumo elétrico através de controle inteligente.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Conforto e Conveniência</h4>
                    <p className="text-sm text-muted-foreground">
                      Controle centralizado e programação de ambientes conforme necessidade.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Manutenção Preditiva</h4>
                    <p className="text-sm text-muted-foreground">
                      Detecção antecipada de falhas e programação de manutenções.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Sustentabilidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Contribuição para certificações ambientais como LEED e AQUA.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Modernize Seu Edifício
                </h3>
                <p className="text-muted-foreground mb-6">
                  Solicite uma consultoria para implementar automação predial.
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

export default SupervisaoControle;
