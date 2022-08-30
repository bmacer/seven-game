import { useContext } from "react";

import { useParams } from "react-router-dom";

import PlayersTable from "../components/players-table/players-table.component";
import ChatWindow from "../components/chat-window/chat-window.component";
import LeaveButton from "../components/leave-button/leave-button.component";
import MyHand from "../components/my-hand/my-hand.component";
import DealButton from "../components/deal-button/deal-button.component";
import TrumpCard from "../components/trump-card/trump-card.component";
import Bid from "../components/bid/bid.component";

import { GameContext } from "../contexts/game.context";

const GameRoute = () => {
  let { id } = useParams();
  console.log("I am game Route");

  const { currentGame, currentGameId } = useContext(GameContext);

  // Check for current game
  // setCurrentGame(id);
  return (
    <div>
      {currentGame ? <PlayersTable /> : <></>}
      <div>
        <h2>Room ID: {currentGameId}</h2>
        <ChatWindow />
        <LeaveButton />
        <DealButton />
        <Bid />
        <TrumpCard />
        <MyHand />
      </div>
    </div>
  );
};

export default GameRoute;
