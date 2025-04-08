import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GameInput from '../GameInput';
import GameResults from '../GameResults';

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
    <GameInput addGuess={addGuess} />
    </>;
}

export default Game;
