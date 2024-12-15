"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Separator } from "@radix-ui/react-separator";

const informations = [
  {
    title: "ICE",
    value: "003309222000034",
  },
  {
    title: "Activités",
    value: "Sécurité & Nettoyage Professionnel",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const phoneNumber = "+212640003832";
  const whatsappMsg =
    "Bonjour AIDE-FAZO, je souhaite obtenir plus d'informations sur vos services de sécurité et nettoyage.";
  const email = "contact@aide-fazo.com";

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-primary/5 rounded-3xl" />
          <div className="absolute right-0 top-0 -mt-16 h-32 w-32 bg-primary/10 blur-3xl rounded-full" />
          <div className="absolute left-0 bottom-0 -mb-16 h-32 w-32 bg-primary/10 blur-3xl rounded-full" />
        </div>

        <div className="relative space-y-12 p-4 sm:p-8">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Besoin d&apos;un{" "}
              <span className="bg-gradient-to-r from-primary/50 to-primary bg-clip-text text-transparent">
                Devis Personnalisé
              </span>
              ?
            </h2>
            <p className="text-muted-foreground text-lg">
              Nos experts en sécurité et nettoyage sont à votre écoute pour
              étudier vos besoins et vous proposer une solution adaptée
            </p>
          </div>

          <div
            ref={ref}
            className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto"
            style={{
              transform: isInView ? "none" : "translateY(20px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {/* Contact Info */}
            <div className="space-y-8 h-full">
              <Card className="border-0 shadow-none bg-transparent h-full">
                <CardContent className="space-y-6 p-0 flex flex-col align-middle h-full justify-center">
                  <div className="group">
                    <div className="flex items-center gap-3 border-y-2 hover:border-primary/70 transition-all duration-300 border-primary rounded-2xl hover:bg-primary/10 cursor-pointer px-4">
                      <div className="size-12 aspect-square rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <MapPin className="size-6 text-primary" />
                      </div>
                      <Separator
                        orientation="vertical"
                        className="h-24 border border-muted"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">Siège Social</h3>
                        <p className="text-muted-foreground">
                          N° 223 Groupe Al Ahd Appt N°1 1er étage
                          <br />
                          Hay Nahda 1, Rabat
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-center gap-3 border-y-2 hover:border-primary/70 transition-all duration-300 border-primary rounded-2xl hover:bg-primary/10 cursor-pointer px-4">
                      <div className="size-12 aspect-square rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Building2 className="size-6 text-primary" />
                      </div>
                      <Separator
                        orientation="vertical"
                        className="h-24 border border-muted"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">
                          Informations légales
                        </h3>
                        {informations.map(({ title, value }) => (
                          <p className="text-muted-foreground" key={title}>
                            {title} : {value}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods */}
            <Card className="relative overflow-hidden border-border/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-50" />

              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold">
                  Demandez votre devis gratuit
                </CardTitle>
                <CardDescription>
                  Choisissez le moyen de contact qui vous convient
                </CardDescription>
              </CardHeader>

              <CardContent className="relative space-y-4">
                <Button
                  asChild
                  variant="outline"
                  className="w-full h-14 text-base font-medium hover:bg-primary/5 group/phone"
                >
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center justify-center gap-3"
                  >
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="size-4 group-hover/phone:scale-110 transition-transform" />
                    </div>
                    Appelez-nous
                  </a>
                </Button>

                <Button
                  asChild
                  className="w-full h-14 text-base font-medium bg-[#25D366] hover:bg-[#20BD5B] group/whatsapp"
                >
                  <a
                    href={`https://wa.me/${phoneNumber.replace(
                      "+",
                      ""
                    )}?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3"
                  >
                    <div className="size-8 rounded-lg bg-white/20 flex items-center justify-center">
                      <FaWhatsapp className="size-4 group-hover/whatsapp:scale-110 transition-transform" />
                    </div>
                    WhatsApp
                  </a>
                </Button>

                <Button
                  asChild
                  variant="secondary"
                  className="w-full h-14 text-base font-medium group/mail hover:bg-primary/5"
                >
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center justify-center gap-3"
                  >
                    <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="size-4 group-hover/mail:scale-110 transition-transform" />
                    </div>
                    Envoyez-nous un email
                  </a>
                </Button>
              </CardContent>

              <CardFooter className="relative">
                <p className="text-sm text-muted-foreground text-center w-full">
                  Devis gratuit sous 24h pour vos besoins en sécurité et
                  nettoyage
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
