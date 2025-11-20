import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MenuProvider } from "@/contexts/MenuContext";

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
      // Aqui você pode integrar com uma API de envio de email ou WhatsApp
      const message = encodeURIComponent(
        `*Nova Mensagem do Site*\n\n*Nome:* ${data.name}\n*Email:* ${data.email}\n*Telefone:* ${data.phone}\n*Assunto:* ${data.subject}\n\n*Mensagem:*\n${data.message}`
      );
      
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      reset();
      
      // Opcional: redirecionar para WhatsApp
      // window.open(`https://wa.me/5521993698629?text=${message}`, '_blank');
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
      />
      
      <main id="contato">
        {/* Contact Info & Form Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Telefones</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>(21) 2620-7330</p>
                    <p>(21) 2625-4499</p>
                    <p>(21) 99369-8629</p>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">bassociados@bassociados.com</p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Endereço</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Av. Ernani do Amaral Peixoto, 96<br />
                    Sala 904 - Centro<br />
                    Niterói - RJ<br />
                    CEP: 24020-074
                  </p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Horário</h3>
                  <div className="text-sm text-muted-foreground">
                    <p>Segunda a Sexta</p>
                    <p className="font-semibold">08:00 - 18:00</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 bg-card border border-border p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-2">Envie sua Mensagem</h2>
                <p className="text-muted-foreground mb-6">Preencha o formulário abaixo e entraremos em contato em breve.</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Seu Nome *"
                      {...register("name")}
                      className="bg-background border-input"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Seu Email *"
                        {...register("email")}
                        className="bg-background border-input"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        type="tel"
                        placeholder="Seu Telefone *"
                        {...register("phone")}
                        className="bg-background border-input"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Input
                      placeholder="Assunto *"
                      {...register("subject")}
                      className="bg-background border-input"
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      placeholder="Sua Mensagem *"
                      rows={6}
                      {...register("message")}
                      className="bg-background border-input resize-none"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full md:w-auto px-8 font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "ENVIAR MENSAGEM"}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-3">Ou entre em contato direto pelo WhatsApp:</p>
                  <a
                    href="https://wa.me/5521993698629"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-lg transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Nossa Localização</h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[450px]">
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
