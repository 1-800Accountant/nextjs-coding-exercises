import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Quotes from '../components/quotes/Quotes';
import Results from '../components/results/Results';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

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
        <Link href="/fizz-buzz">FizzBuzz</Link>
      </div>
      <main className={styles.main}>
        <Quotes handleResults={handleResults} setSearched={setSearched} />
        <Results results={results} searched={searched} />
      </main>
    </div>
  )
}

export default Home;