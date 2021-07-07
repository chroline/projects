import { extractCss } from "goober";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends NextDocument<{ css: string }> {
  static async getInitialProps({ renderPage }) {
    const page = await renderPage();
    // Extrach the css for each page render
    const css = extractCss();
    return { ...page, css };
  }

  render() {
    return (
      <Html lang={"en"}>
        <Head>
          <script defer data-domain="projects.colegaw.in" src="https://plausible.io/js/plausible.js"></script>

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <style
            id={"_goober"}
            // And defined it in here
            dangerouslySetInnerHTML={{ __html: " " + this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
