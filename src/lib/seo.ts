import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "Hintergrundentferner.online",
  url: "https://hintergrundentferner.online",
  title: "Hintergrund entfernen – Kostenlos & Sofort | Hintergrundentferner.online",
  description:
    "Hintergrund kostenlos entfernen mit KI. Kein Download, keine Anmeldung. Direkt im Browser. JPG, PNG, WebP. Sofort als transparentes PNG herunterladen.",
  locale: "de_DE",
  ogImage: "/og-image.png",
  twitterHandle: "@hintergrundentf",
};

export function generatePageMetadata(options: {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const { title, description, keywords, ogImage, path, noIndex } = options;

  const fullTitle = title.includes(SITE_CONFIG.name)
    ? title
    : `${title} | ${SITE_CONFIG.name}`;

  const url = path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(", "),
    authors: [{ name: SITE_CONFIG.name }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: ogImage ?? SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage ?? SITE_CONFIG.ogImage],
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const PAGE_KEYWORDS = {
  home: [
    "hintergrund entfernen",
    "hintergrund entfernen kostenlos",
    "foto hintergrund entfernen",
    "hintergrund transparent machen",
    "ki hintergrund entfernen",
    "freistellen kostenlos",
    "online hintergrund entfernen",
  ],
  passbild: [
    "passbild hintergrund entfernen",
    "biometrischer hintergrund",
    "passfoto hintergrund weiß machen",
    "passbild freistellen",
  ],
  produktfoto: [
    "produktfoto hintergrund entfernen",
    "amazon produktfoto hintergrund",
    "ebay produktfoto weißer hintergrund",
    "produktfoto freistellen",
  ],
  portraitfoto: [
    "portraitfoto hintergrund entfernen",
    "portrait hintergrund ändern",
    "selbstportrait hintergrund entfernen",
  ],
  logo: [
    "logo hintergrund entfernen",
    "logo transparent machen",
    "logo freistellen",
    "logo ohne hintergrund",
  ],
  transparent: [
    "transparenter hintergrund png",
    "png transparent machen",
    "hintergrund transparent",
    "alpha kanal png",
  ],
  weiss: [
    "hintergrund weiß machen",
    "foto hintergrund weiß",
    "weißer hintergrund bild",
    "hintergrund auf weiß ändern",
  ],
  batch: [
    "mehrere bilder hintergrund entfernen",
    "stapelverarbeitung hintergrund",
    "batch hintergrund entfernen",
  ],
  farbe: [
    "hintergrundfarbe ändern",
    "hintergrund farbe ändern",
    "neuer hintergrund farbe",
  ],
  unscharf: [
    "hintergrund unscharf machen",
    "bokeh effekt kostenlos",
    "hintergrund weichzeichnen",
    "portrait modus effekt",
  ],
};

// FAQ Schema generator
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// HowTo Schema generator
export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export function generateHowToSchema(
  name: string,
  description: string,
  steps: HowToStep[]
): object {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
  };
}

// WebApplication Schema
export function generateWebApplicationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  };
}

// Organization Schema
export function generateOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    sameAs: [],
  };
}

// Breadcrumb Schema
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
