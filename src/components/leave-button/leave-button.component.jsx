import { useContext } from "react";

import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

const LeaveButton = () => {
  const { setIAmSeated, setCurrentGame, setCurrentGameId } =
    useContext(GameContext);

  const callback = (game) => {
    setCurrentGame(null);
    setIAmSeated(false);
    setCurrentGameId("");
  };
  const handleLeaveClick = () => {
    socket.emit("leave", callback);
  };
  return (
    <div>
      <button onClick={handleLeaveClick}>Leave</button>
    </div>
  );
};

export default LeaveButton;
