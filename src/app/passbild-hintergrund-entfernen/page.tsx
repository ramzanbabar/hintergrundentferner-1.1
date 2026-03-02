import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";
import { BackgroundRemover } from "@/components/remover/BackgroundRemover";
import { FAQSection } from "@/components/ui/FAQSection";

export const metadata: Metadata = {
  title: "Passbild Hintergrund entfernen – Biometrischer Hintergrund",
  description:
    "Passbild-Hintergrund kostenlos entfernen und durch biometrischen weißen oder grauen Hintergrund ersetzen. DSGVO-konform für deutsche Reisepässe.",
  keywords: [
    "passbild hintergrund entfernen",
    "biometrischer hintergrund",
    "passfoto hintergrund weiß",
    "passbild freistellen",
    "reisepass foto hintergrund",
  ],
  openGraph: {
    title: "Passbild Hintergrund entfernen – Biometrischer Hintergrund",
    description:
      "Passbild-Hintergrund kostenlos entfernen und durch biometrischen Hintergrund ersetzen.",
    locale: "de_DE",
  },
};

const FAQS = [
  {
    question: "Welche Anforderungen gelten für Passbild-Hintergründe in Deutschland?",
    answer:
      "Laut Passverordnung muss der Hintergrund einfarbig und hell sein, meist weiß oder hellgrau. Der Hintergrund muss frei von Schatten und Mustern sein. Unser Tool erstellt automatisch einen einheitlichen weißen Hintergrund, der den Anforderungen entspricht.",
  },
  {
    question: "Kann ich das Bild direkt für den Reisepass verwenden?",
    answer:
      "Ja, das freigestellte Bild mit weißem Hintergrund entspricht den technischen Anforderungen. Beachte jedoch, dass das Foto auch andere Kriterien erfüllen muss: korrekte Größe (35x45mm), neutraler Gesichtsausdruck, keine Brillenreflexionen etc.",
  },
  {
    question: "Ist die Qualität für biometrische Pässe ausreichend?",
    answer:
      "Ja, unsere KI entfernt den Hintergrund präzise und behält alle wichtigen Details bei. Das Ergebnis ist ein hochwertiges PNG, das für alle biometrischen Dokumente in Deutschland, Österreich und der Schweiz verwendet werden kann.",
  },
];

export default function PassbildPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
                Passbild Hintergrund entfernen
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Biometrischer Hintergrund für Reisepass, Personalausweis und
                Bewerbungsfotos. Weißer oder hellgrauer Hintergrund in Sekunden.
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
                Anforderungen an Passbild-Hintergründe
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Für biometrische Passbilder in Deutschland gelten gemäß
                  Passverordnung spezifische Anforderungen an den Hintergrund. Der
                  Hintergrund muss einfarbig und hell sein – typischerweise weiß oder
                  hellgrau. Schatten, Muster oder Farbverläufe sind nicht erlaubt.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Wichtige Anforderungen:
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                  <li>Einfarbig hell (weiß oder hellgrau)</li>
                  <li>Keine Schatten im Gesichtsbereich</li>
                  <li>Keine Muster oder Texturen</li>
                  <li>Gleichmäßige Ausleuchtung</li>
                  <li>Hoher Kontrast zum Gesicht</li>
                </ul>
                <p>
                  Unser KI-Tool entfernt automatisch den vorhandenen Hintergrund und
                  ersetzt ihn durch einen einheitlichen weißen Hintergrund, der den
                  behördlichen Anforderungen entspricht.
                </p>
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
