import { useState, useContext, useEffect } from "react";
import socket from "../../socket";
import { useNavigate } from "react-router-dom";

import { GameContext } from "../../contexts/game.context";

const JoinGame = (props) => {
  const [gameId, setGameId] = useState("");

  const { setIAmSeated, currentUsername, currentGame, setCurrentGame } =
    useContext(GameContext);

  const [okToRedirect, setOkToRedirect] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (okToRedirect) {
      navigate(`/${currentGame.id}`);
    }
  }, [okToRedirect]);

  const handleInputChange = (event) => {
    setGameId(event.target.value);
  };

  const joinGameCallback = ({ game, error }) => {
    if (error) {
      console.log(error);
      return;
    }
    setCurrentGame(game);
    setOkToRedirect(true);
  };

  const handleJoin = (event) => {
    event.preventDefault();
    socket.emit(
      "join-room",
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
