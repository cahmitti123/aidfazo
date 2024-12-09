import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Sparkles,
  Building2,
  Scan,
  Users2,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  pro?: boolean;
}

const serviceList: ServiceProps[] = [
  {
    title: "Gardiennage Professionnel",
    description:
      "Protection 24/7 de vos établissements avec des agents qualifiés",
    icon: Shield,
    features: [
      "Surveillance continue",
      "Contrôle d'accès",
      "Rondes de sécurité",
      "Gestion des incidents",
    ],
    pro: true,
  },
  {
    title: "Nettoyage & Entretien",
    description: "Services complets de nettoyage industriel et domestique",
    icon: Sparkles,
    features: [
      "Nettoyage bureaux",
      "Entretien industriel",
      "Désinfection",
      "Nettoyage vitres",
    ],
    pro: true,
  },
  {
    title: "Sécurité Événementielle",
    description: "Protection et gestion de vos événements professionnels",
    icon: Users2,
    features: [
      "Contrôle des foules",
      "Gestion VIP",
      "Coordination urgences",
      "Équipe dédiée",
    ],
  },
  {
    title: "Services Spécialisés",
    description: "Solutions sur mesure pour vos besoins spécifiques",
    icon: Workflow,
    features: [
      "Jardinage",
      "Dératisation",
      "Maintenance",
      "Services personnalisés",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Nos Services
      </h2>
      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text ">
          Solutions Professionnelles
        </h2>
        <p className="text-muted-foreground text-center text-lg">
          Une gamme complète de services pour assurer la sécurité et la propreté
          de vos locaux
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {serviceList.map(({ title, description, icon: Icon, features }) => (
          <Card
            key={title}
            className="group relative overflow-hidden border bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <CardHeader className="text-center relative pb-0">
              <div className="size-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon size={32} className="text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold tracking-tight mb-2">
                {title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardHeader>

            <CardContent className="pt-4">
              <ul className="space-y-2 relative">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-muted-foreground flex items-center gap-3 group/item"
                  >
                    <span className="size-1.5 rounded-full bg-primary/70 group-hover/item:bg-primary transition-colors" />
                    <span className="group-hover/item:text-foreground transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
