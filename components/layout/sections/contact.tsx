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
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const informations = [
  {
    title: "RC",
    value: "123456",
  },
  {
    title: "IF",
    value: "78901234",
  },
  {
    title: "ICE",
    value: "001234567890123",
  },
];

export const ContactSection = () => {
  const phoneNumber = "+212640003832";
  const whatsappMsg =
    "Bonjour NH MAROC, je souhaite en savoir plus sur vos services.";
  const email = "nhmaroc.12@gmail.com";

  return (
    <section id="contact" className="container py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />

      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Contact
        </h2>
        <h2 className="text-4xl font-bold text-center mb-4">Contactez-nous</h2>
        <p className="text-muted-foreground text-center text-lg">
          Nous sommes à votre disposition pour répondre à toutes vos questions
          et vous accompagner dans vos besoins.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto align-middle">
        <div className="space-y-8">
          <div className="grid gap-6">
            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Notre Adresse</h3>
              </div>
              <p className="text-muted-foreground pl-[52px]">
                N° 223 Groupe Al Ahd Appt N°1 1er étage Hay Nahda 1 Rabat
              </p>
            </div>
            {/* 
            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Clock className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Horaires d&apos;ouverture</h3>
              </div>
              <div className="text-muted-foreground pl-[52px] space-y-1">
                <p>Lundi - Vendredi</p>
                <p>8h00 - 18h00</p>
              </div>
            </div> */}

            <div className="group">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Building2 className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Informations légales</h3>
              </div>
              <div className="flex flex-col gap-2">
                {informations.map(({ title, value }) => (
                  <p className="text-muted-foreground pl-[52px]" key={title}>
                    {title} : {value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Card className="relative overflow-hidden border bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-primary/5 to-transparent" />

          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Contactez-nous directement
            </CardTitle>
            <CardDescription>
              Choisissez la méthode qui vous convient le mieux
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Button
              asChild
              variant="outline"
              className="w-full h-12 text-base font-medium hover:bg-primary/5"
            >
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2"
              >
                <Phone className="size-5" />
                Appelez-nous
              </a>
            </Button>

            <Button
              asChild
              className="w-full h-12 text-base font-medium bg-[#25D366] hover:bg-[#20BD5B]"
            >
              <a
                href={`https://wa.me/${phoneNumber.replace(
                  "+",
                  ""
                )}?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="size-5" />
                WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-full h-12 text-base font-medium"
            >
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center gap-2"
              >
                <Mail className="size-5" />
                Envoyez-nous un email
              </a>
            </Button>
          </CardContent>

          <CardFooter>
            <p className="text-sm text-muted-foreground text-center w-full">
              Nous vous répondrons dans les plus brefs délais
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
