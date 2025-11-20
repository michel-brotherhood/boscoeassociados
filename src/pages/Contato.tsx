import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Contato"
        breadcrumbs={[
          { label: "Início", path: "/" }
        ]}
      />
      <main className="py-12" id="contato">
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
