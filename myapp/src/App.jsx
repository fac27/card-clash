import "./App.css";
import { useState, useCallback } from "react";
import Scoreboard from "./components/Scoreboard";
import ComputerCard from "./components/ComputerCard";
import PlayerCard from "./components/PlayerCard";
import WinMsg from "./components/WinMsg";
import SubmitButton from "./components/SubmitButton";
import aliens from "./data.js";

import background from "./assets/galaxy.jpg";

const shuffleCards = () => {
  const aliensCopy = [...aliens];
  const shuffledDeck = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * aliensCopy.length);
    const alien = aliensCopy.splice(randomIndex, 1)[0];
    shuffledDeck.push(alien);
  }
  return [shuffledDeck.splice(0, 5), shuffledDeck];
};

function App() {
  const [gameState, setGameState] = useState(false);
  const [playerDeck, setPlayerDeck] = useState(aliens.slice(0, 5));
  const [computerDeck, setComputerDeck] = useState(aliens.slice(5, 10));
  const [selectedValue, setSelectedValue] = useState();
  const [showWinMsg, setShowWinMsg] = useState(false);
  const [winner, setWinner] = useState(true);
  const [score, setScore] = useState([0, 0]);
  const [canSubmit, setCanSubmit] = useState(true)
  const [isFlipped, setIsFlipped] = useState(true);

  const flipCard = useCallback(() => {
    setIsFlipped(prevIsFlipped => !prevIsFlipped);
  }, []);

  const handleSubmission = () => {
    setCanSubmit(false);
    flipCard()
    const [[skill, value]] = Object.entries(selectedValue);
    const computerValue = computerDeck[0][skill];
    if (computerValue < value) {
      setWinner(true);
      setScore(prevScore => [prevScore[0] + 1, prevScore[1]]);
    } else { 
      setWinner(false);
      setScore(prevScore => [prevScore[0], prevScore[1] + 1])
    }
    setShowWinMsg(true);
    setTimeout(() => setShowWinMsg(false), 2000);

    setTimeout(() => flipCard(), 4000);

    setTimeout(() => {
      const updatedPlayerDeck = [...playerDeck];
      const updatedComputerDeck = [...computerDeck];
      updatedPlayerDeck.shift();
      updatedComputerDeck.shift();
      setPlayerDeck(updatedPlayerDeck);
      setComputerDeck(updatedComputerDeck);
      setCanSubmit(true);
    }, 5000);
  };

  function startGame() {
    setGameState(true);
    const [playerCards, computerCards] = shuffleCards();
    setPlayerDeck(playerCards);
    setComputerDeck(computerCards);
  }

  return (
    <>

      <button onClick={startGame}>Start game</button>
      <div className="row center wrap white padding-m game-window" style={{backgroundImage: `url(${background})`}}>
        {gameState && <PlayerCard
          setSelectedValue={setSelectedValue}
          value={selectedValue}
          handleSubmission={handleSubmission}
          deck={playerDeck}
        /> }
        {gameState && <ComputerCard deck={computerDeck} isFlipped={isFlipped}/> }
      </div>
      {showWinMsg && <WinMsg winner={winner} /> }
      {canSubmit && <SubmitButton value={selectedValue} handleSubmission={handleSubmission}/>}
      <Scoreboard score={score} />

    </>
    
  );
}

export default App