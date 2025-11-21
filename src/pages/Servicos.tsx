import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { MenuProvider } from "@/contexts/MenuContext";
import heroServicos from "@/assets/hero-servicos.jpg";

const Servicos = () => {
  return (
    <MenuProvider>
      <PageTransition>
        <div className="min-h-screen bg-background">
          <Header />
          <PageHero 
            title="Atuação"
            breadcrumbs={[
              { label: "Início", path: "/" }
            ]}
            backgroundImage={heroServicos}
          />
          <main className="py-12">
            <Services />
            <CTA />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </PageTransition>
    </MenuProvider>
  );
};

export default Servicos;
