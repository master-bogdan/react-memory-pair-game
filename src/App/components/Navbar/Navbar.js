import React from 'react'
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';

const NavBar = ({ name, score }) => {

    return (
        <Navbar color="dark mb-2">
            <NavbarBrand className="text-white">
                Memory Pair Game
            </NavbarBrand>
            <NavbarText className="text-white">
                Player name: {name}
            </NavbarText>
            <NavbarText className="text-white">
                Score: {score}
            </NavbarText>
        </Navbar>
    )
}

export default NavBar;