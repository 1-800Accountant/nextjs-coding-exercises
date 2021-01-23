import ResultsStyles from './ResultsStyles';
import ResultCard from './ResultCard';

const Results = ({ results }) => {
    return (
      <ResultsStyles>
        <h1>Results:</h1>
        <div className="results-list">
          {results.length ? results.map((result, index) => (
            <ResultCard key={index} content={result}></ResultCard>
          )) : (
            <p>No Results found!</p>
          )}
        </div>
      </ResultsStyles>
    );
};

export default Results;