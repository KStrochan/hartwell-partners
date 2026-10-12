import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Hartwell & Partners",
  description: "A law firm advising businesses and private clients on contracts, disputes, property and employment.",
  url: "https://hartwell-partners.vercel.app",
  locale: "en",
  routes: [
    "/",
    "/insights",
    "/insights/supplier-contracts-price-changes",
    "/insights/commercial-lease-clauses",
    "/insights/probation-dismissal",
    "/contact",
  ],
  nav: [
    { href: "/#practice", label: "Practice areas" },
    { href: "/#people", label: "People" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  contact: {
    phone: "+1 (555) 012-8800",
    address: "3rd floor, 21 Chancery Street, Kingsbridge",
    hours: "Mon to Fri 8:30 to 18:00",
  },
  photoCredits: [
    { author: "Giammarco Boscaro", url: "https://unsplash.com/@giamboscaro" },
    { author: "Carrie Allen", url: "https://unsplash.com/@carrieallenllc" },
    { author: "Nastuh Abootalebi", url: "https://unsplash.com/@sunday_digital" },
    { author: "Scott Graham", url: "https://unsplash.com/@amstram" },
  ],
};
