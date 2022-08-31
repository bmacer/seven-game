import { useContext, useEffect } from "react";

import Card from "../card/card.component";

import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

import "./my-hand.styles.scss";
/*
let initializedGame: InitializedGame = {
        cards: cards[i],
        trumpCard: trump,
        dealerIndex: game.dealerIndex,
        currentTurnPlayerIndex: game.currentTurnPlayerIndex,
      };
*/

const MyHand = () => {
  const { myHand, setMyHand, setCurrentGame } = useContext(GameContext);
  useEffect(() => {
    socket.on("cards-being-dealt", ({ cards, game }) => {
      setCurrentGame(game);
      setMyHand(cards);
    });
  });
  return (
    <div className="my-hand-container">
      <h1>My Hand</h1>
      {myHand.map((card) => {
        return <Card key={card.value + card.suit} card={card} />;
      })}
    </div>
  );
};

export default MyHand;
