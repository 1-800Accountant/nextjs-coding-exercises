import ResultsStyles from './ResultsStyles';

const Results = ({ results }) => (
  <ResultsStyles>
    <h1>Results:</h1>
    <ul className="container">
      {results.map((result, index) => (
        <li className="list-item" key={index}>
          {result}
        </li>
      ))}
    </ul>
  </ResultsStyles>
);

export default Results;
