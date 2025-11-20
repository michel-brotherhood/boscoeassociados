import { Instagram, Facebook, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Ditec</h3>
            <p className="text-sm opacity-90 mb-2">
              Engenharia e Consultoria
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">CONTATO</h4>
            <div className="space-y-2 text-xs opacity-90">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3" />
                <span>+55 (11) 4323-4680</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3" />
                <span>contato@diteceng.com.br</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">SERVIÇOS</h4>
            <ul className="space-y-1 text-xs opacity-90">
              <li><a href="#servicos" className="hover:opacity-100 transition-opacity">Consultoria</a></li>
              <li><a href="#servicos" className="hover:opacity-100 transition-opacity">Fiscalização</a></li>
              <li><a href="#servicos" className="hover:opacity-100 transition-opacity">Comissionamento</a></li>
              <li><a href="#servicos" className="hover:opacity-100 transition-opacity">Ensaios e Testes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">REDES SOCIAIS</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/ditecengenharia/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/ditecengenharia" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/ditec-engenharia-e-consultoria/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs opacity-75">
          <p>&copy; {new Date().getFullYear()} Ditec Engenharia e Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
