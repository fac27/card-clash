import aliens from "../data.js";

function Shuffle() {
  const player1 = [];

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * aliens.length) + 1;
    const alien = aliens.splice(randomIndex, 1)[0];
    player1.push(alien);
  }

  const computer = aliens.slice();

  return <div></div>;
}

export default Shuffle;
