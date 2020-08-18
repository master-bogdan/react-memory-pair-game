import React, { Component } from 'react';
import classes from './Game.module.css';

import Card from '../Card/Card';
import { Col } from 'reactstrap';


class Game extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showField: true,
            gameEnd: false
        }
        props.images.sort(() => Math.random() - 0.5);
        this.cardPair = [];
    }

    componentDidMount() {
        this.field = setTimeout(() => this.showGameField(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.field);
     }
    
    showGameField = () => {
        this.setState({showField: false});
    }

        
    onCoverClick = (event) => {
        const card = event.target;
        const cards = document.getElementsByClassName('Card');
        console.log(this.props.score);

        if(card.getAttribute('check') === 'true') {
            return;
        }

        if (card.getAttribute('check') === 'false') {
            card.classList.remove("Card_blank");
            card.setAttribute('check', 'true');
            this.cardPair.push(card.getAttribute('data-name'));
        }
         
        if (this.cardPair[0] !== this.cardPair[1] && this.cardPair.length === 2) {
            [...cards].map((card) => {
                return setTimeout(() => {
                    card.setAttribute('check', 'false');
                    card.classList.add("Card_blank");
                    this.cardPair = [];
                }, 1000);
            });
            
        } 
        
        if (this.cardPair[0] === this.cardPair[1] && this.cardPair.length === 2)
        {
            [...cards].map((card) => {
                return card.getAttribute('data-name') === this.cardPair[0] ? card.remove() : null;
            })
            this.cardPair = [];
        }

        if (cards.length < 2) {
            console.log('Finish game');
            this.props.score();
            this.setState({gameEnd: true, showField: true});
            setTimeout(() => {
                this.setState({gameEnd: false});
                this.componentDidMount();
            }, 1000);
        }
    }

    render() {
        return (
            <div className={classes.Game}>
                {!this.state.gameEnd ? this.props.images
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
                })
                : null
                }
            </div>
        )
    }
}

export default Game;