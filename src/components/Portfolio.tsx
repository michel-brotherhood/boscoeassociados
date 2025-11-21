import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  category: string;
  slug: string;
  thumbnail_url: string;
}

interface PortfolioProps {
  showAll?: boolean;
}

const Portfolio = ({ showAll = false }: PortfolioProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data as Project[];
    },
  });

  const categories = ["Todos", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === "Todos" 
    ? (showAll ? projects : projects.slice(0, 6))
    : (showAll 
        ? projects.filter(p => p.category === selectedCategory)
        : projects.filter(p => p.category === selectedCategory).slice(0, 6)
      );

  const handleProjectClick = (project: Project) => {
    navigate(`/portfolio/${project.slug}`);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, project: Project) => {
    console.error(`❌ Failed to load image for project: ${project.title}`);
    console.error(`   URL: ${project.thumbnail_url}`);
    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23666" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="Arial" font-size="16"%3EImagem não disponível%3C/text%3E%3C/svg%3E';
  };

  const handleImageLoad = (project: Project) => {
    console.log(`✅ Loaded image for project: ${project.title}`);
  };

  // Debug: Log all projects being rendered
  if (filteredProjects.length > 0) {
    console.log(`📊 Rendering ${filteredProjects.length} projects in Portfolio section`);
    filteredProjects.forEach((p, idx) => {
      console.log(`   ${idx + 1}. ${p.title} → ${p.thumbnail_url}`);
    });
  }

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className={`py-16 md:py-20 lg:py-24 bg-muted transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm md:text-base font-semibold mb-2 uppercase tracking-wide animate-fade-in">
            Nossos Trabalhos
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            Portfólio de Projetos
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "3d" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="font-semibold text-sm transition-all duration-300 hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>Nenhum projeto disponível no momento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`group relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer animate-fade-in hover-scale ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative h-64 md:h-72 overflow-hidden bg-muted">
                  <img
                    src={`${project.thumbnail_url}?v=2`}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                    onError={(e) => handleImageError(e, project)}
                    onLoad={() => handleImageLoad(project)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Ver Detalhes</span>
                  </div>
                </div>
                
                <div className="p-5 md:p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                    {project.title}
                  </h3>
                  <Button
                    variant="3d"
                    size="sm"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Ver Todos Button */}
        {!showAll && projects.length > 6 && (
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <Button
              variant="3d"
              size="lg"
              onClick={() => navigate("/portfolio")}
              className="font-semibold"
            >
              Ver Todos os Projetos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
