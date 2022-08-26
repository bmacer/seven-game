import { useState, useContext } from "react";

import PlayersTable from "../players-table/players-table.component";
import NameEntry from "../name-entry/name-entry.component";
import CreateGame from "../create-game/create-game.component";
import JoinGame from "../join-game/join-game.component";
import ChatWindow from "../chat-window/chat-window.component";
import LeaveButton from "../leave-button/leave-button.component";
import MyHand from "../my-hand/my-hand.component";
import DealButton from "../deal-button/deal-button.component";

import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

const Home = () => {
  const { currentUsername, currentGame } = useContext(GameContext);

  return (
    <div>
      {currentGame ? <PlayersTable /> : <></>}
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
            <div>
              <h2>Room ID: {currentGame.id}</h2>
              <ChatWindow />
              <LeaveButton />
              <MyHand />
              <DealButton />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
