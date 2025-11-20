import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioModal from "./PortfolioModal";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const projects: Project[] = [
    {
      id: 1,
      title: "Projeto Residencial Premium",
      category: "Residencial",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    },
    {
      id: 2,
      title: "Edifício Comercial Centro",
      category: "Comercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      id: 3,
      title: "Condomínio Residencial",
      category: "Residencial",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
    },
    {
      id: 4,
      title: "Complexo Industrial",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
    },
    {
      id: 5,
      title: "Reforma Comercial",
      category: "Comercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
      id: 6,
      title: "Projeto Sustentável",
      category: "Residencial",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
    }
  ];

  const categories = ["Todos", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <>
      <section 
        id="portfolio" 
        ref={sectionRef}
        className={`py-16 md:py-20 lg:py-24 bg-muted transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary text-sm md:text-base font-semibold mb-2 uppercase tracking-wide">
              Nossos Trabalhos
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Portfólio de Projetos
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "3d" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="font-semibold text-sm"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className={`group relative overflow-hidden rounded-lg shadow-lg bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Ver Detalhes</span>
                  </div>
                </div>
                
                <div className="p-5 md:p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioModal 
        project={selectedProject} 
        open={modalOpen} 
        onOpenChange={setModalOpen}
      />
    </>
  );
};

export default Portfolio;
