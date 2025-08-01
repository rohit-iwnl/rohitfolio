import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="author" content="Rohit Manivel" />
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
