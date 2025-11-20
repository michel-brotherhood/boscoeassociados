import Header from "@/components/Header";
import About from "@/components/About";
import QualityControl from "@/components/QualityControl";
import Footer from "@/components/Footer";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-4 pb-12">
        <About />
        <QualityControl />
      </main>
      <Footer />
    </div>
  );
};

export default Sobre;
