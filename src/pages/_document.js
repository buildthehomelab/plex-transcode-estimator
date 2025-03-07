// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Plex Transcode Estimator</title>
        <meta name="description" content="Estimate your Plex server's transcode capacity based on PassMark score" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-[#121622]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
