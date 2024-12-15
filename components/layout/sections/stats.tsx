"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Shield, Users, Building2, ThumbsUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Shield,
    value: "1000+",
    label: "Missions Réussies",
    description: "Interventions de sécurité et nettoyage",
  },
  {
    icon: Users,
    value: "50+",
    label: "Agents Qualifiés",
    description: "Personnel formé et certifié",
  },
  {
    icon: Building2,
    value: "100+",
    label: "Sites Sécurisés",
    description: "Établissements sous notre protection",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Satisfaction Client",
    description: "Clients satisfaits de nos services",
  },
];

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="container py-12 sm:py-32">
      <div className="relative">
        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl" />
          <div className="absolute right-0 top-0 -mt-16 h-32 w-32 bg-primary/10 blur-3xl rounded-full" />
          <div className="absolute left-0 bottom-0 -mb-16 h-32 w-32 bg-primary/10 blur-3xl rounded-full" />
        </div>

        <div className="relative space-y-12 py-4">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Nos{" "}
              <span className="bg-gradient-to-r from-primary/50 to-primary bg-clip-text text-transparent">
                Chiffres
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Des résultats qui témoignent de notre engagement et de notre
              expertise
            </p>
          </div>

          {/* Stats Grid */}
          <div
            ref={ref}
            className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 px-4"
            style={{
              transform: isInView ? "none" : "translateY(20px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className="relative p-6 overflow-hidden group rounded-2xl cursor-pointer"
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative space-y-4">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary/70 to-primary bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold mt-1">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {stat.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full transform translate-y-1/2 translate-x-1/2" />
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Highlight
          <div className="relative max-w-xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 ">
              <span className="text-sm font-medium">
                Certifié et agréé par les autorités compétentes
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
