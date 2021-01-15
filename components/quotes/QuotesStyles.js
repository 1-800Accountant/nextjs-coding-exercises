import styled from 'styled-components';

const QuotesStyles = styled.div`
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  padding: 2rem;

  form {
    label {
      input {
        margin-right: 2rem;
      }
    }
  }
`;

export default QuotesStyles;