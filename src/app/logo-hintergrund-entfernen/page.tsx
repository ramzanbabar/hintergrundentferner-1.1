import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";
import { BackgroundRemover } from "@/components/remover/BackgroundRemover";
import { FAQSection } from "@/components/ui/FAQSection";

export const metadata: Metadata = {
  title: "Logo Hintergrund entfernen – Transparentes PNG erstellen",
  description:
    "Logo-Hintergrund kostenlos entfernen. Transparentes PNG für Web, Print und Präsentationen. KI-gestützt und ohne Anmeldung.",
  keywords: [
    "logo hintergrund entfernen",
    "logo transparent machen",
    "logo freistellen",
    "logo ohne hintergrund",
    "transparentes png logo",
  ],
  openGraph: {
    title: "Logo Hintergrund entfernen – Transparentes PNG",
    description: "Logo-Hintergrund kostenlos für transparentes PNG entfernen.",
    locale: "de_DE",
  },
};

const FAQS = [
  {
    question: "Warum PNG für Logos?",
    answer:
      "PNG ist das einzige gängige Bildformat, das echte Transparenz unterstützt. Im Gegensatz zu JPG, das immer einen Hintergrund hat, kann PNG Bereiche vollständig transparent darstellen – perfekt für Logos.",
  },
  {
    question: "Was ist der Unterschied zwischen PNG-8 und PNG-24?",
    answer:
      "PNG-8 unterstützt nur 256 Farben und 1-Bit-Transparenz (entweder transparent oder nicht). PNG-24 unterstützt Millionen Farben und variable Transparenz (Alpha-Kanal). Für Logos empfehlen wir PNG-24 für beste Qualität.",
  },
  {
    question: "Kann ich das transparente Logo für Print verwenden?",
    answer:
      "Ja, das transparente PNG kann für Print verwendet werden. Für hochwertige Drucke empfehle wir, die Auflösung hoch zu halten (mindestens 300 DPI). Du kannst das Bild auch in Vektorformate konvertieren.",
  },
];

export default function LogoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
                Logo Hintergrund entfernen
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Transparentes PNG für Web, Print und Präsentationen.
                Logo freistellen in Sekunden – kostenlos und ohne Upload.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <BackgroundRemover defaultBackground="transparent" defaultTab="transparent" />
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Transparente Logos verstehen
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Ein Logo ohne Hintergrund ist für professionelle Anwendungen
                  unerlässlich. Ob auf Webseiten, in Präsentationen oder auf
                  Printmaterialien – ein transparentes Logo lässt sich überall
                  nahtlos integrieren.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Anwendungsbereiche:
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                  <li>Webseiten und Online-Shops</li>
                  <li>Präsentationen (PowerPoint, Keynote)</li>
                  <li>Visitenkarten und Briefpapier</li>
                  <li>Social Media Profile</li>
                  <li>Werbematerialien und Merchandise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={FAQS} />
      </main>

      <Footer />
      <GdprBanner />
    </div>
  );
}
