import styled from 'styled-components';

const ResultsStyles = styled.div`
  h1 {
    text-align: center;
  }

  li {
    list-style: none;
    width: 33%;
    padding: 15px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 1fr 1fr 1fr;
  }
`;

export default ResultsStyles;
