import { Html, Head, Main, NextScript } from "next/document";
import { Header } from "../components/header";
import { Aside } from "../components/aside";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9639699134903654"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}
