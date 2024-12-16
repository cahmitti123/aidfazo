"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ArrowRight, Shield, Users, Clock, CheckCircle2 } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-l-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-primary/3 rounded-tr-full blur-2xl -z-10" />

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Left Content */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Badge variant="outline" className="px-6 py-2 border-primary/20">
                <span className="text-primary font-semibold tracking-wider">
                  SÉCURITÉ & NETTOYAGE
                </span>
              </Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Votre référence en services de{" "}
                <span className="text-primary relative inline-block">
                  ménage et sécurité
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-primary/20 rounded-full" />
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-muted-foreground">
                  Forts de notre expertise et de notre engagement envers l&apos;excellence, nous offrons des prestations sur mesure pour répondre aux besoins variés de nos clients professionnels et particuliers.
                </p>

                {/* Added Key Points */}
                <div className="grid gap-2">
                  {[
                    "Personnel qualifié et formé",
                    "Service personnalisé",
                    "Excellence et professionnalisme",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-bold group px-8 shadow-lg shadow-primary/20"
              >
                Devis Gratuit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="font-bold px-8">
                Nos Services
              </Button>
            </div>

            {/* Enhanced Feature Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-8">
              {[
                {
                  icon: Shield,
                  title: "Protection 24/7",
                  description: "Sécurité garantie",
                  gradient: "from-primary/10 to-primary/5",
                },
                {
                  icon: Users,
                  title: "Équipe Qualifiée",
                  description: "Personnel certifié",
                  gradient: "from-primary/15 to-primary/5",
                },
                {
                  icon: Clock,
                  title: "Service Rapide",
                  description: "Intervention 24h",
                  gradient: "from-primary/20 to-primary/5",
                },
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative bg-card/50 backdrop-blur-sm p-4 rounded-xl border border-border/50 overflow-hidden hover:border-primary/20 transition-colors"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="relative">
                    <feature.icon className="w-8 h-8 text-primary mb-2" />
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Right Image Section */}
          <div className="relative aspect-[4/3] lg:aspect-square w-full">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border border-muted-foreground/20">
              <Image
                src="/security_guy_img.jpg"
                alt="Agent de sécurité professionnel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/90 via-background/50 to-transparent" />
            </div>

            {/* Enhanced Company Info Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-xl hover:shadow-2xl transition-shadow w-[90%] hover:border-primary/20 cursor-pointer">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <Logo size="sm" withText={false} />
                  <div>
                    <h3 className="font-bold">AIDE-FAZO</h3>
                    <p className="text-sm text-muted-foreground">
                      Services Professionnels
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <span className="text-xs font-normal">Contactez-nous</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
