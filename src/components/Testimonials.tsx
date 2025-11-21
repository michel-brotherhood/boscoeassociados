import { TestimonialsSection } from "./ui/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Fabiano Belchior",
      handle: "Gerente de Facilities",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    text: "A Bosco & Associados entregou um projeto de CFTV e controle de acesso excepcional. A equipe técnica demonstrou profissionalismo e domínio total das tecnologias aplicadas.",
  },
  {
    author: {
      name: "Juliana Silva",
      handle: "Coordenadora de Projetos",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    text: "Trabalhar com a Bosco foi uma experiência excelente. O projeto de cabeamento estruturado foi executado com precisão e dentro do cronograma estabelecido.",
  },
  {
    author: {
      name: "Roberto Mendes",
      handle: "Diretor de Operações",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    text: "Excelente trabalho no projeto de alarme de incêndio. A equipe é extremamente competente e sempre disponível para suporte técnico. Recomendo fortemente!",
  },
  {
    author: {
      name: "Patricia Costa",
      handle: "Gerente de Projetos",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    text: "A consultoria técnica da Bosco foi fundamental para o sucesso do nosso projeto. Profissionais altamente qualificados e comprometidos com resultados.",
  },
  {
    author: {
      name: "Carlos Alberto",
      handle: "Coordenador de Facilities",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    text: "O projeto de sonorização superou nossas expectativas. Qualidade impecável e atendimento personalizado. A Bosco é referência no mercado!",
  },
  {
    author: {
      name: "Ana Paula Santos",
      handle: "Diretora de Infraestrutura",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    },
    text: "Parceria de longa data com a Bosco. Sempre entregam projetos de supervisão e controle predial com excelência. Equipe técnica de primeiro nível.",
  },
  {
    author: {
      name: "Marcos Vieira",
      handle: "Gerente de TI",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
    },
    text: "Impressionante o conhecimento técnico da equipe em redes lógicas. O projeto foi executado sem intercorrências e com total transparência.",
  },
  {
    author: {
      name: "Renata Lima",
      handle: "Coordenadora de Operações",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
    text: "A Bosco nos ajudou a modernizar toda nossa infraestrutura de telecomunicações. Projeto entregue no prazo e com qualidade superior.",
  },
];

const Testimonials = () => {
  return (
    <TestimonialsSection
      title="Dizendo Sobre Nós"
      description="Veja o que nossos clientes têm a dizer sobre nossos serviços"
      testimonials={testimonials}
      className="bg-[#1b1b1a]"
    />
  );
};

export default Testimonials;
