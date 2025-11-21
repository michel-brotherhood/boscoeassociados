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
          <section className="relative py-20 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="container mx-auto px-4 relative z-10">
              <Button
                onClick={() => navigate("/portfolio")}
                variant="ghost"
                className="mb-6 text-white/80 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao Portfólio
              </Button>
              
              <div className="max-w-4xl">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {project.title}
                </h1>
                {project.location && (
                  <p className="text-lg text-white/80 mb-2">
                    <span className="font-semibold">Local:</span> {project.location}
                  </p>
                )}
                {project.year && (
                  <p className="text-lg text-white/80">
                    <span className="font-semibold">Ano:</span> {project.year}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Image Gallery */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <ImageGallery images={images} projectTitle={project.title} />
            </div>
          </section>

          {/* Description */}
          <section className="py-16 bg-secondary/30">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-bold text-white mb-6">Sobre o Projeto</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-white/80 leading-relaxed">
                  {project.description || "Este projeto foi desenvolvido com foco em eficiência e tecnologia de ponta, aplicando soluções personalizadas de sistemas eletrônicos adequadas às necessidades específicas do cliente. Nossa equipe técnica realizou todo o planejamento, projeto executivo e acompanhamento da obra, garantindo qualidade e cumprimento de prazos estabelecidos com excelência."}
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Interessado em um projeto similar?
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar suas ideias em realidade.
              </p>
              <Button
                onClick={() => window.open("https://wa.me/5521993698629", "_blank")}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Solicitar Orçamento
              </Button>
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
