import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";
import { BackgroundRemover } from "@/components/remover/BackgroundRemover";

export const metadata: Metadata = {
  title: "Portraitfoto Hintergrund entfernen – Kostenlos & Präzise",
  description:
    "Portraitfoto-Hintergrund kostenlos entfernen mit KI. Für professionelle Portraits, Social Media und Bewerbungen. Ohne Anmeldung.",
  keywords: [
    "portraitfoto hintergrund entfernen",
    "portrait hintergrund ändern",
    "selbstportrait hintergrund",
    "profilbild hintergrund",
  ],
  openGraph: {
    title: "Portraitfoto Hintergrund entfernen – Kostenlos",
    description: "Portraitfoto-Hintergrund mit KI kostenlos entfernen.",
    locale: "de_DE",
  },
};

export default function PortraitfotoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
                Portraitfoto Hintergrund entfernen
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Entferne den Hintergrund von Portraits für professionelle
                Profilbilder, Social Media oder Bewerbungen. KI-gestützt und
                kostenlos.
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
                Portraits professionell freistellen
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Professionelle Portraits benötigen oft einen neutralen oder
                  ausgetauschten Hintergrund. Ob für LinkedIn-Profilbilder,
                  Unternehmenswebseiten oder kreative Projekte – unsere KI erkennt
                  Personen präzise und entfernt den Hintergrund sauber.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Einsatzmöglichkeiten:
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
                  <li>LinkedIn & Xing Profilbilder</li>
                  <li>Unternehmenswebseiten und Team-Seiten</li>
                  <li>Bewerbungsfotos</li>
                  <li>Social Media Profilbilder</li>
                  <li>Kreative Composite-Bilder</li>
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
