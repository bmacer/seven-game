import { useState, useContext } from "react";
import socket from "../../socket";

import { GameContext } from "../../contexts/game.context";

const CreateGame = () => {
  const {
    setCurrentGameId,
    setCurrentGame,
    setCurrentUserId,
    currentUsername,
  } = useContext(GameContext);

  const createGameCallback = (game, myPlayerId, error) => {
    if (error) {
      console.log(error);
      return;
    }
    setCurrentUserId(myPlayerId);
    setCurrentGameId(game.id);
    setCurrentGame(game);
    console.log(game);
  };

  const handleCreateGame = (event) => {
    event.preventDefault();
    socket.emit("createGame", { name: currentUsername }, createGameCallback);
  };
  return (
    <div>
      <h2>Create Game</h2>
      <button onClick={handleCreateGame}>Create</button>
    </div>
  );
};

export default CreateGame;
