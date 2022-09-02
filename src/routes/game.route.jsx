import "./game.styles.scss";

import { useContext, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import PlayersTable from "../components/players-table/players-table.component";
import ChatWindow from "../components/chat-window/chat-window.component";
import LeaveButton from "../components/leave-button/leave-button.component";
import MyHand from "../components/my-hand/my-hand.component";
import DealButton from "../components/deal-button/deal-button.component";
import TrumpCard from "../components/trump-card/trump-card.component";
import Bid from "../components/bid/bid.component";

import { GameContext } from "../contexts/game.context";
import StandUpButton from "../components/stand-up-button/stand-up-button.component";
import PlayedHand from "../components/played-hand/played-hand.component";
import NameEntry from "../components/name-entry/name-entry.component";
import socket from "../socket";
import ContinueButton from "../components/continue-button/continue-button.component";
import Scoreboard from "../components/scoreboard/scoreboard.component";
import Seating from "../components/seating/seating.component";
import Waiting from "../components/waiting/waiting.component";
import BannerMessage from "../components/error-message/banner-message.component";
const GameRoute = () => {
  let { id } = useParams();

  const {
    setCurrentGame,
    currentGame,
    currentGameId,
    currentUsername,
    myUserIndex,
  } = useContext(GameContext);
  console.log(`currentGameID::: ${currentGameId}`);
  console.log(`currentGame::: ${currentGame}`);

  const enterGame = () => {
    console.log(`Entering game ${id} with name ${currentUsername}`);
    socket.emit(
      "join-room",
      { name: currentUsername, gameId: id },
      joinGameCallback
    );
  };

  const joinGameCallback = ({ game, error }) => {
    if (error) {
      console.log(error);
      return;
    }
    setCurrentGame(game);
  };

  document.addEventListener("keypress", (event) => {
    if (event.key == "d") {
      let debug = document.getElementsByClassName("debug-data");
      debug[0].classList.add("visible");
    }
    if (event.key == "f") {
      let debug = document.getElementsByClassName("debug-data");
      debug[0].classList.remove("visible");
    }
  });

  const hasNoUsername = () => {
    return (
      <>
        <h2>Need a name to enter a room!</h2>
        <NameEntry nameEntryCallback={enterGame} />
      </>
    );
  };

  const gameDoesntExist = () => {
    return (
      <>
        <h3>No game exists with that ID: {currentUsername}</h3>
        <Link to="/">Go back</Link>
      </>
    );
  };

  const gameDisplay = () => {
    return (
      <>
        <BannerMessage />
        {/* <StandUpButton /> */}
        <div className="game-top-row">
          <PlayersTable />
          <>
            {currentGame.state == "Completed" && (
              <div style={{ width: "50%" }} />
            )}
            {currentGame.state == "Seating" && <Seating />}
            {currentGame.state == "Bidding" && <Bid />}
            {currentGame.state == "Dealing" && <DealButton />}
            {currentGame.state == "Scoring" && <ContinueButton />}
            {/* {currentGame.state == "Playing" && <div style={{ width: "50%" }} />} */}
            {currentGame.state == "Playing" ? (
              currentGame.currentTurnOfPlayer == myUserIndex ? (
                <div style={{ width: "50%" }}>
                  <h3>Your turn to PLAY! Pick a card!</h3>
                </div>
              ) : (
                <Waiting />
              )
            ) : (
              <></>
            )}
          </>

          <TrumpCard />
        </div>
        <div className="game-second-row">
          <PlayedHand />
          <MyHand />
        </div>

        <div class="game-third-row">
          <Scoreboard />
        </div>
      </>
    );
  };

  return (
    <>
      <div class="debug-data">
        <h5>
          User: {currentUsername || "null"} ... Round number:{" "}
          {currentGame?.round?.roundNumber || "null"} ... Current State:{" "}
          {currentGame?.state || "null"} ... Room ID:
          {currentGame?.id || "null"}
        </h5>
      </div>
      <div
        className={`game-route-container ${
          currentGame &&
          currentGame?.currentTurnOfPlayer == myUserIndex &&
          "is-my-turn"
        }`}
      >
        {!currentUsername ? (
          hasNoUsername()
        ) : (
          <>{!currentGame ? gameDoesntExist() : gameDisplay()}</>
        )}
      </div>
    </>
  );
};

export default GameRoute;
