import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";
import { BackgroundRemover } from "@/components/remover/BackgroundRemover";
import { FAQSection } from "@/components/ui/FAQSection";

export const metadata: Metadata = {
  title: "Produktfoto Hintergrund entfernen – Amazon & eBay Anforderungen",
  description:
    "Produktfoto-Hintergrund kostenlos entfernen. Weißer Hintergrund für Amazon, eBay und Online-Shops. DSGVO-konform, ohne Upload.",
  keywords: [
    "produktfoto hintergrund entfernen",
    "amazon produktfoto hintergrund",
    "ebay produktfoto",
    "produktfoto freistellen",
    "weißer hintergrund produkt",
  ],
  openGraph: {
    title: "Produktfoto Hintergrund entfernen – Amazon & eBay",
    description: "Produktfoto-Hintergrund kostenlos für Amazon & eBay entfernen.",
    locale: "de_DE",
  },
};

const FAQS = [
  {
    question: "Welche Hintergrund-Anforderungen hat Amazon für Produktfotos?",
    answer:
      "Amazon verlangt für Hauptproduktfotos einen rein weißen Hintergrund (RGB 255, 255, 255). Das Produkt muss mindestens 85% der Bildfläche einnehmen. Unser Tool erstellt automatisch den perfekten weißen Hintergrund.",
  },
  {
    question: "Kann ich mehrere Produktfotos gleichzeitig bearbeiten?",
    answer:
      "Ja, mit unserer Stapelverarbeitung kannst du bis zu 20 Produktfotos auf einmal hochladen und alle automatisch freistellen. Das spart Zeit bei großen Produktkatalogen.",
  },
  {
    question: "Für welche Plattformen sind die Bilder geeignet?",
    answer:
      "Die freigestellten Bilder mit weißem Hintergrund sind für alle großen Plattformen geeignet: Amazon, eBay, Etsy, Otto, Zalando, Shopify und viele mehr.",
  },
];

export default function ProduktfotoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
                Produktfoto Hintergrund entfernen
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Weißer Hintergrund für Amazon, eBay und Online-Shops.
                Professionelle Produktfotos in Sekunden – kostenlos und ohne Upload.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <BackgroundRemover defaultBackground="color" defaultTab="color" />
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Anforderungen an Produktfotos
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Professionelle Produktfotos mit weißem Hintergrund sind für den
                  E-Commerce unerlässlich. Amazon, eBay und andere Plattformen haben
                  spezifische Anforderungen, die du erfüllen musst, um erfolgreich zu
                  verkaufen.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Amazon Anforderungen:
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                  <li>Rein weißer Hintergrund (RGB 255, 255, 255)</li>
                  <li>Produkt füllt mindestens 85% des Bildes</li>
                  <li>Keine Wasserzeichen oder Texte</li>
                  <li>Mindestens 1000x1000 Pixel für Zoom</li>
                  <li>Beliebige Dateigröße bis 10MB</li>
                </ul>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  eBay Anforderungen:
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                  <li>Mindestens 500 Pixel Breite</li>
                  <li>Weißer oder neutraler Hintergrund empfohlen</li>
                  <li>Keine Wasserzeichen oder Rahmen</li>
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
