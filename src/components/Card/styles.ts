import styled, { keyframes, css } from 'styled-components';
import bg from 'assets/images/card.jpg';

interface GameCardProps {
  id: any
  check: boolean
  movement: boolean
  image: string
  match: boolean
}

const rotate = keyframes`
  from {
      transform: rotateY(90deg);
  }
  to {
      transform: rotateY(0deg);
  }
`;

const rotate2 = keyframes`
  from {
      transform: rotateY(180deg);
  }
  to {
      transform: rotateY(0deg);
  }
`;

export const GameCard = styled.div<GameCardProps>`
  width: 160px;
  height: 220px;
  margin: 20px 0;
  box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.75);
  cursor: pointer;
  animation: ${({ check }) => (check ? css`${rotate} 1s forwards` : css`${rotate2} 1s forwards`)};
  background: ${({ movement, check, image }) => (movement || check ? `url(${image}) 50% center/cover no-repeat` : `url(${bg}) 50% center/cover no-repeat`)};
  opacity: ${({ match }) => (match ? '0' : '1')};
`;
