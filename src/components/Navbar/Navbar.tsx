import React from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import {
  StyledNavbar,
} from './styles';

interface NavProps {
  name: string
  score: number
}

const NavBar: React.FC<NavProps> = ({ name, score }) => (
  <StyledNavbar color="dark mb-2">
    <NavbarBrand className="text-white">
      Memory Pair Game
    </NavbarBrand>
    <NavbarText className="text-white">
      Player name: {name}
    </NavbarText>
    <NavbarText className="text-white">
      Score: {score}
    </NavbarText>
  </StyledNavbar>
);

export default NavBar;
