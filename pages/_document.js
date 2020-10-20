import Document, { Html, Head, Main, NextScript } from 'next/document';
import Header from '../components/Header/';
import Footer from '../components/Footer/';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Header />
          <Main />
          <NextScript />
          <Footer />
        </body>
      </Html>
    )
  }
}

export default MyDocument