import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckSquare,
  Clock,
  Headset,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeaturesProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: Shield,
    title: "Sécurité Garantie",
    description:
      "Agents qualifiés et formés régulièrement pour assurer une sécurité optimale",
  },
  {
    icon: Clock,
    title: "Service 24/7",
    description:
      "Disponibilité permanente et intervention rapide en cas d'urgence",
  },
  {
    icon: CheckSquare,
    title: "Qualité Certifiée",
    description:
      "Services conformes aux normes de qualité et de sécurité les plus strictes",
  },
  {
    icon: Users,
    title: "Équipe Expérimentée",
    description:
      "Personnel professionnel avec une solide expérience dans le secteur",
  },
  {
    icon: Settings,
    title: "Solutions Sur Mesure",
    description:
      "Services adaptés à vos besoins spécifiques et à votre secteur d'activité",
  },
  {
    icon: Headset,
    title: "Support Réactif",
    description:
      "Équipe support disponible pour répondre à vos besoins et urgences",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon: Icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
