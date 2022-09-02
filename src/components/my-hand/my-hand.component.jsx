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
  const {
    myHand,
    setMyHand,
    setCurrentGame,
    currentGame,
    myUserIndex,
    setBannerMessage,
  } = useContext(GameContext);
  useEffect(() => {
    socket.on("cards-being-dealt", ({ cards, game }) => {
      setCurrentGame(game);
      setMyHand(cards);
    });
  });
  const handleCardClick = (card, cardIndex) => {
    setBannerMessage(null);
    socket.emit("play-card", {
      cardIndex,
      playerIndex: myUserIndex,
      gid: currentGame.id,
    });
  };
  return (
    <div className="my-hand-container">
      {
        <>
          {myHand.length > 0 && (
            <>
              <h2>My Cards</h2>
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
            </>
          )}
        </>
      }
    </div>
  );
};

export default MyHand;
