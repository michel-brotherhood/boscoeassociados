import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-engineering.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={aboutImage}
              alt="Sobre a Empresa"
              className="w-full rounded-lg shadow-xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-primary text-sm md:text-base font-semibold mb-2 uppercase tracking-wide">Um Pouco</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-foreground">
              Sobre a Empresa
            </h2>
            <div className="space-y-4 md:space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <Button className="mt-6 md:mt-8 bg-primary hover:bg-primary/90 font-bold px-8 md:px-10 py-3 text-sm md:text-base">
              SAIBA MAIS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
