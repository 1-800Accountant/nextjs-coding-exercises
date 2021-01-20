import { useState, useEffect } from 'react';
import Link from 'next/link';
import FizzBuzzStyles from '../styles/FizzBuzzStyles';

const FizzBuzz = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fizzBuzz();
  }, []);

  const fizzBuzz = () => {
    // write function here
    const results = [];

    for(let index = 0; index <= 100; index++) {
      if (index % 3 === 0 && index % 5 === 0) {
        results.push('FizzBuzz');
      } else if (index % 3 === 0) {
        results.push("Fizz");
      } else if (index % 5 === 0) {
        results.push("Buzz");
      } else {
        results.push(index);
      }
    }
    setResults(results);
  };

  return (
    <FizzBuzzStyles>
      <div className="header">
        <h1>FizzBuzz</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="problem-container">
        <div className="directions">
          <h2>Directions:</h2>
          <p>Write a function that prints the numbers from 1 to 100</p>
          <p>Any time a number is a multiple of 3, print "Fizz"</p>
          <p>Any time a number is a multiple of 5, print "Buzz"</p>
          <p>Any time a number is a multiple of both 3 and 5, print "FizzBuzz"</p>
        </div>
        <div className="solution">
          {results.map((result, index) => (
            <p key={index}>{result}</p>
          ))}
        </div>
      </div>
    </FizzBuzzStyles>
  );
}

export default FizzBuzz;