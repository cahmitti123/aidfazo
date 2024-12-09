import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { ClientsSection } from "@/components/layout/sections/clients";
import { StatsSection } from "@/components/layout/sections/stats";

export const metadata = {
  title: "NH MAROC - Services de Sécurité et Nettoyage",
  description:
    "Services professionnels de gardiennage, sécurité et nettoyage au Maroc",
  openGraph: {
    type: "website",
    url: "",
    title: "NH MAROC - Services de Sécurité et Nettoyage",
    description:
      "Services professionnels de gardiennage, sécurité et nettoyage au Maroc",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "NH MAROC S.A.R.L.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "NH MAROC - Services de Sécurité et Nettoyage",
    description:
      "Services professionnels de gardiennage, sécurité et nettoyage au Maroc",
    images: [""],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <StatsSection />
      <ClientsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
