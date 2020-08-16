import React from 'react';
import './Card.css';

const Card = props => {
    return (
        <div 
            className={props.className ? "Card" : "Card Card_blank"}
            data-name={props.name}
            style={{background: `url(${props.image}) center/cover`}}
            check={props.check.toString()}
            onClick={props.onCoverClick}>
        </div>
    )
}

export default Card;