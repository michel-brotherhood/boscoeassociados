import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MenuProvider } from "@/contexts/MenuContext";
import heroPortfolio from "@/assets/hero-portfolio.jpg";

const PortfolioPage = () => {
  return (
    <MenuProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <PageHero 
          title="Portfólio"
          breadcrumbs={[
            { label: "Início", path: "/" }
          ]}
          backgroundImage={heroPortfolio}
        />
        <main className="py-12">
          <Portfolio />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </MenuProvider>
  );
};

export default PortfolioPage;
