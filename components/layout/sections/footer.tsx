import { Separator } from "@/components/ui/separator";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container pt-24 sm:pt-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="block">
              <Logo />
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Services professionnels de sécurité et nettoyage au Maroc
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Services</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#services" className="hover:text-primary">
                Gardiennage
              </Link>
              <Link href="#services" className="hover:text-primary">
                Sécurité événementielle
              </Link>
              <Link href="#services" className="hover:text-primary">
                Nettoyage professionnel
              </Link>
              <Link href="#services" className="hover:text-primary">
                Services spécialisés
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Entreprise</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#about" className="hover:text-primary">
                À propos
              </Link>
              <Link href="#benefits" className="hover:text-primary">
                Avantages
              </Link>
              <Link href="#clients" className="hover:text-primary">
                Nos clients
              </Link>
              <Link href="#contact" className="hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>N° 223 Groupe Al Ahd, Hay Nahda 1, Rabat</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <Link href="tel:+212522000000" className="hover:text-primary">
                  +212 522 00 00 00
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <Link href="mailto:contact@nhmaroc.ma" className="hover:text-primary">
                  contact@nhmaroc.ma
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <span>RC: 123456 - IF: 78901234 - ICE: 001234567890123</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} NH MAROC S.A.R.L. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
