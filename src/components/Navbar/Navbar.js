import React from 'react'
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';

const NavBar = (props) => {

    return (
        <Navbar color="primary mb-3">
            <NavbarBrand className="text-white">
                Memory Pair Game
            </NavbarBrand>
            <NavbarText className="text-white">Player name: {props.name}</NavbarText>
            <NavbarText className="text-white">Score: {props.score}</NavbarText>
        </Navbar>
    )
}

export default NavBar;