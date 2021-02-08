import React, { useState } from 'react';
import { Container } from 'reactstrap';
import NavBar from './components/Navbar';
import Login from './components/Login';
import Game from './components/Game';
import { Main } from './styles';

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState <boolean>(false);
  const [showEndGame, setShowEndGame] = useState <boolean>(false);
  const [userName, setUserName] = useState <string>('');
  const [gameScore, setGameScore] = useState <number>(0);

  const scoreFunction = () => {
    setGameScore(gameScore + 1);
  };

  const setName = (value: string) => {
    setUserName(value);
  };

  const setLogin = () => {
    if (userName !== '') {
      setShowLogin(false);
    }
  };

  return (
    <Main>
      <NavBar
        name={userName}
        score={gameScore}
      />
      <Container fluid>
        {showLogin ? (
          <Login
            getName={setName}
            onLogin={setLogin}
          />
        )
          : (
            <Game
              score={setGameScore}
            />
          )}
      </Container>
    </Main>
  );
};

export default App;
