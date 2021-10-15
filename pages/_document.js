import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charset="IE-edge" httpEquiv="X-UA-Compatible" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="yqft_OMRVorkgF8rjosTy7pZPeoBPyI2X34nuyBQb6E"
          />
          <link rel="icon" type="image/png" href="/favicon.png" />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-210274657-1"
          />
          <script>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-210274657-1"
            />
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
