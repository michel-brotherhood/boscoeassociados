import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Contato = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-4 pb-12" id="contato">
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
