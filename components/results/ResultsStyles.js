import styled from 'styled-components';

const ResultsStyles = styled.div`
  h1 {
    text-align: center;
  }

  .quote-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  li {
    list-style: none;
    display: grid;
    place-items: center;
  }
`;

export default ResultsStyles;
