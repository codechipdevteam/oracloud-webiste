import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Critical CSS — inlined so it applies before the ~34 external
            stylesheets load. On a slow connection those (incl. a11y.css) arrive
            late, so the rules that MUST work immediately live here:
            1) overflow-x guard — stop the page panning sideways from a few px of
               full-bleed overflow (clip removes the scrollport; hidden fallback).
            2) loader failsafe — the full-screen .loader-root overlay is
               dismissed by JS only after hydration, which is gated behind the
               beforeInteractive scripts. On slow mobile that can block touch
               scrolling for many seconds, so fade it out and drop pointer-events
               on a timer regardless of JS. CSS animations beat framer's inline
               opacity, so this reliably clears it; fast loads unmount it first. */}
        <style
          dangerouslySetInnerHTML={{
            __html:
              "html,body{overflow-x:hidden;max-width:100%}" +
              "@supports (overflow:clip){html,body{overflow-x:clip}}" +
              "@keyframes loaderFailsafeHide{to{opacity:0;visibility:hidden;pointer-events:none}}" +
              ".loader-root{animation:loaderFailsafeHide .6s ease 1.6s forwards}" +
              "@media (prefers-reduced-motion:reduce){.loader-root{animation-duration:.01s}}",
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
          rel="stylesheet"
        />
        {/* Organization + local-business structured data (JSON-LD) for rich
            search results; geo/openingHours support local Kerala searches. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "ProfessionalService"],
              name: "Oracloud",
              legalName: "Oracloud Technologies",
              url: "https://www.oracloud.in",
              logo: "https://www.oracloud.in/android-chrome-512x512.png",
              image: "https://www.oracloud.in/og-image.png",
              email: "connect@oracloud.in",
              telephone: "+91-7034-302-111",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "First Floor, Swarnam Arcade, Anamala Junction",
                addressLocality: "Chalakudy",
                addressRegion: "Kerala",
                postalCode: "680307",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 10.3106579,
                longitude: 76.3341538,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "09:00",
                  closes: "13:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/people/Oracloud/61560252886547/",
                "https://www.instagram.com/oracloud_official/",
                "https://x.com/oracloudltd",
                "https://www.linkedin.com/in/oracloud-technologies-95b6a6314/",
                "https://www.youtube.com/@Oracloud",
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
