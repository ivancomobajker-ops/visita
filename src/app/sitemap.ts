import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/company";
import { localePath, locales } from "@/i18n/config";

const pages: { path: string; changeFrequency: "monthly" | "yearly"; priority: number }[] = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/company", changeFrequency: "yearly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

const url = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) =>
    pages.map((page) => ({
      url: url(localePath(lang, page.path)),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, url(localePath(l, page.path))])),
      },
    })),
  );
}
