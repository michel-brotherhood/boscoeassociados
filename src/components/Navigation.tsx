import { useState } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50">
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

          <div className="hidden md:flex items-center gap-3">
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
  );
};

export default Navigation;
