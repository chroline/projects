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
          <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PT2X84T');
`}</script>

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content={`This is the portfolio for Cole Gawin, a full-stack developer, designer, and "brand-gineer".`}
          />
          <meta
            name="keywords"
            content="portfolio, projects, developer, engineer, coding, programming, cole gawin, projects, typescript, student, programmer, deerfield"
          />

          <style
            id={"_goober"}
            // And defined it in here
            dangerouslySetInnerHTML={{ __html: " " + this.props.css }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PT2X84T"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
