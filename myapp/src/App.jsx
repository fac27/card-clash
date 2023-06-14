import "./App.css";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard";
import ComputerCard from "./components/ComputerCard";
import PlayerCard from "./components/PlayerCard";
import WinMsg from "./components/WinMsg";
import aliens from "./data.js";

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

  const [isFlipped, setIsFLipped] = useState(true);

  const flipCard = () => {
    setIsFLipped(!isFlipped)
  }

  const handleSubmission = () => {

    flipCard()


    const [[skill, value]] = Object.entries(selectedValue);
    const computerValue = computerDeck[0][skill];

    if (computerValue < value) {
      setWinner(true)
    } else { setWinner(false) }
    setShowWinMsg(true);
    setTimeout(() => setShowWinMsg(false), 2000);
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
      <Scoreboard />
      <PlayerCard
        setSelectedValue={setSelectedValue}
        value={selectedValue}
        handleSubmission={handleSubmission}
        deck={playerDeck}
      />
      <ComputerCard deck={computerDeck} isFlipped={isFlipped}/>
      {showWinMsg && <WinMsg winner={winner} /> }
    </>
  );
}

export default App;
