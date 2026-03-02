import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";
import { BackgroundRemover } from "@/components/remover/BackgroundRemover";

export const metadata: Metadata = {
  title: "Hintergrundfarbe ändern – Neuer Hintergrund in Sekunden",
  description:
    "Hintergrundfarbe kostenlos ändern. Wähle aus vielen Farben und Farbverläufen. KI-gestützt und ohne Anmeldung.",
  keywords: [
    "hintergrundfarbe ändern",
    "hintergrund farbe ändern",
    "neuer hintergrund farbe",
    "bild hintergrund ändern",
  ],
};

export default function HintergrundfarbePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
                Hintergrundfarbe ändern
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Entferne den alten Hintergrund und wähle eine neue Farbe oder einen
                Farbverlauf. Hunderte Optionen für jeden Anlass.
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
      </main>
      <Footer />
      <GdprBanner />
    </div>
  );
}
