import ResultsStyles from './ResultsStyles';

const Results = ({ results }) => (
  <ResultsStyles>
    <h1>Results:</h1>
    <ul className="quote-container">
      {results.map((result, index) => (
        <li key={index}>{result}</li>
      ))}
    </ul>
  </ResultsStyles>
);

export default Results;
