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
  const { myHand, setMyHand, setCurrentGame, currentGame, myUserIndex } =
    useContext(GameContext);
  useEffect(() => {
    socket.on("cards-being-dealt", ({ cards, game }) => {
      setCurrentGame(game);
      setMyHand(cards);
    });
  });
  const handleCardClick = (card, cardIndex) => {
    // TODO handle error if trump card exists
    console.log("CLICKED CLICKED");
    console.log(card);
    console.log(cardIndex);
    console.log("currentGame");
    console.log(currentGame);

    socket.emit("play-card", {
      cardIndex,
      playerIndex: myUserIndex,
      gid: currentGame.id,
    });
    // require it to be your turn to play (later)
    if (currentGame.currentTurnOfPlay == myUserIndex) {
    }
    // console.log(event.target.value);
  };
  return (
    <div className="my-hand-container">
      <h1>My Hand</h1>
      {myHand.map((card, index) => {
        return (
          <Card
            onCardClick={handleCardClick}
            key={card.value + card.suit}
            index={index}
            card={card}
          />
        );
      })}
    </div>
  );
};

export default MyHand;
