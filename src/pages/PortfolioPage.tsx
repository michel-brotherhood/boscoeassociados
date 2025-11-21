import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { MenuProvider } from "@/contexts/MenuContext";
import heroPortfolio from "@/assets/hero-portfolio.jpg";

const PortfolioPage = () => {
  return (
    <MenuProvider>
      <PageTransition>
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
      </PageTransition>
    </MenuProvider>
  );
};

export default PortfolioPage;
