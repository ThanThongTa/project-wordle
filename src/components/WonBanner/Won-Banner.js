import React from 'react';
import GameBanner from '../GameBanner';

const WonBanner = ({numGuesses}) => {
    return <GameBanner status="happy">
         <p>
             <strong>Congratulations!</strong> Got it in {' '}
             <strong>{numGuesses === 1 
                 ? '1 guess'
                 : `${numGuesses} guesses`}</strong>.
         </p>
    </GameBanner>
};

export default WonBanner;