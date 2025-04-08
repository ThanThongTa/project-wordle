import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const Guess = ({guess = "", answer}) => {
  const cellStates = checkGuess(guess, answer);
  const rowLength = 5;

  return <p className="guess">
    {range(0, rowLength).map(({value}, index) => {
        const classes = cellStates && cellStates.length === rowLength 
            ? `cell ${cellStates[index].status}`
            : "cell";
        return <span 
            className={classes} 
            key={index}>
                {(guess.length > 0) && guess[index]}
        </span>;
    })}
  </p>;
}

export default Guess;