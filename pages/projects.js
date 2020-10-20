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
  </Head>
    <Header />
    <main>
      <h1>Projects!!!</h1>
      <ul>
        <li>Projects!</li>
        <li>Projects!</li>
        <li>Projects!</li>
      </ul>
    </main>
    <Footer />
  </>
);
