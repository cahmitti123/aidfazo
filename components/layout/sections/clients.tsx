"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface ClientProps {
  name: string;
  description: string;
}

const clients: ClientProps[] = [
  {
    name: "SEBIT Car",
    description: "Location de Voiture",
  },
  {
    name: "SOTEWI",
    description: "Société Techno Web Informatique",
  },
  {
    name: "RAYPROD",
    description: "Production Audiovisuelle",
  },
  {
    name: "Chardina Grupo",
    description: "SARLAU",
  },
  {
    name: "TATWEER",
    description: "Institut de Formation en Sécurité",
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
        Des entreprises qui nous font confiance pour leurs besoins en sécurité et nettoyage
      </h3>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {clients.map(({ name, description }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center h-32 w-64 bg-muted/50 hover:bg-muted/70 dark:bg-card dark:hover:bg-card/70 rounded-lg p-6 transition-colors duration-200"
            >
              <span className="text-xl font-medium text-center mb-2">
                {name}
              </span>
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
