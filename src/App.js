import { useState, useContext } from "react";
import "./App.css";

import ChatWindow from "./components/chat-window/chat-window.component";
import NameEntry from "./components/name-entry/name-entry.component";
import JoinGame from "./components/join-game/join-game.component";

import { GameProvider } from "./contexts/game.context";
import { GameContext } from "./contexts/game.context";
import socket from "./socket";

import CreateGame from "./components/create-game/create-game.component";
import CurrentGame from "./components/current-game/current-game.component";

const Home = () => {
  const { currentUsername, setCurrentUsername } = useContext(GameContext);
  const { currentGame, setCurrentGame } = useContext(GameContext);

  return (
    <div>
      <CurrentGame game={currentGame} />
      <h1>{currentUsername}</h1>
      {!currentUsername ? (
        <NameEntry />
      ) : (
        <>
          {!currentGame ? (
            <div>
              <CreateGame />
              <JoinGame />
            </div>
          ) : (
            <ChatWindow />
          )}
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Home />
      </GameProvider>
    </div>
  );
}

export default App;
