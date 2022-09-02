import "./scoreboard.styles.scss";

import socket from "../../socket";

import { useState, useEffect, useContext } from "react";
import { GameContext } from "../../contexts/game.context";

const Scoreboard = () => {
  const [scoreboard, setScoreboard] = useState();
  // useEffect(() => {
  //   console.log(scoreboard);
  // }, [scoreboard]);
  const { currentGame } = useContext(GameContext);
  socket.on("scoreboard-update", ({ score }) => {
    console.log("Scoreboard update being received");
    console.log(score);
    setScoreboard(score);
  });

  const getOnePlayer = (round, playerIndex, score) => {
    return (
      <tr>
        <td>{playerIndex}</td>
        <td>{score[round].score.bids[playerIndex] || "0"}</td>
        <td>{score[round].score.tricks[playerIndex] || "0"}</td>
        <td>{score[round].score.score[playerIndex] || "0"}</td>
      </tr>
    );
  };

  useEffect(() => {
    let a = Array(currentGame?.players.length).keys();
    console.log("a");
    console.log(a);
    console.log(Array.from(a));
    console.log(currentGame?.round?.score?.bids);
    console.log(currentGame?.players.length);
  }, [currentGame]);

  let rounds = [];
  const getPlayerTdLine = (round, playerIndexes, score) => {
    console.log("playerIndexes");
    console.log(playerIndexes);
    return (
      <table>
        <thead>
          <td>player</td>
          <td>bids</td>
          <td>tricks</td>
          <td>score</td>
        </thead>
        <tbody>
          {playerIndexes.map((idx) => {
            return getOnePlayer(round, idx, score);
          })}
        </tbody>
      </table>
    );
  };

  scoreboard?.forEach((_round, roundIndex) => {
    let playerTds = [];
    playerTds.push(
      getPlayerTdLine(
        roundIndex,
        Array.from(Array(currentGame?.players.length).keys()),
        scoreboard
      )
    );
    let cleaned = (
      <>
        <h3>Round {roundIndex}</h3>
        <div className="scoreboard-single-round">{playerTds}</div>
      </>
    );
    rounds.push(cleaned);
  });

  const handleClick = (event) => {
    console.log(event);
    document
      .getElementById("scoreboard-inner-container")
      .classList.toggle("visible");
  };

  return (
    <div class="scoreboard-container">
      <h1 onClick={handleClick}>Scoreboard</h1>
      <div id="scoreboard-inner-container">{rounds}</div>
    </div>
  );
};

export default Scoreboard;
