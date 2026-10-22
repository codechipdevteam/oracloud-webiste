import { Html, Head, Main, NextScript } from "next/document";
import { serializeJsonLd, siteWideSchema } from "@/lib/seo/schema";

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
            search results; geo/openingHours support local Kerala searches.
            The nodes carry stable `@id`s, so pages that add their own graph
            (e.g. the social media marketing page) merge into these same
            entities instead of declaring conflicting copies of the business. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(siteWideSchema),
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
