import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavBar from './components/Navbar';
import Login from './components/Login';
import Game from './components/Game';
import { images as Images } from './Images/Images';
import classes from './App.module.css';

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

    getName = (value) => {
        this.setState({name: value});
    }

    onLogin = () => {
        if (this.state.name !== '') {
            this.setState({showLogin: false});
        }
    }
    
    render() {
        console.log(this.state.showLogin);
        return (
            <div className={classes.App}>
                <NavBar  
                    name={this.state.name}
                    score={this.state.score}
                />
                <Container fluid={true}>
                    {this.state.showLogin 
                    ? <Login
                        getName={this.getName}
                        onLogin={this.onLogin}
                      />
                    
                    : <Game 
                        score={this.scoreFunction} 
                        images={Images} 
                      />
                    }
                </Container>
            </div>
        );
    }
}

export default App;
