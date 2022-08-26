import { useCallback, useContext } from "react";

import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

const DealButton = () => {
  const { currentGame } = useContext(GameContext);
  const handleDealClick = () => {
    socket.emit("deal", currentGame);
  };
  return <button onClick={handleDealClick}>Deal</button>;
};

export default DealButton;
