import styled from 'styled-components';

const Styles = styled.div`
    .result-card {
        padding: 15px;
        margin: 15px 0;
        box-shadow: 0 0 15px rgba(0, 0, 0 ,0.5);
    }
`;

const ResultCard = ({ content }) => {
  return (
    <Styles>
      <div className="result-card">{content}</div>
    </Styles>
  );
};

export default ResultCard;