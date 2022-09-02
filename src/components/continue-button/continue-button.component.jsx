import "./continue-button.styles.scss";
import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";
import socket from "../../socket";

const DEAL_BUTTON = require("../../assets/deal-button.png");

const ContinueButton = () => {
  const { currentGame } = useContext(GameContext);
  const handleClick = () => {
    socket.emit("continue", { game: currentGame });
  };
  return (
    <div className="continue-button-container">
      {/* <button onClick={handleClick}>Next Hand</button> */}
      <img className="deal-button" onClick={handleClick} src={DEAL_BUTTON} />
    </div>
  );
};

export default ContinueButton;
