import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/logo-bosco-white.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          <div>
            <div className="mb-3">
              <img src={logo} alt="Bosco & Associados" className="h-16 w-auto" />
            </div>
            <p className="text-xs opacity-75 leading-relaxed mb-3">
              Engenharia de excelência com soluções inovadoras para seus projetos.
            </p>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/boscoassociados/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Instagram className="h-3 w-3" />
              </a>
              <a href="https://www.linkedin.com/company/bosco-associados-ltda/?originalSubdomain=br" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Linkedin className="h-3 w-3" />
              </a>
              <a href="https://www.google.com/search?q=bosco+%26+associados&ie=UTF-8#lrd=0x9983c45fd89495:0x1b4bc8fd0ececf74,1,,,," target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <FaGoogle className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-xs">Contato</h4>
            <div className="space-y-2 text-xs opacity-75">
              <div className="flex items-start gap-2">
                <Phone className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <div>(21) 2620-7330</div>
                  <div>(21) 2625-4499</div>
                  <div>(21) 99369-8629</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-3 w-3 mt-0.5 flex-shrink-0" />
                <span>bassociados@bassociados.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-xs">Links Úteis</h4>
            <ul className="space-y-1.5 text-xs opacity-75">
              <li><a href="/" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="/sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="/servicos" className="hover:text-primary transition-colors">Atuação</a></li>
              <li><a href="/contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-xs">Localização</h4>
            <p className="text-xs opacity-75 leading-relaxed">
              Av. Ernani do Amaral Peixoto, 96<br/>
              Sala 904 - Centro<br/>
              Niterói - RJ<br/>
              CEP: 24020-074
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 text-center text-[10px] opacity-75">
          <p>Bosco & Associados LTDA, Copyright © 2024 – Todos os Direitos Reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
