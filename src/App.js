import { useState, useContext } from "react";
import "./App.css";

import ChatWindow from "./components/chat-window/chat-window.component";
import NameEntry from "./components/name-entry/name-entry.component";
import JoinGame from "./components/join-game/join-game.component";

import { GameProvider } from "./contexts/game.context";
import { GameContext } from "./contexts/game.context";
import socket from "./socket";

import CreateGame from "./components/create-game/create-game.component";
import PlayersTable from "./components/players-table/players-table.component";

import LeaveButton from "./components/leave-button/leave-button.component";

import Home from "./components/home/home.component";

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
