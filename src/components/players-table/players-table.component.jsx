import { useContext, useEffect } from "react";
import { GameContext } from "../../contexts/game.context";

import socket from "../../socket";

import "./players-table.styles.scss";

const PlayersTable = () => {
  const { currentUsername, setCurrentGameId, currentGame, setCurrentGame } =
    useContext(GameContext);

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
              <td>#</td>
              <td>Player</td>
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