import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import CustomCursor from "@/components/CustomCursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Default meta for every route. Page-level <Seo/> overrides via keyed dedup. */}
      <Seo />
      <Layout>
        <CustomCursor />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
