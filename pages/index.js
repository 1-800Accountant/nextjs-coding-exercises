import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Quotes from '../components/quotes/Quotes';
import Results from '../components/results/Results';
import styles from '../styles/Home.module.css';

const Home = ({ data }) => {
  const [results, setResults] = useState([]);

  const handleResults = results => {
    setResults(results);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{data.page_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <Link href="/fizz-buzz">FizzBuzz</Link>
      </div>
      <main className={styles.main}>
        <Quotes handleResults={handleResults} />
        <Results results={results} />
      </main>
    </div>
  )
}

Home.getStaticProps = async ctx => {
  const { data } = await axios.get(`${WORDPERSS_ENDPOINT}/api/4233?limit=`);
  return {
    props: {
      data
    }
  }
};

export default Home;