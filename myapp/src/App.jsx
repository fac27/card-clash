import './App.css'
import { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard'
import SubmitButton from './components/SubmitButton'
import ComputerCard from './components/ComputerCard'
import PlayerCard from './components/PlayerCard'
import aliens from "./data.js";


function App() {

  const [gameState, setGameState] = useState(false);

  const [playerDeck, setPlayerDeck] = useState();
  const [computerDeck, setComputerDeck] = useState();
  const startGame=()=>{
    setGameState(true);
    setPlayerDeck(aliens.slice(0, 5));
    setComputerDeck(aliens.slice(5, 10));
  }

  // useEffect(() => {
  //   const shuffleCards = () => {
  //     const aliensCopy = [...aliens];
  //     const playerCards = [];

  //     for (let i = 0; i < 5; i++) {
  //       const randomIndex = Math.floor(Math.random() * aliensCopy.length);
  //       const alien = aliensCopy.splice(randomIndex, 1)[0];
  //       playerCards.push(alien);
  //     }

  //     const computerDeck = aliensCopy.slice();

  //     setPlayerDeck(playerCards);
  //     setComputerDeck(computerDeck);
  //   };

  //   shuffleCards();
  // }, []);
  
  return (
    <>
    <button onClickCapture={startGame}>Start game</button>
    <SubmitButton/>
    <Scoreboard/>
    <PlayerCard deck={playerDeck}/>
    <ComputerCard deck={computerDeck}/>
    </>
  )
}

export default App