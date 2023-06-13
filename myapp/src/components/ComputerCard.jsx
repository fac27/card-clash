import CardFront from "./CardFront"
// import CardBack from "./CardBack"

export default function ComputerCard(props) {
  const topCard = props.deck[0];
  return (
    <>
      <CardFront player="computer" card={topCard}></CardFront>
    </>
  )
}