import React, { useState, useEffect } from 'react';
import Card from '../Card';
import { Col } from 'reactstrap';
import {
  GameField,
} from './styles';
// Data
import { images } from 'data/images';

interface GameProps {
  score: Function
}

const Game: React.FC<GameProps> = ({ score }) => {
  const [showField, setShowField] = useState <boolean>(true);
  const [endGame, setEndGame] = useState <boolean>(false);
  const [cardPair, setCardPair] = useState <Array<string | null>>([]);
  images.sort(() => Math.random() - 0.5);

  const showGameField = () => {
    setShowField(false);
  };

  useEffect(() => {
    setTimeout(() => showGameField(), 2000);
  }, [showField]);

  const onCoverClick = (event: React.SyntheticEvent) => {
    const card = event.currentTarget;
    const cards: any = document.getElementsByClassName('Card');

    if (card.getAttribute('check') === 'true') {
      return;
    }

    if (card.getAttribute('check') === 'false') {
      card.setAttribute('check', 'true');
      cardPair.push(card.getAttribute('data-name'));
    }

    if (cardPair[0] !== cardPair[1] && cardPair.length === 2) {
      [...cards].map((card) => setTimeout(() => {
        card.setAttribute('check', 'false');
        card.classList.add('Card_blank');
        setCardPair([]);
      }, 1000));
    }

    if (cardPair[0] === cardPair[1] && cardPair.length === 2) {
      [...cards].map((card) => (card.getAttribute('data-name') === cardPair[0] ? card.remove() : null));
      setCardPair([]);
    }

    if (cards.length < 2) {
      alert('“Do. Or do not. There is no try.”');
      score();
      setEndGame(true);
      setShowField(true);
      images.sort(() => Math.random() - 0.5);
      setTimeout(() => {
        setEndGame(false);
      }, 1000);
    }
  };

  return (
    <GameField>
      {!endGame
        ? images.map((item, index) => (
          // eslint-disable-next-line
          <Col xs="3" key={index + Math.random()}>
            <Card
              animation={showField}
              name={item.name}
              image={item.pic}
              check={Boolean(item.flipped)}
              onCoverClick={onCoverClick}
            />
          </Col>
        ))
        : null}
    </GameField>
  );
};

export default Game;
