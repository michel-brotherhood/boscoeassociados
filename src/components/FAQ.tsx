import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quais serviços de engenharia vocês oferecem?",
      answer: "Oferecemos projetos estruturais, elétricos, hidráulicos, sanitários, prevenção contra incêndio, regularização de obras, laudos técnicos e consultoria em geral para construção civil."
    },
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer: "O prazo varia de acordo com a complexidade do projeto. Projetos residenciais simples podem levar de 15 a 30 dias, enquanto projetos comerciais ou industriais podem demandar de 30 a 90 dias. Fornecemos um cronograma detalhado após a análise inicial."
    },
    {
      question: "Vocês atendem em quais regiões?",
      answer: "Atendemos toda a região de Sorocaba e cidades vizinhas. Para projetos de maior porte, podemos avaliar atendimento em outras localidades. Entre em contato para consultar disponibilidade na sua região."
    },
    {
      question: "Preciso de laudo técnico para minha edificação. Como funciona?",
      answer: "Realizamos visita técnica ao local para inspeção detalhada da edificação. Após a vistoria, elaboramos um laudo técnico completo com diagnóstico, recomendações e, se necessário, propostas de intervenção. O prazo médio é de 7 a 15 dias úteis."
    },
    {
      question: "Como funciona o processo de aprovação de projetos na prefeitura?",
      answer: "Desenvolvemos o projeto completo de acordo com as normas técnicas e legislação municipal. Nosso escritório cuida de toda a documentação e protocolo junto aos órgãos competentes, acompanhando o processo até a aprovação final."
    },
    {
      question: "Vocês fazem acompanhamento de obra?",
      answer: "Sim, oferecemos serviço de acompanhamento técnico de obra, com visitas periódicas para fiscalização, orientação técnica à equipe de execução e garantia de que o projeto está sendo seguido corretamente."
    },
    {
      question: "Qual o investimento necessário para um projeto estrutural?",
      answer: "O valor do projeto estrutural depende do porte da obra, área construída e complexidade. Oferecemos orçamento personalizado sem compromisso. Entre em contato para receber uma proposta adequada às suas necessidades."
    },
    {
      question: "Minha obra está irregular. Vocês podem ajudar com a regularização?",
      answer: "Sim, realizamos todo o processo de regularização de obras junto aos órgãos competentes, incluindo levantamento as-built, elaboração de projetos retroativos e acompanhamento do processo de legalização até a obtenção do Habite-se."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de engenharia
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
