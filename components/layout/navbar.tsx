"use client";
import { ChevronsDown, Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { Logo } from "@/components/ui/logo";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
  href: string;
}

const routeList: RouteProps[] = [
  {
    href: "#benefits",
    label: "Avantages",
  },
  {
    href: "#stats",
    label: "Chiffres",
  },
  {
    href: "#clients",
    label: "Références",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const serviceList: FeatureProps[] = [
  {
    title: "Gardiennage & Sécurité",
    description: "Protection professionnelle 24/7 de vos établissements",
    href: "#services",
  },
  {
    title: "Nettoyage Professionnel",
    description: "Services complets de nettoyage et d'entretien",
    href: "#services",
  },
  {
    title: "Sécurité Événementielle",
    description: "Protection et gestion de vos événements",
    href: "#services",
  },
  {
    title: "Services Spécialisés",
    description: "Solutions sur mesure selon vos besoins",
    href: "#services",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center">
        <Link href="/" className="mr-6">
          <Logo size="sm" />
        </Link>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Menu className="cursor-pointer" />
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex items-center">
                  <Logo />
                </Link>
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-4 mt-4">
              {routeList.map(({ href, label }) => (
                <Button
                  key={href}
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start"
                >
                  <Link href={href}>{label}</Link>
                </Button>
              ))}
            </nav>

            <SheetFooter className="mt-auto">
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:block mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Nos Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] grid-cols-2 gap-4 p-6 bg-card rounded-lg">
                  <div className="col-span-2">
                    <h3 className="font-medium leading-none mb-3 text-primary">
                      Services Professionnels
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Solutions complètes de sécurité et nettoyage pour votre
                      entreprise
                    </p>
                  </div>
                  {serviceList.map(({ title, description, href }) => (
                    <Link
                      href={href}
                      key={title}
                      className="group rounded-lg p-4 hover:bg-muted"
                    >
                      <h3 className="font-medium leading-none mb-2 group-hover:text-primary">
                        {title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {description}
                      </p>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {routeList.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <Link href={href} className="px-4 py-2 hover:text-primary">
                  {label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center gap-2">
          <ToggleTheme />
          <Button asChild>
            <Link href="#contact">Contactez-nous</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
