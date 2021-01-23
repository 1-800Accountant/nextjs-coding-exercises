import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const cookieData = Cookies.get('search-results');
    console.log(typeof cookieData);
    setResults(cookieData);
  }, []);

  return (
    <div>
      <h1>Results Cookie Page</h1>
      {results.map((result, index) => (
        <p key={index}>{result}</p>
      ))}
    </div>
  );
};

export default Results;