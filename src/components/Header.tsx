import { Phone, Mail, Facebook, Instagram, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-bosco-white.svg";
import { Link } from "react-router-dom";
import { useMenu } from "@/contexts/MenuContext";

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useMenu();

  const navItems = [
    { label: "Início", to: "/" },
    { label: "Sobre", to: "/sobre" },
    { label: "Atuação", to: "/servicos" },
    { label: "Portfólio", to: "/portfolio" },
    { label: "Clientes", to: "/clientes" },
    { label: "Contato", to: "/contato" },
  ];

  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#2a2a2a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Bosco & Associados" className="h-16 w-auto" />
            </div>

            {/* Desktop contact info */}
            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-xs font-semibold">(21) 2620-7330</div>
                  <div className="text-[10px] opacity-75">Fale Conosco</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-xs font-semibold">bassociados@bassociados.com</div>
                  <div className="text-[10px] opacity-75">Fale Conosco</div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 z-50 relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation bar */}
      <nav className="hidden md:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <ul className="flex items-center space-x-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="hover:opacity-80 transition-opacity text-sm font-semibold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 ml-auto">
              <a href="https://www.facebook.com/boscoassociados" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/boscoassociados" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://wa.me/5521993698629" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-40 flex flex-col overflow-hidden">
          <div className="flex justify-center pt-8 pb-6 px-4">
            <img src={logo} alt="Bosco & Associados" className="h-16 w-auto" />
          </div>
          
          <nav className="flex-1 flex flex-col justify-center overflow-y-auto">
            <ul className="flex flex-col items-center space-y-8 px-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white text-xl font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pb-8 px-6">
            <Button 
              variant="3d"
              size="lg" 
              className="w-full font-bold text-base py-6"
              onClick={() => {
                setIsMenuOpen(false);
                window.open("https://wa.me/5521993698629", "_blank");
              }}
            >
              SOLICITAR ORÇAMENTO
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
