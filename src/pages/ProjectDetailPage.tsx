import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { MenuProvider } from "@/contexts/MenuContext";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageGallery from "@/components/ImageGallery";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: project, isLoading } = useQuery({
    queryKey: ["project", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const { data: images = [] } = useQuery({
    queryKey: ["project-images", project?.id],
    enabled: !!project?.id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("project_images")
        .select("*")
        .eq("project_id", project.id)
        .order("display_order", { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <MenuProvider>
        <PageTransition>
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </PageTransition>
      </MenuProvider>
    );
  }

  if (!project) {
    return (
      <MenuProvider>
        <PageTransition>
          <div className="min-h-screen bg-background">
            <Header />
            <div className="container mx-auto px-4 py-20 text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Projeto não encontrado</h1>
              <Button onClick={() => navigate("/portfolio")} variant="default">
                Voltar ao Portfólio
              </Button>
            </div>
            <Footer />
          </div>
        </PageTransition>
      </MenuProvider>
    );
  }

  return (
    <MenuProvider>
      <PageTransition>
        <div className="min-h-screen bg-background">
          <Header />
          
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <Button
                  onClick={() => navigate("/portfolio")}
                  variant="outline"
                  className="mb-8 text-white border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300 animate-fade-in"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar ao Portfólio
                </Button>
                
                <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <span className="inline-block px-4 py-2 text-sm font-bold text-white bg-primary rounded-full mb-6 shadow-lg shadow-primary/30">
                    {project.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h1>
                  
                  <div className="flex flex-wrap gap-6 text-white/90">
                    {project.location && (
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-medium">{project.location}</span>
                      </div>
                    )}
                    {project.year && (
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">{project.year}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <ImageGallery images={images} projectTitle={project.title} />
            </div>
          </section>

          {/* Description & Details */}
          <section className="py-16 md:py-20 bg-gradient-to-b from-muted to-background">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Stats Cards */}
                <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">Execução</h3>
                  </div>
                  <p className="text-white/70">Projeto executado com excelência técnica e dentro do prazo estabelecido</p>
                </div>

                <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">Tecnologia</h3>
                  </div>
                  <p className="text-white/70">Sistemas eletrônicos de última geração implementados</p>
                </div>

                <div className="bg-secondary/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-white">Qualidade</h3>
                  </div>
                  <p className="text-white/70">Controle rigoroso em todas as etapas do projeto</p>
                </div>
              </div>

              {/* Main Description */}
              <div className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 animate-fade-in" style={{ animationDelay: '300ms' }}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full"></div>
                  Sobre o Projeto
                </h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                    {project.description || "Este projeto foi desenvolvido com foco em eficiência e tecnologia de ponta, aplicando soluções personalizadas de sistemas eletrônicos adequadas às necessidades específicas do cliente."}
                  </p>
                  <p className="text-base text-white/70 leading-relaxed">
                    Nossa equipe técnica especializada realizou todo o planejamento, projeto executivo e acompanhamento da obra, garantindo qualidade excepcional e cumprimento rigoroso dos prazos estabelecidos. Utilizamos as melhores práticas de engenharia e tecnologias de ponta para entregar um resultado que supera as expectativas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-3xl mx-auto animate-fade-in">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Interessado em um Projeto Similar?
                </h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
                  Entre em contato conosco e descubra como podemos transformar suas ideias em realidade com tecnologia de ponta e excelência em execução.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => window.open("https://wa.me/5521993698629", "_blank")}
                    variant="3d"
                    size="lg"
                    className="text-lg px-8 py-6 shadow-2xl shadow-primary/40"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Solicitar Orçamento
                  </Button>
                  <Button
                    onClick={() => navigate("/portfolio")}
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:border-white"
                  >
                    Ver Mais Projetos
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

export default ProjectDetailPage;
