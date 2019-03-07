import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossOrigin="anonymous"
          />

          <style jsx global>{`
            body {
              background-color: #fafafa;
              font-family: 'Roboto', sans-serif;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
