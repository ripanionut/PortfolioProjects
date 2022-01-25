import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/fb.jpg"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/fb.jpg"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/fb.jpg"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
