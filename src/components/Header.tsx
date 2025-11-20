import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">WP</span>
            </div>
            <div>
              <div className="text-sm font-bold leading-tight">WP ENGENHARIA</div>
              <div className="text-[10px] opacity-75 leading-tight">CONSTRUINDO O FUTURO</div>
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
    </header>
  );
};

export default Header;
