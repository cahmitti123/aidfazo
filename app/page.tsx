import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { ClientsSection } from "@/components/layout/sections/clients";
import { StatsSection } from "@/components/layout/sections/stats";

export const metadata = {
  title: "AIDE-FAZO - Services Professionnels",
  description: "Services professionnels AIDE-FAZO",
  openGraph: {
    type: "website",
    url: "",
    title: "AIDE-FAZO - Services Professionnels",
    description: "Services professionnels AIDE-FAZO",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "AIDE-FAZO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "AIDE-FAZO - Services Professionnels",
    description: "Services professionnels AIDE-FAZO",
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
