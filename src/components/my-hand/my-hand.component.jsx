import { useContext, useEffect } from "react";

import Card from "../card/card.component";

import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

const MyHand = () => {
  const { myHand, setMyHand, setDealerIndex, setCurrentTurnPlayerIndex } =
    useContext(GameContext);
  useEffect(() => {
    socket.on(
      "cards-being-dealt",
      ({ cards, dealerIndex, currentTurnPlayerIndex }) => {
        console.log(`cards: dealer: ${dealerIndex} <--`);
        setMyHand(cards);
        setDealerIndex(dealerIndex);
        setCurrentTurnPlayerIndex(currentTurnPlayerIndex);
      }
    );
  });
  return (
    <div>
      <h1>My Hand</h1>
      {/* {myHand.map((card) => {
        return <Card key={card.value + card.suit} card={card} />;
      })} */}
    </div>
  );
};

export default MyHand;
