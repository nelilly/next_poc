import Head from 'next/head';
import Header from '../components/Header/';
import Footer from '../components/Footer/';
import './index.css';

export default () => (
  <>
    <Head>
      <html lang="en" />
      <title>Next POC {process.env.ASSET_PREFIX}</title>
      <meta property="og:title" content="Next POC" key="title" />
      <link
        rel="stylesheet"
        href={`${process.env.ASSET_PREFIX}/_next/static/css/styles.chunk.css`}
      />
    </Head>
    <Header />
    <h1>Home</h1>
    <ul>
      <li>Home content</li>
      <li>Featured Projects</li>
      <li>People</li>
      <li>ETC...</li>
    </ul>
    <Footer />
  </>
);
