import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Rohitfolio</title>
      <meta name="description" content="Rohit's Portfolio" />
      <meta name="author" content="Rohit Manivel" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
