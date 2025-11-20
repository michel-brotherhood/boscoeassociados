import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">WP</span>
            </div>
            <div className="text-base font-bold">WP ENGENHARIA</div>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a href="tel:1599999999" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-3 w-3" />
              <span>15 99999-9999</span>
            </a>
            <a href="mailto:contato@wpengenharia.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-3 w-3" />
              <span className="hidden md:inline">contato@wpengenharia.com.br</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
