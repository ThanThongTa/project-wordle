import React from 'react';

const GameBanner = ({status, guesses, answer}) => {
    if (status === 'playing') return;
    if (status === 'won') return (
    <div className="happy banner">
        <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{guesses.length} guesses</strong>.
        </p>
    </div>);
    if (status === 'lost') return (
    <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
    );
}

export default GameBanner;