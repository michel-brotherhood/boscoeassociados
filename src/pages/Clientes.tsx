import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

// Import client logos
import accorLogo from "@/assets/clients/accor.webp";
import addorLogo from "@/assets/clients/addor.webp";
import alianseLogo from "@/assets/clients/aliansce.webp";
import argoLogo from "@/assets/clients/argo.webp";
import autonomyLogo from "@/assets/clients/autonomy.webp";
import baitLogo from "@/assets/clients/bait.webp";
import brmallsLogo from "@/assets/clients/brmalls.webp";
import brookfieldLogo from "@/assets/clients/brookfield.webp";
import calperLogo from "@/assets/clients/calper.webp";
import camargoLogo from "@/assets/clients/camargo-correa.webp";

const clients = [
  { name: "Accor Hotels", logo: accorLogo },
  { name: "Addor & Associados", logo: addorLogo },
  { name: "Aliansce Shopping Centers", logo: alianseLogo },
  { name: "Argo", logo: argoLogo },
  { name: "Autonomy Investimentos", logo: autonomyLogo },
  { name: "Bait Inc", logo: baitLogo },
  { name: "BR Malls", logo: brmallsLogo },
  { name: "Brookfield", logo: brookfieldLogo },
  { name: "Calper", logo: calperLogo },
  { name: "Camargo Corrêa", logo: camargoLogo },
];

const Clientes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Nossos Clientes"
        breadcrumbs={[
          { label: "Início", path: "/" }
        ]}
      />
      
      <main className="py-16">
        <section ref={sectionRef} className="container mx-auto px-4">
          <div className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wide">
                Empresas que confiam
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Clientes de Excelência
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ao longo de 22 anos de atuação, temos orgulho de trabalhar com algumas das 
                empresas mais renomadas do mercado, entregando soluções personalizadas e de alta qualidade.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className={`group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-500 flex items-center justify-center ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-auto max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <div className={`mt-16 bg-muted/30 rounded-lg p-8 md:p-12 text-center transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Quer fazer parte desta lista?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como podemos transformar seu projeto em realidade 
                com soluções inovadoras e personalizadas.
              </p>
              <a href="/contato">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3 rounded-lg transition-colors">
                  SOLICITAR ORÇAMENTO
                </button>
              </a>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <CTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Clientes;
