import styled from 'styled-components';

const ResultsStyles = styled.div`
  .results-container {
    display: grid;

    grid-template-columns: auto auto auto;
  }

  .no-results {
    text-align: center;

    h1 {
      font-weight: Bold;
    }
  }
`;

export default ResultsStyles;