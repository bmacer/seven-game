import "./continue-button.styles.scss";
import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";
import socket from "../../socket";

const ContinueButton = () => {
  const { currentGame } = useContext(GameContext);
  const handleClick = () => {
    socket.emit("continue", { game: currentGame });
  };
  return (
    <div className="continue-button-container">
      <button onClick={handleClick}>Next Hand</button>
    </div>
  );
};

export default ContinueButton;
