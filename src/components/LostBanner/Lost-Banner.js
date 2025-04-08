import React from 'react';
import GameBanner from '../GameBanner';

const LostBanner = ({answer}) => (
    <GameBanner status="sad">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </GameBanner>
);

export default LostBanner;