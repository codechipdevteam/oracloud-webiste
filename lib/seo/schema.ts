/**
 * Single source of truth for JSON-LD structured data.
 *
 * Every entity carries a stable `@id`. Nodes sharing an `@id` are merged by
 * JSON-LD processors, so the site-wide markup in `pages/_document.tsx` and the
 * page-level markup describe one and the same business instead of two
 * competing copies with conflicting details.
 *
 * Facts below mirror what is visible on the site:
 *  - address / phone / email  -> Footer + ContactBox
 *  - opening hours            -> Footer ("Mon - Fri: 9am - 5.30pm", "Saturday: 9am - 5pm", Sunday closed)
 *  - logo                     -> /public/assets/images/oracloud-logo.avif
 *  - area served / platforms  -> service page body copy
 */
import { socialMediaFaqs } from "@/lib/data/socialMediaFaqs";

export const SITE_URL = "https://www.oracloud.in";

export const SOCIAL_MEDIA_MARKETING_URL = `${SITE_URL}/digital-marketing-services/social-media-marketing/`;

const SAME_AS = [
  "https://www.facebook.com/people/Oracloud/61560252886547/",
  "https://www.instagram.com/oracloud_official/",
  "https://x.com/oracloudltd",
  "https://www.linkedin.com/in/oracloud-technologies-95b6a6314/",
  "https://www.youtube.com/@Oracloud",
];

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "First Floor, Swarnam Arcade, Anamala Junction",
  addressLocality: "Chalakudy",
  addressRegion: "Kerala",
  postalCode: "680307",
  addressCountry: "IN",
};

const GEO = {
  "@type": "GeoCoordinates",
  latitude: 10.3106579,
  longitude: 76.3341538,
};

/**
 * The organization itself. Merged into every page that emits this `@id`.
 */
export const organizationNode = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Oracloud Technologies",
  legalName: "Oracloud Technologies",
  alternateName: "Oracloud",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/images/oracloud-logo.avif`,
  },
  image: `${SITE_URL}/og-image.png`,
  email: "connect@oracloud.in",
  telephone: "+91 7034 302 111",
  address: POSTAL_ADDRESS,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7034 302 111",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Malayalam"],
  },
  sameAs: SAME_AS,
};

/**
 * The local business entity. Kept separate from the organization (rather than
 * dual-typed on one node) so `parentOrganization` can point at a real node.
 */
export const professionalServiceNode = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Oracloud Technologies",
  description:
    "Chalakudy-based IT solutions and digital marketing company offering social media marketing and management, web development and app development to businesses, schools and colleges across Thrissur and Kerala.",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.png`,
  telephone: "+91 7034 302 111",
  email: "connect@oracloud.in",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  address: POSTAL_ADDRESS,
  // `geo` is defined for Place; ProfessionalService inherits from
  // LocalBusiness -> Place, so it belongs on this node, not on Organization.
  geo: GEO,
  areaServed: [
    "Chalakudy",
    "Thrissur",
    "Irinjalakuda",
    "Kodakara",
    "Angamaly",
    "Kochi",
    "Kerala",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: SAME_AS,
};

/**
 * Site-wide markup. Emitted from `pages/_document.tsx` so every page carries
 * the business entity, including pages that add their own graph.
 */
export const siteWideSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationNode, professionalServiceNode],
};

/**
 * Social Media Marketing service page. Page-specific nodes (WebPage,
 * BreadcrumbList, Service, FAQPage) live here only — they describe this
 * route and would be wrong on any other URL.
 */
export const socialMediaMarketingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationNode,
    professionalServiceNode,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Oracloud",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${SOCIAL_MEDIA_MARKETING_URL}#webpage`,
      url: SOCIAL_MEDIA_MARKETING_URL,
      name: "Social Media Marketing Agency in Chalakudy | Oracloud",
      description:
        "Social media marketing agency in Chalakudy, serving Thrissur and Kerala. Social media management, content, design and ads. Call or WhatsApp for a free quote.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
      },
      breadcrumb: { "@id": `${SOCIAL_MEDIA_MARKETING_URL}#breadcrumb` },
      inLanguage: "en-IN",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SOCIAL_MEDIA_MARKETING_URL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Social Media Marketing",
          item: SOCIAL_MEDIA_MARKETING_URL,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SOCIAL_MEDIA_MARKETING_URL}#service`,
      name: "Social Media Marketing & Management",
      serviceType: "Social media marketing and management",
      description:
        "Monthly content planning, post and reel design, video shooting and editing, regular posting, community replies, Facebook and Instagram ads, and monthly reporting for businesses, schools and colleges.",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: ["Chalakudy", "Thrissur", "Kerala"],
      url: SOCIAL_MEDIA_MARKETING_URL,
    },
    {
      "@type": "FAQPage",
      "@id": `${SOCIAL_MEDIA_MARKETING_URL}#faq`,
      mainEntity: socialMediaFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

/**
 * Serialize JSON-LD for inline embedding.
 *
 * `<` is escaped so a `</script>` sequence inside the data can never break out
 * of the script element.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
