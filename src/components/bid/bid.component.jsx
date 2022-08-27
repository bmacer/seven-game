import { useContext, useEffect } from "react";

import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

const Bid = () => {
  const {
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
  } = useContext(GameContext);

  useEffect(() => {
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
      console.log(biddingPlayerBid);
      setGameState(gameState);
    });

    return function cleanup() {
      socket.removeListener("bid");
    };
  }, []);

  const handleButtonClick = (event) => {
    console.log(event);
    const bid = event.target.value;
    const playerIndex = myUserIndex;
    const gameId = currentGameId;
    socket.emit("bid", { bid, playerIndex, gameId });
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
    <div>
      <h1>Bid</h1>
      <h2>Game State: {gameState}</h2>
      <div>{options}</div>
      <div>dealer index: {dealerIndex}</div>
      <div>current turn: {currentTurnPlayerIndex}</div>
    </div>
  );
};

export default Bid;
