import { Button } from "@/components/ui/button";

const services = [
  {
    title: "CONSULTORIA EM INSTALAÇÕES",
    description: "Com 13 anos atuando na área de consultoria, a Ditec é reconhecida pela excelência no comissionamento de instalações prediais, incluindo ar condicionado, ventilação, elétrica, hidráulica, incêndio e automação.",
  },
  {
    title: "FISCALIZAÇÃO E COMISSIONAMENTO DE OBRAS",
    description: "Tenha suporte e respaldo técnico durante a execução de seu empreendimento, através de nossos serviços de fiscalização e comissionamento de obras.",
  },
  {
    title: "ENSAIOS, TESTES E LAUDOS",
    description: "Contrate nossos serviços para realização de sistemas ensaios elétricos, hidráulicos e balanceamento de sistemas de climatização.",
  },
  {
    title: "ANÁLISE E COMPATIBILIZAÇÃO DE PROJETOS",
    description: "Otimize seu projeto, contratando nossa análise técnica que visa a compatibilização entre projetos de instalações e o atendimento às normas, requisitos e diretrizes do cliente.",
  },
  {
    title: "ENGENHARIA DE VALOR",
    description: "Solicite uma análise de reengenharia do seu projeto, visando a redução de custos, alcance do equilíbrio entre as necessidades do projeto e verbas disponíveis.",
  },
  {
    title: "EQUALIZAÇÃO DE PROPOSTAS",
    description: "Assessoria na elaboração de carta convite, questionário técnico de equalização de propostas e auxílio nas reuniões de definição de escopo e contratação das empresas proponentes.",
  },
  {
    title: "PALESTRAS E TREINAMENTOS",
    description: "Aprimore o conhecimento de sua equipe de projetos, execução de obras ou de manutenção predial, através da contratação de nossas palestras e treinamentos na área de instalações.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-card border rounded p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <Button variant="outline" size="sm" className="text-xs">
                Conheça mais sobre o serviço
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
