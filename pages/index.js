import Head from 'next/head';
import './index.css';
import data from '../data/home.json'

export const Home = () => (
  <>
    <Head>
      <title>Next POC {data.title}</title>
      <meta property="og:title" content="Next POC" key="title" />
    </Head>
    <main>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        <li>Home content</li>
        <li>Featured Projects</li>
        <li>People</li>
        <li>ETC...</li>
      </ul>
    </main>
  </>
);

export default Home;