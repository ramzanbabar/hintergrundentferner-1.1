import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";
import { BackgroundRemover } from "@/components/remover/BackgroundRemover";

export const metadata: Metadata = {
  title: "Mehrere Bilder Hintergrund entfernen – Bis zu 20 auf einmal",
  description:
    "Stapelverarbeitung für Hintergrundentfernung. Bis zu 20 Bilder gleichzeitig freistellen. Kostenlos und DSGVO-konform.",
  keywords: [
    "mehrere bilder hintergrund entfernen",
    "stapelverarbeitung hintergrund",
    "batch hintergrund entfernen",
    "bilder freistellen stapel",
  ],
};

export default function BatchPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
                Stapelverarbeitung – Mehrere Bilder auf einmal
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Lade bis zu 20 Bilder hoch und entferne den Hintergrund automatisch
                von allen. Zeitersparnis für Produktkataloge und große Projekte.
              </p>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <BackgroundRemover />
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                So funktioniert die Stapelverarbeitung
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Die Stapelverarbeitung ermöglicht es dir, mehrere Bilder
                  gleichzeitig hochzuladen und alle automatisch freistellen zu
                  lassen. Ideal für E-Commerce-Händler, Agenturen und alle, die
                  viele Bilder bearbeiten müssen.
                </p>
                <h3 className="text-xl font-semibold">Schritte:</h3>
                <ol className="list-decimal space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                  <li>Wähle mehrere Bilder aus (bis zu 20)</li>
                  <li>Die KI verarbeitet jedes Bild nacheinander</li>
                  <li>Lade alle Ergebnisse als ZIP oder einzeln herunter</li>
                </ol>
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
