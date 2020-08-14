import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from '../components/Navbar/Navbar';
import Game from '../components/Game/Game';

class App extends Component {
    state = {
        showLogin: true,
        showEndGame: false,
        name: '',
        score: 0
    }
    
    render() {
        return (
            <div className="App">
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
