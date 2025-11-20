import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MenuProvider } from "@/contexts/MenuContext";
import InputMask from "react-input-mask";
import heroContato from "@/assets/hero-contato.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  phone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  subject: z.string().trim().min(1, "Assunto é obrigatório").max(200, "Assunto muito longo"),
  message: z.string().trim().min(10, "Mensagem deve ter no mínimo 10 caracteres").max(1000, "Mensagem muito longa"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contato = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const message = encodeURIComponent(
        `*Nova Mensagem do Site*\n\n*Nome:* ${data.name}\n*Email:* ${data.email}\n*Telefone:* ${data.phone}\n*Assunto:* ${data.subject}\n\n*Mensagem:*\n${data.message}`
      );
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <MenuProvider>
      <div className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Contato"
        breadcrumbs={[
          { label: "Início", path: "/" }
        ]}
        backgroundImage={heroContato}
      />
      
      <main id="contato" className="bg-background">
        {/* Hero Section with Title */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">
                Fale Conosco
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estamos prontos para transformar seu projeto em realidade. Entre em contato e solicite seu orçamento.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form - Clean Design */}
              <div className="order-2 lg:order-1">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">
                    Envie sua Mensagem
                  </h3>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        placeholder="Digite seu nome"
                        {...register("name")}
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        {...register("email")}
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Telefone *
                      </label>
                      <InputMask
                        mask="(99) 99999-9999"
                        {...register("phone")}
                      >
                        {(inputProps: any) => (
                          <input
                            {...inputProps}
                            type="tel"
                            placeholder="(00) 00000-0000"
                            className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          />
                        )}
                      </InputMask>
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Assunto *
                      </label>
                      <input
                        type="text"
                        placeholder="Qual o assunto?"
                        {...register("subject")}
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                      {errors.subject && (
                        <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Mensagem *
                      </label>
                      <textarea
                        placeholder="Descreva seu projeto ou dúvida..."
                        rows={5}
                        {...register("message")}
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-red-500 text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "ENVIAR MENSAGEM"}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-foreground">Telefones</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p className="hover:text-primary transition-colors cursor-pointer">(21) 2620-7330</p>
                        <p className="hover:text-primary transition-colors cursor-pointer">(21) 2625-4499</p>
                        <p className="hover:text-primary transition-colors cursor-pointer font-semibold">(21) 99369-8629</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-foreground">Email</h3>
                      <a 
                        href="mailto:bassociados@bassociados.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        bassociados@bassociados.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-foreground">Horário</h3>
                      <div className="text-muted-foreground">
                        <p>Segunda a Sexta</p>
                        <p className="font-semibold text-lg text-foreground">08:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WhatsApp Section - Centered */}
        <section className="py-8 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-[#25D366] to-[#20BA5A] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="text-center">
                  <FaWhatsapp className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="font-bold text-2xl text-white mb-2">Fale Agora no WhatsApp</h3>
                  <p className="text-white/90 mb-6">
                    Atendimento rápido e direto. Tire suas dúvidas em tempo real!
                  </p>
                  <a
                    href="https://wa.me/5521993698629"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#25D366] font-bold rounded-lg transition-colors shadow-lg text-lg"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Iniciar Conversa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">Nossa Localização</h2>
              <p className="text-center text-muted-foreground mb-2">
                Av. Ernani do Amaral Peixoto, 96 - Sala 904 - Centro
              </p>
              <p className="text-center text-muted-foreground mb-8">
                Niterói - RJ | CEP: 24020-074
              </p>
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[450px] border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.414892767948!2d-43.10861912425584!3d-22.904464337709817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f7e3f4f2f5f%3A0x5f5f5f5f5f5f5f5f!2sAv.%20Ernani%20do%20Amaral%20Peixoto%2C%2096%20-%20Centro%2C%20Niter%C3%B3i%20-%20RJ%2C%2024020-074!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
    </MenuProvider>
  );
};

export default Contato;
