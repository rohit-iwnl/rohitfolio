import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rohitfolio</title>
        <meta name="description" content="Rohit's Portfolio" />
        <meta name="author" content="Rohit Manivel" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rohitmanivel.com/" />
        <meta property="og:title" content="Rohitfolio - Rohit Manivel's Portfolio" />
        <meta property="og:description" content="Explore Rohit Manivel's portfolio showcasing innovative projects, technical skills, and professional journey in software development." />
        <meta property="og:image" content="https://rohitmanivel.com/assets/images/hero.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Rohit Manivel - Software Developer Portfolio" />
        <meta property="og:site_name" content="Rohitfolio" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rohitmanivel.com/" />
        <meta property="twitter:title" content="Rohitfolio - Rohit Manivel's Portfolio" />
        <meta property="twitter:description" content="Explore Rohit Manivel's portfolio showcasing innovative projects, technical skills, and professional journey in software development." />
        <meta property="twitter:image" content="https://rohitmanivel.com/assets/images/hero.webp" />
        <meta property="twitter:image:alt" content="Rohit Manivel - Software Developer Portfolio" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="Rohit Manivel, portfolio, software developer, web development, mobile development, React, Next.js" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rohitmanivel.com/" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
