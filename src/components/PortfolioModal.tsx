import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

interface PortfolioModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PortfolioModal = ({ project, open, onOpenChange }: PortfolioModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full">
              {project.category}
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Este projeto foi desenvolvido com foco em eficiência e tecnologia de ponta, aplicando 
              soluções personalizadas de sistemas eletrônicos adequadas às necessidades específicas do cliente.
            </p>
            <p>
              Nossa equipe técnica realizou todo o planejamento, projeto executivo e acompanhamento da obra, 
              garantindo qualidade e cumprimento de prazos estabelecidos com excelência.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;
