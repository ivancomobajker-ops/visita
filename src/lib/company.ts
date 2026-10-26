// Verified legal details of the company that owns and operates Visita.
// Single source of truth — used by the footer, /company page and JSON-LD.
// Do not edit without checking the official state registry record.

export const SITE_URL = "https://landing.visita.com.ua";

export const COMPANY = {
  brand: "Visita",
  shortName: "ТОВ «ГЛОБУС ЕКСПРЕСС»",
  fullName: "Товариство з обмеженою відповідальністю «ГЛОБУС ЕКСПРЕСС»",
  latinName: "HLOBUS EKSPRESS TOV",
  edrpou: "43458868",
  email: "office@visita.com.ua",
  address: {
    full: "Україна, 25010, Кіровоградська обл., м. Кропивницький, вул. Державності, буд. 23, корп. 3, кв. 147",
    country: "UA",
    postalCode: "25010",
    region: "Кіровоградська обл.",
    locality: "Кропивницький",
    street: "вул. Державності, буд. 23, корп. 3, кв. 147",
  },
  registryLinks: [
    {
      label: "YouControl",
      href: "https://youcontrol.com.ua/catalog/company_details/43458868/",
    },
    {
      label: "Opendatabot",
      href: "https://opendatabot.ua/c/43458868",
    },
  ],
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.brand,
  legalName: COMPANY.shortName,
  url: `${SITE_URL}/`,
  email: COMPANY.email,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "ЄДРПОУ",
    value: COMPANY.edrpou,
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: COMPANY.address.country,
    postalCode: COMPANY.address.postalCode,
    addressRegion: COMPANY.address.region,
    addressLocality: COMPANY.address.locality,
    streetAddress: COMPANY.address.street,
  },
};
