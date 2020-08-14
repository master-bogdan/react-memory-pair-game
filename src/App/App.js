import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from '../components/Navbar/Navbar';
import Game from '../components/Game/Game';
import bg from './bg.jpg';

class App extends Component {
    state = {
        showLogin: true,
        showEndGame: false,
        name: '',
        score: 0
    }
    
    render() {
        return (
            <div className="App" style={{background: `url(${bg}) center/cover no-repeat`}}>
                <NavBar  
                    name={this.state.name}
                    score={this.state.score}
                />
                <Container fluid={true}>
                    <Game />
                </Container>
            </div>
        );
    }
}

export default App;
