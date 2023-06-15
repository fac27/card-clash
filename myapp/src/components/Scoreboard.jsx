function Scoreboard({ score }) {
  const playerScore = score[0];
  const computerScore = score[1];

  return (
    <div className="row center stack-below">
      <p className="text-space">You: {playerScore}</p>
      <p className="text-space">Computer: {computerScore}</p>
    </div>
  );
}

export default Scoreboard;
