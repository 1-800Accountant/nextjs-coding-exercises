import React from "react";
import styled from 'styled-components';

const ResultCardStyles = styled.li`
  background: red;
  display: flex;
  width: 50%;

  .result-content {

  }
`;

const ResultCard = ({ result }) => {
    return (
        <ResultCardStyles className="result-card">
            <div className="result-content">
                <p>{result}</p>
            </div>
        </ResultCardStyles>
    )
}
export default ResultCard;