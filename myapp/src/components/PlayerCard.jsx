import { useState } from "react";
//import CardBack from "./CardBack"
import CardFront from "./CardFront"


export default function PlayerCard({deck}) {
  console.log(deck, ' playerCard props')
  //const [topCard, setTopCard] = useState(props.deck[0]);
  const topCard = deck[0];
  console.log(topCard)
  return (
    <>
      <CardFront player="player" card={topCard}></CardFront>
    </>
  )
}