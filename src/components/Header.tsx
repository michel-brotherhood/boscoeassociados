import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between py-3 text-sm border-b">
          <div className="flex items-center gap-6">
            <a href="mailto:contato@diteceng.com.br" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">contato@diteceng.com.br</span>
            </a>
            <a href="tel:+551143234680" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+55 (11) 4323-4680</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground hidden sm:inline">Confira nossa rede social</span>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Main header */}
        <div className="flex flex-wrap items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold text-primary">Ditec</div>
            <div className="text-sm text-muted-foreground">
              <div>Engenharia e Consultoria</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium hidden md:inline">NEWSLETTER</span>
            <Input 
              placeholder="Digite seu nome" 
              className="w-32 h-9"
            />
            <Input 
              placeholder="Digite seu email" 
              className="w-40 h-9"
              type="email"
            />
            <Button size="sm" className="bg-secondary hover:bg-secondary/90">
              →
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
