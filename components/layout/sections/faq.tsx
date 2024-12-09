import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Quels types de services de sécurité proposez-vous ?",
    answer: "Nous offrons une gamme complète de services incluant le gardiennage physique, la télésurveillance 24/7, la sécurité événementielle, et des solutions de sécurité sur mesure pour les entreprises et établissements.",
    value: "item-1",
  },
  {
    question: "Vos agents de sécurité sont-ils certifiés ?",
    answer: "Oui, tous nos agents sont certifiés et formés selon les normes marocaines en vigueur. Ils suivent régulièrement des formations pour maintenir leurs compétences à jour et garantir un service de qualité.",
    value: "item-2",
  },
  {
    question: "Proposez-vous des services de nettoyage professionnel ?",
    answer: "Oui, nous offrons des services complets de nettoyage industriel et domestique, incluant l'entretien régulier, le nettoyage spécialisé, la désinfection et la dératisation, adaptés aux besoins spécifiques de chaque client.",
    value: "item-3",
  },
  {
    question: "Comment assurez-vous la qualité de vos services ?",
    answer: "Nous maintenons des standards stricts de qualité à travers des formations continues, des contrôles réguliers, et un système de supervision efficace. Nous sommes également à l'écoute des retours de nos clients pour améliorer constamment nos services.",
    value: "item-4",
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "Nous intervenons principalement dans la région de Rabat et ses environs, avec possibilité d'étendre nos services selon les besoins de nos clients sur l'ensemble du territoire marocain.",
    value: "item-5",
  },
  {
    question: "Comment puis-je obtenir un devis pour vos services ?",
    answer: "Vous pouvez nous contacter par téléphone, email ou via notre formulaire de contact. Nous organiserons rapidement une visite pour évaluer vos besoins et vous proposer une solution adaptée avec un devis détaillé.",
    value: "item-6",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        FAQ
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Questions Fréquentes
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Retrouvez les réponses aux questions les plus fréquemment posées sur nos services
      </h3>

      <div className="flex items-center justify-center">
        <div className="w-full md:w-3/4">
          <Accordion type="single" collapsible>
            {FAQList.map(({ question, answer, value }) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
