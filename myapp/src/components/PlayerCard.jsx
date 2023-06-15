import CardFront from "./CardFront";

export default function PlayerCard(props) {
  const { setSelectedValue, selectedValue, handleSubmission, deck } = props;
  const topCard = deck[0];
  return (
    <CardFront
      setSelectedValue={setSelectedValue}
      value={selectedValue}
      handleSubmission={handleSubmission}
      player="player"
      card={topCard}
    />
  );
}
