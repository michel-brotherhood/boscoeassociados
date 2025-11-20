import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Pavimentação",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=500&h=300&fit=crop",
  },
  {
    title: "Laudo Técnico",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&h=300&fit=crop",
  },
  {
    title: "Infraestrutura Urbana",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
    image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=500&h=300&fit=crop",
  },
  {
    title: "Fundações",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
    image: "https://images.unsplash.com/photo-1590496793907-4127c1e8e48e?w=500&h=300&fit=crop",
  },
  {
    title: "Construção Civil",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=300&fit=crop",
  },
  {
    title: "Projetos Especiais",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut purus non, lacinia vel.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="text-primary text-xs font-semibold mb-1 uppercase tracking-wide">Conheça os</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <Button className="bg-primary hover:bg-primary/90 font-bold text-xs px-6">
              SAIBA MAIS
            </Button>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="relative h-56 rounded overflow-hidden group cursor-pointer"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-xs mb-3 opacity-90 line-clamp-2">{service.description}</p>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 font-bold text-xs h-8 px-4">
                    Saiba Mais
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
