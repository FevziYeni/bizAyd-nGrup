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
  address: "Güngören / İstanbul",
  addressLocality: "Güngören",
  addressRegion: "İstanbul",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/GeneralContractor",
  name: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phoneHref,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.addressLocality,
    addressRegion: siteConfig.addressRegion,
    addressCountry: "TR",
  },
  areaServed: ["İstanbul", "Güngören", "Kartal", "Zeytinburnu", "Bahçelievler"],
  serviceType: [
    "Kentsel dönüşüm",
    "Konut inşaatı",
    "Kat karşılığı inşaat",
    "Anahtar teslim proje",
  ],
};
