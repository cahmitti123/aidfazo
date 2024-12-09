"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const ContactSection = () => {
  const phoneNumber = "+212640003832";
  const whatsappMsg = "Bonjour NH MAROC, je souhaite en savoir plus sur vos services.";
  const email = "nhmaroc.12@gmail.com";

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-8">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contact
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contactez-nous
            </h2>
            <p className="text-xl text-muted-foreground">
              Nous sommes à votre disposition pour répondre à toutes vos
              questions et vous accompagner dans vos besoins en sécurité et
              nettoyage.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex gap-2 mb-2">
                <MapPin className="text-primary" />
                <div className="font-bold">Notre Adresse</div>
              </div>
              <div className="text-muted-foreground pl-8">
                N° 223 Groupe Al Ahd Appt N°1 1er étage Hay Nahda 1 Rabat
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-2">
                <Clock className="text-primary" />
                <div className="font-bold">Horaires d&apos;ouverture</div>
              </div>
              <div className="text-muted-foreground pl-8">
                <div>Lundi - Vendredi</div>
                <div>8h00 - 18h00</div>
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-2">
                <Building2 className="text-primary" />
                <div className="font-bold">Informations légales</div>
              </div>
              <div className="text-muted-foreground pl-8">
                RC: 123456 - IF: 78901234 - ICE: 001234567890123
              </div>
            </div>
          </div>
        </div>

        <Card className="p-8">
          <h3 className="text-2xl font-semibold mb-6">
            Contactez-nous directement
          </h3>

          <div className="flex flex-col gap-4">
            <Button
              className="w-full flex gap-2 text-lg h-12"
              asChild
              variant="outline"
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="w-5 h-5" />
                Appelez-nous
              </a>
            </Button>

            <Button
              className="w-full flex gap-2 text-lg h-12 bg-[#25D366] hover:bg-[#20BD5B]"
              asChild
            >
              <a
                href={`https://wa.me/${phoneNumber.replace(
                  "+",
                  ""
                )}?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>

            <Button
              className="w-full flex gap-2 text-lg h-12"
              asChild
              variant="secondary"
            >
              <a href={`mailto:${email}`}>
                <Mail className="w-5 h-5" />
                Envoyez-nous un email
              </a>
            </Button>
          </div>

          <div className="mt-8 text-center text-muted-foreground">
            <p>Choisissez la méthode qui vous convient le mieux</p>
            <p>Nous vous répondrons dans les plus brefs délais</p>
          </div>
        </Card>
      </div>
    </section>
  );
};
