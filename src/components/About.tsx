import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-engineering.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-[#f5f5f5] relative">
      {/* Background decorative element */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-primary/10 rounded-lg -z-10"></div>
            <img
              src={aboutImage}
              alt="Sobre a Empresa"
              className="w-full rounded-lg shadow-2xl relative z-10"
            />
          </div>

          <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg">
            <p className="text-primary text-xs font-semibold mb-2 uppercase tracking-wide">Um Pouco</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Sobre a Empresa
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
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
            <Button className="mt-6 bg-primary hover:bg-primary/90 font-bold px-8 text-sm">
              SAIBA MAIS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
