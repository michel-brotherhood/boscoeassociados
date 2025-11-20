import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Servicos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Nossos Serviços"
        breadcrumbs={[
          { label: "Início", path: "/" }
        ]}
      />
      <main className="py-12">
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
