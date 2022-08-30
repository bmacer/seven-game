import { useContext, useEffect } from "react";
import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

import "./players-table.styles.scss";

const PlayersTable = () => {
  const {
    iAmSeated,
    setIAmSeated,
    myUserIndex,
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

  const takeASeatCallback = (game) => {
    setCurrentGame(game);
    setIAmSeated(true);
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
                  <td>{bids[index]}</td>
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
