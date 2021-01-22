import {useEffect, useState} from "react";
import Cookies from 'js-cookie';
import styled from 'styled-components';

const ResultsStyles = styled.div`

`;

const Results = () => {

  const [results, setResults] = useState([])

  useEffect(() => {
    setResults(JSON.parse(Cookies.get('ronQuotes')))
  }, [])

  return (
    <ResultsStyles>
      <h1>Results Cookie Page</h1>
      <ul>
        {!!results.length && results.map(quote => (<li>{quote}</li>))}
      </ul>
    </ResultsStyles>
)};

export default Results;