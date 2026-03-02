"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";
import { BackgroundRemover } from "@/components/remover/BackgroundRemover";
import { HowItWorks } from "@/components/ui/HowItWorks";
import { FAQSection, HOMEPAGE_FAQS } from "@/components/ui/FAQSection";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { UseCaseCard } from "@/components/ui/UseCaseCard";
import {
  Sparkles,
  Shield,
  Zap,
  Download,
  Palette,
  Layers,
  UserX,
  Moon,
  Briefcase,
  ShoppingBag,
  Palette2,
  Smartphone,
  Image,
  UserCircle,
} from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "100% kostenlos",
    description: "Keine versteckten Kosten, keine Registrierung. Für immer kostenlos.",
  },
  {
    icon: Shield,
    title: "Datenschutz",
    description: "Bild verlässt NIE deinen Browser. Client-Side KI-Verarbeitung.",
  },
  {
    icon: Zap,
    title: "KI-Qualität",
    description: "Modernste ONNX-KI-Modelle für präzise Ergebnisse bei jeder Bildart.",
  },
  {
    icon: Download,
    title: "Sofort-Download",
    description: "Ergebnis in Sekunden als transparentes PNG herunterladen.",
  },
  {
    icon: Palette,
    title: "Hintergrund ersetzen",
    description: "Farbe, Farbverlauf oder eigenes Bild als neuen Hintergrund wählen.",
  },
  {
    icon: Layers,
    title: "Stapelverarbeitung",
    description: "Bis zu 20 Bilder auf einmal verarbeiten und herunterladen.",
  },
  {
    icon: UserX,
    title: "Kein Account",
    description: "Sofort loslegen, keine E-Mail, kein Passwort, keine Registrierung.",
  },
  {
    icon: Moon,
    title: "Dunkler Modus",
    description: "Augenschonendes Design für lange Sessions auch bei Nacht.",
  },
];

const USE_CASES = [
  {
    icon: Briefcase,
    title: "Bewerbungsfotos",
    description: "Weißer oder farbiger Hintergrund für professionelle Bewerbungsfotos.",
    href: "/passbild-hintergrund-entfernen",
  },
  {
    icon: ShoppingBag,
    title: "Produktfotos",
    description: "Artikel vor weißem Hintergrund für Amazon, eBay & Online-Shops.",
    href: "/produktfoto-hintergrund-entfernen",
  },
  {
    icon: Palette2,
    title: "Design & Grafik",
    description: "Motive für Canva, Photoshop und Co. professionell freistellen.",
    href: "/logo-hintergrund-entfernen",
  },
  {
    icon: Smartphone,
    title: "Social Media",
    description: "Perfekte Fotos für Instagram, LinkedIn, TikTok und mehr erstellen.",
    href: "/portraitfoto-hintergrund-entfernen",
  },
  {
    icon: Image,
    title: "Logo freistellen",
    description: "Logo-Hintergrund entfernen für transparentes PNG in Sekunden.",
    href: "/logo-hintergrund-entfernen",
  },
  {
    icon: UserCircle,
    title: "Passfotos & Ausweise",
    description: "Biometrischer Hintergrund für Reisepass und Ausweise erstellen.",
    href: "/passbild-hintergrund-entfernen",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-12 dark:from-gray-900 dark:to-gray-950 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl lg:text-5xl">
                Hintergrund entfernen –{" "}
                <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                  kostenlos & in Sekunden
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                KI entfernt den Hintergrund automatisch. Kein Download. Keine Anmeldung.
                Läuft direkt im Browser.
              </p>

              <TrustBadges />
            </div>
          </div>
        </section>

        {/* Main Tool Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <BackgroundRemover />
            </div>
          </div>
        </section>

        {/* How it Works */}
        <HowItWorks />

        {/* Features */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl">
              Alle Funktionen
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl">
              Anwendungsfälle
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {USE_CASES.map((useCase) => (
                <UseCaseCard key={useCase.title} {...useCase} />
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <ComparisonTable />

        {/* FAQ */}
        <FAQSection faqs={HOMEPAGE_FAQS} />
      </main>

      <Footer />
      <GdprBanner />
    </div>
  );
}
