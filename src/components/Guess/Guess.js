import React from 'react';
import { range } from '../../utils';

const Guess = ({guess = []}) => {
  return <p className="guess">
    {range(0, 5).map(({value}, index) => (
        <span className="cell" key={index}>{(guess.length > 0) && guess[index]}</span>
    ))}
  </p>;
}

export default Guess;