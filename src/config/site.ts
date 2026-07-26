const whatsappMessage =
  "Merhaba Biz Aydın Grup, projem hakkında bilgi almak istiyorum.";

export const siteConfig = {
  brandName: "Biz Aydın Grup",
  legalName: "Biz Aydın Grup Yapı",
  slogan: "Bizimle Aydınlanın",
  url: "https://xn--bizaydngrup-4zb.com",
  readableUrl: "bizaydıngrup.com",
  email: "info@bizaydingrup.com",
  phoneDisplay: "+90 (532) 405 46 77",
  phoneHref: "+905324054677",
  whatsappNumber: "905324054677",
  whatsappMessage,
  whatsappUrl: `https://wa.me/905324054677?text=${encodeURIComponent(
    whatsappMessage
  )}`,
  address: "Haznedar Mah., Panayır Sok. No: 3A, 34160 Güngören / İstanbul",
  streetAddress: "Haznedar Mah., Panayır Sok. No: 3A",
  postalCode: "34160",
  addressLocality: "Güngören",
  addressRegion: "İstanbul",
  latitude: 41.0110789,
  longitude: 28.8658947,
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.legalName,
  alternateName: [
    siteConfig.brandName,
    "Biz Aydın İnşaat",
    "Aydın İnşaat",
  ],
  description:
    "İstanbul genelinde kentsel dönüşüm, kat karşılığı inşaat, konut ve anahtar teslim yapı projeleri gerçekleştiren inşaat firması.",
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.png`,
  image: `${siteConfig.url}/og.jpg`,
  email: siteConfig.email,
  telephone: siteConfig.phoneHref,
  priceRange: "₺₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.streetAddress,
    postalCode: siteConfig.postalCode,
    addressLocality: siteConfig.addressLocality,
    addressRegion: siteConfig.addressRegion,
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.latitude,
    longitude: siteConfig.longitude,
  },
  areaServed: {
    "@type": "City",
    name: "İstanbul",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneHref,
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: "Turkish",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "İnşaat ve Yapı Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "İstanbul Kentsel Dönüşüm",
          areaServed: "İstanbul",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kat Karşılığı İnşaat",
          areaServed: "İstanbul",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Anahtar Teslim Konut İnşaatı",
          areaServed: "İstanbul",
        },
      },
    ],
  },
  knowsAbout: [
    "Kentsel dönüşüm",
    "Kat karşılığı inşaat",
    "Konut inşaatı",
    "Anahtar teslim inşaat",
    "Bina yenileme",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.brandName,
  alternateName: ["Aydın İnşaat", "Biz Aydın İnşaat"],
  inLanguage: "tr-TR",
  publisher: { "@id": `${siteConfig.url}/#business` },
};
