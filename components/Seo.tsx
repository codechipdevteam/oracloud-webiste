import Head from "next/head";
import { useRouter } from "next/router";

interface SeoProps {
  title?: string;
  description?: string;
  /** Optional explicit canonical URL. When omitted, it is derived from the current route. */
  canonical?: string;
  image?: string;
  keywords?: string;
}

const defaultMeta = {
  title: "Oracloud | IT Solutions & Digital Marketing",
  description:
    "Oracloud is an IT and digital marketing company delivering web & mobile app development, cloud solutions, e-commerce and branding for growing businesses.",
  image: "/og-image.png",
  keywords:
    "Oracloud, IT services, web development, mobile app development, digital marketing, cloud solutions, e-commerce, Kerala, India",
  // Canonical/OG base URL — no trailing slash so paths concatenate cleanly.
  siteUrl: "https://www.oracloud.in",
};

export default function Seo({
  title,
  description,
  canonical,
  image,
  keywords,
}: SeoProps) {
  const router = useRouter();
  const path = (router.asPath || "/").split("#")[0].split("?")[0];
  const canonicalUrl = canonical || `${defaultMeta.siteUrl}${path}`;

  const metaTitle = title || defaultMeta.title;
  const metaDescription = description || defaultMeta.description;
  const metaImage = `${defaultMeta.siteUrl}${image || defaultMeta.image}`;

  // Every tag carries a stable `key` so that when both the default <Seo/> (in
  // _app) and a page-level <Seo/> render, next/head de-duplicates by key and the
  // page-level value wins. This keeps default meta on routes without their own
  // <Seo/> while avoiding duplicate tags on real pages.
  return (
    <Head>
      <title key="title">{metaTitle}</title>
      <meta key="description" name="description" content={metaDescription} />
      <meta
        key="keywords"
        name="keywords"
        content={keywords || defaultMeta.keywords}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link key="canonical" rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta key="og:title" property="og:title" content={metaTitle} />
      <meta
        key="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta key="og:image" property="og:image" content={metaImage} />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="630" />
      <meta key="og:url" property="og:url" content={canonicalUrl} />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content="Oracloud" />

      {/* Twitter — large card backed by the branded 1200x630 og-image.png. */}
      <meta key="twitter:title" name="twitter:title" content={metaTitle} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={metaDescription}
      />
      <meta key="twitter:image" name="twitter:image" content={metaImage} />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
    </Head>
  );
}
