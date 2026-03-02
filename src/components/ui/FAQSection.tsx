"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  className?: string;
}

export function FAQSection({ faqs, className }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-gray-100 md:text-3xl">
          Häufig gestellte Fragen
        </h2>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-gray-500 transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="border-t border-gray-200 p-4 dark:border-gray-800">
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Default FAQs for homepage
export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: "Ist Hintergrundentferner.online wirklich kostenlos?",
    answer:
      "Ja, vollständig kostenlos. Keine Registrierung, kein Abo, keine versteckten Kosten. Du kannst unbegrenzt viele Bilder bearbeiten.",
  },
  {
    question: "Werden meine Bilder auf eure Server hochgeladen?",
    answer:
      "Nein. Die KI läuft vollständig in deinem Browser. Dein Bild verlässt niemals deinen Computer oder dein Smartphone. Das ist unser wichtigstes Datenschutzversprechen.",
  },
  {
    question: "Welche Bildformate werden unterstützt?",
    answer:
      "Du kannst JPG, JPEG, PNG, WebP und HEIC/HEIF Dateien hochladen. Die maximale Dateigröße beträgt 20 MB.",
  },
  {
    question: "In welchem Format wird das Ergebnis heruntergeladen?",
    answer:
      "Das freigestellte Bild wird als PNG mit transparentem Hintergrund gespeichert. PNG ist das einzige Format, das echte Transparenz unterstützt.",
  },
  {
    question: "Wie gut ist die Qualität der Hintergrundentfernung?",
    answer:
      "Unsere KI verwendet modernste ONNX-Modelle (ISNet und U2Net), die speziell für Portraits und Objekte trainiert wurden. Bei klaren Konturen ist die Qualität professionell.",
  },
  {
    question: "Kann ich den Hintergrund durch ein eigenes Bild ersetzen?",
    answer:
      "Ja! Nach der Hintergrundentfernung kannst du einen einfarbigen, Farbverlauf-Hintergrund oder ein eigenes Foto als neuen Hintergrund hinzufügen.",
  },
  {
    question: "Funktioniert das Tool auch auf dem Smartphone?",
    answer:
      "Ja, das Tool funktioniert auf allen modernen Smartphones und Tablets. Die Oberfläche ist für Touchscreens optimiert.",
  },
  {
    question: "Wie viele Bilder kann ich gleichzeitig verarbeiten?",
    answer:
      "Mit der Stapelverarbeitung kannst du bis zu 20 Bilder auf einmal hochladen und alle automatisch freistellen.",
  },
];
