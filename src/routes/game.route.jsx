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
  const navigate = useNavigate();

  const enterGame = () => {
    console.log(`Entering game ${id} with name ${currentUsername}`);
    socket.emit(
      "join-room",
      { name: currentUsername, gameId: id },
      joinGameCallback
    );
    // handleJoin();
  };

  const joinGameCallback = ({ game, error }) => {
    if (error) {
      console.log(error);
      return;
    }
    setCurrentGame(game);
    // setOkToRedirect(true);
  };

  // const handleJoin = (event) => {
  //   event.preventDefault();
  //   socket.emit(
  //     "join-room",
  //     { name: currentUsername, gameId },
  //     joinGameCallback
  //   );
  // };

  useEffect(() => {
    // if (!currentGame) {
    //   navigate("/");
    // }
  });

  return (
    <div
      style={
        currentGame?.currentTurnOfPlayer == myUserIndex
          ? { background: "yellow" }
          : {}
      }
    >
      {!currentUsername ? (
        <NameEntry nameEntryCallback={enterGame} />
      ) : (
        <>
          {!currentGame ? (
            <>
              <h3>No game exists with that ID: {currentUsername}</h3>
              <Link to="/">Go back</Link>
            </>
          ) : (
            <>
              <PlayersTable />
              <div>
                <h2>User: {currentUsername}</h2>
                <h2>Current State: {currentGame.state}</h2>
                <h2>Room ID: == {currentGame?.id}</h2>
                <ContinueButton />
                <PlayedHand />
                {/* <ChatWindow /> */}
                <LeaveButton />
                <StandUpButton />
                {/* <> {currentGame?.state == "Dealing" && <DealButton />}</>
                <> {currentGame?.state == "Bidding" && <Bid />}</>
                <> {currentGame?.state == "Playing" && <PlayedHand />}</> */}
                <DealButton />
                <Bid />
                <TrumpCard />
                <MyHand />
                <Scoreboard />
              </div>
            </>
          )}
        </>
      )}

      {/* {currentGame ? <PlayersTable /> : <></>}
      <div>
        <h2>Current State: {currentGame.state}</h2>
        <h2>Room ID: == {currentGame?.id}</h2>
        <PlayedHand />
        <ChatWindow />
        <LeaveButton />
        <StandUpButton /> */}
      {/* <> {currentGame?.state == "Dealing" && <DealButton />}</>
        <> {currentGame?.state == "Bidding" && <Bid />}</>
        <> {currentGame?.state == "Playing" && <PlayedHand />}</> */}
      {/* <DealButton />
        <Bid />

        <TrumpCard />
        <MyHand /> */}
      {/* </div> */}
    </div>
    // <div>
    // {currentGame ? <PlayersTable /> : <></>}
    // <div>
    //   <h2>Current State: {currentGame.state}</h2>
    //   <h2>Room ID: == {currentGame?.id}</h2>
    //   <PlayedHand />
    //   <ChatWindow />
    //   <LeaveButton />
    //   <StandUpButton />
    // {/* <> {currentGame?.state == "Dealing" && <DealButton />}</>
    //  <> {currentGame?.state == "Bidding" && <Bid />}</>
    // <> {currentGame?.state == "Playing" && <PlayedHand />}</> */}
    //     <DealButton />
    //     <Bid />

    //     <TrumpCard />
    //     <MyHand />
    //   </div>
    // </div>
  );
};

export default GameRoute;
