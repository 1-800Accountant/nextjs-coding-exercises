import ResultCard from "./ResultCard";
import ResultsStyles from './ResultsStyles';


const Results = ({ results, searched }) => (

  <ResultsStyles>
    <h1>Results:</h1>
    {results.length > 0 ? (
      <div className="results-container">{results.map((quote, index) => (
        <ResultCard key={`quote-${index}`} quote={quote}/>
        ))}
      </div> )
      : (searched ? (
      <div className="no-results"><h1>No Results Available</h1></div>
      ): (
      <div className="no-results">Please Enter a Word to Search</div>
      ))}
  </ResultsStyles>
);

export default Results;