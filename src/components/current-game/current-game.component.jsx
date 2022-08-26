import { useContext } from "react";
import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

const CurrentGame = () => {
  const {
    currentUsername,
    currentGameId,
    setCurrentGameId,
    currentGame,
    setCurrentGame,
  } = useContext(GameContext);

  socket.on("game-update", (game) => {
    setCurrentGame(game);
    setCurrentGameId(game.id);
    console.log(game);
  });

  const numberOfPlayers = (game) => {
    let number = 0;
    currentGame?.players?.forEach((player) => {
      if (player.id != "") {
        number++;
      }
    });
    return number;
  };

  return (
    <div>
      <h2>Username: {currentUsername}</h2>
      <h2>Game ID: {currentGameId}</h2>
      <>{currentGame?.isFull ? <h3>FULL!</h3> : <></>}</>
      <>
        {currentGame?.players ? (
          <div>
            <h2>Players capacity: ({currentGame.players.length}):</h2>
            <h2>Players in game: ({numberOfPlayers(currentGame)}):</h2>
          </div>
        ) : (
          <></>
        )}
      </>
      {currentGame?.players?.map((player) => {
        return <h3>Player: {player.name}</h3>;
      })}
    </div>
  );
};

export default CurrentGame;
