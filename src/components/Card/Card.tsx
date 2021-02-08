import React, { useState } from 'react';
import {
  GameCard,
} from './styles';

interface CardProps {
  id: number
  animation: boolean
  name: string
  image: string
  flipped: boolean
  onCoverClick: Function
}

const Card: React.FC<CardProps> = ({
  id, animation, name, image, flipped, onCoverClick,
}) => {
  const [checked, setChecked] = useState <boolean>(false);

  return (
    <GameCard
      id={id}
      movement={animation}
      image={image}
      data-name={name}
      check={checked}
      match={flipped}
      onClick={(event) => onCoverClick(event, checked, setChecked)}
    />
  );
};

export default Card;
