"use client";

import { Separator } from "@/components/ui/separator";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";

interface ClientProps {
  name: string;
  description: string;
  logo?: string;
  testimonial?: string;
}

const clients: ClientProps[] = [
  {
    name: "SEBIT Car",
    description: "Location de Voiture",
    logo: "/sebitcar.jpg",
    testimonial:
      "Nous avons fait appel à AIDE FAZO pour le nettoyage de nos locaux et sommes très satisfaits du service rendu. Leur équipe est professionnelle, réactive et effectue un travail soigné à chaque intervention.",
  },
  {
    name: "SOTEWI",
    description: "Société Techno Web Informatique",
    testimonial:
      "Nous avons fait appel aux services de ménage de AIDE FAZO et nous sommes très satisfaits de la qualité de leur travail. L'équipe est ponctuelle, professionnelle et très méticuleuse.",
  },
  {
    name: "Chardina Grupo",
    description: "SARLAU",
    logo: "/Chardina logo.jpeg",
    testimonial:
      "Nous avons eu l'opportunité de collaborer avec AIDE FAZO pour le nettoyage et l'entretien de nos locaux, et nous sommes ravis de leur prestation.",
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
          {clients.map(({ name, description, logo, testimonial }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-4 w-80 bg-muted/50 hover:bg-muted/70 dark:bg-card dark:hover:bg-card/70 rounded-2xl py-6 px-6 transition-colors duration-200 border-2 border-primary/40 hover:border-primary/70 cursor-pointer"
            >
              {logo ? (
                <div className="relative w-full h-24 mb-2 p-4 bg-white/5 dark:bg-black/5 rounded-xl flex items-center justify-center">
                  <Image
                    src={logo}
                    alt={name}
                    fill
                    className="object-contain p-2 hover:scale-105 transition-transform duration-200 filter grayscale hover:grayscale-0 opacity-75 hover:opacity-100"
                    sizes="(max-width: 320px) 100vw"
                    priority
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-24 mb-2 w-full bg-white/5 dark:bg-black/5 rounded-xl">
                  <span className="text-2xl font-bold text-primary/75 hover:text-primary px-4 text-center transition-colors">
                    {name}
                  </span>
                </div>
              )}

              <Separator className="w-full border-primary/40" />

              <span className="text-sm text-muted-foreground text-center">
                {description}
              </span>

              {testimonial && (
                <p className="text-sm text-muted-foreground text-center italic">
                  &ldquo;{testimonial}&rdquo;
                </p>
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
