import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
}

const PageHero = ({ title, breadcrumbs, backgroundImage }: PageHeroProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[300px] md:h-[350px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Parallax */}
      {backgroundImage ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${backgroundImage})`,
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary/40"></div>
        </>
      ) : (
        <>
          {/* Fallback gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary/80"></div>
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
        </>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center mb-6 text-sm">
          <ol className="flex items-center gap-2 text-white/80">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="w-4 h-4" />}
                <Link 
                  to={crumb.path} 
                  className="hover:text-white transition-colors font-medium"
                >
                  {crumb.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-semibold">{title}</span>
            </li>
          </ol>
        </nav>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center uppercase tracking-wide drop-shadow-lg">
          {title}
        </h1>
        
        {/* Decorative line */}
        <div className="flex justify-center mt-6">
          <div className="w-24 h-1 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
