"use client";

import { Separator } from "@/components/ui/separator";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";
import { Star } from "lucide-react";
import type { StaticImageData } from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ClientProps {
  name: string;
  description?: string;
  logo?: string | StaticImageData;
  testimonial?: string;
  rating?: number;
  certificate?: string | StaticImageData;
}

const clients: ClientProps[] = [
  {
    name: "RAYPROD",
    description: "Production Audiovisuelle",
    logo: "/payprod_logo.png",
    certificate: "/payprod_image_certificate.jpeg",
    rating: 5,
    // testimonial:
    //   "Je tiens à exprimer notre entière satisfaction concernant les services de ménage et de sécurité fournis par AIDE FAZO. Nous travaillons avec votre équipe depuis six mois, et nous avons toujours été impressionnés par leur professionnalisme et leur efficacité.",
  },
  {
    name: "SEBIT Car",
    description: "Location de Voiture",
    logo: "/sebitcar.png",
    rating: 5,
    testimonial:
      "Nous avons fait appel à AIDE FAZO pour le nettoyage de nos locaux et sommes très satisfaits du service rendu. Leur équipe est professionnelle, réactive et effectue un travail soigné à chaque intervention.",
  },
  {
    name: "SOTEWI",
    description: "Société Techno Web Informatique",
    rating: 5,
    testimonial:
      "Nous avons fait appel aux services de ménage de AIDE FAZO et nous sommes très satisfaits de la qualité de leur travail. L'équipe est ponctuelle, professionnelle et très méticuleuse.",
  },
  {
    name: "Chardina Grupo",
    description: "SARLAU",
    logo: "/Chardina logo.jpeg",
    rating: 5,
    testimonial:
      "Nous avons eu l'opportunité de collaborer avec AIDE FAZO pour le nettoyage et l'entretien de nos locaux, et nous sommes ravis de leur prestation.",
  },
];

export const ClientsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <Star
        key={`star-${index}-${rating}`}
        className="w-4 h-4 fill-primary text-primary"
      />
    ));
  };

  return (
    <section id="clients" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Nos Clients
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Ils Nous Font Confiance
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-12">
        Des entreprises qui nous font confiance pour leurs besoins en services
        de ménage et de sécurité
      </h3>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col gap-4 w-80 bg-muted/50 hover:bg-muted/70 dark:bg-card dark:hover:bg-card/70 rounded-2xl py-6 px-6 transition-colors duration-200 border-2 border-primary/40 hover:border-primary/70 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {client.logo ? (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-white/5 dark:bg-black/5">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-200"
                      sizes="64px"
                      priority
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-primary">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                )}

                <div className="flex flex-col">
                  <h4 className="font-semibold">{client.name}</h4>
                  {client.description && (
                    <p className="text-sm text-muted-foreground">
                      {client.description}
                    </p>
                  )}
                  {client.rating && (
                    <div className="flex gap-0.5 mt-1">
                      {renderStars(client.rating)}
                    </div>
                  )}
                </div>
              </div>

              {client.certificate ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-white/5 dark:bg-black/5 cursor-zoom-in">
                      <Image
                        src={client.certificate}
                        alt={`${client.name} Certificate`}
                        fill
                        className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 320px) 100vw"
                        priority
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl h-[80vh]">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.certificate}
                        alt={`${client.name} Certificate`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw"
                        priority
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Separator className="w-full border-primary/40" />
              )}

              {client.testimonial && (
                <p className="text-sm text-muted-foreground italic">
                  &ldquo;{client.testimonial}&rdquo;
                </p>
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
