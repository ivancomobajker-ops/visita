export const locales = ["en", "uk"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

// English lives at the site root ("/company"), Ukrainian under "/uk" ("/uk/company").
export function localePath(lang: Locale, path: string = "/"): string {
  if (lang === defaultLocale) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

// Turns a current pathname into the same page in another language.
export function switchLocalePath(pathname: string, to: Locale): string {
  const prefixes = locales.filter((l) => l !== defaultLocale).join("|");
  const bare = pathname.replace(new RegExp(`^/(${prefixes})(?=/|$)`), "") || "/";
  return localePath(to, bare);
}
