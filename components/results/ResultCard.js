import styled from 'styled-components';

const ResultCardStyles = styled.div`
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid black;
    max-width: 300px;
    padding: 5px 10px;
`;

const ResultCard = ({ result }) => (
  <ResultCardStyles>{result}</ResultCardStyles>
);

export default ResultCard;