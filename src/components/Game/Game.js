import React, { Component } from 'react';
import classes from './Game.module.css';
import { images as Images } from '../Images/Images';
import Card from '../Card/Card';
import { Col } from 'reactstrap';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showField: true,
            cls: null
        }
        Images.sort(() => Math.random() - 0.5);
    }

    componentDidMount() {
        setTimeout(() => this.setState({showField: false}), 3000);
    }
    
    onCoverClick = (event) => {
        const card = event.target;
        console.log(card.getAttribute('check'));
        if (card.getAttribute('check') === 'false') {
            card.classList.remove("Card_blank");
        }
    }

    render() {
        return (
            <div className={classes.Game}>
                {Images
                    .map((item, index) => {
                        return (
                            <Col xs='3' key={index}> 
                                <Card 
                                    className={this.state.showField ? true : false}
                                    name={item.name}
                                    image={item.pic}
                                    check={item.flipped}
                                    onCoverClick={this.onCoverClick}
                                />
                            </Col>
                        )
                })}
            </div>
        )
    }
}

export default Game;