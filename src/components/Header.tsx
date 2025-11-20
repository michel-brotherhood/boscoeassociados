import { Phone, Mail, Facebook, Instagram, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#2a2a2a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">WP</span>
              </div>
              <div>
                <div className="text-sm font-bold leading-tight">WP ENGENHARIA</div>
                <div className="text-[10px] opacity-75 leading-tight uppercase">Construindo o Futuro</div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-xs font-semibold">15 99999-9999</div>
                  <div className="text-[10px] opacity-75">Fale Conosco</div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-xs font-semibold">contato@wpengenharia.com.br</div>
                  <div className="text-[10px] opacity-75">Fale Conosco</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <ul className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:opacity-80 transition-opacity text-sm font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-3 ml-auto">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isOpen && (
            <ul className="md:hidden pb-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 hover:bg-primary/90 transition-colors text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
