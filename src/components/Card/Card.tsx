import React from 'react';
import {
  GameCard,
} from './styles';

interface CardProps {
  id: number
  animation: boolean
  name: string
  image: string
  matched: boolean
  flipped: boolean
  onCoverClick: Function
}

const Card: React.FC<CardProps> = ({
  id, animation, name, image, matched, flipped, onCoverClick,
}) => (
  <GameCard
    id={id}
    movement={animation}
    image={image}
    data-name={name}
    check={flipped}
    match={matched}
    onClick={(event) => onCoverClick(event, id)}
  />
);

export default Card;
