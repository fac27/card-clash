import './App.css'
import { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard'
import SubmitButton from './components/SubmitButton'
import ComputerCard from './components/ComputerCard'
import PlayerCard from './components/PlayerCard'
import aliens from "./data.js";
const shuffleCards = () => {
  const aliensCopy = [...aliens];
  const shuffledDeck=[];


  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * aliensCopy.length);
    const alien = aliensCopy.splice(randomIndex, 1)[0];
    shuffledDeck.push(alien);
  }
  
  // const computerDeck = aliensCopy.slice();
  return [shuffledDeck.splice(0,5), shuffledDeck];//cards
  
};

function App() {

  const [gameState, setGameState] = useState(false);

  const [playerDeck, setPlayerDeck] = useState();
  const [computerDeck, setComputerDeck] = useState();
  const startGame=()=>{
    setGameState(true);
    //shuffle here which will be a new array
    const [playerCards, computerCards] = shuffleCards();
    setPlayerDeck(playerCards);
    setComputerDeck(computerCards);
  }

  console.log(' playerDeck ', playerDeck)
  console.log(' computerDeck ', computerDeck)
const x=(value)=>{
  // with the chosen value add comparison logic 
  // call another function that removes the cards from the play
}
  return (
    <>
    <button onClickCapture={startGame}>Start game</button>
    { gameState && <><SubmitButton/>
    <Scoreboard/>
    <PlayerCard deck = { playerDeck}/>
    <ComputerCard deck={computerDeck} onsubmit={x}/>

    </>}
    </>
  )
}

export default App