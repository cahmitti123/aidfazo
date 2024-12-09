import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  BadgeCheck,
  Clock,
  Handshake,
  Shield,
  Users2,
  type LucideIcon,
} from "lucide-react";
import React from "react";

interface BenefitsProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: Shield,
    title: "Expertise Reconnue",
    description:
      "Plus de 10 ans d'expérience dans la sécurité et le nettoyage professionnel au Maroc",
  },
  {
    icon: Users2,
    title: "Personnel Qualifié",
    description:
      "Agents formés et certifiés, régulièrement évalués pour maintenir un haut niveau de service",
  },
  {
    icon: Clock,
    title: "Disponibilité 24/7",
    description: "Service continu avec intervention rapide en cas d'urgence",
  },
  {
    icon: BadgeCheck,
    title: "Certifications",
    description: "Conformité aux normes nationales et internationales de sécurité et d'hygiène",
  },
  {
    icon: Handshake,
    title: "Service Personnalisé",
    description: "Solutions adaptées à vos besoins spécifiques et à votre secteur d'activité",
  },
  {
    icon: Award,
    title: "Garantie Qualité",
    description: "Engagement contractuel sur des objectifs de qualité mesurables",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Avantages
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Pourquoi Choisir NH MAROC ?
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Découvrez les avantages qui font de nous le partenaire idéal pour vos
        besoins en sécurité et propreté
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefitList.map(({ icon, title, description }) => (
          <Card key={title} className="bg-muted/50 dark:bg-card">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10">
                {React.createElement(icon, {
                  size: 32,
                  className: "text-primary",
                })}
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
