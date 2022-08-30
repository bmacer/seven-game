import { useContext, useEffect } from "react";
import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

import "./players-table.styles.scss";

const PlayersTable = () => {
  const { myUserIndex, currentGame, bids } = useContext(GameContext);
  console.log("curcur");
  console.log(myUserIndex);
  useEffect(() => {
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
                  <td>{player.username || "EMPTY"}</td>
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
