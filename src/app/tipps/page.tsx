import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GdprBanner } from "@/components/layout/GdprBanner";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tipps & Anleitungen zum Hintergrund entfernen",
  description:
    "Anleitungen, Tipps und Tricks zum Hintergrund entfernen. Lerne, wie du professionelle Ergebnisse erzielen kannst.",
};

const ARTICLES = [
  {
    href: "/tipps/hintergrund-entfernen-anleitung",
    title: "Hintergrund entfernen: Die komplette Anleitung 2026",
    excerpt:
      "Schritt-für-Schritt-Anleitung für die perfekte Hintergrundentfernung. Von der Bildauswahl bis zum fertigen Ergebnis.",
  },
  {
    href: "/tipps/bestes-format-png-jpg",
    title: "PNG oder JPG? Das beste Format für transparente Hintergründe",
    excerpt:
      "Wann PNG, wann JPG? Eine Übersicht über die verschiedenen Bildformate und ihre Vor- und Nachteile.",
  },
  {
    href: "/tipps/produktfotos-freistellen",
    title: "Produktfotos freistellen: Anleitung für Amazon & eBay Verkäufer",
    excerpt:
      "So erstellst du professionelle Produktfotos mit weißem Hintergrund für Amazon, eBay und deinen Online-Shop.",
  },
];

export default function TippsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">
              Tipps & Anleitungen
            </h1>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              Alles rund um das Thema Hintergrund entfernen. Anleitungen, Tipps und
              Best Practices für professionelle Ergebnisse.
            </p>

            <div className="space-y-4">
              {ARTICLES.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group block rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-indigo-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-indigo-800"
                >
                  <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {article.title}
                  </h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {article.excerpt}
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    Weiterlesen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <GdprBanner />
    </div>
  );
}
