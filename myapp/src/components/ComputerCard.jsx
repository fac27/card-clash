import CardFront from "./CardFront"
// import CardBack from "./CardBack"

export default function ComputerCard(props) {
  const { handleSubmission, deck } = props;
  const topCard = deck[0];
  return (
    <>
      <CardFront player="computer" card={topCard}></CardFront>
    </>
  )
}