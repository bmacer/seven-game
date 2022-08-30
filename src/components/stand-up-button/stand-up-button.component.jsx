import { useContext } from "react";

import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

const StandUpButton = () => {
  const { setIAmSeated, setCurrentGame, setCurrentGameId } =
    useContext(GameContext);

  const callback = (game) => {
    setCurrentGame(game);
    setIAmSeated(false);
  };
  const handleStandUp = () => {
    socket.emit("leave", callback);
  };
  return (
    <div>
      <button onClick={handleStandUp}>Stand Up</button>
    </div>
  );
};

export default StandUpButton;
