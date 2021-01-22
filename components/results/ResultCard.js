import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

const ResultCardStyles = styled.div`
    display: grid;
    place-items: center;
    padding: 20px;
    max-width: 200px;
    height: 275px;
    border: 1px solid black;
    margin: 5px;
`;

const ResultCard = ({quote}) => (
  <ResultCardStyles>
    <div className="card-content">
      <p>{quote}</p>
    </div>
  </ResultCardStyles>
);


ResultCard.propTypes = {
    quote: PropTypes.string
};

export default ResultCard;