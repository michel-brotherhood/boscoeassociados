import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ditec</h3>
            <p className="text-sm opacity-90">
              Engenharia e Consultoria
            </p>
            <p className="text-sm opacity-90 mt-2">
              Excelência em instalações prediais desde 2002
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#servicos" className="hover:opacity-100 transition-opacity">Consultoria</a></li>
              <li><a href="#servicos" className="hover:opacity-100 transition-opacity">Fiscalização</a></li>
              <li><a href="#servicos" className="hover:opacity-100 transition-opacity">Ensaios e Testes</a></li>
              <li><a href="#servicos" className="hover:opacity-100 transition-opacity">Compatibilização</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <a href="#" className="inline-flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Ditec Engenharia e Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
