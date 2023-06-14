function WinMsg({winner}) {
  if(winner) {
    return (
      <p>Player 1 crushes the competition!</p>
    )
  }
  if(!winner) {
    return (
      <p>Defeated by player 2!</p>
    )
  }

}

export default WinMsg