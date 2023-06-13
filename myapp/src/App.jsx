import './App.css'
import Scoreboard from './components/Scoreboard'
import SubmitButton from './components/SubmitButton'
import ComputerCard from './components/ComputerCard'
import PlayerCard from './components/PlayerCard'
import Shuffle from './components/Shuffle'


function App() {
  Shuffle();

  return (
    <>
    <SubmitButton/>
    <Scoreboard/>
    <PlayerCard/>
    <ComputerCard/>
    </>
  )
}

export default App
