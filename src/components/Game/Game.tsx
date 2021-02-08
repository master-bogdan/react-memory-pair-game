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
  const [game, setGame] = useState <Array<any>>([]);
  const [showField, setShowField] = useState <boolean>(true);
  const [endGame, setEndGame] = useState <boolean>(false);
  const [cardPair, setCardPair] = useState <Array<string | null>>([]);

  useEffect(() => {
    setTimeout(() => setShowField(false), 2000);
    const newGame = images.sort(() => Math.random() - 0.5);
    setGame(newGame);
  }, []);

  const onCoverClick = (
    event: React.SyntheticEvent,
    check: boolean,
    setCheck: Function,
  ) => {
    const card = event.currentTarget;

    if (check) {
      return;
    }

    if (!check) {
      setCheck(true);
      const cardName = card.getAttribute('data-name');
      cardPair.push(cardName);
    }

    if (cardPair[0] !== cardPair[1] && cardPair.length === 2) {
      setCardPair([]);
    }

    if (cardPair[0] === cardPair[1] && cardPair.length === 2) {
      game.forEach((item) => {
        if (item.name === cardPair[0]) {
          item.flipped = true;
        }
      });
      setCardPair([]);
    }

    if (game.length < 2) {
      alert('“Do. Or do not. There is no try.”');
      score();
      setEndGame(true);
      setShowField(true);
      setTimeout(() => {
        setEndGame(false);
      }, 1000);
    }
  };

  return (
    <GameField>
      {!endGame
        && game.map((item, index) => (
          // eslint-disable-next-line
          <Col xs="3" key={index + Math.random()}>
            <Card
              id={index}
              animation={showField}
              name={item.name}
              image={item.pic}
              flipped={item.flipped}
              onCoverClick={onCoverClick}
            />
          </Col>
        ))}
    </GameField>
  );
};

export default Game;
