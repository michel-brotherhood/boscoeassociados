import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, FileCheck, FlaskConical, GitCompare, Calculator, Scale } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "CONSULTORIA EM INSTALAÇÕES",
    description: "Excelência no comissionamento de instalações prediais, incluindo ar condicionado, ventilação, elétrica, hidráulica, incêndio e automação.",
  },
  {
    icon: FileCheck,
    title: "FISCALIZAÇÃO E COMISSIONAMENTO",
    description: "Suporte e respaldo técnico durante a execução de seu empreendimento.",
  },
  {
    icon: FlaskConical,
    title: "ENSAIOS, TESTES E LAUDOS",
    description: "Realização de ensaios elétricos, hidráulicos e balanceamento de sistemas de climatização.",
  },
  {
    icon: GitCompare,
    title: "ANÁLISE E COMPATIBILIZAÇÃO",
    description: "Análise técnica visando compatibilização entre projetos de instalações e atendimento às normas.",
  },
  {
    icon: Calculator,
    title: "ENGENHARIA DE VALOR",
    description: "Análise de reengenharia visando redução de custos e equilíbrio entre necessidades e verbas.",
  },
  {
    icon: Scale,
    title: "EQUALIZAÇÃO DE PROPOSTAS",
    description: "Assessoria na elaboração de carta convite e questionário técnico de equalização.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary">D</span>estaques Ditec
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm mb-4">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    Conheça mais sobre o serviço
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
