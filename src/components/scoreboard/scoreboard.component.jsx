import socket from "../../socket";

import { useState, useEffect, useContext } from "react";
import { GameContext } from "../../contexts/game.context";

const Scoreboard = () => {
  const [scoreboard, setScoreboard] = useState();
  const { currentGame } = useContext(GameContext);
  socket.on("scoreboard-update", ({ score }) => {
    console.log("Scoreboard update being received");
    console.log(score);
    setScoreboard(score);
  });
  let rounds = [];
  const getPlayerTdLine = (round, playerIndex, score) => {
    return (
      <table>
        <thead>
          <td>player</td>
          <td>bids</td>
          <td>tricks</td>
          <td>score</td>
        </thead>
        <tbody>
          <tr>
            <td>{playerIndex}</td>
            <td>{score[round].score.bids[playerIndex] || "0"}</td>
            <td>{score[round].score.tricks[playerIndex] || "0"}</td>
            <td>{score[round].score.score[playerIndex] || "0"}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  scoreboard?.forEach((round, roundIndex) => {
    let playerTds = [];
    for (
      let playerIndex = 0;
      playerIndex < round?.score?.bids?.length;
      playerIndex++
    ) {
      playerTds.push(getPlayerTdLine(roundIndex, playerIndex, scoreboard));
    }
    let cleaned = (
      <table>
        <thead>
          <tr>Round</tr>
        </thead>
        <tbody>
          <td>
            <table>
              <thead>
                <tr>{roundIndex}</tr>
              </thead>
              <tr>{playerTds}</tr>
            </table>
          </td>
        </tbody>
      </table>
    );
    rounds.push(cleaned);
  });

  return (
    <div>
      <h1>Scoreboard</h1>
      <>{rounds}</>
    </div>
  );
};

export default Scoreboard;
