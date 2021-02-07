import React from 'react';
import {
  GameCard,
} from './styles';

interface CardProps {
  animation: boolean
  name: string
  image: string
  check: boolean
  onCoverClick: Function
}

const Card: React.FC<CardProps> = ({
  animation, name, image, check, onCoverClick,
}) => (
  <GameCard
    movement={animation}
    image={image}
    data-name={name}
    check={check}
    onClick={(event) => onCoverClick(event)}
  />
);

export default Card;
