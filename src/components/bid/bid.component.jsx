import "./bid.styles.scss";

import { useContext, useEffect } from "react";

import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";
import Waiting from "../waiting/waiting.component";

const Bid = () => {
  const {
    currentGame,
    myHand,
    dealerIndex,
    currentTurnPlayerIndex,
    myUserIndex,
    currentGameId,
    setCurrentTurnPlayerIndex,
    setBids,
    bids,
    setGameState,
    gameState,
    myBid,
    setMyBid,
    setCurrentGame,
  } = useContext(GameContext);

  useEffect(() => {
    socket.on("publish-game-update", ({ game }) => {
      setCurrentGame(game);
    });

    socket.on("bid", (props) => {
      const {
        biddingPlayerIndex,
        biddingPlayerBid,
        nextPlayersIndex,
        gameState,
      } = props;
      setCurrentTurnPlayerIndex(nextPlayersIndex);
      bids[biddingPlayerIndex] = biddingPlayerBid;
      setBids(bids);
      setGameState(gameState);
      if (currentTurnPlayerIndex == myUserIndex && myBid) {
        socket.emit("bid", {
          bid: myBid,
          idx: myUserIndex,
          gid: currentGame.id,
        });
      }
    });

    return function cleanup() {
      socket.removeListener("bid");
    };
  }, []);

  const handleButtonClick = (event) => {
    console.log(event);
    const bid = event.target.value;
    setMyBid(event.target.value);
    const playerIndex = myUserIndex;
    // const gameId = currentGameId;
    console.log({ currentTurnPlayerIndex, myUserIndex });
    console.log(currentGame);
    console.log(myUserIndex);
    console.log(currentGame.currentTurnPlayerIndex === myUserIndex);
    if (currentGame.currentTurnOfPlayer === myUserIndex) {
      console.log("should be emitting");
      socket.emit("bid", { bid, idx: playerIndex, gid: currentGame.id });
    }
  };
  const options = [];

  for (let i = 0; i <= myHand.length; i++) {
    options.push(
      <button value={i} onClick={handleButtonClick}>
        {i}
      </button>
    );
  }

  return (
    <div className="bid-container">
      {currentGame.currentTurnOfPlayer == myUserIndex ? (
        <>
          <h2>Bid</h2>
          {options}
        </>
      ) : (
        <Waiting />
      )}
    </div>
  );
};

export default Bid;
