import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";
import socket from "../../socket";

const ContinueButton = () => {
  const { currentGame } = useContext(GameContext);
  const handleClick = () => {
    socket.emit("continue", { game: currentGame });
  };
  return (
    <div>
      <button onClick={handleClick}>Next Hand</button>
    </div>
  );
};

export default ContinueButton;
