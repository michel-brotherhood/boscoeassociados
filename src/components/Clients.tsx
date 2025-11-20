const clients = [
  { name: "Panelistic", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=60&fit=crop" },
  { name: "BASF", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=60&fit=crop" },
  { name: "Lojas", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=60&fit=crop" },
  { name: "DIGITEL", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=60&fit=crop" },
];

const Clients = () => {
  return (
    <section className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold mb-8 text-center">
          Empresas que já passaram por aqui:
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {clients.map((client, index) => (
            <div key={index} className="text-white text-lg font-bold">
              {client.name}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(6)].map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
