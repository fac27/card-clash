import { useState } from "react";
//import CardBack from "./CardBack"
import CardFront from "./CardFront"


export default function PlayerCard(props) {
  //const [topCard, setTopCard] = useState(props.deck[0]);
  const topCard = props.deck[0];
  return (
    <>
      <CardFront player="player" card={topCard}></CardFront>
    </>
  )
}