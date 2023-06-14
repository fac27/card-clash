import './App.css'
import { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard'
import SubmitButton from './components/SubmitButton'
import ComputerCard from './components/ComputerCard'
import PlayerCard from './components/PlayerCard'
import aliens from "./data.js";



const shuffleCards = () => {
  const aliensCopy = [...aliens];
  const shuffledDeck = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * aliensCopy.length);
    const alien = aliensCopy.splice(randomIndex, 1)[0];
    shuffledDeck.push(alien);
  }
  return [shuffledDeck.splice(0,5), shuffledDeck];
};


function App() {

  const [gameState, setGameState] = useState(false);

  const [playerDeck, setPlayerDeck] = useState(aliens.slice(0, 5));
  const [computerDeck, setComputerDeck] = useState(aliens.slice(5, 10));

  function startGame() {
    setGameState(true);
    const [playerCards, computerCards] = shuffleCards();
    setPlayerDeck(playerCards);
    setComputerDeck(computerCards);

  }

  
  




  
  return (
    <>
    <button onClick={startGame}>Start game</button>
    <SubmitButton/>
    <Scoreboard/>
    <PlayerCard deck={playerDeck}/>
    <ComputerCard deck={computerDeck}/>
    </>
  )
}

export default App