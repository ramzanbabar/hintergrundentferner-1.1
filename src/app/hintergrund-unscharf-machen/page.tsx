import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";
import { BackgroundRemover } from "@/components/remover/BackgroundRemover";

export const metadata: Metadata = {
  title: "Hintergrund unscharf machen – Bokeh-Effekt kostenlos",
  description:
    "Hintergrund unscharf machen wie bei einem Profi-Portrait. Bokeh-Effekt kostenlos mit KI. Für Portraits und Produktfotos.",
  keywords: [
    "hintergrund unscharf machen",
    "bokeh effekt kostenlos",
    "hintergrund weichzeichnen",
    "portrait modus effekt",
    "hintergrund blur",
  ],
};

export default function HintergrundUnscharfPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
                Hintergrund unscharf machen
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Erzeuge den professionellen Bokeh-Effekt wie bei einem teuren
                Portrait-Objektiv. Der Hintergrund wird weichgezeichnet, während
                das Motiv scharf bleibt.
              </p>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <BackgroundRemover defaultBackground="blur" defaultTab="blur" />
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Was ist der Bokeh-Effekt?
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Bokeh beschreibt die ästhetische Qualität der Unschärfe im
                  Hintergrund eines Fotos. Dieser Effekt wird normalerweise durch
                  teure Objektive mit großer Blendenöffnung erzeugt. Mit unserer
                  KI kannst du diesen Effekt nachträglich auf jedes Foto anwenden.
                </p>
                <h3 className="text-xl font-semibold">Anwendungsbereiche:</h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                  <li>Portraits mit professionellem Look</li>
                  <li>Produktfotos mit Fokus auf das Objekt</li>
                  <li>Social Media Beiträge</li>
                  <li>Bewerbungsfotos</li>
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
