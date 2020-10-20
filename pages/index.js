import Head from 'next/head';
import Header from '../components/Header/';
import Footer from '../components/Footer/';
import './index.css';

export default () => (
  <>
    <Head>
      <html lang="en" />
      <title>Next POC</title>
      <meta property="og:title" content="Next POC" key="title" />
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