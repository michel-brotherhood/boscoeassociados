const CTA = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-secondary via-secondary/95 to-primary/20 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-sm font-semibold mb-2 uppercase tracking-wide">
            Entre em contato
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Solicite o seu Orçamento
          </h2>
          <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed">
            Transforme seu projeto em realidade com soluções personalizadas e de alta qualidade. 
            Nossa equipe está pronta para atender você.
          </p>
          <button 
            className="cta-button"
            onClick={() => window.location.href = '/contato'}
          >
            PEÇA O SEU ORÇAMENTO
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
