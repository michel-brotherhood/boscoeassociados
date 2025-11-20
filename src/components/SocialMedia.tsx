import { Instagram, Facebook, Linkedin } from "lucide-react";

const SocialMedia = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Siga Nossas Redes Sociais</h2>
        <p className="text-muted-foreground mb-6 text-sm">
          Acompanhe as notícias, nossos serviços na prática e as atualizações sobre a Ditec em nossas redes sociais.
        </p>
        <div className="flex flex-wrap gap-6 items-center">
          <a 
            href="https://www.instagram.com/ditecengenharia/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-semibold">Instagram</span>
          </a>
          <span className="text-muted-foreground">&gt;</span>
          <a 
            href="https://www.facebook.com/ditecengenharia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Facebook className="h-5 w-5" />
            <span className="font-semibold">Facebook</span>
          </a>
          <span className="text-muted-foreground">&gt;</span>
          <a 
            href="https://www.linkedin.com/company/ditec-engenharia-e-consultoria/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="font-semibold">Linkedin</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
