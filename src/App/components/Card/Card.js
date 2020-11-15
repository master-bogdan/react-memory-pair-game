import React from 'react';
import './Card.css';

const Card = ({ className, name, image, check, onCoverClick }) => {
    return (
        <div 
            className={className ? "Card" : "Card Card_blank"}
            data-name={name}
            style={{background: `url(${image}) center/cover`}}
            check={check.toString()}
            onClick={onCoverClick}
        />
    )
}

export default Card;