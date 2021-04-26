import { useState, useEffect } from 'react';
import Link from 'next/link';
import FizzBuzzStyles from '../styles/FizzBuzzStyles';

const FizzBuzz = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(fizzBuzz());
  }, []);

  const fizzBuzz = () => {
    // write function here
    let newArr = [];
    let x = 1;
    while (x <= 100) {
      if (x % 3 === 0) {
        newArr.push('Fizz');
      } else if (x % 5 === 0) {
        newArr.push('Buzz');
      } else if (x % 3 === 0 && x % 5 === 0) {
        newArr.push('FizzBuzz');
      } else {
        newArr.push(x);
      }
      x++;
    }
    return newArr;
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
          <p>
            Any time a number is a multiple of both 3 and 5, print "FizzBuzz"
          </p>
          <p>First Render the results in console</p>

          <p>You can print elements just by returning a `p` tag</p>
        </div>
        <div className="solution">
          {results.map((result, index) => (
            <p key={index}>{result}</p>
          ))}
        </div>
      </div>
    </FizzBuzzStyles>
  );
};

export default FizzBuzz;
