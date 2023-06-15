function WinMsg({ winner, computerValue, playerValue }) {
  if (winner) return <p>👽 Player 1 crushes the competition! You scored {playerValue} 👽 Computer scored {computerValue} 👽</p>;
  return <p>👽 Defeated by the computer! Player 1 scored {playerValue} 👽 Computer scored {computerValue} 👽</p>;
}
export default WinMsg;
