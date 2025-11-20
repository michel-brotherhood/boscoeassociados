import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <Hero />
      <Services />
      <Highlights />
      <About />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
