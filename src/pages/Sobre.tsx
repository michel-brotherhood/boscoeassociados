import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import QualityControl from "@/components/QualityControl";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MenuProvider } from "@/contexts/MenuContext";
import heroSobre from "@/assets/hero-sobre.jpg";

const Sobre = () => {
  return (
    <MenuProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <PageHero 
          title="Sobre Nós"
          breadcrumbs={[
            { label: "Início", path: "/" }
          ]}
          backgroundImage={heroSobre}
        />
        <main className="py-12">
          <About />
          <QualityControl />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </MenuProvider>
  );
};

export default Sobre;
