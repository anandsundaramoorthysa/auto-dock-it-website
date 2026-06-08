import { site, SITE_URL, links } from "./site";
import { faqs } from "./faq";

/**
 * JSON-LD structured data. Helps search engines understand the product
 * (SoftwareApplication), the site (WebSite), and the FAQ (FAQPage) — improving
 * rich-result eligibility for both direct and long-tail queries.
 */

export const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Linux, macOS, Windows",
  description: site.description,
  url: SITE_URL,
  downloadUrl: links.github,
  softwareVersion: "1.0",
  license: "https://opensource.org/licenses/MIT",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: [
    { "@type": "Person", name: "Melvin Joshua", url: links.github },
    {
      "@type": "Person",
      name: "Anand Sundaramoorthy SA",
      url: "https://github.com/anandsundaramoorthysa",
    },
  ],
  keywords:
    "AI Dockerfile generator, containerize GitHub repository, self-healing Docker build, agentic AI, Docker Compose generator",
};

export const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: SITE_URL,
  description: site.description,
  inLanguage: "en",
};

export const faqPageLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

/** Serialize a JSON-LD object for safe embedding in a <script> tag. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
