import { useState, useEffect } from "react";

import Card from "../card/card.component";

import socket from "../../socket";

const MyHand = () => {
  const [myHand, setMyHand] = useState([]);
  useEffect(() => {
    socket.on("cards-being-dealt", ({ cards }) => {
      setMyHand(cards);
    });
  });
  return (
    <div>
      <h1>My Hand</h1>
      {myHand.map((card) => {
        return <Card key={card.value + card.suit} card={card} />;
      })}
    </div>
  );
};

export default MyHand;
