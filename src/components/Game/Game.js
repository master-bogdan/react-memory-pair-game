import React from 'react';
import classes from './Game.module.css';
import { images as Images } from '../Images/Images';
import Card from '../Card/Card';
import { Col } from 'reactstrap';

const Game = (props) => {
    
    const imgArray = [];
    for (let i = 0; i < Images.length - 1; i++) {
        imgArray.push(Images[i], Images[i]);
    }

    return (
        <div className={classes.Game}>
            {imgArray
                .sort(() => Math.random() - 0.5)
                .map((item, index) => {
                    return (
                        <Col xs='3' key={index}>
                            <Card 
                                src={item.pic}
                            />
                        </Col>
                    )
            })}
        </div>
    )
}

export default Game;