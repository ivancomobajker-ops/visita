export const locales = ["uk", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uk";

// Ukrainian lives at the site root ("/company"), English under "/en" ("/en/company").
export function localePath(lang: Locale, path: string = "/"): string {
  if (lang === defaultLocale) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

// Turns a current pathname into the same page in another language.
export function switchLocalePath(pathname: string, to: Locale): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return localePath(to, bare);
}
