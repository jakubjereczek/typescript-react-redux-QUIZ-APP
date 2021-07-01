import React, { FC } from 'react';
import './LoadingIndicator.scss';

const LoadingIndicator: FC = () => {

    return (
        <header>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </header>
    )
}

export default LoadingIndicator;
