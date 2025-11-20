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
    <section className="relative z-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
