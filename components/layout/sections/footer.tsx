import { Separator } from "@/components/ui/separator";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-card mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-muted-foreground max-w-sm">
              Leader dans les services de sécurité et nettoyage professionnel au
              Maroc.
            </p>
            <div className="flex gap-4 mt-6">
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
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
              *
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <Link href="tel:+212671386988" className="hover:text-primary">
                  +212 671 386 988
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <Link
                  href="mailto:Aidefazo3@gmail.com"
                  className="hover:text-primary"
                >
                  Aidefazo3@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={16} />
                <span>ICE: 003309222000034</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AIDE-FAZO. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">
              Mentions légales
            </Link>
            <Link href="#" className="hover:text-primary">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
