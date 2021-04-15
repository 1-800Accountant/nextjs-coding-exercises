import Cookies from 'js-cookie';

const Results = () => {
  // TODO: Handle invalid data format
  const serializedQuotes = Cookies.get("quotes");
  console.log(serializedQuotes);
  const quotes = JSON.parse(serializedQuotes);
  // const quotes = [];

  return (
    <>
      <h1>Results Cookie Page</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </>
  );
};

export default Results;