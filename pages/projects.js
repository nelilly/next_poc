import Head from 'next/head';
import Header from '../components/Header/';
import Footer from '../components/Footer/';
import './index.css';

export default () => (
  <>
  <Head>
    <html lang="en" />
    <title>Next POC Projects</title>
    <meta property="og:title" content="Next POC Projects" key="title" />
    <link
      rel="stylesheet"
      href={`${process.env.ASSET_PREFIX}/_next/static/css/styles.chunk.css`}
    />
  </Head>
    <Header />
    <h1>Projects!!!</h1>
    <ul>
      <li>Projects!</li>
      <li>Projects!</li>
      <li>Projects!</li>
    </ul>
    <Footer />
  </>
);
