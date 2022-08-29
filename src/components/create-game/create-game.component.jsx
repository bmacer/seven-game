import { useState, useContext } from "react";
import socket from "../../socket";

import { GameContext } from "../../contexts/game.context";

const CreateGame = () => {
  const {
    setCurrentGameId,
    setCurrentGame,
    setCurrentUserId,
    currentUsername,
    setMyUserIndex,
  } = useContext(GameContext);

  //{ id: game.id, error }
  const createGameCallback = ({ id, error }) => {
    console.log(id);
    if (error) {
      console.log(error);
      return;
    }
    // setCurrentUserId(myPlayerId);
    setCurrentGameId(id);
    // setCurrentGame(game);
    setMyUserIndex(0);
    // console.log(game);
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
