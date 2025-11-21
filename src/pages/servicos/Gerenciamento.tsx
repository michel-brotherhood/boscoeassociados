import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { MenuProvider } from "@/contexts/MenuContext";
import { ClipboardCheck, CheckCircle2, FileCheck, UserCheck } from "lucide-react";

const Gerenciamento = () => {
  return (
    <MenuProvider>
      <div className="min-h-screen">
        <Header />
        <PageHero 
          title="Gerenciamento e Fiscalização"
          breadcrumbs={[
            { label: "Início", path: "/" },
            { label: "Serviços", path: "/#servicos" }
          ]}
          backgroundImage="/assets/services/gerenciamento.webp"
        />
        
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ClipboardCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Gestão Técnica de Obras
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Oferecemos serviços completos de gerenciamento e fiscalização técnica de obras de sistemas eletrônicos. Nossa equipe especializada acompanha todas as etapas da execução, garantindo conformidade com projetos, normas e prazos estabelecidos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Com 22 anos de experiência, atuamos como representantes técnicos do cliente, assegurando qualidade, segurança e eficiência na implementação de projetos prediais e industriais.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Atividades de Gerenciamento
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Acompanhamento técnico de obras",
                    "Verificação de conformidade com projetos",
                    "Controle de qualidade de materiais",
                    "Gestão de cronograma e prazos",
                    "Análise de medições e pagamentos",
                    "Coordenação com outras disciplinas",
                    "Controle de documentação técnica",
                    "Elaboração de relatórios executivos"
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
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Fiscalização Técnica
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-3">Inspeções Periódicas</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Visitas técnicas programadas para verificação de:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Execução conforme projeto e especificações</li>
                      <li>• Qualidade dos materiais e serviços</li>
                      <li>• Atendimento às normas técnicas</li>
                      <li>• Cumprimento de cronograma</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-3">Testes e Comissionamento</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Acompanhamento de:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Testes de funcionamento de sistemas</li>
                      <li>• Certificações de cabeamento</li>
                      <li>• Comissionamento de equipamentos</li>
                      <li>• Validação de performance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  Benefícios do Serviço
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Redução de Riscos</h4>
                    <p className="text-sm text-muted-foreground">
                      Identificação prévia de problemas evita retrabalhos e custos adicionais.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Garantia de Qualidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Obra executada conforme as melhores práticas e normas vigentes.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Controle de Custos</h4>
                    <p className="text-sm text-muted-foreground">
                      Análise criteriosa de medições e controle orçamentário rigoroso.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Tranquilidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Cliente acompanhado por especialistas em todas as fases da obra.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Gestão Profissional de Obras
                </h3>
                <p className="text-muted-foreground mb-6">
                  Conte com nossa experiência para gerenciar e fiscalizar seu projeto.
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

export default Gerenciamento;
