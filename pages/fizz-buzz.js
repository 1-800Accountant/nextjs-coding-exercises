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
    const arr = [];
    for (let i = 1; i < 101; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        arr.push('FizzBuzz');
      } else if (i % 3 === 0) {
        arr.push('Fizz');
      } else if (i % 5 === 0) {
        arr.push('Buzz');
      } else {
        arr.push(i);
      }
    }
    setResults(arr);
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
          {/* <p>You can print elements just by returning a `p` tag</p> */}
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