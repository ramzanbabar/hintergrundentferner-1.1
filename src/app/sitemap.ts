import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hintergrundentferner.online";

  const staticPages = [
    "",
    "/hintergrund-weiss-machen",
    "/passbild-hintergrund-entfernen",
    "/produktfoto-hintergrund-entfernen",
    "/portraitfoto-hintergrund-entfernen",
    "/logo-hintergrund-entfernen",
    "/transparenter-hintergrund-png",
    "/batch-hintergrund-entfernen",
    "/hintergrundfarbe-aendern",
    "/hintergrund-unscharf-machen",
    "/tipps",
    "/tipps/hintergrund-entfernen-anleitung",
    "/tipps/bestes-format-png-jpg",
    "/tipps/produktfotos-freistellen",
    "/impressum",
    "/datenschutz",
    "/nutzungsbedingungen",
    "/ueber-uns",
    "/kontakt",
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1 : 0.8,
    alternates: {
      languages: {
        de: `${baseUrl}${page}`,
      },
    },
  }));
}
