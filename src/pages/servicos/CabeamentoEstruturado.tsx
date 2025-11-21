import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { MenuProvider } from "@/contexts/MenuContext";
import { Network, CheckCircle2, Zap, Shield } from "lucide-react";

const CabeamentoEstruturado = () => {
  return (
    <MenuProvider>
      <PageTransition>
        <div className="min-h-screen">
        <Header />
        <PageHero 
          title="Cabeamento Estruturado"
          breadcrumbs={[
            { label: "Início", path: "/" },
            { label: "Serviços", path: "/#servicos" }
          ]}
          backgroundImage="/assets/services/cabeamento-estruturado.webp"
        />
        
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Network className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Infraestrutura de Cabeamento
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Desenvolvemos projetos completos de infraestrutura de cabeamento estruturado, seguindo as normas técnicas nacionais e internacionais. Nossa solução garante alta performance, confiabilidade e escalabilidade para sua rede de comunicação.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O cabeamento estruturado é a base para um ambiente corporativo eficiente, suportando voz, dados, imagem e sistemas de automação em uma única infraestrutura integrada.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Escopo do Projeto
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Projeto de infraestrutura completa",
                    "Especificação de materiais e componentes",
                    "Cabeamento horizontal e vertical",
                    "Racks e armários de telecomunicações",
                    "Patch panels e blocos de conexão",
                    "Pontos de acesso e tomadas",
                    "Certificação e testes",
                    "Documentação técnica as-built"
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
                    Normas e Certificações
                  </h3>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-muted-foreground mb-4">
                    Nossos projetos seguem rigorosamente as normas:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• ABNT NBR 14565 - Cabeamento estruturado para edifícios comerciais</li>
                    <li>• ANSI/TIA-568 - Padrões de cabeamento de telecomunicações</li>
                    <li>• ISO/IEC 11801 - Cabeamento genérico para instalações</li>
                    <li>• ANSI/TIA-569 - Padrões de dutos e espaços</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Infraestrutura de Rede Profissional
                </h3>
                <p className="text-muted-foreground mb-6">
                  Solicite um orçamento para seu projeto de cabeamento estruturado.
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

export default CabeamentoEstruturado;
