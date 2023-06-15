import CardFront from "./CardFront";
// import CardBack from "./CardBack"

export default function ComputerCard(props) {
  const { isFlipped, deck } = props;
  let flipClass = "";
  isFlipped ? (flipClass = "flip") : (flipClass = "");
  const topCard = deck[0];
  return <CardFront player="computer" card={topCard} flipClass={flipClass} />;
}
