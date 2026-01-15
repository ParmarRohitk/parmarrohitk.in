import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Template Google Fonts - Replaced with next/font in _app.js, but keeping preconnects for safety if needed, technically redundant with next/font */}

        {/* Template CSS Files - Moved from src/Head.js to eliminate render blocking warnings */}
        <link rel="stylesheet" href="/css/devicon.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        {/* CSS Skin File */}
        <link rel="stylesheet" href="/css/skins/blue.css" />
        <link rel="stylesheet" type="text/css" href="/css/styleswitcher.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
