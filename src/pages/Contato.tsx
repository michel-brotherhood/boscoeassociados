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
        <div className="container mx-auto px-4 mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1234567890!2d-43.1234567890!3d-22.8987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUzJzU1LjYiUyA0M8KwMDcnMjQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&q=Avenida+Ernani+do+Amaral+Peixoto,+96+Sala+904,+Centro,+Niterói,+RJ"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
