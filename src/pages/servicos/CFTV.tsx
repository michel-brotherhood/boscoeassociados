import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { MenuProvider } from "@/contexts/MenuContext";
import { Video, CheckCircle2, Eye, Lock } from "lucide-react";

const CFTV = () => {
  return (
    <MenuProvider>
      <PageTransition>
        <div className="min-h-screen">
        <Header />
        <PageHero 
          title="Circuito Fechado de TV"
          breadcrumbs={[
            { label: "Início", path: "/" },
            { label: "Serviços", path: "/#servicos" }
          ]}
          backgroundImage="/assets/services/cftv.webp"
        />
        
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Monitoramento e Segurança
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Desenvolvemos projetos completos de CFTV para monitoramento e segurança patrimonial, utilizando tecnologias IP e analógicas de alta resolução. Nossas soluções garantem imagens nítidas e armazenamento confiável.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Do dimensionamento do sistema à integração com outras plataformas de segurança, entregamos projetos robustos e escaláveis para qualquer tipo de ambiente.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Soluções Tecnológicas
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Câmeras IP Full HD e 4K",
                    "Câmeras PTZ (Pan-Tilt-Zoom)",
                    "Câmeras com infravermelho",
                    "Gravadores NVR/DVR",
                    "Armazenamento em nuvem",
                    "Análise de vídeo inteligente",
                    "Acesso remoto via mobile/web",
                    "Integração com controle de acesso"
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
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Recursos Avançados
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Análise Inteligente</h4>
                    <p className="text-sm text-muted-foreground">
                      Detecção de movimento, contagem de pessoas, reconhecimento facial.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Alta Resolução</h4>
                    <p className="text-sm text-muted-foreground">
                      Câmeras de 2MP a 8MP+ para identificação precisa.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Visão Noturna</h4>
                    <p className="text-sm text-muted-foreground">
                      Infravermelho e tecnologia Starlight para baixa luminosidade.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-bold text-foreground mb-2">Monitoramento 24/7</h4>
                    <p className="text-sm text-muted-foreground">
                      Gravação contínua com redundância e backup automático.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg mb-12">
                <h3 className="text-lg font-bold text-foreground mb-4">Aplicações</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Corporativo</p>
                    <p className="text-sm text-muted-foreground">Empresas, escritórios, indústrias</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Comercial</p>
                    <p className="text-sm text-muted-foreground">Lojas, shoppings, centros comerciais</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Residencial</p>
                    <p className="text-sm text-muted-foreground">Condomínios, residências de alto padrão</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Proteja Seu Patrimônio
                </h3>
                <p className="text-muted-foreground mb-6">
                  Solicite um projeto de CFTV personalizado para seu negócio.
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

export default CFTV;
