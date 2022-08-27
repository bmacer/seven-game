import { useContext, useEffect } from "react";
import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

import "./players-table.styles.scss";

const PlayersTable = () => {
  const {
    currentUsername,
    setCurrentGameId,
    currentGame,
    setCurrentGame,
    dealerIndex,
    currentTurnPlayerIndex,
  } = useContext(GameContext);

  useEffect(() => {
    socket.on("game-update", (game) => {
      setCurrentGame(game);
      setCurrentGameId(game.id);
      console.log(game);
      console.log("game");
    });
    // socket.on("cards-being-dealt", (cards) => {
    //   console.log(cards);
    // });
    return function cleanup() {
      socket.removeListener("cards-being-dealt");
      socket.removeListener("game-update");
    };
  }, []);

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
                    player.name === currentUsername ? "currentPlayer" : ""
                  }
                >
                  {dealerIndex == index ? <td>*</td> : <td></td>}
                  {currentTurnPlayerIndex == index ? <td>*</td> : <td></td>}
                  <td>{index + 1}</td>
                  <td>{player.name || "EMPTY"}</td>
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
