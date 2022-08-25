import { useState } from "react";
import socket from "../../socket";

import CurrentGame from "../current-game/current-game.component";

const JoinGame = (props) => {
  const [roomCode, setRoomCode] = useState("abcd");
  const [roomSocket, setRoomSocket] = useState("");
  const [game, setGame] = useState([]);
  const [myPlayerId, setMyPlayerId] = useState(-1);

  const { name, onGameChange } = props;

  const handleInputChange = (event) => {
    setRoomCode(event.target.value);
  };

  const joinGameCallback = (game, myPlayerId, error) => {
    // const { game, error } = props;
    if (error) {
      console.log(error);
      return;
    }
    setGame(game);
    setMyPlayerId(myPlayerId);
    // setRoomSocket(val);
  };

  const handleJoin = (event) => {
    event.preventDefault();
    socket.emit("joinGame", { name, roomCode }, joinGameCallback);
    onGameChange(game);
  };
  return (
    <div>
      {myPlayerId != -1 ? (
        <CurrentGame game={game} />
      ) : (
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
      )}
    </div>
  );
};

export default JoinGame;
