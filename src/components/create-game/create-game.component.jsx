import { useState, useContext, useEffect } from "react";
import socket from "../../socket";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../contexts/game.context";

const CreateGame = () => {
  const {
    currentUsername,
    setMyUserIndex,
    setCurrentGame,
    currentGame,
    setIAmSeated,
  } = useContext(GameContext);

  const [okToRedirect, setOkToRedirect] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (okToRedirect) {
      navigate(`/${currentGame.id}`);
    }
  }, [okToRedirect]);

  // });

  const createGameCallback = ({ game, error }) => {
    if (error) {
      console.log(error);
      return;
    }
    setCurrentGame(game);
    setMyUserIndex(0);
    setIAmSeated(true);
    setOkToRedirect(true);
  };

  const handleCreateGame = (event) => {
    event.preventDefault();
    socket.emit("create-game", { name: currentUsername }, createGameCallback);
  };
  return (
    <div>
      <h2>Create Game</h2>
      <button onClick={handleCreateGame}>Create</button>
    </div>
  );
};

export default CreateGame;
