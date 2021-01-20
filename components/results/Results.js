import {useEffect, useState} from "react";
import Cookies from 'js-cookie';
import ResultsStyles from './ResultsStyles';
import ResultCard from './ResultCard';

const Results = ({ results }) => {
  const [defaultText, setDefaultText] = useState();

  useEffect(() => {
    Cookies.get('results');
  }, []);

  return (
    <ResultsStyles>
      <h1>Results:</h1>
      <ul>
        {/* Map over results prop here */}
        {results.length ? (
          results.map((result, index) => (
            <ResultCard key={index} result={result} />
          ))
        ) : "No such luck!"}
      </ul>
    </ResultsStyles>
  );
};

export default Results;