import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameInput from '../GameInput';
import GameResults from '../GameResults';
import Guess from '../Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses]= React.useState([]);

  const addGuess = (value) => {
    const newGuess = {
      id: crypto.randomUUID(),
      value
    };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
  }

  return <>
    <GameResults guesses={guesses} />
    {range(0, NUM_OF_GUESSES_ALLOWED).map(({value}, index) => (
      <Guess key={index}
        guess={guesses.length > index ? guesses[index].value : undefined}
        answer={answer} 
      />
    ))}
    <GameInput addGuess={addGuess} />
    </>;
}

export default Game;
