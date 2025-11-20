import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MenuProvider } from "@/contexts/MenuContext";

const Servicos = () => {
  return (
    <MenuProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <PageHero 
          title="Atuação"
          breadcrumbs={[
            { label: "Início", path: "/" }
          ]}
        />
        <main className="py-12">
          <Services />
          <CTA />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </MenuProvider>
  );
};

export default Servicos;
