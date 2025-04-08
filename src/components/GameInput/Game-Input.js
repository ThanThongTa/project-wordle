import React from 'react';

function GameInput() {
  const [guess, setGuess] = React.useState('');

  const handleGuess = (event) => {
    event.preventDefault();
    const nextGuess = event.target.value.toUpperCase();
    setGuess(nextGuess);
    console.log(nextGuess);
  }

  return <form className="guess-input-wrapper">
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input" 
      type="text" 
      value={guess} 
      onChange={handleGuess}
      required
      minLength={5}
      maxLength={5}
      pattern="[a-zA-Z]{5}"
      title="5 letter words"
    />
  </form>;
}

export default GameInput;