import type { Metadata } from "next";
import uk, { type Dictionary } from "./dictionaries/uk";
import en from "./dictionaries/en";
import { type Locale, localePath } from "./config";

export * from "./config";
export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { uk, en };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}

// Replaces {key} placeholders in a dictionary string.
export function fill(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? `{${key}}`);
}

// Canonical + hreflang links for a page that exists in every language.
export function pageMetadata(
  lang: Locale,
  path: string,
  meta: { title: string; description: string },
): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath(lang, path),
      languages: {
        uk: localePath("uk", path),
        en: localePath("en", path),
        "x-default": localePath("uk", path),
      },
    },
    openGraph: {
      locale: lang === "uk" ? "uk_UA" : "en_US",
    },
  };
}
