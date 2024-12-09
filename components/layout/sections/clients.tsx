"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface ClientProps {
  name: string;
  description: string;
  country: string;
  flag: string;
}

const clients: ClientProps[] = [
  {
    name: "SEBIT Car",
    description: "Location de Voiture",
    country: "Maroc",
    flag: "ma",
  },
  {
    name: "SOTEWI",
    description: "Société Techno Web Informatique",
    country: "Maroc",
    flag: "ma",
  },
  {
    name: "RAYPROD",
    description: "Production Audiovisuelle",
    country: "Maroc",
    flag: "ma",
  },
  {
    name: "Chardina Grupo",
    description: "SARLAU",
    country: "Maroc",
    flag: "ma",
  },
  {
    name: "TSTI",
    description: "Institut de Formation en Sécurité \n(TATWEER)",
    country: "UAE",
    flag: "ae",
  },
  {
    name: "NSI",
    description: "Institut de Formation en Sécurité",
    country: "UAE",
    flag: "ae",
  },
];

export const ClientsSection = () => {
  return (
    <section id="clients" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Nos Clients
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Ils Nous Font Confiance
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-12">
        Des entreprises qui nous font confiance pour leurs besoins en sécurité
        et nettoyage
      </h3>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {clients.map(({ name, description, country, flag }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-2 w-64 bg-muted/50 hover:bg-muted/70 dark:bg-card dark:hover:bg-card/70 rounded-2xl py-2 px-4 transition-colors duration-200 border-2 border-primary/40 hover:border-primary/70 cursor-pointer "
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-bold text-primary text-center ">
                  {name}
                </span>
                {/* <Badge className="text-sm font-bold text-primary text-center bg-muted/50 hover:bg-muted/70 dark:bg-card dark:hover:bg-card/70 rounded-full py-1 px-2 transition-colors duration-200 border-2 border-primary/40 hover:border-primary/70 cursor-pointer">
                  {country}
                </Badge> */}
              </div>
              <Separator className="w-full border-primary/40" />
              <span className="text-sm text-muted-foreground text-center">
                {description}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
