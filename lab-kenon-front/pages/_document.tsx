import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          Lab Kenon
          <meta name="description" content="Seu Laboratorio online" />
          <link rel="icon" href="/icon.ico" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
