import { useContext, useEffect } from "react";
import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

import "./players-table.styles.scss";

const PlayersTable = () => {
  const {
    iAmSeated,
    setIAmSeated,
    myUserIndex,
    setMyUserIndex,
    currentGame,
    bids,
    currentUsername,
    setCurrentGame,
  } = useContext(GameContext);

  useEffect(() => {
    return function cleanup() {
      socket.removeListener("cards-being-dealt");
      socket.removeListener("game-update");
    };
  }, []);

  const takeASeatCallback = (game, seatIndex) => {
    setCurrentGame(game);
    setIAmSeated(true);
    setMyUserIndex(seatIndex);
  };

  const handleSitClick = (event) => {
    console.log("sitting at seat:");
    console.log(event.target.value);
    const seatIndex = parseInt(event.target.value);
    socket.emit(
      "take-a-seat",
      {
        gameId: currentGame.id,
        seatIndex,
        name: currentUsername,
      },
      takeASeatCallback
    );
  };

  const getBidsFromGame = (game) => {
    let round = game.round;
    if (!round) {
      console.log(`ERROR in getBidsFromGame: round is null`);
      return;
    }
    return round.bids;
  };

  const renderBids = (bids) => {
    console.log("bids");
    console.log(bids);
    if (!bids) {
      return;
    }
    let rendered = [];
    bids.map((bid) => {
      return (
        <tr>
          return <td>{bid}</td>;
        </tr>
      );
    });
  };

  socket.on("seating-update", ({ game }) => {
    console.log("got seating update");
    console.log(game);
    setCurrentGame(game);
  });
  // io.to(player.socketId!).emit("seating-update", game);

  return (
    <div>
      <div className="players-table">
        <table>
          <thead>
            <tr>
              <td>Dealer</td>
              <td>Turn</td>
              <td>#</td>
              <td>Player</td>
              <td>Bid</td>
            </tr>
          </thead>
          <tbody>
            {currentGame?.players?.map((player, index) => {
              return (
                <tr
                  key={index}
                  className={
                    player.username === myUserIndex ? "currentPlayer" : "xxx"
                  }
                >
                  {currentGame.dealerIndex == index ? <td>*</td> : <td></td>}
                  {currentGame.currentTurnOfPlayer == index ? (
                    <td>*</td>
                  ) : (
                    <td></td>
                  )}
                  <td>{index + 1}</td>
                  <td>
                    {player.username || (
                      <>
                        {!iAmSeated ? (
                          <button value={index} onClick={handleSitClick}>
                            Sit
                          </button>
                        ) : (
                          ""
                        )}
                      </>
                    )}
                  </td>
                  <td>{currentGame.round?.bids[index]}</td>
                  {renderBids(getBidsFromGame(currentGame))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlayersTable;
