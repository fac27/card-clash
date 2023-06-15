function WinMsg({ winner }) {
  if (winner) return <p>Player 1 crushes the competition!</p>;
  return <p>Defeated by player 2!</p>;
}
export default WinMsg;
