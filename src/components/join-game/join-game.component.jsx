import { useState, useContext } from "react";
import socket from "../../socket";

import CurrentGame from "../current-game/current-game.component";
import { GameContext } from "../../contexts/game.context";

const JoinGame = (props) => {
  const [roomCode, setRoomCode] = useState("abcd");

  const { currentUsername, setCurrentGame, setCurrentUserId } =
    useContext(GameContext);

  const handleInputChange = (event) => {
    setRoomCode(event.target.value);
  };

  const joinGameCallback = (game, currentUsername, error) => {
    if (error) {
      console.log(error);
      return;
    }
    setCurrentGame(game);
  };

  const handleJoin = (event) => {
    event.preventDefault();
    socket.emit(
      "joinGame",
      { name: currentUsername, roomCode },
      joinGameCallback
    );
  };
  return (
    <div>
      <h2>Join Existing Game</h2>
      <form onSubmit={handleJoin}>
        <input
          name="gameCode"
          type="text"
          value={roomCode}
          placeholder="Event Code"
          onChange={handleInputChange}
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default JoinGame;
