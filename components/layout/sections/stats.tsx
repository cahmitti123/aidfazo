import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, Users2, Award } from "lucide-react";

const stats = [
  {
    title: "Années d&apos;Expérience",
    value: "10+",
    icon: Award,
    description: "Dans la sécurité et le nettoyage",
  },
  {
    title: "Agents Qualifiés",
    value: "100+",
    icon: Users2,
    description: "Personnel formé et certifié",
  },
  {
    title: "Sites Protégés",
    value: "50+",
    icon: Building2,
    description: "Sites sous notre protection",
  },
  {
    title: "Satisfaction Client",
    value: "98%",
    icon: Shield,
    description: "Clients satisfaits",
  },
];

export const StatsSection = () => {
  return (
    <section id="stats" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Nos Chiffres
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        NH MAROC en Chiffres
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Des résultats qui témoignent de notre engagement envers
        l&apos;excellence
      </h3>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ title, value, icon: Icon, description }) => (
          <Card key={title} className="bg-muted/50 dark:bg-card">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="bg-primary/20 p-2 rounded-full">
                <Icon size={28} className="text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-4xl font-bold mb-2">{value}</CardTitle>
              <p className="text-lg font-semibold mb-1">{title}</p>
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
