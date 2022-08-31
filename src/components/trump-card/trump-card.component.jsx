import { useState, useEffect } from "react";

import Card from "../card/card.component";

import socket from "../../socket";

import "./trump-card.styles.scss";

const TrumpCard = () => {
  const [trumpCard, setTrumpCard] = useState("");
  useEffect(() => {
    console.log("trump being rendered");
    socket.on("cards-being-dealt", ({ game }) => {
      setTrumpCard(game.round.trump);
    });
  });
  return (
    <div>
      {trumpCard ? (
        <div className="trump-card-container">
          <h1>Trump Card</h1>
          <Card key="{trumpCard.value + trumpCard.suit}" card={trumpCard} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TrumpCard;
