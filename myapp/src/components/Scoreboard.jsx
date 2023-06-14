function Scoreboard({score}) {

  const playerScore = score[0]
  const computerScore = score[1]

  return (
    <div className="row center">
      <p>{playerScore}</p>
      <p>|</p>
      <p>{computerScore}</p>
    </div>
  )
}

export default Scoreboard