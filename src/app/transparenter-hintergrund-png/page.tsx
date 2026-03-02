import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";
import { BackgroundRemover } from "@/components/remover/BackgroundRemover";

export const metadata: Metadata = {
  title: "Transparenten Hintergrund erstellen – PNG mit Transparenz",
  description:
    "Transparenten Hintergrund kostenlos erstellen. PNG mit Alpha-Kanal für Webdesign, Grafikdesign und Präsentationen.",
  keywords: [
    "transparenter hintergrund png",
    "png transparent machen",
    "hintergrund transparent",
    "alpha kanal png",
    "transparenz erstellen",
  ],
};

export default function TransparenterHintergrundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
                Transparenten Hintergrund erstellen
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                PNG mit echtem Alpha-Kanal für Webdesign, Grafikdesign und alle
                kreativen Projekte. Kostenlos und direkt im Browser.
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
                Was ist ein transparenter Hintergrund?
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Ein transparenter Hintergrund bedeutet, dass bestimmte Bereiche
                  eines Bildes durchsichtig sind und der Hintergrund dahinter
                  sichtbar wird. Dies wird durch den Alpha-Kanal im PNG-Format
                  ermöglicht.
                </p>
                <h3 className="text-xl font-semibold">Vorteile von PNG mit Transparenz:</h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                  <li>Nahtlose Integration auf jedem Hintergrund</li>
                  <li>Professionelles Erscheinungsbild</li>
                  <li>Vielseitig einsetzbar für Web und Print</li>
                  <li>Ideal für Overlays und Composites</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <GdprBanner />
    </div>
  );
}
