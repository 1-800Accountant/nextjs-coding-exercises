import styled from 'styled-components';

const ResultsStyles = styled.div`
  h1 {
    text-align: center;
  }

  .container {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .list-item {
    list-style: none;
    display: grid;
    place-items: center;
  }
`;

export default ResultsStyles;
