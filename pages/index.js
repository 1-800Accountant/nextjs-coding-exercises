import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Quotes from '../components/quotes/Quotes';
import Results from '../components/results/Results';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [results, setResults] = useState([]);

  const handleResults = results => {
    setResults(results);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ron Swanson Quotes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <Link href="/fizz-buzz"><a>FizzBuzz</a></Link>
      </div>
      <main className={styles.main}>
        <Quotes handleResults={handleResults} />
        <Results results={results} />
      </main>
    </div>
  )
}

export default Home;