import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-4 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">WP</span>
            </div>
            <div>
              <div className="text-xl font-bold">WP ENGENHARIA</div>
              <div className="text-xs opacity-90">Construindo o Futuro</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="tel:1599999999" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>15 99999-9999</span>
            </a>
            <a href="mailto:contato@wpengenharia.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden md:inline">contato@wpengenharia.com.br</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
