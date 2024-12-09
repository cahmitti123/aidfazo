"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Professionnel</Badge>
            </span>
            <span>Services de Sécurité et Nettoyage</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Votre partenaire en
              <span className="text-transparent px-2 bg-gradient-to-r from-primary/80 to-primary bg-clip-text">
                sécurité
              </span>
              et propreté
            </h1>
          </div>

          <div className="w-full items-center align-middle justify-center flex py-5">
            <Logo size="xl" withText={false} />
          </div>
          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            NH MAROC S.A.R.L. vous offre des services professionnels de
            gardiennage, sécurité et nettoyage pour vos établissements publics
            et privés.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Contactez-nous
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button variant="secondary" className="w-5/6 md:w-1/4 font-bold">
              Nos Services
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl" />
          <Image
            width={1200}
            height={800}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center"
            src="/security_guy_img.jpg"
            alt="Agent de sécurité professionnel en uniforme avec équipement radio"
            priority
            style={{
              objectFit: "cover",
              filter: theme === "dark" ? "brightness(0.8)" : "none",
            }}
          />
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg" />
        </div>
      </div>
    </section>
  );
};
