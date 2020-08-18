import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from '../components/Navbar/Navbar';
import Game from '../components/Game/Game';
import bg from './bg.jpg';
import { images as Images } from '../components/Images/Images';

class App extends Component {
    state = {
        showLogin: true,
        showEndGame: false,
        name: '',
        score: 0
    }

    scoreFunction = () => {
        this.setState({score: this.state.score + 1})
    }
    
    render() {
        return (
            <div className="App" style={{background: `url(${bg}) center/cover no-repeat`}}>
                <NavBar  
                    name={this.state.name}
                    score={this.state.score}
                />
                <Container fluid={true}>
                    <Game 
                        score={this.scoreFunction} 
                        images={Images} 
                    />
                </Container>
            </div>
        );
    }
}

export default App;
