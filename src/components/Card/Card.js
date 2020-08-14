import React from 'react';
import classes from './Card.module.css';

const Card = props => {
    return (
        <div 
            className={classes.Card}
            style={{background: `url(${props.src}) center/cover`}}>
        </div>
    )
}

export default Card;