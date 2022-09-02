import "./deal-button.styles.scss";

import { useCallback, useContext } from "react";

import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

const DealButton = () => {
  const { currentGame } = useContext(GameContext);
  const handleDealClick = () => {
    socket.emit("deal", currentGame.id);
  };
  return (
    <div className="deal-button-container">
      <button onClick={handleDealClick}>Deal</button>
    </div>
  );
};

export default DealButton;
