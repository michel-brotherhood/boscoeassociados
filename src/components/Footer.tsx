import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">WP</span>
              </div>
              <div>
                <div className="text-lg font-bold">WP ENGENHARIA</div>
                <div className="text-xs opacity-75">Construindo o Futuro</div>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, 
              lacinia vel, luctus eget, aliquet nec.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary rounded flex items-center justify-center hover:opacity-80 transition-opacity">
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Contato</h4>
            <div className="space-y-3 text-sm opacity-75">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>15 99999-9999</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>contato@wpengenharia.com.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Rua A, 123 B</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Links Úteis</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Localização</h4>
            <div className="bg-muted rounded h-40 flex items-center justify-center text-muted-foreground">
              <MapPin className="h-8 w-8" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs opacity-75">
          <p>WP Engenharia, Copyright © 2024 – Todos os Direitos Reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
