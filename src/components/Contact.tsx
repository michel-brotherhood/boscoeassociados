import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">SEJA NOSSO CLIENTE.</h2>
          <p className="text-muted-foreground text-lg">
            Somos uma empresa especializada
          </p>
          <p className="text-muted-foreground text-lg">
            em consultoria e comissionamento
          </p>
          <p className="text-muted-foreground text-lg">
            de instalações prediais.
          </p>
        </div>

        <div className="bg-card border rounded p-8 shadow-sm">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Nome" className="h-9" />
              </div>
              <div>
                <Input placeholder="Email" type="email" className="h-9" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Telefone" className="h-9" />
              </div>
              <div>
                <Input placeholder="Empresa" className="h-9" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Select>
                  <SelectTrigger className="h-9">
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SP">São Paulo</SelectItem>
                    <SelectItem value="MG">Minas Gerais</SelectItem>
                    <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                    <SelectItem value="DF">Distrito Federal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Input placeholder="Cidade" className="h-9" />
              </div>
            </div>

            <div>
              <Select>
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="consultoria">CONSULTORIA</SelectItem>
                  <SelectItem value="fiscalizacao">FISCALIZAÇÃO</SelectItem>
                  <SelectItem value="comissionamento">COMISSIONAMENTO</SelectItem>
                  <SelectItem value="ensaios">ENSAIOS E TESTES</SelectItem>
                  <SelectItem value="projetos">PROJETOS</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Input placeholder="Assunto" className="h-9" />
            </div>

            <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
