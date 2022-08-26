import { useState, useContext } from "react";
import socket from "../../socket";

// import CurrentGame from "../players-table/players-table.component";
import { GameContext } from "../../contexts/game.context";

const JoinGame = (props) => {
  const [gameId, setGameId] = useState("");

  const { currentUsername, setCurrentGame, setCurrentGameId } =
    useContext(GameContext);

  const handleInputChange = (event) => {
    setGameId(event.target.value);
  };

  const joinGameCallback = (game, currentUsername, error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("calling callback");
    setCurrentGame(game);
    setCurrentGameId(game.id);
    console.log(game);
  };

  const handleJoin = (event) => {
    event.preventDefault();
    socket.emit(
      "joinGame",
      { name: currentUsername, gameId },
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
          value={gameId}
          placeholder="Event Code"
          onChange={handleInputChange}
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default JoinGame;
