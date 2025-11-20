import { UserCheck, Users, Cpu } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel, luctus eget, aliquet nec.",
  },
  {
    icon: Users,
    title: "Profissionais Qualificados",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel, luctus eget, aliquet nec.",
  },
  {
    icon: Cpu,
    title: "Tecnologia de Ponta",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel, luctus eget, aliquet nec.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
