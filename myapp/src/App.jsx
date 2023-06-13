import './App.css'
import { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard'
import SubmitButton from './components/SubmitButton'
import ComputerCard from './components/ComputerCard'
import PlayerCard from './components/PlayerCard'
import aliens from "./data.js";


function App() {

  const [playerDeck, setPlayerDeck] = useState([]);
  const [computerDeck, setComputerDeck] = useState([]);
  
  useEffect(() => {
    const shuffleCards = () => {
      const playerDeck = [];

      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * aliens.length);
        const alien = aliens.splice(randomIndex, 1)[0];
        playerDeck.push(alien);
      }

      setPlayerDeck(playerDeck);
      setComputerDeck(aliens.slice());
    };

    shuffleCards();
  }, []);

  return (
    <>
    <SubmitButton/>
    <Scoreboard/>
    <PlayerCard deck={playerDeck}/>
    <ComputerCard deck={computerDeck}/>
    </>
  )
}

export default App