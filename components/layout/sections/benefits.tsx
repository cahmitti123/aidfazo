"use client";
import { Card, CardHeader } from "@/components/ui/card";
import { Shield, Clock, BadgeCheck, HeartHandshake } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";

const benefits = [
  {
    title: "Expertise Reconnue",
    description:
      "Plus de 10 ans d'expérience dans le secteur de la sécurité et du nettoyage",
    icon: Shield,
    stats: "10+ ans",
  },
  {
    title: "Service Rapide",
    description:
      "Intervention dans les plus brefs délais pour répondre à vos besoins",
    icon: Clock,
    stats: "24/7",
  },
  {
    title: "Personnel Qualifié",
    description:
      "Équipe formée et certifiée pour des prestations de haute qualité",
    icon: BadgeCheck,
    stats: "100%",
  },
  {
    title: "Satisfaction Client",
    description: "Un engagement total pour votre satisfaction et tranquillité",
    icon: HeartHandshake,
    stats: "98%",
  },
];

export const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="container py-24 sm:py-32">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute -z-10 inset-0 bg-grid-black/[0.02] rounded-3xl" />
        <div className="absolute -z-10 inset-x-0 -top-40 -bottom-40 bg-gradient-to-b from-primary/5 via-primary/5 to-transparent rounded-3xl" />

        <div className="relative space-y-6">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pourquoi Choisir{" "}
              <span className="bg-gradient-to-r from-primary/50 to-primary bg-clip-text text-transparent">
                AIDE-FAZO
              </span>
              ?
            </h2>
            <p className="text-muted-foreground text-lg">
              Des avantages concrets qui font la différence pour votre sécurité
              et votre confort
            </p>
          </div>

          {/* Benefits Grid */}
          <div
            ref={ref}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 px-2"
            style={{
              transform: isInView ? "none" : "translateY(20px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="relative group hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader>
                  <div className="space-y-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="text-3xl font-bold bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
                        {benefit.stats}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
