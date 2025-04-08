import React from 'react';

const GameBanner = ({status, children}) => (
    <div className={`${status} banner`}>
        {children}
    </div>
);

export default GameBanner;