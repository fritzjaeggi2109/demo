import React from 'react';
import './card.css';
import Menu from '../menu/Menu';
import InfoContainer from '../infoContainer/InfoContainer';

const Card = () => {
    return (
        <div className="card">
            <Menu />
            <InfoContainer />
        </div>
    );
}

export default Card;