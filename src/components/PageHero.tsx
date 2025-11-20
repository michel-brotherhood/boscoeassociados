import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

const PageHero = ({ title, breadcrumbs }: PageHeroProps) => {
  return (
    <section className="relative h-[300px] md:h-[350px] flex items-center justify-center text-white bg-gradient-to-br from-secondary via-secondary/95 to-primary/80 overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
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
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center uppercase tracking-wide">
          {title}
        </h1>
        
        {/* Decorative line */}
        <div className="flex justify-center mt-6">
          <div className="w-24 h-1 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
