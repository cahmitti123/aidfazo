"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Sparkles,
  Users2,
  Clock,
  Building2,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useInView } from "framer-motion";

const serviceList = [
  {
    icon: Shield,
    title: "Services de Ménage",
    description: "Services complets de nettoyage et d'entretien professionnel",
    features: [
      "Nettoyage régulier",
      "Entretien des locaux",
      "Personnel qualifié",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Sparkles,
    title: "Services de Sécurité",
    description: "Protection professionnelle adaptée à vos besoins",
    features: [
      "Surveillance continue",
      "Personnel formé",
      "Solutions sur mesure",
    ],
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: Users2,
    title: "Sécurité Événementielle",
    description: "Protection et gestion de vos événements",
    features: ["Contrôle des foules", "Gestion des accès", "Protection VIP"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Clock,
    title: "Service d'Urgence",
    description: "Intervention rapide en cas d'urgence",
    features: ["Disponible 24/7", "Temps de réponse rapide", "Équipe mobile"],
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: Building2,
    title: "Protection des Sites",
    description: "Sécurisation complète de vos locaux",
    features: ["Vidéosurveillance", "Alarmes", "Contrôle périmétrique"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Briefcase,
    title: "Services Spécialisés",
    description: "Solutions sur mesure selon vos besoins",
    features: ["Analyse des risques", "Plans de sécurité", "Formation"],
    color: "from-primary/15 to-primary/5",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="container py-24 sm:py-32 space-y-16">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          Nos Solutions{" "}
          <span className="bg-gradient-to-r from-primary/50 to-primary bg-clip-text text-transparent">
            Professionnelles
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Une gamme complète de services adaptés à vos besoins spécifiques en
          matière de sécurité et de propreté
        </p>
      </div>

      <div
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{
          transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {serviceList.map((service, index) => (
          <Card
            key={service.title}
            className="group relative h-full overflow-hidden border-border/50"
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <CardHeader className="relative space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>

              <p className="text-muted-foreground">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="size-1.5 rounded-full bg-primary/70" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="ghost"
                className="group/btn relative w-full mt-4 border border-border/50"
              >
                <span className="relative z-10">En savoir plus</span>
                <div className="absolute inset-0 bg-primary/10 -z-0 transition-transform duration-300 group-hover/btn:translate-x-full" />
              </Button>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative mt-24 rounded-2xl bg-primary/5 p-8 md:p-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              Besoin d&apos;un service sur mesure ?
            </h3>
            <p className="text-muted-foreground">
              Contactez-nous pour discuter de vos besoins spécifiques
            </p>
          </div>
          <Button size="lg" className="min-w-[200px]">
            Demander un devis
          </Button>
        </div>
      </div>
    </section>
  );
};
