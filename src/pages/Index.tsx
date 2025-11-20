import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Clients from "@/components/Clients";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import QualityControl from "@/components/QualityControl";

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  return (
    <>
      {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        <About />
        <QualityControl />
        <Services />
        <Portfolio />
        <Testimonials />
        <Clients />
        <FAQ />
        <CTA />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
