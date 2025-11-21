import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import PortfolioPage from "./pages/PortfolioPage";
import Contato from "./pages/Contato";
import Clientes from "./pages/Clientes";
import ConsultoriaTecnica from "./pages/servicos/ConsultoriaTecnica";
import CabeamentoEstruturado from "./pages/servicos/CabeamentoEstruturado";
import SupervisaoControle from "./pages/servicos/SupervisaoControle";
import InstalacoesTelefonicas from "./pages/servicos/InstalacoesTelefonicas";
import RedesLogicas from "./pages/servicos/RedesLogicas";
import AlarmeIncendio from "./pages/servicos/AlarmeIncendio";
import CFTV from "./pages/servicos/CFTV";
import Sonorizacao from "./pages/servicos/Sonorizacao";
import Gerenciamento from "./pages/servicos/Gerenciamento";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/servicos/consultoria-tecnica" element={<ConsultoriaTecnica />} />
          <Route path="/servicos/cabeamento-estruturado" element={<CabeamentoEstruturado />} />
          <Route path="/servicos/supervisao-controle" element={<SupervisaoControle />} />
          <Route path="/servicos/instalacoes-telefonicas" element={<InstalacoesTelefonicas />} />
          <Route path="/servicos/redes-logicas" element={<RedesLogicas />} />
          <Route path="/servicos/alarme-incendio" element={<AlarmeIncendio />} />
          <Route path="/servicos/cftv" element={<CFTV />} />
          <Route path="/servicos/sonorizacao" element={<Sonorizacao />} />
          <Route path="/servicos/gerenciamento" element={<Gerenciamento />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/contato" element={<Contato />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
