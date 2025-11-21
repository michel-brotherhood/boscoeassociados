import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { MenuProvider } from "@/contexts/MenuContext";
import { Users, CheckCircle2, Target, Award } from "lucide-react";

const ConsultoriaTecnica = () => {
  return (
    <MenuProvider>
      <PageTransition>
        <div className="min-h-screen">
        <Header />
        <PageHero 
          title="Consultoria Técnica"
          breadcrumbs={[
            { label: "Início", path: "/" },
            { label: "Serviços", path: "/#servicos" }
          ]}
          backgroundImage="/assets/services/consultoria-tecnica.webp"
        />
        
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Consultoria Especializada
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Nossa consultoria técnica oferece suporte especializado em engenharia e arquitetura para otimização de projetos de sistemas eletrônicos. Com 22 anos de experiência, nossa equipe de consultores, engenheiros e arquitetos está preparada para entregar soluções personalizadas e eficientes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Atuamos em todas as fases do projeto, desde o planejamento inicial até a implementação, garantindo que cada solução seja tecnicamente viável, economicamente eficiente e alinhada às melhores práticas do mercado.
                </p>
              </div>

              {/* Services Offered */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Serviços Oferecidos
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Análise e diagnóstico de projetos existentes",
                    "Elaboração de especificações técnicas",
                    "Avaliação de viabilidade técnica e econômica",
                    "Assessoria na seleção de tecnologias",
                    "Otimização de custos e recursos",
                    "Adequação a normas e regulamentações",
                    "Supervisão e acompanhamento técnico",
                    "Treinamento de equipes técnicas"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Benefícios
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Expertise Comprovada</h4>
                    <p className="text-sm text-muted-foreground">
                      Mais de duas décadas de experiência em projetos nacionais e internacionais.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Equipe Multidisciplinar</h4>
                    <p className="text-sm text-muted-foreground">
                      Consultores, engenheiros, arquitetos e técnicos altamente qualificados.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Soluções Personalizadas</h4>
                    <p className="text-sm text-muted-foreground">
                      Cada projeto recebe uma análise específica e soluções sob medida.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Tecnologia de Ponta</h4>
                    <p className="text-sm text-muted-foreground">
                      Utilizamos tecnologias no estado da arte para cada solução.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Precisa de Consultoria Especializada?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato conosco e descubra como podemos otimizar seu projeto.
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

export default ConsultoriaTecnica;
