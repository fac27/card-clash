function Scoreboard({score}) {

  const tempFLexRow = {
    display: 'flex', 
    flexDirection: 'row'
  }

  const playerScore = score[0]
  const computerScore = score[1]

  return (
    <div style={tempFLexRow}>
      <p>{playerScore}</p>
      <p>|</p>
      <p>{computerScore}</p>
    </div>
  )
}

export default Scoreboard