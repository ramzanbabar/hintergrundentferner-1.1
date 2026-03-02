import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";
import { BackgroundRemover } from "@/components/remover/BackgroundRemover";

export const metadata: Metadata = {
  title: "Hintergrund weiß machen – Foto Hintergrund auf Weiß ändern",
  description:
    "Hintergrund weiß machen kostenlos. Weißer Hintergrund für Produktfotos, Passbilder und Bewerbungsfotos. Ohne Anmeldung.",
  keywords: [
    "hintergrund weiß machen",
    "foto hintergrund weiß",
    "weißer hintergrund bild",
    "hintergrund auf weiß ändern",
    "weißer hintergrund produktfoto",
  ],
};

export default function HintergrundWeissPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
                Hintergrund weiß machen
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Verwandle jedes Foto in ein professionelles Bild mit weißem
                Hintergrund. Ideal für Produktfotos, Passbilder und
                Bewerbungsfotos.
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
                Warum weißer Hintergrund?
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Ein weißer Hintergrund ist der Standard für professionelle Fotos.
                  Er wirkt sauber, neutral und lenkt nicht vom eigentlichen Motiv
                  ab. Viele Plattformen wie Amazon verlangen sogar einen rein
                  weißen Hintergrund für Produktfotos.
                </p>
                <h3 className="text-xl font-semibold">Vorteile:</h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                  <li>Professioneller, sauberer Look</li>
                  <li>Erfüllt Anforderungen von Amazon & eBay</li>
                  <li>Ideal für Passbilder und Bewerbungsfotos</li>
                  <li>Perfekt für Kataloge und Webshops</li>
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
