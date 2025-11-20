import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Portfólio"
        breadcrumbs={[
          { label: "Início", path: "/" }
        ]}
      />
      <main className="py-12">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
