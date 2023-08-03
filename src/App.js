import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [userPoints, setUserPoints] = useState(0);
  const [pcPoints, setPcPoints] = useState(0);
  const [resultText, setResultText] = useState('');

  const handleUsernameSubmit = (event) => {
    event.preventDefault();
    const trimmedUsername = username.trim();

    if (trimmedUsername.length > 0 && trimmedUsername.length <= 10) {
      setGameStarted(true);
    } else {
      alert('Please enter a valid username (max 10 characters)');
    }
  };

  const handleGameChoice = (userChoice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice =
      choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'You Win!';
      setUserPoints((prevPoints) => prevPoints + 1);
    } else if (userChoice === computerChoice) {
      result = 'Tie!';
    } else {
      result = 'Computer Wins!';
      setPcPoints((prevPoints) => prevPoints + 1);
    }

    setResultText(
      `You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`
    );
  };

  const handleResetGame = () => {
    setResultText('');
    setUserPoints(0);
    setPcPoints(0);
    setGameStarted(false);
    setUsername('');
  };

  return (
    <div className="App">
      <h1 className="title">rock, paper, scissors</h1>
      {!gameStarted ? (
        <div id="username-form">
          <img
            className="minilogo"
            src="https://i.ibb.co/SVbwwHw/RPS.png"
            alt="miniLogo"
          />
          <div className="username-title">
            <form onSubmit={handleUsernameSubmit}>
              <input
                type="text"
                placeholder="Username.."
                name="username"
                maxLength="10"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button type="submit">Start Game</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="game-container">
          <div className="game-choices">
            <a
              href=""
              className="rock"
              onClick={() => handleGameChoice('rock')}
            >
              <img
                src="https://i.ibb.co/rcg3gtF/rock.png"
                alt="rock"
              />
            </a>
            <a
              href=""
              className="paper"
              onClick={() => handleGameChoice('paper')}
            >
              <img
                src="https://i.ibb.co/JmmwPDV/paper.png"
                alt="paper"
              />
            </a>
            <a
              href=""
              className="scissors"
              onClick={() => handleGameChoice('scissors')}
            >
              <img
                src="https://i.ibb.co/bbp7yxQ/scissors.png"
                alt="scissors"
              />
            </a>
          </div>
          <div className="game-result">
            <p className="result">{resultText}</p>
            <p className="scores-center">
              <span className="userNameSB">{username} </span>
              <span className="userScore">{userPoints}</span> -{' '}
              <span className="pcScore">{pcPoints}</span> PC
            </p>
            <div className="reset">
              <button onClick={handleResetGame}>Reset</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
