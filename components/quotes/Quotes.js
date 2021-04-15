import { useState } from 'react';
import axios from 'axios';
import QuotesStyles from './QuotesStyles.js';

const Quotes = ({ handleResults }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await axios.get(`https://ron-swanson-quotes.herokuapp.com/v2/quotes/search/${search}`);
    handleResults(data);
  };

  return (
    <QuotesStyles>
      <h1>Search Ron Swanson Quotes</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input id="search" type="text" onChange={e => setSearch(e.target.value)}/>
        </label>
        <button type="submit">Search</button>
      </form>
    </QuotesStyles>
  );
};

export default Quotes;