import Head from 'next/head';
import './index.css';
import data from '../data/projects.json'

const Projects = () => (
  <>
    <Head>
      <title>{data.title} : Next POC</title>
      <meta property="og:title" content="Next POC Projects" key="title" />
    </Head>
    <main>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        <li>Projects!</li>
        <li>Projects!</li>
        <li>Projects!</li>
      </ul>
    </main>
  </>
);

export default Projects;