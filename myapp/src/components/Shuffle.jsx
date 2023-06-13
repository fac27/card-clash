import aliens from '../data.js';

function Shuffle() {
  const player1 = [];
  const computer = [];
  const randomIndex = Math.floor(Math.random() * aliens.length) + 1;
  console.log(randomIndex)

  return (
    <div>Shuffle</div>
  )
}

Shuffle()

export default Shuffle