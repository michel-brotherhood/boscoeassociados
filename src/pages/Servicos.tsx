import Header from "@/components/Header";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Servicos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-4 pb-12">
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Servicos;
