import CardFront from "./CardFront";
// import CardBack from "./CardBack"

export default function ComputerCard(props) {
  const { isFlipped, deck } = props;
  let className = "";
  isFlipped ? (className = "flip") : (className = "");
  const topCard = deck[0];
  return <CardFront player="computer" card={topCard} className={className} />;
}
