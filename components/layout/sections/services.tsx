import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Sparkles, Building2, Scan, Users2, Workflow } from "lucide-react";
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
    description: "Protection 24/7 de vos établissements avec des agents qualifiés",
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
    <section id="services" className="container py-24 sm:py-32">
      <div className="text-center space-y-4">
        <h2 className="text-lg text-primary tracking-wider">Nos Services</h2>
        <h2 className="text-3xl md:text-4xl font-bold">
          Solutions Professionnelles
        </h2>
        <h3 className="md:w-1/2 mx-auto text-xl text-muted-foreground">
          Une gamme complète de services pour assurer la sécurité et la propreté
          de vos locaux
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-16">
        {serviceList.map(({ title, description, icon: Icon, features }) => (
          <Card
            key={title}
            className="relative group hover:shadow-lg transition-all duration-300 border-2"
          >
           
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <Icon size={32} className="text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="grid grid-cols-2 gap-4 mt-4">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="size-1.5 rounded-full bg-primary" />
                    {feature}
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
