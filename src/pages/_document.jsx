import Footer from "@/components/Layout/Footer";
import Document, { DocumentContext } from "next/document";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/logo512.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      </Html>
    );
  }
}
