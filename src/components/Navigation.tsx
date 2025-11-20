import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "DITEC", href: "#ditec" },
    { label: "SERVIÇOS", href: "#servicos" },
    { label: "CLIENTES", href: "#clientes" },
    { label: "ÁREAS DE ATUAÇÃO", href: "#areas" },
    { label: "NEWS", href: "#news" },
    { label: "PORTFOLIO", href: "#portfolio" },
    { label: "PARCEIROS", href: "#parceiros" },
    { label: "CONTATO", href: "#contato" },
  ];

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-1 w-full justify-between">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="px-4 py-4 hover:bg-primary/90 transition-colors text-sm font-medium inline-block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="lg:hidden pb-4 space-y-2">
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
