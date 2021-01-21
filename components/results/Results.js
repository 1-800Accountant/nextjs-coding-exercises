import ResultsStyles from './ResultsStyles';
import Cookies from 'js-cookie';
import ResultCard from './ResultCard';
import { useEffect } from 'react';

const Results = ({ results }) => (
  useEffect(() => {
    Cookies.get('results');
  }, []);

  <ResultsStyles>
    <h1>Results:</h1>
    <ul style={{ display: 'flex', 'flex-flow': 'row wrap' }}>
      {/* Map over results prop here */}
      {/* {results.length !== 0 ?
        results.map((result, index) => (
          <ResultCard key={index} result={result} />
        )) : <p>No results, bud!</p>} */}
        {!results.length ? (
          <p>NO results!</p>
        ) : (
          results.map((result, index) => (
            <ResultCard key={index} result={result} />
          ))
        )}
    </ul>
  </ResultsStyles>
);

export default Results;