import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameInput from '../GameInput';
import Guess from '../Guess';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import GameBanner from '../GameBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses]= React.useState([]);
  const [status, setStatus] = React.useState('playing');
  
  const addGuess = (value) => {
    const newGuess = {
      id: crypto.randomUUID(),
      value
    };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);

    if (newGuesses.length > 0 && newGuesses[newGuesses.length - 1].value === answer) 
      setStatus("won");
    
    if (status !== "won" && newGuesses.length >= 6)
      setStatus('lost');
  }

  return <>
    {range(NUM_OF_GUESSES_ALLOWED).map((value, index) => (
      <Guess key={index}
        guess={guesses.length > index ? guesses[index].value : undefined}
        answer={answer} 
      />
    ))}
    {status === 'won' && 
      <WonBanner numGuesses={guesses.length} />
    }
    {status === 'lost' && 
      <LostBanner answer={answer} />
    }
    <GameInput status={status} addGuess={addGuess} />
    </>;
}

export default Game;
