import ResultsStyles from './ResultsStyles';

const Results = ({ results }) => (
  <ResultsStyles>
    <h1>Results:</h1>
    <ul>
      {results.map(el => <li>{el}</li>)}
    </ul>
  </ResultsStyles>
);

export default Results;