import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import QualityControl from "@/components/QualityControl";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Sobre Nós"
        breadcrumbs={[
          { label: "Início", path: "/" }
        ]}
      />
      <main className="py-12">
        <About />
        <QualityControl />
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
