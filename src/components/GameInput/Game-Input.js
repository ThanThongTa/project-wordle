import React from 'react';

function GameInput({addGuess, status}) {
  const handleGuess = (event) => {
    event.preventDefault();
    addGuess(event.target[0].value.toUpperCase());
    event.target[0].value = '';
  }

  return <form className="guess-input-wrapper" onSubmit={handleGuess}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input" 
      type="text" 
      required
      disabled={status !== 'playing'}
      minLength={5}
      maxLength={5}
      pattern="[a-zA-Z]{5}"
      title="5 letter words"
    />
  </form>;
}

export default GameInput;